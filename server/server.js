import * as mfs from "../config/helpers/mfs.js"
import { resolve } from "path"
import express from "express"
import { createServer as createViteServer } from "vite"
import compression from "compression"
import portFinderSync from "portfinder-sync"
import config from "../config/config.js"
import { prepareTemplate } from "./prepareTemplate.js"
import debug from "@wbe/debug"
const log = debug("server:server")

/**
 * Create development server
 *
 *
 *
 */
async function createDevServer() {
  const app = express()

  // Create Vite server in middleware mode. This disables Vite's own HTML
  // serving logic and let the parent server take control.
  //
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
      // 1. Read index.html
      let layout = await mfs.readFile(resolve("index.html"))

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
      //    also applies HTML transforms from Vite plugins, e.g. global preambles
      //    from @vitejs/plugin-react
      layout = await vite.transformIndexHtml(url, layout)

      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule(`${config.srcDir}/index-server.tsx`)

      // 4. render the app HTML. This assumes entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs
      const { meta, renderToString, ssrStaticProps, globalData } = await render(url)
      log({ url, renderToString, ssrStaticProps, globalData })

      // 5. Inject the app-rendered HTML into the template.
      const html = prepareTemplate(layout, {
        app: renderToString,
        ssrStaticProps,
        globalData,
        meta,
      })

      // 6. Send the rendered HTML back.
      res.status(200).set({ "Content-Type": "text/html" }).end(html)
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
 *
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
      const url = req.originalUrl
      const layout = await mfs.readFile(`${config.outDirClient}/index.html`)
      const { render } = await import(`${config.outDirServer}/index-server.js`)
      const { meta, renderToString, ssrStaticProps, globalData } = await render(url)
      const html = prepareTemplate(layout, {
        app: renderToString,
        ssrStaticProps,
        globalData,
        meta,
      })
      res.status(200).set({ "Content-Type": "text/html" }).end(html)
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
