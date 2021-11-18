const { Files } = require("@zouloux/files")
const debug = require("@wbe/debug")("config:check-config-file")
const logs = require("../../../helpers/logger")

/**
 * Check if install file cache exist
 * @returns boolean
 */
const checkInstallFile = (installFile) => {
  // check if config file exist
  if (Files.getFiles(installFile).files.length > 0) {
    logs.error("\nconfig/install file already exist, Aborting.\n")
    console.log(`If you want to setup this project again like the first time you installed it, you need to: \n
  - remove ${installFile} file
  - npm run setupa
  `)

    // file exist
    return true
  } else {
    debug(`${installFile} doesn't exist`)
    return false
  }
}

module.exports = checkInstallFile
