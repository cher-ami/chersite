const logs = require("../../../helpers/logger")
const { quickTemplate } = require("../../../helpers/template-helper")
const { Files } = require("@zouloux/files")
const debug = require("@wbe/debug")("config:manage-readme")
const { resolve } = require("path")
const config = require("../../../config")

/**
 * Manage README file
 * @description allow to copy README as README-framework
 * and create new project README with setup information
 * @returns {Promise<unknown>}
 */
const setupReadme = ({
  templatesPath = `${config.taskSetupFolder}/templates`,
  readmeFilePath = resolve("README.md"),
  fakeMode = config.setupFakeMode,
  readmeFileName = "README.md",
  readmeTemplateFileName = "README.md.template",
  readmeFrameworkFileName = "README-framework.md",
  projectName = "[ PROJECT NAME ]",
  projectAuthor = "[ PROJECT AUTHOR ]",
  projectDescription = "[ PROJECT DESCRIPTION ]",
}) => {
  debug("setupReadme params", {
    templatesPath,
    readmeFilePath,
    readmeFileName,
    readmeFrameworkFileName,
    projectName,
    projectAuthor,
    projectDescription,
  })

  return new Promise(async (resolve) => {
    logs.start(
      `Change current ${readmeFileName} file as ${readmeFrameworkFileName}...`,
      true
    )

    // create new readme and add content on it
    debug("create new readme and add content on it...")
    if (!fakeMode) {
      await Files.new(readmeFrameworkFileName).write(
        Files.getFiles(readmeFilePath).read()
      )
      //if fake mode
    } else {
      debug("FakeMode is activated, do nothing.")
    }
    logs.note(`${readmeFrameworkFileName} is created.`)
    logs.done()

    // if file exist
    if (Files.getFiles(readmeFilePath).files.length > 0) {
      logs.start(`Remove ${readmeFilePath}...`)

      // if no fake mode
      debug("file exist, remove it...")
      if (!fakeMode) {
        Files.getFiles(readmeFilePath).remove()
        // else, if fake mode
      } else {
        debug("FakeMode is activated, do nothing.")
      }
      // if file doesn't exist
    } else {
      // else just log error
      logs.error(`${readmeFilePath} doesn't exist.`)
    }

    debug("create new template README.md from template")
    if (!fakeMode) {
      await Files.new(readmeFileName).write(
        quickTemplate(
          Files.getFiles(`${templatesPath}/${readmeTemplateFileName}`).read(),
          // replace these variables
          {
            projectName,
            projectDescription,
            projectAuthor,
          }
        )
      )
    } else {
      debug("FakeMode is activated, do nothing.")
    }

    logs.note(`${readmeFileName} is created.`)
    logs.done()
    resolve()
  })
}

module.exports = setupReadme
