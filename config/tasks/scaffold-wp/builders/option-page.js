const Inquirer = require("inquirer")
const changeCase = require("change-case")
const createFile = require("../../../helpers/create-file")
const logs = require("../../../helpers/logger")
const config = require("../../../config")

const _askOptionName = () => {
  return Inquirer.prompt([
    {
      type: "input",
      message: "Option page name (dashed lower cased)?",
      name: "pageName",
    },
    {
      type: "input",
      message: "Option page title? ",
      name: "pageTitle",
    },
  ])
}

/**
 * WP Option Page Builder
 * @param pagePath,
 * @param pageName,
 * @private
 */
const _optionPageBuilder = ({ pagePath, pageName, pageTitle }) => {
  // choose between page and page type
  const pascalCasePageName = changeCase.pascalCase(pageName)

  // scaffold controller
  createFile({
    templateFilePath: `${config.wpTemplatesPath}/option-page/PageOption.php.template`,
    destinationFilePath: `${pagePath}/${pascalCasePageName}Option.php`,
    replaceExpressions: { pageName, pageTitle },
  })

  // scaffold controller
  createFile({
    templateFilePath: `${config.wpTemplatesPath}/option-page/PageRestController.php.template`,
    destinationFilePath: `${pagePath}/${pascalCasePageName}RestController.php`,
    replaceExpressions: { pageName, pascalCasePageName },
  })

  // scaffold setup
  createFile({
    templateFilePath: `${config.wpTemplatesPath}/option-page/setup.php.template`,
    destinationFilePath: `${pagePath}/setup.php`,
    replaceExpressions: { pascalCasePageName },
  })
}

const buildOptionPage = () => {
  return new Promise(async (resolve) => {
    let optionPageFolder = `${config.wpTheme}/optionPage`

    // Get page name
    let pageName = "",
      pageTitle = ""
    await _askOptionName().then((answer) => {
      pageName = changeCase.paramCase(answer.pageName)
      pageTitle = answer.pageTitle
    })

    let upperPageName = changeCase.pascalCase(pageName)

    // Base path of the page (no extension at the end here)
    let pagePath = `${optionPageFolder}/${upperPageName}`
    logs.note(`Option Page ${upperPageName} will be created here: ${pagePath}`)

    /**
     * Build page
     */
    try {
      _optionPageBuilder({
        pagePath,
        pageName,
        pageTitle,
      })
    } catch (e) {
      console.log(e)
    }

    // final log
    logs.done("Option Page created.")
    resolve()
  })
}

module.exports = buildOptionPage
