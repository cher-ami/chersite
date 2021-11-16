const logs = require("../../../helpers/logger")
const { execSync } = require("@solid-js/cli")
const debug = require("@wbe/debug")("config:clean-framework-files")
const Inquirer = require("inquirer")
const { resolve } = require("path")
const config = require("../../../config")

/**
 * cleanFrameworkFiles
 * @description
 */
const cleanFrameworkFiles = ({
  gitFolder = resolve(".git"),
  fakeMode = config.setupFakeMode,
} = {}) => {
  debug("cleanFrameworkFiles params:", {
    gitFolder,
  })

  return new Promise(async (resolve) => {
    const removeGitAnswer = await Inquirer.prompt({
      type: "confirm",
      name: "removeGit",
      message: "Do you want to reset the .git folder?",
    })
    debug("removeGitAnswer", removeGitAnswer["removeGit"])

    if (!fakeMode && removeGitAnswer["removeGit"]) {
      logs.start("Remove .git folder")
      logs.note(`rm -rf ${gitFolder}`)
      await execSync(`rm -rf ${gitFolder}`, 3)
      logs.start("Init new .git folder")
      logs.note(`git init`)
      await execSync(`git init`, 3)
    } else {
      debug("FakeMode is activated or removeGitAnswer is false, do nothing.")
    }

    logs.done()
    resolve()
  })
}

module.exports = cleanFrameworkFiles
