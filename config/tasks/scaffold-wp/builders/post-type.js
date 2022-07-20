import logs from "../../../helpers/logger"
import config from "../../../config"
import Inquirer from "inquirer"
import changeCase from "change-case"
import createFile from "../../../helpers/create-file"

const _askPostTypeName = () => {
  return Inquirer.prompt([
    {
      type: "input",
      message: "Post type? (dashed lower cased)",
      name: "postTypeName",
    },
    {
      type: "input",
      message: "Singular display name? ",
      name: "upperSingularPostTypeName",
    },
    {
      type: "input",
      message: "Plural display name? ",
      name: "upperPluralPostTypeName",
    },
  ])
}

/**
 * WP PostType Builder
 * @param postTypePath,
 * @param postTypeName,
 * @param upperPostTypeName,
 * @param upperPluralPostTypeName,
 * @param upperSingularPostTypeName,
 * @private
 */
const _postTypeBuilder = ({
  postTypePath,
  postTypeName,
  upperPluralPostTypeName,
  upperSingularPostTypeName,
}) => {
  // choose between page and postType type
  const camelCasePostTypeName = changeCase.camelCase(postTypeName),
    pascalCasePostType = changeCase.pascalCase(postTypeName),
    upperCasePostTypeName = changeCase.constantCase(postTypeName)

  // scaffold postType file
  createFile({
    templateFilePath: `${config.wpTemplatesPath}/post-type/PostType.php.template`,
    destinationFilePath: `${postTypePath}/${pascalCasePostType}.php`,
    replaceExpressions: {
      postTypeName,
      camelCasePostTypeName,
      upperPluralPostTypeName,
      upperSingularPostTypeName,
      upperCasePostTypeName,
    },
  })
  // scaffold controller
  createFile({
    templateFilePath: `${config.wpTemplatesPath}/post-type/PostTypeRestController.php.template`,
    destinationFilePath: `${postTypePath}/${pascalCasePostType}RestController.php`,
    replaceExpressions: {
      postTypeName,
      pascalCasePostType,
      camelCasePostTypeName,
      upperCasePostTypeName,
    },
  })

  // scaffold setup
  createFile({
    templateFilePath: `${config.wpTemplatesPath}/post-type/setup.php.template`,
    destinationFilePath: `${postTypePath}/setup.php`,
    replaceExpressions: {
      postTypeName,
      camelCasePostTypeName,
      pascalCasePostType,
      upperCasePostTypeName,
    },
  })
}

const buildPostType = () => {
  return new Promise(async (resolve) => {
    /**
     * Ask questions
     */
    let postTypeFolder = `${config.wpTheme}/postType`

    // Get postType name
    let postTypeName = "",
      upperSingularPostTypeName = "",
      upperPluralPostTypeName = ""
    await _askPostTypeName().then((answer) => {
      postTypeName = changeCase.paramCase(answer.postTypeName)
      upperSingularPostTypeName = answer.upperSingularPostTypeName
      upperPluralPostTypeName = answer.upperPluralPostTypeName
    })

    let upperPostTypeName = changeCase.pascalCase(postTypeName)

    // Base path of the postType (no extension at the end here)
    let postTypePath = `${postTypeFolder}/${upperPostTypeName}`
    logs.note(`Page ${upperPostTypeName} will be created here: ${postTypePath}`)

    /**
     * Build postType
     */
    try {
      _postTypeBuilder({
        postTypePath,
        postTypeName,
        upperSingularPostTypeName,
        upperPluralPostTypeName,
      })
    } catch (e) {
      logs.error(e)
    }

    // final log
    logs.done("PostType created.")
    resolve()
  })
}

export default buildPostType
