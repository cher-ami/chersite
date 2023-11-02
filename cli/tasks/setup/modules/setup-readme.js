import * as mfs from "@cher-ami/mfs"
import logs from "../../../helpers/logger.js"
import debug from "@cher-ami/debug"
const log = debug("config:manage-readme")

/**
 * Manage README file
 * @description allow to copy README as README-framework
 * and create new project README with setup information
 * @returns {Promise<unknown>}
 */
export default async ({
  templatesPath,
  readmeFilePath,
  fakeMode,
  readmeFileName = "README.md",
  readmeTemplateFileName = "README.md.template",
  readmeFrameworkFileName = "README-framework.md",
  projectName = "[ PROJECT NAME ]",
  projectAuthor = "[ PROJECT AUTHOR ]",
  projectDescription = "[ PROJECT DESCRIPTION ]",
}) => {
  return new Promise(async (resolve) => {
    logs.start(
      `Change current ${readmeFileName} file as ${readmeFrameworkFileName}`,
      true
    )

    // create new readme and add content on it
    log("create new readme and add content on it")
    if (!fakeMode) {
      const content = await mfs.readFile(readmeFilePath)
      await mfs.createFile(readmeFrameworkFileName, content)

      //if fake mode
    } else {
      log("FakeMode is activated, do nothing.")
    }
    logs.note(`${readmeFrameworkFileName} is created.`)

    const exist = await mfs.fileExists(readmeFilePath)
    if (exist) {
      logs.start(`Create new README.md with inquired informations`)

      // if no fake mode
      log("file exist, remove it.")
      if (!fakeMode) {
        mfs.removeFile(readmeFilePath)
        // else, if fake mode
      } else {
        log("FakeMode is activated, do nothing.")
      }
      // if file doesn't exist
    } else {
      // else just log error
      logs.error(`${readmeFilePath} doesn't exist.`)
    }

    log("create new template README.md from template")
    if (!fakeMode) {
      const replaceExpressions = { projectName, projectDescription, projectAuthor }
      const newReadmePath = `${templatesPath}/${readmeTemplateFileName}`

      // copy readme
      await mfs.copyFile(newReadmePath, readmeFileName, {
        force: true,
        transform: (fileContent) =>
          new Promise((resolve) => {
            Object.keys(replaceExpressions).forEach((e) => {
              fileContent = fileContent.replace(
                new RegExp(`%%${e}%%`, "g"),
                replaceExpressions[e]
              )
            })
            resolve(fileContent)
          }),
      })
    } else {
      log("FakeMode is activated, do nothing.")
    }

    logs.note(`${readmeFileName} is created.`)
    resolve()
  })
}
