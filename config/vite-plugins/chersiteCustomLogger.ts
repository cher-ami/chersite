import { createLogger, Logger } from "vite"
import chalk from "chalk"
import packageJson from "../../package.json"

export const chersiteCustomLogger = ({
  protocol,
  host,
  port,
  base,
}: {
  protocol: "http" | "https"
  host: string
  port: string
  base: string
}): Logger => {
  const logger = createLogger("info", { allowClearScreen: true })
  const hostIsLocalhost = host === "localhost"
  // prettier-ignore
  const template = [
      ``,
      `  ${chalk.green.bold.underline(packageJson.name)} ${chalk.gray("v" + packageJson.version)} \n`,
                        `  ${chalk.bold("Local")}:      ${chalk.cyan(`${protocol}://${chalk.bold('localhost')}:${port ?? ""}${base}`)}`,
    !hostIsLocalhost && `  ${chalk.bold("Network")}:    ${chalk.cyan(`${protocol}://${chalk.bold(host)}:${port ?? ""}${base}`)}`,
    // !hostIsLocalhost && `  ${chalk.bold("BO")}:         ${chalk.cyan(`${protocol}://${chalk.bold(host)}${port ?? ""}${base}wp/wp-admin`)}`,
    ].filter(e => e).join('\n');

  logger.warnOnce(template)

  const originalInfo = logger.info
  logger.info = (msg, options) => {
    // return if is default log
    if (msg.includes("Local")) return
    if (msg.includes("Network")) return
    originalInfo(msg, options)
  }

  return logger
}
