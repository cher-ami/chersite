const Inquirer = require("inquirer");
const changeCase = require("change-case");
const { Files } = require("@zouloux/files");
const debug = require("@wbe/debug")("config:scaffold");

//
const createFile = require("../scaffold-helpers/create-file");
const logs = require("../../../helpers/logger");

// remove Files lib logs
Files.setVerbose(false);

const _askWhichComponentFolder = (componentCompatibleFolders) => {
  return Inquirer.prompt({
    type: "list",
    name: "subFolder",
    message: "Which component folder?",
    choices: componentCompatibleFolders,
  });
};

const _askComponentName = () => {
  return Inquirer.prompt({
    type: "input",
    message: "Component name?",
    name: "componentName",
  });
};

/**
 * React Component Builder
 * @param subFolder
 * @param upperComponentName
 * @param componentPath
 * @param createTest
 * @private
 */
const _reactComponentBuilder = ({
  subFolder,
  componentPath,
  upperComponentName,
  componentsTemplatesDir,
}) => {
  // choose between page and component type
  const componentType = subFolder === "pages" ? "page" : "component";
  // scaffold component file
  createFile({
    templateFilePath: `${componentsTemplatesDir}/react/${componentType}.tsx.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.tsx`,
    replaceExpressions: { upperComponentName },
  });
  // scaffold less module
  createFile({
    templateFilePath: `${componentsTemplatesDir}/react/component.less.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.module.less`,
    replaceExpressions: { upperComponentName },
  });
};

/**
 * DOM Component builder
 * @param componentPath
 * @param upperComponentName
 * @param createTest
 * @private
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
  });
  // scaffold less module
  createFile({
    templateFilePath: `${componentsTemplatesDir}/dom/component.less.template`,
    destinationFilePath: `${componentPath}/${upperComponentName}.less`,
    replaceExpressions: { upperComponentName },
  });
};

// ----------------------–----------------------–----------------------–-------- PUBLIC

/**
 * @name index
 * @description Ask question and scaffold a component with a specific script template
 */
const scaffoldComponent = ({
  srcDir,
  pComponentType, // dom | react
  componentCompatibleFolders,
  componentsTemplatesDir,
}) => {
  return new Promise(async (resolve) => {
    /**
     * Ask questions
     */

    // Get sub-folder
    let subFolder = "";
    await _askWhichComponentFolder(componentCompatibleFolders).then(
      (answer) => (subFolder = answer.subFolder)
    );
    debug("subFolder", subFolder);

    // Get component name
    let componentName = "";
    await _askComponentName().then((answer) => {
      componentName = answer.componentName;
    });

    // formated name "lowerCase"
    let lowerComponentName = changeCase.camelCase(componentName);
    // formated name "UpperCase"
    let upperComponentName = changeCase.pascalCase(componentName);
    // Base path of the component (no extension at the end here)
    let componentPath = `${srcDir}/${subFolder}/${lowerComponentName}`;
    debug("component will be created here: componentPath", componentPath);

    // build REACT component
    if (pComponentType === "react") {
      _reactComponentBuilder({
        subFolder,
        upperComponentName,
        componentPath,
        componentCompatibleFolders,
        componentsTemplatesDir,
      });
    }

    // build DOM component
    if (pComponentType === "dom") {
      _domComponentBuilder({
        upperComponentName,
        componentPath,
        componentCompatibleFolders,
        componentsTemplatesDir,
      });
    }

    // final log
    logs.done("Component created.");
    resolve();
  });
};

/**
 * return scaffold component function
 */
module.exports = scaffoldComponent;
