import debug from "@wbe/debug"
import * as mfs from "../../helpers/mfs.js"
const log = debug("config:build-htaccess")
import logger from "../../helpers/logger"
import { LOADIPHLPAPI } from "dns"
/**
 * Create htaccess file
 * @param pOutputPath
 * @param htaccessTemplatePath
 * @private
 */
const _createHtaccessFile = async ({ outputPath, htaccessTemplatePath }) => {
  const newHtaccessFilePath = `${outputPath}/.htaccess`

  log({ htaccessTemplatePath, newHtaccessFilePath })

  const templateExist = await mfs.fileExists(htaccessTemplatePath)
  log("templateExist", templateExist)

  if (!templateExist) {
    console.log(
      "htaccess template doesn't exit. You need to create manually the template file in",
      htaccessTemplatePath
    )
    return
  }

  const readTemplate = await mfs.readFile(htaccessTemplatePath)

  // create and dispatch file from template
  mfs.createFile(newHtaccessFilePath, readTemplate)
  return newHtaccessFilePath
}

/**
 * Create htpasswdFile
 */
const _createHtpasswdFile = async ({ outputPath, user, password }) => {
  log("create htpasswd file", {
    outputPath,
    user,
    password,
  })

  if (!outputPath || !user || !password) {
    log("Missing param, aborting.")
    return
  }
  // create htpasswd file and add password in it
  const htpasswdFilePath = `${outputPath}/.htpasswd`
  log("htpasswdFilePath", htpasswdFilePath)

  // define content
  const htpasswdContent = `${user}:${password}`
  log("htpasswdContent", htpasswdContent)

  // write content user:pass in htpasswd file
  await mfs.createFile(htpasswdFilePath, htpasswdContent)
}

/**
 * htpasswd link in htaccess
 * @param newHtaccessFilePath
 * @param serverWebRootPath
 * @return {null}
 * @private
 */
const _htpasswdLinkInHtaccess = async ({ newHtaccessFilePath, serverWebRootPath }) => {
  if (!serverWebRootPath) return null

  const template = [
    `# Add password
      AuthUserFile ${serverWebRootPath}.htpasswd
      AuthType Basic
      AuthName "Restricted Area"
      Require valid-user
      `,
  ]
    .join("\n")
    .replace(/  +/g, "")

  const readHtaccessFile = await mfs.readFile(newHtaccessFilePath)
  await mfs.createFile(newHtaccessFilePath, readHtaccessFile + "\n" + template)
}

/**
 * rewrite http To https
 * @param newHtaccessFilePath
 * @returns {string|null}
 */
const _rewriteHttpToHttpsInHtaccess = async (newHtaccessFilePath) => {
  debug("rewrite http to https in htaccess", {
    newHtaccessFilePath,
  })

  const template = [
    `# Force http to https
      RewriteCond %{HTTPS} off
      RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
     `,
  ]
    .join("\n")
    .replace(/  +/g, "")

  const readHtaccessFile = await mfs.readFile(newHtaccessFilePath)
  await mfs.createFile(newHtaccessFilePath, readHtaccessFile + "\n" + template)
}

/**
 * Prebuild .htaccess file
 * Useful is this file
 */
export default async ({
  serverWebRootPath,
  user,
  password,
  outputPath,
  htaccessTemplatePath,
}) => {
  // create htaccess file and get returned newHtaccessFilePath
  const newHtaccessFilePath = await _createHtaccessFile({
    outputPath,
    htaccessTemplatePath,
  })

  if (!newHtaccessFilePath) return
  logger.start("Build .htaccess")
  logger.note(`path: ${newHtaccessFilePath}`)

  if (process.env.HTACCESS_ENABLE_AUTH === "true") {
    await _createHtpasswdFile({ outputPath, user, password })
    await _htpasswdLinkInHtaccess({ newHtaccessFilePath, serverWebRootPath })
  }

  if (process.env.HTACCESS_ENABLE_HTTPS_REDIRECTION === "true") {
    await _rewriteHttpToHttpsInHtaccess(newHtaccessFilePath)
  }
}
