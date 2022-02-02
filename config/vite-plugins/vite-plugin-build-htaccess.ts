import { PluginOption } from "vite"
import buildHtaccess from "../tasks/build-htaccess/build-htaccess"

export default function buildHtaccessPlugin({
  user,
  password,
  serverWebRootPath,
  htaccessTemplatePath,
  outputPath,
}: {
  user: string
  password: string
  serverWebRootPath: string
  htaccessTemplatePath: string
  outputPath: string
}): PluginOption {
  return {
    name: "vite-plugin-build-htaccess",
    renderStart: () => {
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
