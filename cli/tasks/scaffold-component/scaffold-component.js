import Inquirer from "inquirer"
import changeCase from "change-case"
import createFile from "../../helpers/create-file.js"
import config from "../../config.js"
import logs from "../../helpers/logger.js"
import debug from "@wbe/debug"

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
  // scaffold less module
  await createFile({
    templateFilePath: `${componentsTemplatesDir}/react/component.less.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.module.less`,
    replaceExpressions: { upperComponentName },
  })
}

/**
 * DOM Component builder
 */
const _domComponentBuilder = async ({
  componentPath,
  upperComponentName,
  componentsTemplatesDir,
  twigComponentPath,
}) => {
  // scaffold component file
  await createFile({
    templateFilePath: `${componentsTemplatesDir}/dom/component.ts.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.ts`,
    replaceExpressions: { upperComponentName },
  })
  // scaffold less module
  await createFile({
    templateFilePath: `${componentsTemplatesDir}/dom/component.less.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.less`,
    replaceExpressions: { upperComponentName },
  })
  // scaffold Twig
  await createFile({
    templateFilePath: `${componentsTemplatesDir}/dom/component.twig.template`,
    destinationFilePath: `${twigComponentPath}/${upperComponentName}.twig`,
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
    log("subFolder", subFolder)

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
    let twigComponentPath = `${config.twigTemplates}/${subFolder}`
    log("component will be created here: componentPath", componentPath)

    // build REACT component
    if (pComponentType === "react") {
      await _reactComponentBuilder({
        subFolder,
        upperComponentName,
        componentPath,
        componentCompatibleFolders,
        componentsTemplatesDir,
      })
    }

    // build DOM component
    if (pComponentType === "dom") {
      await _domComponentBuilder({
        upperComponentName,
        componentPath,
        twigComponentPath,
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
          componentCompatibleFolders: config.componentCompatibleFolders,
          componentsTemplatesDir: config.componentsTemplatesDir,
          srcDir: config.frontSrcDir,
        }),
    },
    {
      name: "DOM component",
      exec: () =>
        _scaffoldComponent({
          pComponentType: "dom",
          componentCompatibleFolders: config.componentCompatibleFolders,
          componentsTemplatesDir: config.componentsTemplatesDir,
          srcDir: config.frontSrcDir,
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
