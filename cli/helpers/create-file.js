import * as mfs from "@cher-ami/mfs"
import logs from "./logger.js"

/**
 * Create File with template
 * @param templateFilePath: path/to/templates/components/foo.template
 * @param destinationFilePath: Where we want to create file ex: "path/to/file/foo.tsx"
 * @param replaceExpressions Expressions list to replace
 */
const createFile = async ({
  templateFilePath = "",
  destinationFilePath = "",
  replaceExpressions = {}
}) => {
  // Check if component already exists

  const exist = await mfs.fileExists(destinationFilePath)
  if (exist) {
    logs.error(`This file already exists. Aborting.`)
    return
  }

  await mfs.copyFile(templateFilePath, destinationFilePath, {
    transform: (fileContent) =>
      new Promise((resolve) => {
        replaceExpressions &&
          Object.keys(replaceExpressions).forEach((e) => {
            if (replaceExpressions[e]) {
              fileContent = fileContent.replace(
                new RegExp(`%%${e}%%`, "g"),
                replaceExpressions[e]
              )
            }
          })
        resolve(fileContent)
      })
  })
}

export default createFile
