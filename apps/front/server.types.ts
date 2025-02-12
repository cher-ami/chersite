/**
 * Server configuration interface.
 */
export interface ServerConfig {
  base: string
  port: number
  protocol: "http" | "https"
  isSSL: boolean
  sslCert?: Buffer
  sslKey?: Buffer
}

/**
 * Development scripts interface.
 */
export interface DevScripts {
  js: Array<{
    tag: string
    attr: Record<string, string>
  }>
}

/**
 * Server-Side Rendering context interface.
 */
export interface SSRContext {
  url: string
  scripts: DevScripts | Record<string, any>
  isStatic: boolean
  base: string
}
