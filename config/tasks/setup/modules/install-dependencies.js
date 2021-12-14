const { execSync } = require("child_process")
const logs = require("../../../helpers/logger")

/**
 * Install dependencies
 * - php dependencies
 */
const installDependencies = async () => {
  logs.start("Install PHP dependencies")

  logs.note(`Execute ./composer-install.sh`)
  await execSync(`./composer-install.sh`, { stdio: "inherit" })
}

module.exports = installDependencies
