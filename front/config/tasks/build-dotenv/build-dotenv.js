import * as mfs from "../../helpers/mfs.js"
import path from "path"
import debug from "@wbe/debug"
const log = debug("config:build-dotenv")
import logger from "../../helpers/logger.js"
import packageJson from "../../../package.json"

const _getRaws = (files = []) => {
  return new Promise((resolve) => {
    let count = 0
    const rawsList = []
    files.forEach(async (file) => {
      const data = await mfs.readFile(file)
      count++
      rawsList.push(data)
      if (count === files.length) {
        resolve(rawsList)
      }
    })
  })
}

/**
 * Prepare env vars
 * @param envFilesRaw
 */
const _prepareVars = (envFilesRaw) => {
  return (
    envFilesRaw
      .map((file) => {
        // read current .env file
        return (
          file
            // split each lines
            .split("\n")
            // for each line, filter comments and keep only var name
            .map((el) => {
              const isComment = el.includes("#")
              const containsEqual = el.includes("=")
              if (!isComment && containsEqual) {
                const varName = el.split("=")[0]
                return varName ? varName : null
              }
            })
            // remove empty lines
            .filter((e) => e)
        )
      })
      // flat arrays results
      .flat()
      // remove double entries
      .filter((elem, index, self) => index === self.indexOf(elem))
  )
}

/**
 * Prepare template
 * @param vars
 * @param envVars
 * @param additionalVarKeys
 * @return {string} Template
 * @private
 */

const _prepareTemplate = (vars, envVars, additionalVarKeys) => {
  let template

  // prettier-ignore
  template = vars.map(
    (el) =>
      `${el}=${
      envVars[el] ? envVars[el].includes(" ") ? `"${envVars[el]}"` : envVars[el] : ""
    }`
  );

  // push current version in it
  template.push(`VERSION=${packageJson.version}`)

  // Add additional var keys in template
  additionalVarKeys?.length > 0 &&
    additionalVarKeys?.forEach((key) => {
      template.push(`${key}=${envVars[key]}`)
    })

  // filter to remove empty lines
  template = template.filter((e) => e).join("\n")
  log("template to write in file", template)

  return template
}

/**
 * Build .env file
 * Create and inject .env file in specific folder(s)
 * @param envVars Env variables object {}
 * @param dotenvOutDir Build .env paths array
 * @param additionalVarKeys Add some keys to generated .env files
 */
export default async ({ envVars = {}, dotenvOutDir, additionalVarKeys = [] }) => {
  if (dotenvOutDir?.length === 0) return

  // read all .env files and get all var keys

  const readRootFiles = await mfs.readDir(path.resolve("./"), false)
  const envFiles = readRootFiles.filter((e) => e.includes(".env"))
  log("available env files", envFiles)

  // get raws version of file
  const raws = await _getRaws(envFiles)
  log("raws", raws)

  // match var keys from envFiles
  const vars = _prepareVars(raws)
  log("available vars after merge vars from all .env files", vars)

  // create template with varNames and envVars values
  const template = _prepareTemplate(vars, envVars, additionalVarKeys)

  logger.start("Build .env file(s)")
  // Create .env files
  dotenvOutDir.forEach(async (path) => {
    logger.note(`path: ${path}`)
    await mfs.createFile(`${path}/.env`, template)
  })

  return true
}
