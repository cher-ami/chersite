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
  const build = () => {
    if (!enable) return
    buildHtaccess({
      user,
      serverWebRootPath,
      password,
      htaccessTemplatePath,
      outputPath,
    })
  }

  return {
    name: "vite-plugin-build-htaccess",
    buildStart: build,
    renderStart: build,
  }
}
