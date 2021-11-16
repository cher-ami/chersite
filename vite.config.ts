import { resolve } from "path";
import config from "./config/config.js";
import { defineConfig, loadEnv } from "vite";
import debug from "@wbe/debug";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import buildDotenvPlugin from "./config/vite-plugins/vite-plugin-build-dotenv";
import buildHtaccessPlugin from "./config/vite-plugins/vite-plugin-build-htaccess";
import buildAtomsPlugin from "./config/vite-plugins/vite-plugin-build-atoms";
import legacy from "@vitejs/plugin-legacy";

const ip = require("ip");
const portFinderSync = require("portfinder-sync");
const log = debug("config:vite.config");

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 *
 */
export default defineConfig(({ command, mode }) => {
  const isDevelopment = mode === "development";
  const ipAddress = ip.address();
  const portFinder = portFinderSync.getPort(3000);

  // merge loadEnv selected by vite in process.env
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), ""),
    PORT: portFinder,
    HOST: ipAddress,
    COMMAND: command,
    INPUT_FILES: config.input.join(","),
  };
  log("process.env", process.env);

  return {
    clearScreen: true,
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
      write: true,
      outDir: config.outDir,
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
        input: config.input.map((el) => resolve(el)),
      },
    },

    plugins: [
      react(),

      checker({ typescript: true, enableBuild: true, overlay: true }),

      buildAtomsPlugin({
        varFilesToWatch: config.atomsFilesToWatch,
        outputPath: config.atomsDir,
        outputFilename: config.atomsGeneratedFilename,
      }),

      buildDotenvPlugin({
        envVars: process.env,
        dotenvOutDir: config.buildDotenvOutDir,
        additionalVarKeys: ["HOST", "PORT", "COMMAND", "INPUT_FILES"],
      }),

      buildHtaccessPlugin({
        serverWebRootPath: process.env.HTACCESS_SERVER_WEB_ROOT_PATH,
        user: process.env.HTACCESS_AUTH_USER,
        password: process.env.HTACCESS_AUTH_PASSWORD,
        htaccessTemplatePath: config.htaccessTemplateFilePath,
        outputPath: config.wwwDir,
      }),

      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
  };
});
