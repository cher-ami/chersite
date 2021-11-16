const { resolve } = require("path");

// prettier-ignore
module.exports = {
  /**
   * Paths
   */
  srcDir: resolve("src"),
  // public assets from this folder will be copied in build folder
  publicDir: resolve("src/public"),
  // folder to deploy on front server
  wwwDir: resolve("dist/front/www/"),

  /**
   *  Directory name of the build folder (will be cleaned before build)
   *  If this value is change, modify "outDir" last folder with this new one
   */
  buildDirname: "static",

  /**
   * outDir: where files are built
   * last folder need to be sync with `buildDirname`
   * If this value is change, add this new path in .gitignore
   */
  outDir: resolve("dist/front/www/static/"),

  /**
   * Input entry files array
   * Set the relative paths, don't resolve them.
   */
  input: [
    "src/index.tsx",
    // ... other entry files
  ],

  // --------------------------------------------------------------------------- BUILD TASK

  /**
   * Build dotenv outDir array
   * This task can build the same dotenv files in differents directory
   * Add .env output directories
   */
  buildDotenvOutDir: [
      resolve("dist/front/www/")
  ],

  /**
   * Build Atoms
   * (Is used by less to JS plugin)
   */
  atomsDir: resolve("src/atoms"),
  atomsPartialsDir: resolve("src/atoms/partials"),
  atomsFilesToWatch: resolve("src/atoms/partials/*.less"),
  atomsGeneratedFilename: "atoms.ts",

  /**
   * Build htaccess
   */
  htaccessTemplateFilePath: resolve("src/.htaccess"),
};
