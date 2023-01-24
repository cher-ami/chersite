import checkInstallFile from "./modules/check-install-file.js"
import setupReadme from "./modules/setup-readme.js"
import setupPackageJson from "./modules/setup-package-json.js"
import resetGit from "./modules/reset-git.js"
import createInstallFile from "./modules/create-install-file.js"
import logs from "../../helpers/logger.js"
import config from "../../config.js"
import path from "path"
import debug from "@wbe/debug"

// TODO  assert { type: "json" } will change in the future
import rootPackageJson from "../../../../../package.json" assert { type: "json" }

const readmeFilePath = path.resolve("../../README.md")

const log = debug(`config:setup`)

/**
 * Setup
 */
const setup = async () => {
  // check if cache file exist, if exist, do not continue
  if (await checkInstallFile(config.installFile)) return

  // manage package json and get values
  const { projectName, projectDescription, projectAuthor } = await setupPackageJson({
    fakeMode: config.setupFakeMode,
    packageJson: rootPackageJson,
    defaultProjectName: "chersite",
  })

  //   // setup readme
  await setupReadme({
    fakeMode: config.setupFakeMode,
    templatesPath: `${config.taskSetupFolder}/templates`,
    readmeFilePath,
    projectName,
    projectDescription,
    projectAuthor,
  })

  //   // create install file
  await createInstallFile({
    installFilePath: config.installFile,
    fakeMode: config.setupFakeMode,
  })

  // remove unused files and directories
  await resetGit({
    gitDir: path.resolve("../../.git"),
    fakeMode: config.setupFakeMode,
  })

  console.log("")
  logs.done(`> ${projectName} is ready!`)
  console.log("")
}

setup()
