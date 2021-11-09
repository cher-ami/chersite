import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import debug from "@wbe/debug";
const { resolve } = require("path");
const log = debug("config:vite.config");

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 */

// TODO less var to JS
// TODO https://github.com/asurraa-lab/react-vite2-ts-antd/blob/master/vite.config.ts

export default defineConfig(({ command, mode }) => {
  // load env from selected .env
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    base: process.env.VITE_BASE_URL,
    plugins: [react()],
    clearScreen: false,
    logLevel: "info",
    server: {
       open: "http://localhost",
      host: "0.0.0.0",
      cors: true,
      // proxy: {
      //   "/": {
      //     target: "http://localhost/cher-vite/dist/front",
      //     changeOrigin: true,
      //     secure: false,
      //   },
      // },
    },
    build: {
      emptyOutDir: true,
      outDir: resolve("./dist/front/static/"),
      manifest: true,
      rollupOptions: {
        input: resolve("./src/index.tsx"),
      },
    },
  };
});
