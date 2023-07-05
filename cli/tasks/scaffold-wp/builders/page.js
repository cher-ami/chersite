import logs from "../../../helpers/logger.js"
import config from "../../../config.js"
import Inquirer from "inquirer"
import changeCase from "change-case"
import createFile from "../../../helpers/create-file.js"

const _askPageName = () => {
  return Inquirer.prompt([
    {
      type: "input",
      message: "Page name (dashed lower cased) ?",
      name: "pageName",
    },
  ])
}

/**
 * WP Page Builder
 * @param pagePath,
 * @param pageName,

 * @private
 */
const _pageBuilder = async ({ pagePath, pageName }) => {
  // choose between page and page type
  const camelCasePageName = changeCase.camelCase(pageName),
    pascalCasePageName = changeCase.pascalCase(pageName)

  // scaffold controller
  await createFile({
    templateFilePath: `${config.wpTemplatesPath}/pages/PageRestController.php.template`,
    destinationFilePath: `${pagePath}/${pascalCasePageName}RestController.php`,
    replaceExpressions: { pageName, pascalCasePageName },
  })

  // scaffold setup
  await createFile({
    templateFilePath: `${config.wpTemplatesPath}/pages/setup.php.template`,
    destinationFilePath: `${pagePath}/setup.php`,
    replaceExpressions: { camelCasePageName, pascalCasePageName },
  })
}

const buildPage = () => {
  return new Promise(async (resolve) => {
    let pageFolder = `${config.wpTheme}/page`

    // Get page name
    let pageName = ""
    await _askPageName().then((answer) => {
      pageName = changeCase.paramCase(answer.pageName)
    })

    let upperPageName = changeCase.pascalCase(pageName)

    // Base path of the page (no extension at the end here)
    let pagePath = `${pageFolder}/${upperPageName}`
    logs.note(`Page ${upperPageName} will be created here: ${pagePath}`)

    /**
     * Build page
     */
    try {
      await _pageBuilder({
        pagePath,
        pageName,
      })
    } catch (e) {
      logs.error(e)
    }

    // final log
    logs.done("Page created.")
    resolve()
  })
}

export default buildPage
