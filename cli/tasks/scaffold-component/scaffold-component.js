import Inquirer from "inquirer"
import * as changeCase from "change-case"
import createFile from "../../helpers/create-file.js"
import config from "../../config.js"
import logs from "../../helpers/logger.js"
import debug from "@cher-ami/debug"

const log = debug("config:scaffold")

// ----------------------------------------------------------------------------- PRIVATE API

const _askWhichComponentFolder = (componentCompatibleFolders) => {
  return Inquirer.prompt({
    type: "list",
    name: "subFolder",
    message: "Which component folder?",
    choices: componentCompatibleFolders,
  })
}

const _askComponentName = () => {
  return Inquirer.prompt({
    type: "input",
    message: "Component name?",
    name: "componentName",
  })
}

/**
 * React Component Builder
 */
const _reactComponentBuilder = async ({
  subFolder,
  componentPath,
  upperComponentName,
  componentsTemplatesDir,
}) => {
  // choose between page and component type
  const componentType = subFolder === "pages" ? "page" : "component"
  // scaffold component file
  await createFile({
    templateFilePath: `${componentsTemplatesDir}/react/${componentType}.tsx.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.tsx`,
    replaceExpressions: { upperComponentName },
  })
  // scaffold scss module
  await createFile({
    templateFilePath: `${componentsTemplatesDir}/react/component.scss.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.module.scss`,
    replaceExpressions: { upperComponentName },
  })
}

/**
 * @name index
 * @description Ask question and scaffold a component with a specific script template
 */
const _scaffoldComponent = ({
  srcDir,
  componentCompatibleFolders,
  componentsTemplatesDir,
  pComponentType, // react | ...
}) => {
  return new Promise(async (resolve) => {
    // Get sub-folder
    let subFolder = ""
    await _askWhichComponentFolder(componentCompatibleFolders).then(
      (answer) => (subFolder = answer.subFolder)
    )
    log("subFolder", subFolder)

    // Get component name
    let componentName = ""
    await _askComponentName().then((answer) => {
      componentName = answer.componentName
    })

    // formatted name "lowerCase"
    let lowerComponentName = changeCase.camelCase(componentName)
    // formatted name "UpperCase"
    let upperComponentName = changeCase.pascalCase(componentName)
    // Base path of the component (no extension at the end here)
    let componentPath = `${srcDir}/${subFolder}/${lowerComponentName}`
    log("component will be created here: componentPath", componentPath)

    // build REACT component
    await _reactComponentBuilder({
      subFolder,
      upperComponentName,
      componentPath,
      componentCompatibleFolders,
      componentsTemplatesDir,
    })

    // final log
    logs.done("Component created.")
    resolve()
  })
}

// ----------------------------------------------------------------------------- PUBLIC

(async ()=>
{
  await _scaffoldComponent({
    pComponentType: "react",
    componentCompatibleFolders: config.componentCompatibleFolders,
    componentsTemplatesDir: config.componentsTemplatesDir,
    srcDir: config.frontSrcDir,
  })

})()
