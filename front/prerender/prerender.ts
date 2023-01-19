import * as mfs from "../config/helpers/mfs.js"
import path from "path"
import { render } from "~/index-server"
import config from "../config/config.js"
import palette from "../config/helpers/palette.js"
import { isRouteIndex } from "./helpers/isRouteIndex"
import { ManifestParser } from "./helpers/ManifestParser"
import { renderToPipeableStream, renderToString } from "react-dom/server"
import { JSXElementConstructor, ReactElement } from "react"
import { htmlReplacement } from "../src/server/helpers/htmlReplacement"

/**
 * Prerender
 * Create static HTML files from react render DOM
 * @param urls: Urls to generate
 * @param outDirStatic: Generation destination directory
 */
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
  for (let url of urls) {
    url = url.startsWith("/") ? url : `/${url}`

    try {
      // Request DOM
      const dom = await render(url, scriptTags, true)
      // create stream and generate current file when all DOM is ready
      renderToPipeableStream(dom, {
        onAllReady() {
          createHtmlFile(urls, url, outDirStatic, dom)
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

/**
 * Create a single HTML file
 * @param urls: All urls to generate
 * @param url: Current URL to generate
 * @param outDir:  Generation destination directory
 * @param dom: React DOM from index-server.tsx
 */
const createHtmlFile = async (
  urls: string[],
  url: string,
  outDir: string,
  dom: ReactElement<any, string | JSXElementConstructor<any>>
): Promise<void> => {
  // Prepare file
  if (isRouteIndex(url, urls)) url = `${url}/index`
  const routePath = path.resolve(`${outDir}/${url}`)
  const htmlFilePath = `${routePath}.html`
  // Create file
  await mfs.createFile(htmlFilePath, htmlReplacement(renderToString(dom)))
  console.log(palette.green(` → ${htmlFilePath.split("static")[1]}`))
}
