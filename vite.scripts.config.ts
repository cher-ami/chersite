import { resolve } from "path"
import { defineConfig } from "vite"
import config from "./config/config.js"
import debug from "@wbe/debug"
const log = debug("config:vite.config")

export default defineConfig(({ command, mode }) => {
  return {
    base: process.env.VITE_APP_BASE,
    build: {
      assetsDir: "./",
      write: true,
      outDir: config.outDirScripts,
      emptyOutDir: true,
      manifest: false,
      assetsInlineLimit: 0,
      ssr: true,

      rollupOptions: {
        input: [
          resolve("server.js"),
          resolve("prerender/prerender.ts"),
          resolve("prerender/exe-prerender-server.ts"),
          resolve("prerender/exe-prerender.ts"),
        ],
        output: {
          manualChunks: undefined,
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      },
    },

    resolve: {
      alias: {
        "~": resolve(__dirname, "src"),
      },
    },
  }
})
