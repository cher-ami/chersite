const { resolve } = require("path");

// prettier-ignore
module.exports = {
  /**
   * Paths
   */
  srcDir: resolve("src"),
  // folder to deploy on front server
  wwwDir: resolve("dist/front/www/"),
  // where files are resolved
  outDir: resolve("dist/front/www/static/"),


  /**
   * Input entry files array
   * Set the relative paths, don't resolve them (used to retrieve this files in dev mode)
   */
  input: [
    "src/index.tsx",
    // ... other entry file
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
