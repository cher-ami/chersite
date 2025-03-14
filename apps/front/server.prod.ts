import chalk from "chalk"
import fastify, { FastifyInstance } from "fastify"
import fs from "node:fs/promises"
import portFinderSync from "portfinder-sync"
import { renderToPipeableStream } from "react-dom/server"
import { loadEnv } from "vite"
import config from "./config/config.js"
import { ServerConfig, SSRContext } from "./server.types"

const loadEnvVars = loadEnv(process.env.NODE_ENV, process.cwd(), "")
const BASE = loadEnvVars.VITE_APP_BASE || process.env.VITE_APP_BASE || "/"
const PORT = Number(process.env.DOCKER_NODE_PORT ?? portFinderSync.getPort(3000))
const MANIFEST_PARSER_PATH = `${config.outDirSsrScripts}/ManifestParser.js`
const VITE_MANIFEST_PATH = `${config.outDirSsrClient}/.vite/manifest.json`
const INDEX_SERVER_PATH = `${config.outDirSsrServer}/index-server.js`

/**
 * Creates a production server instance.
 *
 * @param {ServerConfig} serverConfig - The server configuration.
 * @returns {Promise<FastifyInstance>}
 */
async function createProdServer(serverConfig: ServerConfig): Promise<FastifyInstance> {
  const server = fastify({
    logger: {
      level: "warn"
    }
  })

  // Register compression
  await server.register(import("@fastify/compress"))

  // Serve static files
  await server.register(import("@fastify/static"), {
    root: config.outDirSsrClient,
    prefix: serverConfig.base,
    decorateReply: false,
    wildcard: false
  })

  // Handle all routes
  server.all("*", {
    handler: async (request, reply) => {
      try {
        const { ManifestParser } = await import(MANIFEST_PARSER_PATH)
        const manifest = await fs.readFile(VITE_MANIFEST_PATH, "utf-8")
        const scriptTags = ManifestParser.getScriptTagFromManifest(
          manifest,
          serverConfig.base
        )

        const { render } = await import(INDEX_SERVER_PATH)

        const context: SSRContext = {
          url: request.url,
          scripts: scriptTags,
          isStatic: false,
          base: serverConfig.base
        }

        const dom = await render(
          context.url,
          context.scripts,
          context.isStatic,
          context.base
        )

        reply.type("text/html")
        const stream = renderToPipeableStream(dom, {
          onShellReady() {
            stream.pipe(reply.raw)
          },
          onError(e: Error) {
            reply.code(500).send(e)
          }
        })
      } catch (e) {
        server.log.error(e)
        reply.code(500).send((e as Error).stack)
      }
    }
  })

  return server
}

/**
 * Starts the production server.
 *
 * @returns {Promise<void>}
 */
async function startServer(): Promise<void> {
  const serverConfig: ServerConfig = {
    base: BASE,
    port: PORT,
    protocol: "http",
    isSSL: false
  }

  const server = await createProdServer(serverConfig)

  try {
    await server.listen({ port: serverConfig.port, host: "0.0.0.0" })
    console.log(
      `⚡️ ${chalk.white("server.prod is running in")} ${chalk.cyan(
        `http://localhost:${serverConfig.port}`
      )}`
    )
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

startServer()
