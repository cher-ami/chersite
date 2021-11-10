const { resolve } = require("path");

module.exports = {
  /**
   * Paths
   */
  // folder to deploy on front server
  wwwDir: resolve("./dist/front/www/"),
  // where file is resolved
  outDir: resolve("./dist/front/www/static/"),
  // TODO sync with php var
  inputFilename: "index.tsx",
  // entry file application
  input: resolve("./src/index.tsx"),

  /**
   * Build dotenv outDir array
   * This task can build the same dotenv files in differents directory
   * Add .env output directories
   */
  buildDotenvOutDir: [resolve("./dist/front/www/")],

  /**
   * Build Atoms
   * (Is used by less to JS plugin)
   */
  atomsDir: resolve("src/atoms"),
  atomsPartialsDir: resolve("src/atoms/partials"),
  atomsFilesToWatch: resolve("src/atoms/partials/*.less"),
  atomsGeneratedFilename: "atoms.ts",
};
