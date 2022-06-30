import { defineConfig, loadEnv } from "vite"
import { resolve } from "path"
import config from "./config/config.js"
import debug from "@wbe/debug"
import react from "@vitejs/plugin-react"
import checker from "vite-plugin-checker"
import buildDotenvPlugin from "./config/vite-plugins/vite-plugin-build-dotenv"
import buildHtaccessPlugin from "./config/vite-plugins/vite-plugin-build-htaccess"
import buildAtomsPlugin from "./config/vite-plugins/vite-plugin-build-atoms"
import devServerlogPlugin from "./config/vite-plugins/vite-plugin-dev-server-log"
import legacy from "@vitejs/plugin-legacy"
import autoprefixer from "autoprefixer"

const ip = require("ip")
const portFinderSync = require("portfinder-sync")
const log = debug("config:vite.config")

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 *
 */
export default defineConfig(({ command, mode }) => {
  const isDevelopment = mode === "development"
  const ipAddress = ip.address()
  const portFinder = portFinderSync.getPort(3000)
  const protocol: "http" | "https" = "http"

  // get env variables from selected .env (depend of mode)
  const loadEnvVars = loadEnv(mode, process.cwd(), "")

  // replace "{{LOCAL_IP}}" by the real local IP in .ENV VAR
  const localIpString = `{{LOCAL_IP}}`
  Object.keys(loadEnv(mode, process.cwd(), "")).forEach((e) => {
    if (!loadEnvVars?.[e] || typeof loadEnvVars?.[e] !== "string") return
    if (loadEnvVars[e].includes(localIpString)) {
      loadEnvVars[e] = loadEnvVars[e].replace(localIpString, ipAddress)
    }
  })

  // merge loadEnv selected by vite in process.env
  process.env = {
    ...process.env,
    ...loadEnvVars,
    PROTOCOL: protocol,
    PORT: portFinder,
    HOST: ipAddress,
    COMMAND: command,
    INPUT_FILES: config.input.join(","),
    BUILD_DIRNAME: config.buildDirname,
  }

  return {
    clearScreen: true,
    logLevel: "info",

    // "base" refer to folder where assets are served
    base: `${process.env.VITE_APP_BASE}${config.buildDirname}/`.replace("//", "/"),

    // public folder content is copied in static build folder
    publicDir: config.publicDir,

    server: {
      port: portFinder,
      host: true,
      https: process.env.PROTOCOL === "https",
      cors: true,
      origin: `${protocol}://${ipAddress}:${portFinder}`,
      open:
        process.env.DEV_SERVER_OPEN === "true"
          ? `${protocol}://${ipAddress}${process.env.VITE_APP_BASE}`
          : false,
    },

    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
      postcss: {
        plugins: [autoprefixer()],
      },
    },

    build: {
      assetsDir: "./",
      write: true,
      outDir: config.outDir,
      emptyOutDir: true,
      manifest: true,
      assetsInlineLimit: 0,
      rollupOptions: {
        ...(config.input?.length > 0
          ? { input: config.input?.map((el) => resolve(el)) }
          : {}),
      },
    },

    resolve: {
      alias: {
        "~": resolve(__dirname, "src"),
      },
    },

    plugins: [
      react(),

      checker({ typescript: true, enableBuild: true, overlay: true, terminal: true }),

      legacy({ targets: ["defaults", "not IE 11"] }),

      buildAtomsPlugin({
        varFilesToWatch: config.atomsFilesToWatch,
        outputPath: config.atomsDir,
        outputFilename: config.atomsGeneratedFilename,
      }),

      buildDotenvPlugin({
        envVars: process.env,
        dotenvOutDir: config.buildDotenvOutDir,
        additionalVarKeys: [
          "PROTOCOL",
          "HOST",
          "PORT",
          "COMMAND",
          "INPUT_FILES",
          "BUILD_DIRNAME",
        ],
      }),

      buildHtaccessPlugin({
        serverWebRootPath: process.env.HTACCESS_SERVER_WEB_ROOT_PATH,
        user: process.env.HTACCESS_AUTH_USER,
        password: process.env.HTACCESS_AUTH_PASSWORD,
        htaccessTemplatePath: config.htaccessTemplateFilePath,
        outputPath: config.wwwDir,
        enable: process.env.BUILD_HTACCESS === "true",
      }),

      devServerlogPlugin({
        protocol,
        host: ipAddress,
        base: process.env.VITE_APP_BASE,
        // enable only if we don't use index.html, but ts/tsx entry points
        enable: config.input?.length > 0,
      }),
    ],
  }
})
