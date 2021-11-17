const { Files } = require("@zouloux/files")
const Inquirer = require("inquirer")
const changeCase = require("change-case")
const logs = require("../../../helpers/logger")
const debug = require("@wbe/debug")("config:manage-package-json")

/**
 * Setup package.json
 */
const setupPackageJson = ({ packageJson, defaultProjectName, fakeMode } = {}) => {
  return new Promise(async (resolve) => {
    logs.start("Setup package.json")

    // Read package.json
    let projectName = packageJson.name
    let projectVersion = packageJson.version
    let projectAuthor = packageJson.author
    let projectDescription = packageJson.description

    debug("current package properties:", {
      projectVersion,
      projectName,
      projectAuthor,
      projectDescription,
    })

    // Get package infos if this is the first setup
    if (projectName !== defaultProjectName) {
      debug(`package.json name, has NOT default name ${defaultProjectName}.
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
    }).then((answer) => (projectName = changeCase.paramCase(answer.projectName)))
    debug("> new project name:", projectName)

    // Ask user for author
    await Inquirer.prompt({
      type: "input",
      message: "What's the author name?",
      name: "projectAuthor",
    }).then((answer) => (projectAuthor = answer.projectAuthor))
    debug("> new project author:", projectAuthor)

    // Ask user for desc
    await Inquirer.prompt({
      type: "input",
      message: "What's the descripton?",
      name: "projectDescription",
    }).then((answer) => (projectDescription = answer.projectDescription))
    debug("> new project description:", projectDescription)

    // Reset project version
    projectVersion = "0.1.0"
    debug("> new project version:", projectVersion)

    // Set name and version into package.json
    if (!fakeMode) {
      debug("Modify package.json")
      Files.getFiles("package.json").alterJSON((packageObject) => {
        packageObject.version = projectVersion
        packageObject.name = projectName
        packageObject.author = projectAuthor
        packageObject.description = projectDescription
        return packageObject
      })
    } else {
      debug("FakeMode is activated, do nothing.")
    }

    debug("Promise is resolve fn pass new package properties:", {
      projectName,
      projectAuthor,
      projectDescription,
    })

    resolve({ projectName, projectAuthor, projectDescription })
  })
}

module.exports = setupPackageJson
