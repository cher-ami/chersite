// @ts-ignore
import debug from "@cher-ami/debug"
import ip from "@eggjs/ip"
import legacy from "@vitejs/plugin-legacy"
import react from "@vitejs/plugin-react-swc"
import autoprefixer from "autoprefixer"
import { resolve } from "path"
import portFinderSync from "portfinder-sync"
import { visualizer } from "rollup-plugin-visualizer"
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite"
import checker from "vite-plugin-checker"
import config from "./config/config.js"
import buildDotenvPlugin from "./config/vite-plugins/vite-plugin-build-dotenv"
import buildHtaccessPlugin from "./config/vite-plugins/vite-plugin-build-htaccess"
const log = debug("config:vite.config")

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 */
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const isDevelopment = mode === "development"
  const ipAddress = ip.address()

  // get env variables from selected .env (depend of mode)
  const loadEnvVars = loadEnv(mode, process.cwd(), "")

  const protocol: "http" | "https" = (loadEnvVars.PROTOCOL as "http" | "https") ?? "http"

  // merge loadEnv selected by vite in process.env
  process.env = {
    ...loadEnvVars,
    // Merge "process.env" vars AFTER loadEnvVars!
    // In some case, process.env vars are loaded via external service like gitlab-ci
    // and must overwrite .env vars loaded by loadEnv()
    ...process.env,
    PORT: `${loadEnvVars.DOCKER_NODE_PORT ?? portFinderSync.getPort(5173)}`,
    HOST: loadEnvVars["HOST"] ?? ipAddress,
    PROTOCOL: protocol,
    COMMAND: command,
    INPUT_FILES: config.input.join(","),
    BUILD_DIRNAME: config.buildDirname
  }

  return {
    define: {
      "process.env.VITE_APP_BASE": JSON.stringify(process.env.VITE_APP_BASE)
    },
    // "base" refer to folder where assets are served
    base: process.env.VITE_APP_BASE,

    // public folder content is copied in static build folder
    publicDir: config.publicDir,

    server: {
      cors: true,
      host: true,
      port: process.env.PORT as any,
      // @ts-ignore
      https: protocol === "https",
      origin: `${protocol}://${process.env.HOST}:${process.env.PORT}`
    },

    css: {
      modules: {
        generateScopedName: "[name]__[local]__[hash:base64:5]"
      },
      postcss: {
        plugins: [autoprefixer()]
      }
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
          : {})
      }
    },

    resolve: {
      alias: {
        "~": resolve(__dirname, "src")
      }
    },

    plugins: [
      react(),

      checker({ typescript: true, enableBuild: true, overlay: true, terminal: true }),

      legacy({ targets: ["defaults", "not IE 11"] }),

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
          "DOCKER_PORT"
        ]
      }),

      // always build htaccess for SPA production
      buildHtaccessPlugin({
        enable: loadEnvVars.VITE_SPA === "true",
        serverWebRootPath: undefined,
        user: undefined,
        password: undefined,
        htaccessTemplatePath: config.htaccessTemplateFilePath,
        outputPath: "dist/spa"
      }),

      // Htaccess task set from .env
      buildHtaccessPlugin({
        enable: process.env.BUILD_HTACCESS === "true",
        serverWebRootPath: process.env.BASIC_AUTH_SERVER_WEB_ROOT_PATH,
        user: process.env.BASIC_AUTH_USER,
        password: process.env.BASIC_AUTH_PWD,
        htaccessTemplatePath: config.htaccessTemplateFilePath,
        outputPath: process.env.HTACCESS_OUTPUT_PATH || config.outDirStaticClient
      }),

      visualizer({
        filename: "./stats.html",
        gzipSize: true,
        title: "Generated bundle stats"
      })
    ]
  }
})
