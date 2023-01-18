import * as React from "react"
import express from "express"
import { createServer as createViteServer } from "vite"
import compression from "compression"
import portFinderSync from "portfinder-sync"
import config from "../config/config.js"
import debug from "@wbe/debug"
import { renderToString, renderToPipeableStream } from "react-dom/server"
import parse from "html-react-parser"
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
  const vite = await createViteServer({
    logLevel: "info",
    server: { middlewareMode: true },
    appType: "custom", // don't include Vite's default HTML handling middlewares
  })
  // use vite's connect instance as middleware
  app.use(vite.middlewares)
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl
    try {
      // Load the server entry. vite.ssrLoadModule automatically transforms
      // your ESM source code to be usable in Node.js! There is no bundling
      // required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule(`${config.srcDir}/index-server.tsx`)
      // get DOM from render
      const dom = await render(url, devScripts, false)
      // Apply Vite HTML and plugins transforms. This injects the Vite HMR client
      const html = await vite.transformIndexHtml(url, renderToString(dom))
      // create stream and return it
      const stream = renderToPipeableStream(parse(html), {
        async onShellReady() {
          res.setHeader("Content-type", "text/html")
          res.statusCode = 200
          stream.pipe(res)
        },
        onError(x) {
          res.statusCode = 500
          console.error(x)
        },
      })
      // 6. Send the rendered HTML back.
      // res.status(200).set({ "Content-Type": "text/html" }).end(html)
    } catch (e) {
      // If an error is caught, let Vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e)
      next(e)
    }
  })

  return { app, vite }
}

/**
 * Create production server
 * TODO
 *
 */
async function createProdServer() {
  console.log("prod server")
  const app = express()

  const vite = await createViteServer({
    logLevel: "info",
    server: { middlewareMode: true },
    appType: "custom", // don't include Vite's default HTML handling middlewares
  })

  app.use((await import("compression")).default())
  app.use("*", async (req, res) => {
    try {
      // TODO
      // const url = req.originalUrl
      // const layout = await mfs.readFile(`${config.outDirClient}/index.html`)
      // const { render } = await import(`${config.outDirServer}/index-server.js`)
      // const { meta, renderToString, ssrStaticProps, globalData } = await render(url)
      // ...
      // res.status(200).set({ "Content-Type": "text/html" }).end(html)
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
