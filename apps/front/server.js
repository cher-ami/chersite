import debug from "@cher-ami/debug"
import express from "express"
import * as https from "https"
import * as mfs from "@cher-ami/mfs"
import fs from "node:fs/promises"
import portFinderSync from "portfinder-sync"
import { renderToPipeableStream } from "react-dom/server"
import { createServer, loadEnv } from "vite"
import config from "./config/config.js"

const log = debug("server:server")

const loadEnvVars = loadEnv(process.env.NODE_ENV, process.cwd(), "")
const IS_PROD = process.env.NODE_ENV === "production"
const BASE = loadEnvVars.VITE_APP_BASE || process.env.VITE_APP_BASE || "/"
const PROTOCOL = loadEnvVars.PROTOCOL ?? "http"
const IS_SSL = PROTOCOL === "https"
const PORT =
  (loadEnvVars.DOCKER_NODE_PORT || process.env.DOCKER_NODE_PORT) ??
  portFinderSync.getPort(5173)

;(async () => {
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

  // ---------------------------------------------------------------------------

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
        // @ts-ignore
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
        const { render } = await vite.ssrLoadModule(`${config.srcDir}/server/index-server.tsx`)
        // dev script to inject
        const devScripts = {
          js: [{ tag: "script", attr: { type: "module", src: "/src/index.tsx" } }]
        }
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

    let SSL_SERVER
    if (IS_SSL) {
      SSL_SERVER = https.createServer({ key: KEY, cert: CERT }, app)
      SSL_SERVER.on("error", (error) => {
        log(`Error on server: ${error}`)
      })
    }

    return { vite, app, sslServer: SSL_SERVER }
  }

  // ---------------------------------------------------------------------------

  /**
   * Production server
   *
   */
  // prettier-ignore
  async function createProdServer() {
    const app = express()
    const compression = (await import("compression")).default
    const sirv = (await import("sirv")).default
    app.use(compression())
    app.use(BASE, sirv("./dist/client", { extensions: [] }))
    app.use("*", async (req, res) => {
      try {
        // Prepare scripts to inject in template
        const { ManifestParser } = await import(`${config.outDirScripts}/ManifestParser.js`)
        const manifest = await fs.readFile(`${config.outDirClient}/.vite/manifest.json`,"utf-8")
        const scriptTags = ManifestParser.getScriptTagFromManifest(manifest, BASE)
        // Prepare & stream the DOM
        const { render } = await import(`${config.outDirServer}/index-server.js`)
        const dom = await render(req.originalUrl, scriptTags, false, BASE)
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
        console.log(e.stack)
        res.status(500).end(e.stack)
      }
    })

    let SSL_SERVER
    if (IS_SSL) {
      SSL_SERVER = https.createServer({ key: KEY, cert: CERT }, app)
      SSL_SERVER.on("error", (error) => {
        log(`Error on server: ${error}`)
      })
    }
    return { app, sslServer: SSL_SERVER }
  }

  // ---------------------------------------------------------------------------

  if (!IS_PROD) {
    createDevServer().then(
      ({ app, sslServer }) => (sslServer ?? app).listen(PORT),
      () => {}
    )
  } else {
    createProdServer().then(({ app, sslServer }) =>
      (sslServer ?? app).listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`)
      })
    )
  }
})()
