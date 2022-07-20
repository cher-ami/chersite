import Inquirer from "inquirer"
import changeCase from "change-case"
import { Files } from "@zouloux/files"
import debug from "@wbe/debug"
import createFile from "../../helpers/create-file"

const log = debug("config:scaffold")
import logger from "../../helpers/logger"
Files.setVerbose(false)

const {
  componentCompatibleFolders,
  componentsTemplatesDir,
  srcDir,
} = require("../../config")

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
const _reactComponentBuilder = ({
  subFolder,
  componentPath,
  upperComponentName,
  componentsTemplatesDir,
}) => {
  // choose between page and component type
  const componentType = subFolder === "pages" ? "page" : "component"
  // scaffold component file
  createFile({
    templateFilePath: `${componentsTemplatesDir}/react/${componentType}.tsx.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.tsx`,
    replaceExpressions: { upperComponentName },
  })
  // scaffold less module
  createFile({
    templateFilePath: `${componentsTemplatesDir}/react/component.less.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.module.less`,
    replaceExpressions: { upperComponentName },
  })
}

/**
 * DOM Component builder
 */
const _domComponentBuilder = ({
  componentPath,
  upperComponentName,
  componentsTemplatesDir,
}) => {
  // scaffold component file
  createFile({
    templateFilePath: `${componentsTemplatesDir}/dom/component.ts.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.ts`,
    replaceExpressions: { upperComponentName },
  })
  // scaffold less module
  createFile({
    templateFilePath: `${componentsTemplatesDir}/dom/component.less.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.less`,
    replaceExpressions: { upperComponentName },
  })
}

/**
 * @name index
 * @description Ask question and scaffold a component with a specific script template
 */
const _scaffoldComponent = ({
  srcDir,
  pComponentType, // dom | react
  componentCompatibleFolders,
  componentsTemplatesDir,
}) => {
  return new Promise(async (resolve) => {
    // Get sub-folder
    let subFolder = ""
    await _askWhichComponentFolder(componentCompatibleFolders).then(
      (answer) => (subFolder = answer.subFolder)
    )
    debug("subFolder", subFolder)

    // Get component name
    let componentName = ""
    await _askComponentName().then((answer) => {
      componentName = answer.componentName
    })

    // formated name "lowerCase"
    let lowerComponentName = changeCase.camelCase(componentName)
    // formated name "UpperCase"
    let upperComponentName = changeCase.pascalCase(componentName)
    // Base path of the component (no extension at the end here)
    let componentPath = `${srcDir}/${subFolder}/${lowerComponentName}`
    debug("component will be created here: componentPath", componentPath)

    // build REACT component
    if (pComponentType === "react") {
      _reactComponentBuilder({
        subFolder,
        upperComponentName,
        componentPath,
        componentCompatibleFolders,
        componentsTemplatesDir,
      })
    }

    // build DOM component
    if (pComponentType === "dom") {
      _domComponentBuilder({
        upperComponentName,
        componentPath,
        componentCompatibleFolders,
        componentsTemplatesDir,
      })
    }

    // final log
    logs.done("Component created.")
    resolve()
  })
}

// ----------------------------------------------------------------------------- PUBLIC

const scaffoldComponent = () => {
  const TYPES = [
    {
      name: "React component",
      exec: () =>
        _scaffoldComponent({
          pComponentType: "react",
          componentCompatibleFolders,
          componentsTemplatesDir,
          srcDir,
        }),
    },
    {
      name: "DOM component",
      exec: () =>
        _scaffoldComponent({
          pComponentType: "dom",
          componentCompatibleFolders,
          componentsTemplatesDir,
          srcDir,
        }),
    },
  ]

  let scaffolderTypes = TYPES.map((scaffolder) => scaffolder.name)

  // List available scaffolders to user
  Inquirer.prompt({
    type: "list",
    name: "type",
    message: "What kind of component to create?",
    choices: scaffolderTypes,
    pageSize: 20,
  }).then((answer) => {
    // Get scaffolder index
    const scaffolderIndex = scaffolderTypes.indexOf(answer.type)
    // Start this scaffolder
    TYPES[scaffolderIndex].exec()
  })
}
scaffoldComponent()
