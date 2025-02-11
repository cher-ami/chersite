import debug from "@cher-ami/debug"
import fastify, { FastifyInstance } from "fastify"
import * as https from "https"
import * as mfs from "@cher-ami/mfs"
import portFinderSync from "portfinder-sync"
import { renderToPipeableStream } from "react-dom/server"
import { createServer, loadEnv, ViteDevServer } from "vite"
import { ServerConfig, SSRContext, DevScripts } from "./server.types"
import config from "./config/config.js"
import fs from "node:fs/promises"

const log = debug("server:server.dev")

const loadEnvVars = loadEnv(process.env.NODE_ENV, process.cwd(), "")
const BASE = loadEnvVars.VITE_APP_BASE || process.env.VITE_APP_BASE || "/"
const PROTOCOL = loadEnvVars.PROTOCOL ?? "http"
const IS_SSL = PROTOCOL === "https"
const PORT = Number(process.env.DOCKER_NODE_PORT ?? portFinderSync.getPort(5173))
const INDEX_SERVER_PATH = `${config.srcDir}/index-server.tsx`

async function getSSLCertificates(): Promise<{ key: Buffer; cert: Buffer } | null> {
  if (!IS_SSL) return null

  if (!(await mfs.fileExists("key.pem")) || !(await mfs.fileExists("cert.pem"))) {
    console.error(
      "You need to generate a key and a cert file with openssl in the apps/front/ directory."
    )
    process.exit(1)
  }

  return {
    key: await fs.readFile("key.pem"),
    cert: await fs.readFile("cert.pem")
  }
}

async function createViteServer(serverConfig: ServerConfig): Promise<ViteDevServer> {
  return createServer({
    logLevel: "error",
    server: {
      middlewareMode: true,
      https: serverConfig.isSSL
        ? {
            key: serverConfig.sslKey,
            cert: serverConfig.sslCert
          }
        : {},
      cors: false
    },
    appType: "custom",
    base: serverConfig.base
  })
}

const envToLogger = {
  development: {
    level: "error",
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname,reqId,responseTime"
      }
    },
    serializers: {
      res(reply) {
        return reply.statusCode
      },
      req(request) {
        return request.url
      }
    }
  },
  production: true,
  test: false
}

async function createDevServer(serverConfig: ServerConfig): Promise<FastifyInstance> {
  const server = fastify({
    logger: envToLogger.development,
    https: serverConfig.isSSL
      ? {
          key: serverConfig.sslKey,
          cert: serverConfig.sslCert
        }
      : undefined
  })

  const vite = await createViteServer(serverConfig)

  // Register middleware support
  await server.register(import("@fastify/middie"))
  server.use(vite.middlewares)

  // Handle all routes
  server.all("*", async (request, reply) => {
    try {
      const { render } = await vite.ssrLoadModule(INDEX_SERVER_PATH)

      const devScripts: DevScripts = {
        js: [{ tag: "script", attr: { type: "module", src: "/src/index-client.tsx" } }]
      }

      const context: SSRContext = {
        url: request.url,
        scripts: devScripts,
        isStatic: false,
        base: BASE
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
      vite.ssrFixStacktrace(e as Error)
      reply.code(500).send(e)
    }
  })

  return server
}

async function startServer(): Promise<void> {
  const sslCerts = await getSSLCertificates()

  const serverConfig: ServerConfig = {
    base: BASE,
    port: PORT,
    protocol: PROTOCOL as "http" | "https",
    isSSL: IS_SSL,
    sslKey: sslCerts?.key,
    sslCert: sslCerts?.cert
  }

  const server = await createDevServer(serverConfig)

  try {
    await server.listen({ port: serverConfig.port, host: "0.0.0.0" })
    log(`Server running at ${serverConfig.protocol}://localhost:${serverConfig.port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

startServer()
