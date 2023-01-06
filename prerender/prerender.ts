import * as mfs from "../config/helpers/mfs.js"
import path from "path"
import { render } from "~/index-server"
import config from "../config/config.js"
import palette from "../config/helpers/palette.js"
import { isRouteIndex } from "./helpers/isRouteIndex"
import { ManifestParser } from "./helpers/ManifestParser"

export const prerender = async (urls: string[], outDirStatic = config.outDirStatic) => {
  const indexTemplateSrc = `${outDirStatic}/index-template.html`

  // copy index as template to avoid the override with the generated static index.html bellow
  if (!(await mfs.fileExists(indexTemplateSrc))) {
    await mfs.copyFile(`${outDirStatic}/index.html`, indexTemplateSrc)
  }

  // get script tags to inject in render
  const manifest = await mfs.readFile(`${outDirStatic}/manifest.json`)
  const scriptTags = ManifestParser.getScriptTagFromManifest(manifest)

  // pre-render each route
  for (const url of urls) {
    let preparedUrl = url.startsWith("/") ? url : `/${url}`

    try {
      // Request information from render method
      const html = await render(preparedUrl, scriptTags, true)
      // Case url is index of root or of index of a group
      if (isRouteIndex(preparedUrl, urls)) preparedUrl = `${preparedUrl}/index`
      // Prepare sub folder templates if exist
      const routePath = path.resolve(`${outDirStatic}/${preparedUrl}`)
      // Add .html to the end of th pat
      const htmlFilePath = `${routePath}.html`
      // Write file on the server
      await mfs.createFile(htmlFilePath, html)
      console.log(palette.green(` → ${htmlFilePath.split("static")[1]}`))
    } catch (e) {
      console.log(e)
    }
  }
}
