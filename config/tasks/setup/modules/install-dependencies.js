const { execSync } = require("child_process")
const logs = require("../../../helpers/logger")

/**
 * Install dependencies
 * - node dependencies
 * - php dependencies
 */
const installDependencies = async () => {
  logs.start("Install dependencies")

  logs.note(`npm install`)
  await execSync(`npm install`, { stdio: "inherit" })

  logs.note(`cd dist/front/ && composer install`)
  await execSync(`cd dist/front/ && composer install`, { stdio: "inherit" })
}

module.exports = installDependencies
