import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import debug from "@wbe/debug";
import { resolve } from "path";
import config from "./config/config.js";
import buildDotEnv from "./config/tasks/build-dotenv";
import buildHtaccess from "./config/tasks/build-htaccess";
import checker from "vite-plugin-checker";
import lessToJsPlugin from "./config/vite-plugins/vite-plugin-less-to-js";

const ip = require("ip");
const portFinderSync = require("portfinder-sync");
const log = debug("config:vite.config");

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 *
 * TODO less var to JS
 * TODO https://github.com/asurraa-lab/react-vite2-ts-antd/blob/master/vite.config.ts
 */

export default defineConfig(({ command, mode }) => {
  const isDevelopment = mode === "development";
  const ipAddress = ip.address();
  const portFinder = portFinderSync.getPort(3000);

  // merge loadEnv selected by vite in specific order in process.env
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), ""),
    PORT: portFinder,
    HOST: ipAddress,
    COMMAND: command, // (can be: serve | build)
  };

  /**
   * Before config
   */
  // build dotenv with loaded env var (.env + .env.{mode})
  buildDotEnv({
    envVars: process.env,
    dotenvOutDir: config.buildDotenvOutDir,
    additionalVarKeys: ["HOST", "PORT", "COMMAND"],
  });

  // build htaccess file
  buildHtaccess({
    serverWebRootPath: process.env.HTACCESS_SERVER_WEB_ROOT_PATH,
    user: process.env.HTACCESS_AUTH_USER,
    password: process.env.HTACCESS_AUTH_PASSWORD,
    outputPath: config.wwwDir,
    htaccessTemplatePath: config.htaccessTemplateFilePath,
  });

  /**
   * Config
   */
  return {
    clearScreen: false,
    logLevel: "info",

    plugins: [
      react(),
      checker({ typescript: true, enableBuild: true, overlay: true }),
      lessToJsPlugin({
        varFilesToWatch: config.atomsFilesToWatch,
        outputPath: config.atomsDir,
        outputFilename: config.atomsGeneratedFilename,
      }),
    ],

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
