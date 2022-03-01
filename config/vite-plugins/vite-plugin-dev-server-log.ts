import chalk from "chalk"
import { PluginOption } from "vite"

/**
 * Expose specific log in case our dev server don't use an index.html
 *
 * The problem is, vite logs
 *     > Local:    http://localhost:3000/chersite/dist/front/www/static/
 *     > Network:  http://192.168.1.39:3000/chersite/dist/front/www/static/
 *
 * But our developement environnement is:
 *
 *   > local:      http://localhost/chersite/dist/front/www/
 *   > network:    http://192.168.1.39/chersite/dist/front/www/
 *
 * We want to log the two last URL for developers
 *
 */
export default function devServerlogPlugin({
  protocol,
  host,
  base,
  enable,
}: {
  protocol: "http" | "https"
  host: string
  base: string
  enable: boolean
}): PluginOption {
  return {
    name: "vite-plugin-log",
    enforce: "post",
    apply: "serve",
    buildStart: () => {
      // show only if we don't use index.html, but ts/tsx entry points
      if (!enable) return
      // prettier-ignore
      const template = [
        ` ${chalk.green("dev server environment running at:")}`,
        ``, 
        `  > local:      ${chalk.cyan(`${protocol}://localhost${base}`)}`,
        `  > network:    ${chalk.cyan(`${protocol}://${host}${base}`)}`
      ].join('\n');
      // executed after vite log
      setTimeout(() => console.log(template), 10)
    },
  }
}
