//const Inquirer = require("inquirer")
import Inquirer from "inquirer"
import logs from "../../helpers/logger.js"
//const logs = require("../../helpers/logger")
import { Files } from "@zouloux/files"
//const { Files } = require("@zouloux/files")

import config from "../../config.js"

// remove Files lib logs
Files.setVerbose(false)

/**
 * Ask bundle Type to
 */
const _scaffolders = [
  {
    name: "Post Type",
    exec: () => require("./builders/post-type")(),
  },
  {
    name: "Page",
    exec: () => require("./builders/page")(),
  },
  {
    name: "Option Page",
    exec: () => require("./builders/option-page")(),
  },
  {
    name: "Block",
    exec: () => require("./builders/block")(),
  },
]

// ----------------------–----------------------–----------------------–-------- PUBLIC

const wpScaffold = () => {
  new Promise((resolve) => {
    // Get scaffolder to present listing to user
    let scaffolderTypes = _scaffolders.map((scaffolder) => scaffolder.name)

    if (!config.wpTheme) {
      logs.error(`WP path not defined in global.paths`)
      console.log(
        `Add \n\n ${`  /**\n    * wp\n    */\n   wpTemplatesPath: root.resolve("config/tasks/wp-scaffold/component/templates"), \n   wpTheme: root.resolve("dist/api/web/app/themes/CherAmi"),`} \n\nto ${`global.paths.js`}`
      )
      return
    }

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
      _scaffolders[scaffolderIndex].exec()
      resolve()
    })
  })
}

wpScaffold()
