import * as React from "react"
import express from "express"
import { createServer } from "vite"
import portFinderSync from "portfinder-sync"
import config from "./config/config.js"
import { renderToPipeableStream } from "react-dom/server"
import debug from "@wbe/debug"

const log = debug("server:server")
const isProduction = process.env.NODE_ENV === "production"
const port = process.env.DOCKER_NODE_PORT ?? portFinderSync.getPort(3000)

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
    server: { middlewareMode: true },
    appType: "custom",
  })

  // use vite's connect instance as middleware
  app.use(vite.middlewares)
  app.use("*", async (req, res, next) => {
    try {
      // Transforms the ESM source code to be usable in Node.js
      const { render } = await vite.ssrLoadModule(`${config.srcDir}/index-server.tsx`)
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
  return { app, vite }
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

;(isProduction ? createProdServer : createDevServer)().then(({ app }) => app.listen(port))
