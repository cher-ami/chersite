// @ts-ignore
import { render } from "~/server/index-server"
import * as mfs from "@wbe/mfs"
import path from "path"
import chalk from "chalk"
import { loadEnv } from "vite"
import config from "../config/config.js"
import { isRouteIndex } from "./helpers/isRouteIndex"
import { ManifestParser } from "./helpers/ManifestParser"
import { renderToPipeableStream, renderToString } from "react-dom/server"
import { ReactElement } from "react"
import { htmlReplacement } from "~/server/helpers/htmlReplacement"
import { IFetchError } from "~/types/IGlobalData.js"

/**
 * Prerender
 * Create static HTML files from react render DOM
 * @param urls: Urls to generate
 * @param outDirStatic: Generation destination directory
 */
export const prerender = async (
  urls: string[],
  outDirStatic = config.outDirStatic
): Promise<boolean[] | IFetchError[]> => {
  const indexTemplateSrc = `${outDirStatic}/index-template.html`

  // copy index as template to avoid the override with the generated static index.html bellow
  if (!(await mfs.fileExists(indexTemplateSrc))) {
    await mfs.copyFile(`${outDirStatic}/index.html`, indexTemplateSrc)
  }

  // get script tags to inject in render
  const base = process.env.VITE_APP_BASE || loadEnv("", process.cwd(), "").VITE_APP_BASE
  const manifest = (await mfs.readFile(`${outDirStatic}/manifest.json`)) as string
  const scriptTags = ManifestParser.getScriptTagFromManifest(manifest, base)

  // pre-render each route
  const renderResponses = await Promise.all(
    urls.map(async (url) => {
      url = url.startsWith("/") ? url : `/${url}`
      try {
        let responseResolve
        let responsePromise = new Promise((resolve) => (responseResolve = resolve))

        // TODO: return errors if failed
        const domResponse = await render(url, scriptTags, true)
        // @ts-ignore
        if ((domResponse as IFetchError).error) {
          // @ts-ignore
          responseResolve(domResponse as IFetchError)
          // @ts-ignore
          return domResponse as IFetchError
        }
        renderToPipeableStream(domResponse as ReactElement, {
          onAllReady() {
            createHtmlFile(urls, url, outDirStatic, domResponse as ReactElement).then(
              (r) => {
                responseResolve(r)
              }
            )
          },
          onError(x) {
            console.error(x)
            responseResolve(x)
          },
        })
        const response = (await responsePromise) as boolean[]
        return response
      } catch (e) {
        console.error(e)
      }
    })
  )
  return renderResponses as boolean[] | IFetchError[]
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
  dom: ReactElement
): Promise<boolean> => {
  // Prepare file
  if (isRouteIndex(url, urls)) url = `${url}/index`
  const routePath = path.resolve(`${outDir}/${url}`)
  const htmlFilePath = `${routePath}.html`
  // Create file
  try {
    await mfs.createFile(htmlFilePath, htmlReplacement(renderToString(dom)))
    console.log(chalk.green(` → ${htmlFilePath.split("static")[1]}`))
    return true
  } catch (error) {
    // Handle errors
    console.error(error)
    return false
  }
}
