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
  user: string
  password: string
  serverWebRootPath: string
  htaccessTemplatePath: string
  outputPath: string
  enable: boolean
}): PluginOption {
  return {
    name: "vite-plugin-build-htaccess",
    renderStart: () => {
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
