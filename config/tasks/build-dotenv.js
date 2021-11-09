const { Files } = require("@zouloux/files");
const path = require("path");
const debug = require("@wbe/debug")("config:prebuild-dotenv");
const config = require("../config.js");

/**
 * Prepare env vars
 * @param envFiles
 */
const _prepareVars = (envFiles) =>
  envFiles
    .map((el) =>
      // read current .env file
      Files.getFiles(el)
        .read()
        // split each lines
        .split("\n")
        // for each line, filter comments and keep only var name
        .map((el) => {
          const isComment = el.includes("#");
          const containsEqual = el.includes("=");
          if (!isComment && containsEqual) {
            const varName = el.split("=")[0];
            return varName ? varName : null;
          }
        })
        // remove empty lines
        .filter((e) => e)
    )
    // flat arrays results
    .flat()
    // remove double entries
    .filter((elem, index, self) => index === self.indexOf(elem));

/**
 * Prepare template
 * @param vars
 * @param envVars
 * @return {*}
 * @private
 */
const _prepareTemplate = (vars, envVars) => {
  let template;

  // prettier-ignore
  template = vars.map(
    (el) =>
      `${el}=${
      envVars[el] ? envVars[el].includes(" ") ? `"${envVars[el]}"` : envVars[el] : ""
    }`
  );

  // push current version in it
  template.push(`VERSION=${require(path.resolve("package.json")).version}`);

  // filter to remove empty lines
  template = template.filter((e) => e).join("\n");
  debug("template to write in file", template);

  return template;
};

/**
 * Build .env file
 * Create and inject .env file in specific folder(s)
 * @param envVars Env variables object {}
 * @param dotenvOutDir Build .env paths array
 */
module.exports = (envVars, dotenvOutDir = config.buildDotenvOutDir) => {
  console.log("Build dotenv");

  // read all .env files and get all var keys
  const envFiles = Files.getFiles(path.resolve(".env*")).files;
  debug("available env files", envFiles);

  // match var keys from envFiles
  const vars = _prepareVars(envFiles);
  debug("available vars after merge vars from all .env files", vars);

  // create template with varNames and envVars values
  const template = _prepareTemplate(vars, envVars);

  // Create .env files
  console.log("dotenvPaths", dotenvOutDir);
  dotenvOutDir?.length > 0 &&
    dotenvOutDir.forEach((path) => {
      console.log(`dotenv path: ${path}`);
      Files.new(`${path}/.env`).write(template);
    });
};
