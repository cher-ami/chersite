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
    logs.error(".install file already file exist, Aborting.")
    console.log(`If you want to setup this project again like the first time you installed webpack-base, you need to: \n
  - remove ${installFile} file
  - npm run setup
  \n
  ${"WARNING!"}\n
  ${"npm run setup"} erase a part of source project:\n
  - setup package.json: erase name, description, author & version keys
  - ${".git will be removed!"}    
      `)

    // file exist
    return true
  } else {
    debug(`${installFile} doesn't exist`)
    return false
  }
}

module.exports = checkInstallFile
