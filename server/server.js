import * as React from "react"
import express from "express"
import { createServer } from "vite"
import portFinderSync from "portfinder-sync"
import config from "../config/config.js"
import debug from "@wbe/debug"
import { renderToPipeableStream } from "react-dom/server"
const log = debug("server:server")

/**
 * Create development server
 *
 *
 *
 */
async function createDevServer() {
  const app = express()

  // dev script to inject
  const devScripts = {
    js: [{ tag: "script", attr: { type: "module", src: "/src/index.tsx" } }],
  }

  // Create Vite server in middleware mode. This disables Vite's own HTML
  // serving logic and let the parent server take control.
  // In middleware mode, if you want to use Vite's own HTML serving logic
  // use `'html'` as the `middlewareMode` (ref https://vitejs.dev/config/#server-middlewaremode)
  const vite = await createServer({
    logLevel: "info",
    server: { middlewareMode: true },
    appType: "custom",
  })

  // use vite's connect instance as middleware
  app.use(vite.middlewares)
  app.use("*", async (req, res, next) => {
    try {
      // Load the server entry. vite.ssrLoadModule automatically transforms
      // your ESM source code to be usable in Node.js! There is no bundling
      // required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule(`${config.srcDir}/index-server.tsx`)

      // get react-dom from the render method
      const dom = await render(req.originalUrl, devScripts, false)

      // create stream and return it
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

  return { app, vite: vite }
}

/**
 * Create production server
 * TODO
 *
 */
async function createProdServer() {
  console.log("prod server")
  const app = express()

  const vite = await createServer({
    logLevel: "info",
    server: { middlewareMode: true },
    appType: "custom",
  })

  app.use((await import("compression")).default())
  app.use("*", async (req, res) => {
    try {
      // TODO
    } catch (e) {
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

/**
 * Let's go!
 */
const isProd = process.env.NODE_ENV === "production"
const port = process.env.DOCKER_NODE_PORT ?? portFinderSync.getPort(3000)

isProd
  ? createProdServer().then(({ app }) => app.listen(port))
  : createDevServer().then(({ app }) => app.listen(port))
