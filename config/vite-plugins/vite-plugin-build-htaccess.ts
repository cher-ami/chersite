import debug from "@wbe/debug";
import { PluginOption } from "vite";
const log = debug("config:vite-plugin-build-htaccess");
import buildHtaccess from "../tasks/build-htaccess";

export default function buildHtaccessPlugin({
  user,
  password,
  serverWebRootPath,
  htaccessTemplatePath,
  outputPath,
}: {
  user: string;
  password: string;
  serverWebRootPath: string;
  htaccessTemplatePath: string;
  outputPath: string;
}): PluginOption {
  return {
    name: "vite-plugin-build-htaccess",
    buildStart: () => {
      buildHtaccess({
        user,
        serverWebRootPath,
        password,
        htaccessTemplatePath,
        outputPath,
      });
    },
  };
}