import * as mfs from "../../../helpers/mfs.js"
import logs from "../../../helpers/logger.js"

/**
 * Check if install file cache exist
 * @returns boolean
 */
export default async (installFile) => {
  // check if config file exist

  if (await mfs.fileExists(installFile)) {
    logs.error("\nconfig/install file already exist, Aborting.\n")
    console.log(`If you want to setup this project again like the first time you installed it, you need to: \n
  - remove ${installFile} file
  - npm run setup
  `)
    return true
  } else {
    return false
  }
}
