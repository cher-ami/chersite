import * as mfs from "../config/helpers/mfs.js"
import path from "path"
import { render } from "~/index-server"
import config from "../config/config.js"
import palette from "../config/helpers/palette.js"
import { isRouteIndex } from "./helpers/isRouteIndex"

export const prerender = async (urls: string[], outDirStatic = config.outDirStatic) => {
  console.log("URLs to generate", urls)
  const indexTemplateSrc = `${outDirStatic}/index-template.html`

  // copy index as template to avoid the override with the generated static index.html bellow
  if (!(await mfs.fileExists(indexTemplateSrc)))
    await mfs.copyFile(`${outDirStatic}/index.html`, indexTemplateSrc)

  // now the layout is index-template.html
  const layout = await mfs.readFile(indexTemplateSrc)

  // pre-render each route...
  for (const url of urls) {
    let preparedUrl = url.startsWith("/") ? url : `/${url}`

    try {
      // Request information from render method
      const { renderToString, ssrStaticProps, globalData, meta } = await render(
        preparedUrl,
        true
      )

      // Case url is index of root or of index of a group
      if (isRouteIndex(preparedUrl, urls)) preparedUrl = `${preparedUrl}/index`

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
