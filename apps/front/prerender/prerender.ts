// @ts-ignore
import * as mfs from "@cher-ami/mfs"
import chalk from "chalk"
import * as fs from "fs/promises"
import path from "path"
import { JSXElementConstructor, ReactElement } from "react"
import { renderToPipeableStream, renderToString } from "react-dom/server"
import { loadEnv } from "vite"
import { render } from "~/index-server"
import config from "../config/config.js"
import { isRouteIndex } from "./helpers/isRouteIndex"
import { ManifestParser } from "./helpers/ManifestParser"
import { Dirent } from "fs"
import { rejects } from "assert"

/**
 * Prerender
 * Create static HTML files from react render DOM
 * @param urls: Urls to generate
 * @param outDirStatic: Generation destination directory
 */
export const prerender = async (urls: string[]) => {
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

async function copyFile(source, destination) {
  await fs.mkdir(path.dirname(destination), { recursive: true })
  await fs.copyFile(source, destination)
}

async function moveFolder(source, destination) {
  try {
    // Crée le dossier de destination s'il n'existe pas
    await fs.mkdir(destination, { recursive: true })

    // Lire le contenu du dossier source
    const entries = await fs.readdir(source, { withFileTypes: true })

    for (const entry of entries) {
      const sourcePath = path.join(source, entry.name)
      const destinationPath = path.join(destination, entry.name)

      if (entry.isDirectory()) {
        // Appel récursif pour les sous-dossiers
        await moveFolder(sourcePath, destinationPath)
      } else {
        // Copier le fichier
        await copyFile(sourcePath, destinationPath)
        await fs.unlink(sourcePath) // Supprimer le fichier source après copie
      }
    }

    // Supprimer le dossier source après déplacement de son contenu
    await fs.rmdir(source)
    // console.log(`Folder ${source} moved to ${destination}`)
  } catch (err) {
    console.error(`Erreur lors du déplacement du dossier : ${err}`)
  }
}

async function moveHTML(source: string, destination: string): Promise<void> {
  try {
    // Crée le dossier de destination s'il n'existe pas
    await fs.mkdir(destination, { recursive: true })

    // Lire le contenu du dossier source
    const entries = await fs.readdir(source, { withFileTypes: true })

    for (const entry of entries) {
      const sourcePath = path.join(source, entry.name)
      const destinationPath = path.join(destination, entry.name)

      if (entry.isDirectory()) {
        // Appel récursif pour les sous-dossiers
        await moveHTML(sourcePath, destinationPath)
      } else if (path.extname(entry.name).toLowerCase() === ".html") {
        // Copier le fichier HTML
        await fs.copyFile(sourcePath, destinationPath)
        await fs.unlink(sourcePath) // Supprimer le fichier source après copie
        // console.log(`File ${entry.name} moved from ${source} to ${destination}`)
      }
    }

    // Vérifier si le dossier source est vide après déplacement des fichiers HTML
    const remainingEntries = await fs.readdir(source)
    if (remainingEntries.length === 0) {
      await fs.rmdir(source) // Supprimer le dossier source s'il est vide
    }
  } catch (err) {
    console.error(`Erreur lors du déplacement des fichiers HTML : ${err}`)
  }
}
