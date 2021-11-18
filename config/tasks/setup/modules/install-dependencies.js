const { execSync } = require("child_process")
const logs = require("../../../helpers/logger")

/**
 * Install dependencies
 * - php dependencies
 */
const installDependencies = async () => {
  logs.start("Install PHP dependencies")

  logs.note(`cd dist/front/ && composer install`)
  await execSync(`cd dist/front/ && composer install`, { stdio: "inherit" })
}

module.exports = installDependencies
