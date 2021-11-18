const installDependencies = require("./modules/install-dependencies")
const setupReadme = require("./modules/setup-readme")
const setupPackageJson = require("./modules/setup-package-json")
const resetGit = require("./modules/reset-git")
const checkInstallFile = require("./modules/check-install-file")
const createInstallFile = require("./modules/create-install-file")
const logs = require("../../helpers/logger")
const config = require("../../config")
const path = require("path")
const debug = require("@wbe/debug")("config:setup")

/**
 * Setup
 */
const setup = () =>
  new Promise(async (resolve) => {
    // check if cache file exist, if exist, do not continue
    const installFileExist = checkInstallFile(config.installFile)
    debug("installFileExist", installFileExist)
    if (installFileExist) return

    // install deps
    await installDependencies()

    // manage package json and get values
    const { projectName, projectDescription, projectAuthor } = await setupPackageJson({
      packageJson: require(path.resolve("package.json")),
      defaultProjectName: "cher-vite",
      fakeMode: config.setupFakeMode,
    })

    // setup readme
    await setupReadme({
      templatesPath: `${config.taskSetupFolder}/templates`,
      readmeFilePath: path.resolve("README.md"),
      fakeMode: config.setupFakeMode,
      projectName,
      projectDescription,
      projectAuthor,
    })

    // create install file
    await createInstallFile({
      installFilePath: config.installFile,
      fakeMode: config.setupFakeMode,
    })

    // remove unused files and directories
    await resetGit({
      gitDir: path.resolve(".git"),
      fakeMode: config.setupFakeMode,
    })

    // FINAL note
    console.log("")
    logs.error("Last thing ⚠️️")
    logs.error("Set your personal VITE_APP_BASE in s.env.local file")
    logs.note(
      "ex: if distribution URL is http://localhost/cher-base/dist/front/www/ VITE_APP_BASE is /cher-base/dist/front/www/"
    )
    logs.note(
      "(.env.local file is your personal .env file, all '.local' are gitignored.)\n"
    )

    logs.done("cher-vite is ready!")
    console.log("")
    resolve()
  })

setup()
