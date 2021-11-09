import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import debug from "@wbe/debug";
const ip = require("ip");
const { resolve } = require("path");
const portFinderSync = require("portfinder-sync");
import prebuildDotEnv from "./config/tasks/dotenv";

const log = debug("config:vite.config");

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 */

// TODO less var to JS
// TODO https://github.com/asurraa-lab/react-vite2-ts-antd/blob/master/vite.config.ts

export default defineConfig(({ command, mode }) => {
  const isDevelopment = mode === "development";
  const ipAddress = ip.address();
  const portFinder = portFinderSync.getPort(3000);

  console.log("mode",mode)
  // load env from selected .env
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    VITE_PORT: portFinder,
    VITE_IP: ipAddress,
  };

  console.log("process.env",process.env.TEST)
  prebuildDotEnv(process.env);

  return {
    plugins: [
      react({
        fastRefresh: true,
        jsxRuntime: "classic",
      }),
    ],
    clearScreen: false,
    logLevel: "info",
    server: {
      port: portFinder,
      host: true,
      cors: true,
      open: `http://${ipAddress}${process.env.VITE_ROUTER_BASE_URL}`,
      // proxy: {
      //   "/": {
      //     target: "http://localhost/cher-vite/dist/front",
      //     changeOrigin: true,
      //     secure: false,
      //   },
      // },
    },


    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
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
