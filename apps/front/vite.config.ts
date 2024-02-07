// @ts-ignore
import autoprefixer from "autoprefixer"
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite"
import { resolve } from "path"
import config from "./config/config.js"
import debug from "@cher-ami/debug"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
import checker from "vite-plugin-checker"
import buildDotenvPlugin from "./config/vite-plugins/vite-plugin-build-dotenv"
import buildHtaccessPlugin from "./config/vite-plugins/vite-plugin-build-htaccess"
import { viteChersiteCustomLogger } from "./config/vite-plugins/vite-chersite-custom-logger"
import legacy from "@vitejs/plugin-legacy"
import ip from "ip"
import portFinderSync from "portfinder-sync"
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
    PORT: `${loadEnvVars.DOCKER_NODE_PORT ?? portFinderSync.getPort(3000)}`,
    HOST: loadEnvVars["HOST"] ?? ipAddress,
    PROTOCOL: protocol,
    COMMAND: command,
    INPUT_FILES: config.input.join(","),
    BUILD_DIRNAME: config.buildDirname,
  }

  return {
    ...(isDevelopment
      ? {
          customLogger: viteChersiteCustomLogger({
            protocol,
            host: process.env.HOST,
            port: process.env.PORT,
            base: process.env.VITE_APP_BASE,
          }),
        }
      : {}),

    define: {
      "process.env.VITE_APP_BASE": JSON.stringify(process.env.VITE_APP_BASE),
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
      origin: `${protocol}://${process.env.HOST}:${process.env.PORT}`,
      watch: {
        // do not watch .env files to avoid reloading when build-dotenv is processed
        ignored: [...(config.buildDotenvOutDir.map((path) => `${path}/.env`) || [])],
      },
    },

    css: {
      modules: {
        generateScopedName: "[name]__[local]__[hash:base64:5]",
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
          "DOCKER_PORT",
        ],
      }),

      // Htaccess dist/ with password
      buildHtaccessPlugin({
        enable: process.env.BUILD_HTACCESS === "true",
        serverWebRootPath: process.env.HTACCESS_SERVER_WEB_ROOT_PATH,
        user: process.env.HTACCESS_AUTH_USER,
        password: process.env.HTACCESS_AUTH_PASSWORD,
        htaccessTemplatePath: config.htaccessTemplateFilePath,
        outputPath: process.env.HTACCESS_OUTPUT_PATH,
      }),

      visualizer({
        filename: "./build-stats.html",
        gzipSize: true,
        title: "Generated bundle stats",
      }),
    ],
  }
})
