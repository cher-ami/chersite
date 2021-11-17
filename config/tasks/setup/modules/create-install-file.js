const { Files } = require("@zouloux/files")
const logs = require("../../../helpers/logger")
const debug = require("@wbe/debug")("config:setup-install-config")

/**
 * Init .install file
 */
const createInstallFile = ({ installFilePath, fakeMode } = {}) =>
  new Promise(async (resolve) => {
    logs.start(`Create config file in ${installFilePath}`)

    if (!fakeMode && installFilePath) {
      Files.new(installFilePath).write(`install_date: "${new Date()}"`)
    } else {
      debug("FakeMode is activated, do nothing.")
    }

    resolve()
  })

module.exports = createInstallFile
