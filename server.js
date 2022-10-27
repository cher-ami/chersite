import * as mfs from "./config/helpers/mfs.js"
import { resolve } from "path"
import express from "express"
import { createServer as createViteServer } from "vite"
import compression from "compression"
import ip from "ip"
import portFinderSync from "portfinder-sync"
import config from "./config/config.js"
import debug from "@wbe/debug"
const log = debug("server")

/**
 * Create development server
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
    if (url === "/favicon.ico") return

    try {
      // 1. Read index.html
      let template = await mfs.readFile(resolve("index.html"))
      //console.log('template', template)

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
      //    also applies HTML transforms from Vite plugins, e.g. global preambles
      //    from @vitejs/plugin-react
      template = await vite.transformIndexHtml(url, template)

      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule(`${config.srcDir}/index-server.tsx`)

      // 4. render the app HTML. This assumes entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const { meta, renderToString, ssrStaticProps, globalData } = await render(url)

      log({ url, renderToString, ssrStaticProps, globalData })

      // 5. Inject the app-rendered HTML into the template.
      let html = template
        .replaceAll(`<!--meta-title-->`, meta?.title ?? "")
        .replaceAll(`<!--meta-description-->`, meta?.description ?? "")
        .replaceAll(`<!--meta-imageUrl-->`, meta?.imageUrl ?? "")
        .replaceAll(`<!--meta-url-->`, meta?.url ?? "")
        .replaceAll(`<!--meta-siteName-->`, meta?.siteName ?? "")
        .replace(`<!--app-html-->`, renderToString)
        .replace(`"<!--ssr-static-props-->"`, JSON.stringify(ssrStaticProps))
        .replace(`"<!--ssr-global-data-->"`, JSON.stringify(globalData))

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
 */
async function createProdServer() {
  console.log("prod server")
  const app = express()

  const vite = await createViteServer({
    logLevel: "info",
    server: { middlewareMode: true },
    appType: "custom", // don't include Vite's default HTML handling middlewares
  })

  app.use(compression())
  // @ts-ignore
  app.use(serveStatic(config.outDirClient), { index: false })

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl
      const template = await mfs.readFile(`${config.outDirClient}/index.html`)
      const { render } = require(`${config.outDirServer}/index-server.js`)
      const appHtml = render(url)
      const html = template.replace(`<!--app-html-->`, appHtml)
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
const host = process.env.HOST ?? ip.address()
const port = process.env.DOCKER_PORT ?? portFinderSync.getPort(3000)

if (!isProd) {
  createDevServer().then(({ app }) => app.listen(port))
} else {
  createProdServer().then(({ app }) => app.listen(port))
}
