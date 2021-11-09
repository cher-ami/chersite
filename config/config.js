const { resolve } = require("path");

module.exports = {
  /**
   * Paths
   */
  wwwDir: resolve("./dist/front/www/"),
  // where file is resolved
  outDir: resolve("./dist/front/www/static/"),
  // entry file
  input: resolve("./src/index.tsx"),

  /**
   * Build dotenv outDir array
   * This task can build the same dotenv files in differents directory
   * Add .env output directories
   */
  buildDotenvOutDir: [resolve("./dist/front/www/")],
};
