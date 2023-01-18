import * as mfs from "../config/helpers/mfs.js"
import path from "path"
import { render } from "~/index-server"
import config from "../config/config.js"
import palette from "../config/helpers/palette.js"
import { isRouteIndex } from "./helpers/isRouteIndex"
import { ManifestParser } from "./helpers/ManifestParser"
import { renderToPipeableStream, renderToString } from "react-dom/server"
import { patchScriptAttribute } from "~/server/helpers/patchScriptAttribute"

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
      const dom = await render(preparedUrl, scriptTags, true)

      // create stream and return it
      const stream = renderToPipeableStream(dom, {
        async onAllReady() {
          // Prepare file
          if (isRouteIndex(preparedUrl, urls)) preparedUrl = `${preparedUrl}/index`
          const routePath = path.resolve(`${outDirStatic}/${preparedUrl}`)
          const htmlFilePath = `${routePath}.html`
          // Create file
          await mfs.createFile(htmlFilePath, patchScriptAttribute(renderToString(dom)))
          console.log(palette.green(` → ${htmlFilePath.split("static")[1]}`))
        },
        onError(x) {
          console.error(x)
        },
      })
    } catch (e) {
      console.log(e)
    }
  }
}
