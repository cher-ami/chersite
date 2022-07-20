import { Files } from "@zouloux/files"
import { quickTemplate } from "./template-helper"
const logs = require("./logger")

/**
 * Create File with template
 * @param templateFilePath: path/to/templates/components/foo.template
 * @param destinationFilePath: Where we want to create file ex: "path/to/file/foo.tsx"
 * @param replaceExpressions Expressions list to replace
 */
const createFile = ({
  templateFilePath = "",
  destinationFilePath = "",
  replaceExpressions = {},
}) => {
  // Check if component already exists
  if (Files.getFiles(destinationFilePath).files.length > 0) {
    logs.error(`This file already exists. Aborting.`)
    return
  }

  Files.new(destinationFilePath).write(
    quickTemplate(Files.getFiles(templateFilePath).read(), replaceExpressions)
  )
}

export default createFile
