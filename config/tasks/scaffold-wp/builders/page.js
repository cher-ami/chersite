const Inquirer = require("inquirer")
const changeCase = require("change-case")
const createFile = require("../../../helpers/create-file")
const logs = require("../../../helpers/logger")
const config = require("../../../config")

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
const _pageBuilder = ({ pagePath, pageName }) => {
  // choose between page and page type
  const camelCasePageName = changeCase.camelCase(pageName),
    pascalCasePageName = changeCase.pascalCase(pageName)

  // scaffold controller
  createFile({
    templateFilePath: `${config.wpTemplatesPath}/page/PageRestController.php.template`,
    destinationFilePath: `${pagePath}/${pascalCasePageName}RestController.php`,
    replaceExpressions: { pageName, pascalCasePageName },
  })

  // scaffold setup
  createFile({
    templateFilePath: `${config.wpTemplatesPath}/page/setup.php.template`,
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
      _pageBuilder({
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

module.exports = buildPage
