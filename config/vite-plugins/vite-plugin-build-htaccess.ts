import { PluginOption } from "vite"
import buildHtaccess from "../tasks/build-htaccess/build-htaccess"

export default function buildHtaccessPlugin({
  user,
  password,
  serverWebRootPath,
  htaccessTemplatePath,
  outputPath,
  enable,
}: {
  user: string | undefined
  password: string | undefined
  serverWebRootPath: string | undefined
  htaccessTemplatePath: string
  outputPath: string
  enable: boolean
}): PluginOption {
  const isProd = process.env.NODE_ENV === "production"

  return {
    name: "vite-plugin-build-htaccess",
    // In production mode, the plugin will be executed after the build
    // In development mode, the plugin will be executed when the build starts
    [isProd ? "closeBundle" : "buildStart"]: () => {
      if (!enable) return
      buildHtaccess({
        user,
        serverWebRootPath,
        password,
        htaccessTemplatePath,
        outputPath,
      })
    },
  }
}
