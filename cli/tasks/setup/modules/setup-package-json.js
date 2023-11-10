import Inquirer from "inquirer"
import * as changeCase from "change-case"
import * as mfs from "@cher-ami/mfs"
import logs from "../../../helpers/logger.js"
import path from "path"
import debug from "@cher-ami/debug"
const log = debug("config:manage-package-json")

/**
 * Setup package.json
 */
export default async ({ packageJson, defaultProjectName, fakeMode } = {}) => {
  return new Promise(async (resolve) => {
    logs.start("Setup package.json")

    // Read package.json
    let projectName = packageJson.name
    let projectVersion = packageJson.version
    let projectAuthor = packageJson.author
    let projectDescription = packageJson.description

    log("current package properties:", {
      projectVersion,
      projectName,
      projectAuthor,
      projectDescription,
    })

    // Get package infos if this is the first setup
    if (projectName !== defaultProjectName) {
      log(`package.json name, has NOT default name ${defaultProjectName}.
      Current package.json name is ${projectName}.
      We suppose he has been already setup.
      `)

      logs.error("package.json is already setup. Aborting.")
      return resolve({ projectName, projectAuthor, projectDescription })
    }

    // Ask user for project name
    await Inquirer.prompt({
      type: "input",
      message: "What's the project name? (dash-case)",
      name: "projectName",
    }).then((answer) => (projectName = changeCase.kebabCase(answer.projectName)))
    log("> new project name:", projectName)

    // Ask user for author
    await Inquirer.prompt({
      type: "input",
      message: "What's the author name?",
      name: "projectAuthor",
    }).then((answer) => (projectAuthor = answer.projectAuthor))
    log("> new project author:", projectAuthor)

    // Ask user for desc
    await Inquirer.prompt({
      type: "input",
      message: "What's the descripton?",
      name: "projectDescription",
    }).then((answer) => (projectDescription = answer.projectDescription))
    log("> new project description:", projectDescription)

    // Reset project version
    projectVersion = "0.1.0"
    log("> new project version:", projectVersion)

    // Set new values
    log("packageJson before edit -------------------", packageJson)
    packageJson.version = projectVersion
    packageJson.name = projectName
    packageJson.description = projectDescription
    packageJson.name = projectName
    packageJson.author = projectAuthor
    log("packageJson after edit -------------------", packageJson)

    // Set name and version into package.json
    if (!fakeMode) {
      log("Modify package.json")
      await mfs.createFile(
        path.resolve("./package.json"),
        JSON.stringify(packageJson, null, 2)
      )
    } else {
      log("FakeMode is activated, do nothing.")
    }

    log("Promise is resolve fn pass new package properties:", {
      projectName,
      projectAuthor,
      projectDescription,
    })

    resolve({ projectName, projectAuthor, projectDescription })
  })
}
