import checkInstallFile from "./modules/check-install-file.js"
import setupReadme from "./modules/setup-readme.js"
import setupPackageJson, { setupScriptsFront } from "./modules/setup-package-json.js"
import resetGit from "./modules/reset-git.js"
import createInstallFile from "./modules/create-install-file.js"
import logs from "../../helpers/logger.js"
import config from "../../config.js"
import path from "path"
import packageJson from "../../../package.json" with { type: "json" }
import frontPackageJson from "../../../apps/front/package.json" with { type: "json" }

import debug from "@cher-ami/debug"
const log = debug(`config:setup`)

/**
 * Setup
 */
const setup = () =>
  new Promise(async (resolve) => {
    if (config.setupFakeMode) {
      logs.start("\n ⚠️   Fake mode is active, nothing action will be process.")
    }

    // check if cache file exist, if exist, do not continue
    if (await checkInstallFile(config.installFile)) return

    // manage package json and get values
    const { projectName, projectDescription, projectAuthor } = await setupPackageJson({
      packageJson,
      defaultProjectName: "chersite",
      fakeMode: config.setupFakeMode
    })

    await setupScriptsFront({
      frontPackageJson,
      mode: config.mode,
      fakeMode: config.setupFakeMode
    })

    // setup readme
    await setupReadme({
      templatesPath: `${config.taskSetupFolder}/templates`,
      readmeFilePath: path.resolve("README.md"),
      fakeMode: config.setupFakeMode,
      projectName,
      projectDescription,
      projectAuthor
    })

    // create install file
    await createInstallFile({
      installFilePath: config.installFile,
      fakeMode: config.setupFakeMode
    })

    // remove unused files and directories
    await resetGit({
      gitDir: path.resolve(".git"),
      fakeMode: config.setupFakeMode
    })

    console.log("")
    logs.done(`> ${projectName} is ready!`)
    console.log("")
    resolve()
  })

setup()
