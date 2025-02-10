// @ts-ignore
import * as mfs from "@cher-ami/mfs"
import chalk from "chalk"
import { renderToPipeableStream } from "react-dom/server"
import { loadEnv } from "vite"
import { render } from "~/index-server"
import config from "../config/config.js"
import { createHtmlFile, moveFolder, moveHTML } from "./helpers/filesManipulation.js"
import { ManifestParser } from "./helpers/ManifestParser"
import { exec } from "child_process"

/**
 * Prerender
 * Create static HTML files from react render DOM
 * @param urls: Urls to generate
 * @param outDirStatic: Generation destination directory
 */
export const prerender = async (urls: string[]) => {
  try {
    // Define output folders (_temp & client)
    const outDirStatic = config.outDirStaticClient
    const outDirStaticTemp = config.outDirStaticClientTemp

    // Define if comes from :
    // - build (npm run build:static)
    // - generate (server /generate or npm run generate)
    const isGenerate = !(await mfs.fileExists(`${outDirStaticTemp}/.vite/manifest.json`))

    // get script tags to inject in render
    const base = loadEnv("", process.cwd(), "").VITE_APP_BASE || process.env.VITE_APP_BASE
    let manifest = null

    // If from build, use manifest file from _temp/
    if (!isGenerate) {
      manifest = await mfs.readFile(`${outDirStaticTemp}/.vite/manifest.json`)
    } else {
      // Else from client/
      manifest = await mfs.readFile(`${outDirStatic}/.vite/manifest.json`)
    }

    const scriptTags = ManifestParser.getScriptTagFromManifest(manifest, base)
    let errorOnRender = false
    const renderPromises: Promise<void>[] = []

    // pre-render each route
    for (let url of urls) {
      let formattedURL = url.startsWith("/") ? url : `/${url}`

      try {
        // Request DOM
        const dom = await render(formattedURL, scriptTags, true, base)
        // create stream and generate current file when all DOM is ready
        renderPromises.push(
          new Promise<void>((resolve, rejects) => {
            renderToPipeableStream(dom, {
              onAllReady: async () => {
                await createHtmlFile(urls, formattedURL, outDirStaticTemp, dom)
                resolve()
              },
              onError(x) {
                errorOnRender = true
                console.error(x)
                rejects(new Error("Error on renderToPipeableStream"))
              }
            })
          })
        )
      } catch (e) {
        console.log(e)
      }
    }
    await Promise.all(renderPromises)

    if (errorOnRender) {
      console.error(chalk.red("Error on render"))
      process.exit(1)
    } else if (!isGenerate) {
      // If from build, move whole folder
      await moveFolder(outDirStatic, "dist/static/old")
      await moveFolder(outDirStaticTemp, outDirStatic)
    } else {
      // If from generate, move html files only
      await moveHTML(outDirStaticTemp, outDirStatic)
    }

    //Once done, update chmod rights for folder & files
    //Setup 644 for files
    exec(`find ${outDirStatic} -type f -exec chmod 644 {} \\;`)
    //Setup 755 for folders
    exec(`find ${outDirStatic} -type d -exec chmod 755 {} \\;`)
  } catch (e) {
    console.error(e)
  }
}
