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


  const build = () =>
  {
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
    renderStart: build
  }
}
