import { resolve } from "path"
import { loadEnv } from "vite"
const envs = loadEnv("", process.cwd(), "")

export default {
  srcDir: resolve("src"),

  // public assets from this folder will be copied in build folder
  publicDir: resolve("src/public"),

  // outDir: where files are built
  // If this value is change, add this new path in .gitignore
  outDir: resolve("dist"),
  outDirSsrScripts: resolve("dist/ssr/scripts"),
  outDirSsrServer: resolve("dist/ssr/server"),
  outDirSsrClient: resolve("dist/ssr/client"),
  outDirSpa: resolve("dist/spa"),
  outDirStaticClient:
    envs.OUTDIR_STATIC_CLIENT ||
    process.env.OUTDIR_STATIC_CLIENT ||
    resolve("dist/static/client"),
  outDirStaticClientTemp:
    envs.OUTDIR_STATIC_TEMP ||
    process.env.OUTDIR_STATIC_TEMP ||
    resolve("dist/static/_temp"),
  outDirStaticScripts: resolve("dist/static/scripts"),

  // Input entry files array
  // Set the relative paths, don't resolve them.
  // This config is used only if the index is not generated by vite
  input: [
    // "src/index-client.tsx",
  ],

  // Build dotenv outDir array
  // This task can build the same dotenv files in different directories
  buildDotenvOutDir: [
    // resolve("dist/")
  ],

  // Build htaccess
  htaccessTemplateFilePath: resolve(
    "config/tasks/build-htaccess/templates/.htaccess.template"
  )
}
