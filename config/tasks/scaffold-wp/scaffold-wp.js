import Inquirer from "inquirer"
import logs from "../../helpers/logger.js"
import Files from "@zouloux/files"
import config from "../../config.js"
import buildPostType from "./builders/post-type"
import buildPage from "./builders/page"
import buildOptionPage from "./builders/option-page"
import buildBlock from "./builders/option-page"

// remove Files lib logs
Files.setVerbose(false)

/**
 * Ask bundle Type to
 */
const _scaffolders = [
  {
    name: "Post Type",
    exec: () => buildPostType(),
  },
  {
    name: "Page",
    exec: () => buildPage(),
  },
  {
    name: "Option Page",
    exec: () => buildOptionPage(),
  },
  {
    name: "Block",
    exec: () => buildBlock(),
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
