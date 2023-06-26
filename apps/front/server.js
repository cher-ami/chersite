import debug from "@wbe/debug"
import express from "express"
import * as fs from "fs"
import * as https from "https"
import portFinderSync from "portfinder-sync"
import { renderToPipeableStream } from "react-dom/server"
import { createServer, loadEnv } from "vite"
import config from "./config/config.js"

const log = debug("server:server")

const loadEnvVars = loadEnv(process.env.NODE_ENV, process.cwd(), "")
const isProduction = process.env.NODE_ENV === "production"
const port = process.env.DOCKER_NODE_PORT ?? portFinderSync.getPort(3000)
const protocol = loadEnvVars.PROTOCOL ?? "http"
const isSSL = protocol === "https"

// Get cert and key for https
let key, cert
if (isSSL) {
  if (!fs.existsSync("key.pem") || !fs.existsSync("cert.pem")) {
    log("You need to generate a key and a cert file with openssl in the front/ directory")
    process.exit(1)
  }
  key = fs.readFileSync("key.pem")
  cert = fs.readFileSync("cert.pem")
}

/**
 * Dev server
 *
 *
 */
async function createDevServer() {
  const app = express()

  // dev script to inject
  const devScripts = {
    js: [{ tag: "script", attr: { type: "module", src: "/src/index.tsx" } }],
  }

  // Create Vite server in middleware mode.
  // This disables Vite's own HTML serving logic and let the parent server take control.
  // https://vitejs.dev/config/server-options.html#server-middlewaremode
  const vite = await createServer({
    logLevel: "info",
    server: {
      middlewareMode: true,
      https: isSSL && {
        key,
        cert,
      },
      cors: false,
    },
    appType: "custom",
  })

  // use vite's connect instance as middleware
  app.use(vite.middlewares)
  app.use("*", async (req, res, next) => {
    try {
      // Transforms the ESM source code to be usable in Node.js
      const { render } = await vite.ssrLoadModule(
        `${config.srcDir}/server/index-server.tsx`
      )
      // Get react-dom from the render method
      const dom = await render(req.originalUrl, devScripts, false)
      // Create stream with renderToPipeableStream to support Suspense API
      const stream = renderToPipeableStream(dom, {
        onShellReady() {
          res.setHeader("Content-type", "text/html")
          res.statusCode = 200
          stream.pipe(res)
        },
        onError(e) {
          res.statusCode = 500
          console.error(e)
        },
      })
    } catch (e) {
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  let sslServer
  if (isSSL) {
    sslServer = https.createServer(
      {
        key,
        cert,
      },
      app
    )

    sslServer.on("error", (error) => {
      log(`Error on server: ${error}`)
    })
  }

  // return vite, app and server
  return { vite, app, server: sslServer }
}

/**
 * Production server
 * TODO
 *
 *
 */
async function createProdServer() {}

/**
 * Let's go!
 */

;(isProduction ? createProdServer : createDevServer)().then(({ app, server }) =>
  (server ?? app).listen(port)
)
