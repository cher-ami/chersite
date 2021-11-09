import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import debug from "@wbe/debug";
import config from "./config/config.js";
import buildDotEnv from "./config/tasks/build-dotenv";

const ip = require("ip");
const portFinderSync = require("portfinder-sync");
const log = debug("config:vite.config");

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 *
 * // TODO less var to JS
 * TODO https://github.com/asurraa-lab/react-vite2-ts-antd/blob/master/vite.config.ts
 */

export default defineConfig(({ command, mode }) => {
  const isDevelopment = mode === "development";
  const ipAddress = ip.address();
  const portFinder = portFinderSync.getPort(3000);

  // load env from selected .env
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
    VITE_PORT: portFinder,
    VITE_IP: ipAddress,
  };

  const envVars = loadEnv(mode, process.cwd(), "");
  buildDotEnv(envVars);

  return {
    plugins: [react()],
    clearScreen: false,
    logLevel: "info",
    server: {
      port: portFinder,
      host: true,
      cors: true,
      open: `http://${ipAddress}${process.env.VITE_ROUTER_BASE_URL}`,
    },

    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },

    build: {
      outDir: config.outDir,
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: config.input,
      },
    },
  };
});
