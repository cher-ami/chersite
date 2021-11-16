const setupReadme = require("./modules/setup-readme")
const setupPackageJson = require("./modules/setup-package-json")
const cleanFrameworkFiles = require("./modules/clean-framework-files")
const logs = require("../../helpers/logger")
const debug = require("@wbe/debug")("config:setup")

/**
 * Setup
 */
const setup = () => {
  return new Promise(async (resolve) => {
    // manage package json and get values
    const { projectName, projectDescription, projectAuthor } = await setupPackageJson()

    // setup readme
    await setupReadme({ projectName, projectDescription, projectAuthor })

    // remove unused files and directories
    await cleanFrameworkFiles()

    logs.done("Webpack-base is ready!")
    resolve()
  })
}

setup()
