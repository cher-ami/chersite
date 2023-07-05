import logs from "../../../helpers/logger.js"
import debug from "@wbe/debug"
import Inquirer from "inquirer"
import { execSync } from "child_process"

const log = debug("config:clean-framework-files")

/**
 * Reset git
 */
export default async ({ gitDir, fakeMode } = {}) =>
  new Promise(async (resolve) => {
    const removeGitAnswer = await Inquirer.prompt({
      type: "confirm",
      name: "removeGit",
      message: "Do you want to reset the current .git and re-init it?",
    })

    log("removeGitAnswer", removeGitAnswer["removeGit"])

    if (!fakeMode && removeGitAnswer["removeGit"]) {
      logs.start("Remove .git folder")
      logs.note(`rm -rf ${gitDir}`)

      await execSync(`rm -rf ${gitDir}`, { stdio: "inherit" })

      logs.start("Init new .git folder")
      logs.note(`git init`)

      await execSync(`git init`, { stdio: "inherit" })
    } else {
      log("FakeMode is activated or removeGitAnswer is false, do nothing.")
    }

    resolve()
  })
