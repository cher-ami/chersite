import chalk from "chalk"
import express from "express"
import fs from "node:fs/promises"
import portFinderSync from "portfinder-sync"
import { renderToPipeableStream } from "react-dom/server"
import { loadEnv } from "vite"
import config from "../config/config.js"

const loadEnvVars = loadEnv(process.env.NODE_ENV, process.cwd(), "")
const BASE = loadEnvVars.VITE_APP_BASE || process.env.VITE_APP_BASE || "/"
const PORT = process.env.DOCKER_NODE_PORT ?? portFinderSync.getPort(5173)
const MANIFEST_PARSER_PATH = `${config.outDirScripts}/ManifestParser.js`
const VITE_MANIFEST_PATH = `${config.outDirClient}/.vite/manifest.json`
const INDEX_SERVER_PATH = `${config.outDirServer}/index-server.js`
const CLIENT_PATH = "dist/client"

;(async () => {
  // --------------------------------------------------------------------------- SERVER

  /**
   * Production server
   *
   */
  async function createProdServer() {
    const app = express()
    const compression = (await import("compression")).default
    const sirv = (await import("sirv")).default
    app.use(compression())
    app.use(BASE, sirv(CLIENT_PATH, { extensions: [] }))
    app.use("*", async (req, res) => {
      try {
        // Prepare scripts to inject in template
        const { ManifestParser } = await import(MANIFEST_PARSER_PATH)
        const manifest = await fs.readFile(VITE_MANIFEST_PATH, "utf-8")
        const scriptTags = ManifestParser.getScriptTagFromManifest(manifest, BASE)

        // Prepare & stream the DOM
        const { render } = await import(INDEX_SERVER_PATH)
        const dom = await render(req.originalUrl, scriptTags, false, BASE)

        // stream the DOM
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

    return { app }
  }

  // --------------------------------------------------------------------------- START

  createProdServer().then(({ app }) =>
    app.listen(PORT, () => {
      console.log(
        `⚡️ ${chalk.white("server.prod is running in")} ${chalk.cyan(`http://localhost:${PORT}`)}`
      )
    })
  )
})()
