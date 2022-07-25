import checkInstallFile from "./modules/check-install-file.js"
import installDependencies from "./modules/install-dependencies.js"
import setupReadme from "./modules/setup-readme.js"
import setupPackageJson from "./modules/setup-package-json.js"
import resetGit from "./modules/reset-git.js"
import createInstallFile from "./modules/create-install-file.js"
import logs from "../../helpers/logger.js"
import config from "../../config.js"
import path from "path"

// TODO  assert { type: "json" } will change in the future
import packageJson from "../../../package.json" assert { type: "json" }

import debug from "debug"
const log = debug(`config:setup`)

/**
 * Setup
 */
const setup = () =>
  new Promise(async (resolve) => {
    // check if cache file exist, if exist, do not continue
    if (await checkInstallFile(config.installFile)) return

    // install deps
    await installDependencies()

    // manage package json and get values
    const { projectName, projectDescription, projectAuthor } = await setupPackageJson({
      packageJson,
      defaultProjectName: "chersite",
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

    logs.done(`${projectName} is ready!`)
    logs.note(`start dev-server: npm run dev`)
    console.log("")
    resolve()
  })

setup()
