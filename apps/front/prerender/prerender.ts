// @ts-ignore
import { render } from "~/index-server"
import * as mfs from "@cher-ami/mfs"
import path from "path"
import chalk from "chalk"
import { loadEnv } from "vite"
import config from "../config/config.js"
import { isRouteIndex } from "./helpers/isRouteIndex"
import { ManifestParser } from "./helpers/ManifestParser"
import { renderToPipeableStream, renderToString } from "react-dom/server"
import { JSXElementConstructor, ReactElement } from "react"

/**
 * Prerender
 * Create static HTML files from react render DOM
 * @param urls: Urls to generate
 * @param outDirStatic: Generation destination directory
 */
export const prerender = async (
  urls: string[],
  outDirStatic = config.outDirStaticClient,
  outDirStaticTemp = config.outDirStaticClientTemp
) => {
  const indexTemplateSrc = `${outDirStaticTemp}/index-template.html`

  // copy index as template to avoid the override with the generated static index.html bellow
  if (!(await mfs.fileExists(indexTemplateSrc))) {
    await mfs.copyFile(`${outDirStaticTemp}/index.html`, indexTemplateSrc)
  }

  // get script tags to inject in render
  const base = loadEnv("", process.cwd(), "").VITE_APP_BASE || process.env.VITE_APP_BASE
  const manifest = (await mfs.readFile(
    `${outDirStaticTemp}/.vite/manifest.json`
  )) as string
  const scriptTags = ManifestParser.getScriptTagFromManifest(manifest, base)
  let errorOnRender = false

  // pre-render each route
  for (let url of urls) {
    url = url.startsWith("/") ? url : `/${url}`

    try {
      // Request DOM
      const dom = await render(url, scriptTags, true, base)
      // create stream and generate current file when all DOM is ready
      renderToPipeableStream(dom, {
        onAllReady() {
          createHtmlFile(urls, url, outDirStaticTemp, dom)
        },
        onError(x) {
          errorOnRender = true
          console.error(x)
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  if (errorOnRender) {
    console.error(chalk.red("Error on render"))
    process.exit(1)
  } else {
    await mfs.copyDir(outDirStaticTemp, outDirStatic, { force: true })
    await mfs.removeDir(outDirStaticTemp)
    console.log(chalk.green("Copy _temp files to static folder"))
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
  console.log(chalk.green(` → ${htmlFilePath.split("static")[1]}`))
}

/**
 * Render string patch middleware
 */
const htmlReplacement = (render: string): string =>
  render
    .replace("<html", `<!DOCTYPE html><html`)
    .replaceAll('<script nomodule=""', "<script nomodule")
    .replaceAll('crossorigin="anonymous"', "crossorigin")
