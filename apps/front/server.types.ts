// server.types.ts
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify"
import { ViteDevServer } from "vite"

export interface ServerConfig {
  base: string
  port: number
  protocol: "http" | "https"
  isSSL: boolean
  sslCert?: Buffer
  sslKey?: Buffer
}

export interface DevScripts {
  js: Array<{
    tag: string
    attr: Record<string, string>
  }>
}

export interface SSRContext {
  url: string
  scripts: DevScripts | Record<string, any>
  isStatic: boolean
  base: string
}
