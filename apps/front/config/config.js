import { resolve } from "path"

export default {
  // --------------------------------------------------------------------------- PATHS / VITE CONFIG

  // sources
  srcDir: resolve("src"),

  // public assets from this folder will be copied in build folder
  publicDir: resolve("src/public"),

  // outDir: where files are built
  // If this value is change, add this new path in .gitignore
  distDir: resolve("dist"),
  outDir: resolve("dist"),
  outDirScripts: resolve("dist/_scripts"),
  outDirClient: resolve("dist/client"),
  outDirServer: resolve("dist/server"),
  outDirStatic: resolve("dist/static"),

  // Input entry files array
  // Set the relative paths, don't resolve them.
  // This config is used only if the index is not generated by vite
  input: [
    // "src/index.tsx",
  ],

  // --------------------------------------------------------------------------- TASKS

  // Build dotenv outDir array
  // This task can build the same dotenv files in different directories
  buildDotenvOutDir: [
    // resolve("dist/")
  ],

  // Build htaccess
  htaccessTemplateFilePath: resolve(
    "config/tasks/build-htaccess/templates/.htaccess.template"
  ),
}
