import { Files } from "@zouloux/files"
import debug from "@wbe/debug"
const log = debug("config:build-htaccess")
import logger from "../../helpers/logger"
/**
 * Create htaccess file
 * @param pOutputPath
 * @param htaccessTemplatePath
 * @private
 */
const _createHtaccessFile = ({ outputPath, htaccessTemplatePath }) => {
  const newHtaccessFilePath = `${outputPath}/.htaccess`

  debug({ htaccessTemplatePath, newHtaccessFilePath })

  const templateExist = Files.getFiles(htaccessTemplatePath).files.length === 1
  debug("templateExist", templateExist)

  if (!templateExist) {
    console.log(
      "htaccess template doesn't exit. You need to create manually the template file in",
      htaccessTemplatePath
    )
    return
  }

  // create and dispatch file from template
  Files.new(newHtaccessFilePath).write(Files.getFiles(htaccessTemplatePath).read())
  return newHtaccessFilePath
}

/**
 * Create htpasswdFile
 */
const _createHtpasswdFile = ({ outputPath, user, password }) => {
  debug("create htpasswd file", {
    outputPath,
    user,
    password,
  })

  if (!outputPath || !user || !password) {
    debug("Missing param, aborting.")
    return
  }
  // create htpasswd file and add password in it
  const htpasswdFilePath = `${outputPath}/.htpasswd`
  debug("htpasswdFilePath", htpasswdFilePath)

  // define content
  const htpasswdContent = `${user}:${password}`
  debug("htpasswdContent", htpasswdContent)

  // write content user:pass in htpasswd file
  Files.new(htpasswdFilePath).write(htpasswdContent)
}

/**
 * htpasswd link in htaccess
 * @param newHtaccessFilePath
 * @param serverWebRootPath
 * @return {null}
 * @private
 */
const _htpasswdLinkInHtaccess = ({ newHtaccessFilePath, serverWebRootPath }) => {
  if (!serverWebRootPath) return null

  const template = [
    `# Add password
      AuthUserFile ${serverWebRootPath}.htpasswd
      AuthType Basic
      AuthName "My restricted Area"
      Require valid-user
      `,
  ]
    .join("\n")
    .replace(/  +/g, "")

  Files.getFiles(newHtaccessFilePath).append(template)
}

/**
 * rewrite http To https
 * @param pNewHtaccessFilePath
 * @returns {string|null}
 */
const _rewriteHttpToHttpsInHtaccess = (pNewHtaccessFilePath) => {
  debug("rewrite http to https in htaccess", {
    pNewHtaccessFilePath,
  })

  const template = [
    `# Force http to https
      RewriteCond %{HTTPS} off
      RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
     `,
  ]
    .join("\n")
    .replace(/  +/g, "")

  Files.getFiles(pNewHtaccessFilePath).append(template)
}

/**
 * Prebuild .htaccess file
 * Useful is this file
 */
export default ({
  serverWebRootPath,
  user,
  password,
  outputPath,
  htaccessTemplatePath,
}) => {
  logger.start("Build .htaccess")

  // create htaccess file and get returned newHtaccessFilePath
  const newHtaccessFilePath = _createHtaccessFile({
    outputPath,
    htaccessTemplatePath,
  })

  if (!newHtaccessFilePath) return
  logger.note(`path: ${newHtaccessFilePath}`)

  if (process.env.HTACCESS_ENABLE_AUTH === "true") {
    _createHtpasswdFile({ outputPath, user, password })
    _htpasswdLinkInHtaccess({ newHtaccessFilePath, serverWebRootPath })
  }

  if (process.env.HTACCESS_ENABLE_HTTPS_REDIRECTION === "true") {
    _rewriteHttpToHttpsInHtaccess(newHtaccessFilePath)
  }
}
