import debug from "@wbe/debug";
import { HmrContext, PluginOption } from "vite";
const log = debug("config:build-dotenv");

export default function dotenv({}: {}): PluginOption {
  return {
    name: "vite-plugin-dotenv",

    /**
     * When build start
     */
    buildStart: () => {
      log("build start");
    },

    /**
     * When hot update
     * @param ctx
     */
    handleHotUpdate(ctx: HmrContext) {
      log("handleHotUpdate");
    },
  };
}
