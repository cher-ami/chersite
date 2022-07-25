import { execSync } from "child_process"
import logs from "../../../helpers/logger.js"

/**
 * Install dependencies
 * - php dependencies
 */
export default async () => {
  logs.start("Install PHP dependencies")
  logs.note(`Execute ./composer-install.sh`)
  await execSync(`./composer-install.sh`, { stdio: "inherit" })
}
