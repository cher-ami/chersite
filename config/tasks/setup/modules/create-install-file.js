import * as mfs from "../../../helpers/mfs.js"
import logs from "../../../helpers/logger.js"
import debug from "@wbe/debug"
const log = debug("config:setup-install-config")
/**
 * Init .install file
 */
export default async ({ installFilePath, fakeMode } = {}) =>
  new Promise(async (resolve) => {
    logs.start(`Create install file`)
    logs.note(`path: ${installFilePath}`)

    if (!fakeMode && installFilePath) {
      mfs.createFile(installFilePath, `install_date: "${new Date()}"`)
    } else {
      debug("FakeMode is activated, do nothing.")
    }

    resolve()
  })
