const Inquirer = require("inquirer");
const scaffoldComponent = require("./component/scaffold-component");
const {
  componentCompatibleFolders,
  componentsTemplatesDir,
  srcDir,
} = require("../../config");

/**
 * Ask bundle Type
 */
const TYPES = [
  {
    name: "React component",
    exec: () =>
      scaffoldComponent({
        pComponentType: "react",
        componentCompatibleFolders,
        componentsTemplatesDir,
        srcDir,
      }),
  },
  {
    name: "DOM component",
    exec: () =>
      scaffoldComponent({
        pComponentType: "dom",
        componentCompatibleFolders,
        componentsTemplatesDir,
        srcDir,
      }),
  },
];

const scaffold = () => {
  // Get scaffolder to present listing to user
  let scaffolderTypes = TYPES.map((scaffolder) => scaffolder.name);

  // List available scaffolders to user
  Inquirer.prompt({
    type: "list",
    name: "type",
    message: "What kind of component to create?",
    choices: scaffolderTypes,
    pageSize: 20,
  }).then((answer) => {
    // Get scaffolder index
    const scaffolderIndex = scaffolderTypes.indexOf(answer.type);
    // Start this scaffolder
    TYPES[scaffolderIndex].exec();
  });
};

scaffold();
