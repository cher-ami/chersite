import { createLogger, Logger } from "vite"
import chalk from "chalk"
import packageJson from "../../package.json"

export const chersiteCustomLogger = ({
  protocol,
  host,
  port,
  base,
  enable,
}: {
  protocol: "http" | "https"
  host: string | undefined
  port: string | undefined
  base: string | undefined
  enable: boolean
}): Logger => {
  const logger = createLogger("info", {
    allowClearScreen: true,
  })

  // prettier-ignore
  const template = [
      ``,
      `  ${chalk.green.bold.underline(packageJson.name)} ${chalk.gray("v" + packageJson.version)}`,
      ``,
            `  ${chalk.bold("Local")}:      ${chalk.cyan(`${protocol}://${chalk.bold('localhost')}${port ?? ""}${base}`)}`,
    host && `  ${chalk.bold("Network")}:    ${chalk.cyan(`${protocol}://${chalk.bold(host)}${port ?? ""}${base}`)}`,
    // host && `  ${chalk.bold("BO")}:         ${chalk.cyan(`${protocol}://${chalk.bold(host)}${port ?? ""}${base}wp/wp-admin`)}`,
    ].join('\n');

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
