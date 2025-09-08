import path from "path"
import * as mfs from "@cher-ami/mfs"
import * as fs from "fs/promises"
import { JSXElementConstructor, ReactElement } from "react"
import { isRouteIndex } from "./isRouteIndex"
import chalk from "chalk"
import { renderToString } from "react-dom/server"
import config from "../../config/config.js"

/**
 * Create a single HTML file
 * @param urls: All urls to generate
 * @param url: Current URL to generate
 * @param outDir:  Generation destination directory
 * @param dom: React DOM from index-server.tsx
 */
export const createHtmlFile = async (
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
 * @param[string] render html string to parse
 * @returns
 */
const htmlReplacement = (render: string): string => {
  return render
    .replace("<html", `<!DOCTYPE html><html`)
    .replaceAll('<script nomodule=""', "<script nomodule")
    .replaceAll('crossorigin="anonymous"', "crossorigin")
}

/**
 * Copy file to destination
 * @param[string] source source file
 * @param[string] destination destination file
 */
export async function copyFile(source, destination) {
  await fs.mkdir(path.dirname(destination), { recursive: true })
  await fs.copyFile(source, destination)
}

/**
 * Copy folder to destination and remove source afterwards
 * @param[string] source folder
 * @param[string] destination desitnation folder
 */
export async function moveFolder(source, destination) {
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

/**
 * Copy only html files from one folder to another, delete them afterwards
 * @param[string] source folder
 * @param[string] destination destination folder
 */
export async function moveHTML(source: string, destination: string): Promise<void> {
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

/**
 * Delete Unsued HTML File
 * @param[string] source folder
 * @param[string] destination destination folder
 */
export async function deleteUnusedHTML(usedPaths: string[], destination: string): Promise<void> {

  // Lire le contenu du dossier destination
  const destinationEntries = await fs.readdir(destination, { withFileTypes: true })
  const IndexI = destinationEntries.findIndex(x =>  x.name === 'index.html' && x.parentPath === destination)
  if(IndexI > -1) {
    console.log(`On ne supprime pas l\'index`)
    destinationEntries.splice(IndexI, 1)
  }
  
  try {
    for (const entry of destinationEntries) {
      const destinationPath = path.join(destination, entry.name)
      if (entry.isDirectory()) {
        await deleteUnusedHTML(usedPaths, destinationPath)
      } else if(path.extname(entry.name).toLowerCase() === ".html" && !usedPaths.includes(destinationPath)) {
        await fs.unlink(destinationPath) // Supprimer le fichier
        console.log(`File ${entry.name} delete from ${destination}`)
      }
    }
  } catch (err) {
    console.error(`Erreur lors du déplacement des fichiers HTML : ${err}`)
  }
}

/**
 * Delete Html by url
 * @param[string] delete
 */
export async function deleteHtml(url: string): Promise<void> {
  try {
    if(url === '/index') throw (`On ne supprime pas l\'index`)
    const outDirStatic = config.outDirStaticClient
    const routePath = path.resolve(`${outDirStatic}/${url}`)
    const htmlFilePath = `${routePath}.html`
    await fs.unlink(htmlFilePath) // Supprimer le fichier
  } catch (err) {
    console.error(`Erreur lors de la supression du fichier HTML : ${err}`)
  }
}

