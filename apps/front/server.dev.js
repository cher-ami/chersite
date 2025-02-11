import debug from "@cher-ami/debug"
import express from "express"
import * as https from "https"
import * as mfs from "@cher-ami/mfs"
import portFinderSync from "portfinder-sync"
import { renderToPipeableStream } from "react-dom/server"
import { createServer, loadEnv } from "vite"
import config from "./config/config.js"
const log = debug("server:server.dev")

const loadEnvVars = loadEnv(process.env.NODE_ENV, process.cwd(), "")
const BASE = loadEnvVars.VITE_APP_BASE || process.env.VITE_APP_BASE || "/"
const PROTOCOL = loadEnvVars.PROTOCOL ?? "http"
const IS_SSL = PROTOCOL === "https"
const PORT = process.env.DOCKER_NODE_PORT ?? portFinderSync.getPort(5173)
const INDEX_SERVER_PATH = `${config.srcDir}/index-server.tsx`

;(async () => {
  // --------------------------------------------------------------------------- SSL

  /**
   * Get cert and key for https
   */
  let KEY, CERT
  if (IS_SSL) {
    if (!(await mfs.fileExists("key.pem")) || !(await mfs.fileExists("cert.pem"))) {
      console.error(
        "You need to generate a key and a cert file with openssl in the apps/front/ directory. Follow the README documentation 'setup-local-ssl'."
      )
      process.exit(1)
    }
    KEY = await mfs.readFile("key.pem")
    CERT = await mfs.readFile("cert.pem")
  }

  // --------------------------------------------------------------------------- SERVER

  /**
   * Dev server
   *
   */
  // prettier-ignore
  async function createDevServer() {
    const app = express()
    // Create Vite server in middleware mode.
    // This disables Vite's own HTML serving logic and let the parent server take control.
    // https://vitejs.dev/config/server-options.html#server-middlewaremode
    const vite = await createServer({
      logLevel: "info",
      server: {
        middlewareMode: true,
        https: (IS_SSL && { key: KEY, cert: CERT }) || false,
        cors: false
      },
      appType: "custom",
      base: BASE
    })

    // use vite's connect instance as middleware
    app.use(vite.middlewares)
    app.use("*", async (req, res, next) => {
      try {
        // Transforms the ESM source code to be usable in Node.js
        const { render } = await vite.ssrLoadModule(INDEX_SERVER_PATH)
        // dev script to inject
        const devScripts = {
          js: [{ tag: "script", attr: { type: "module", src: "/src/index-client.tsx" } }]
        }
        console.log("devScripts", devScripts)
        // Get react-dom from the render method
        const dom = await render(req.originalUrl, devScripts, false, BASE)
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
          }
        })
      } catch (e) {
        vite.ssrFixStacktrace(e)
        next(e)
      }
    })

    let sslServer
    if (IS_SSL) {
      sslServer = https.createServer({ key: KEY, cert: CERT }, app)
      sslServer.on("error", (error) => {
        log(`Error on server: ${error}`)
      })
    }

    return { app, sslServer }
  }

  // ---------------------------------------------------------------------------

  createDevServer().then(({ app, sslServer }) => (sslServer ?? app).listen(PORT))
})()
