const logs = require("../../../helpers/logger")
const debug = require("@wbe/debug")("config:clean-framework-files")
const Inquirer = require("inquirer")
const { execSync } = require("child_process")

/**
 * Reset git
 */
const resetGit = ({ gitDir, fakeMode } = {}) =>
  new Promise(async (resolve) => {
    const removeGitAnswer = await Inquirer.prompt({
      type: "confirm",
      name: "removeGit",
      message: "Do you want to reset the current .git and re-init it?",
    })

    debug("removeGitAnswer", removeGitAnswer["removeGit"])

    if (!fakeMode && removeGitAnswer["removeGit"]) {
      logs.start("Remove .git folder")
      logs.note(`rm -rf ${gitDir}`)

      await execSync(`rm -rf ${gitDir}`, { stdio: "inherit" })

      logs.start("Init new .git folder")
      logs.note(`git init`)

      await execSync(`git init`, { stdio: "inherit" })
    } else {
      debug("FakeMode is activated or removeGitAnswer is false, do nothing.")
    }

    resolve()
  })

module.exports = resetGit
