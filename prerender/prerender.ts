import * as mfs from "../config/helpers/mfs.js"
import path from "path"
import { render } from "~/index-server"
import config from "../config/config.js"
import palette from "../config/helpers/palette.js"
const { log } = console

export const prerender = async (urls: string[], outDirStatic = config.outDirStatic) => {
  log("URLs to generate", urls)

  const indexTemplateSrc = `${outDirStatic}/index-template.html`

  // copy index as template to avoid the override with the generated static index.html bellow
  if (!(await mfs.fileExists(indexTemplateSrc)))
    await mfs.copyFile(`${outDirStatic}/index.html`, indexTemplateSrc)

  // now the layout is index-template.html
  const layout = await mfs.readFile(indexTemplateSrc)

  // pre-render each route...
  for (const url of urls) {
    let preparedUrl = url.startsWith("/") ? url : `/${url}`

    // get react app HTML render to string
    try {
      const { meta, renderToString, ssrStaticProps, globalData, languages } =
        await render(preparedUrl, true)
      if (preparedUrl === "/") preparedUrl = "/index"

      if (languages && languages.some((e) => `/${e.key}` === preparedUrl)) {
        preparedUrl = `${preparedUrl}/index`
      }

      // include it in the template
      const template = layout
        ? layout
            .replaceAll(`<!--meta-title-->`, meta?.title ?? "")
            .replaceAll(`<!--meta-description-->`, meta?.description ?? "")
            .replaceAll(`<!--meta-imageUrl-->`, meta?.imageUrl ?? "")
            .replaceAll(`<!--meta-url-->`, meta?.url ?? "")
            .replaceAll(`<!--meta-siteName-->`, meta?.siteName ?? "")
            .replace(`<!--app-html-->`, renderToString)
            .replace(`"<!--ssr-static-props-->"`, JSON.stringify(ssrStaticProps))
            .replace(`"<!--ssr-global-data-->"`, JSON.stringify(globalData))
        : ""

      // prepare sub folder templates if exist
      const routePath = path.resolve(`${outDirStatic}/${preparedUrl}`)

      // add .html to the end of th pat
      const htmlFilePath = `${routePath}.html`

      // write file on the server
      await mfs.createFile(htmlFilePath, template)

      console.log(palette.green(` → ${htmlFilePath.split("static")[1]}`))
    } catch (e) {
      console.log(e)
    }
  }
}
