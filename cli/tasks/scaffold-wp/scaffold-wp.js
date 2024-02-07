import Inquirer from "inquirer"
import logs from "../../helpers/logger.js"
import config from "../../config.js"
import buildPostType from "./builders/post-type.js"
import buildPage from "./builders/page.js"
import buildOptionPage from "./builders/option-page.js"
import buildBlock from "./builders/block.js"

/**
 * Ask bundle Type to
 */
const _scaffolders = [
  {
    name: "Post Type",
    exec: buildPostType
  },
  {
    name: "Page",
    exec: buildPage
  },
  {
    name: "Option Page",
    exec: buildOptionPage
  },
  {
    name: "Block",
    exec: buildBlock
  }
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
      pageSize: 20
    }).then(async (answer) => {
      // Get scaffolder index
      const scaffolderIndex = scaffolderTypes.indexOf(answer.type)

      // Start this scaffolder
      await _scaffolders[scaffolderIndex].exec()
      resolve()
    })
  })
}

wpScaffold()
