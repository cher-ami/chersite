import logs from "../../../helpers/logger.js"
import config from "../../../config.js"
import Inquirer from "inquirer"
import changeCase from "change-case"
import * as mfs from "@cher-ami/mfs"
import createFile from "../../../helpers/create-file.js"

const _askBlockName = () => {
  return Inquirer.prompt([
    {
      type: "input",
      message: "Block name (dashed lower cased)?",
      name: "blockName",
    },
    {
      type: "input",
      message: "Block title? ",
      name: "blockTitle",
    },
  ])
}

/**
 * WP Block Builder
 * @param blockPath,
 * @param blockName,
 * @param blockTitle,
 * @private
 */
const _blockBuilder = async ({ blockPath, blockName, blockTitle }) => {
  // choose between page and postType type
  const camelCaseBlockName = changeCase.camelCase(blockName),
    upperCaseBlockName = changeCase.constantCase(blockName),
    pascalCaseBlockName = changeCase.pascalCase(blockName)

  // scaffold postType file
  await createFile({
    templateFilePath: `${config.wpTemplatesPath}/block/setup.php.template`,
    destinationFilePath: `${blockPath}/setup.php`,
    replaceExpressions: {
      blockName,
      blockTitle,
      pascalCaseBlockName,
      upperCaseBlockName,
    },
  })

  // scaffold controller
  await createFile({
    templateFilePath: `${config.wpTemplatesPath}/block/blockController.php.template`,
    destinationFilePath: `${blockPath}/${pascalCaseBlockName}Controller.php`,
    replaceExpressions: { pascalCaseBlockName, camelCaseBlockName, upperCaseBlockName },
  })
}

const buildBlock = async () => {
  return new Promise(async (resolve) => {
    let wpFolder = `${config.wpTheme}/block`

    // Get block name
    let blockName = "",
      blockTitle = ""
    await _askBlockName().then((answer) => {
      blockName = changeCase.paramCase(answer.blockName)
      blockTitle = answer.blockTitle
    })

    let pascalBlockName = changeCase.pascalCase(blockName)

    // Base path of the page (no extension at the end here)
    let blockPath = `${wpFolder}/${pascalBlockName}`
    logs.note(`Block ${pascalBlockName} will be created here: ${blockPath}`)

    /**
     * Build block
     */
    try {
      await _blockBuilder({
        blockPath,
        blockName,
        blockTitle,
      })
    } catch (e) {
      logs.error(e)
    }

    await buildBlockType()

    // final log
    logs.done("Block created.")
    resolve()
  })
}

/**
 * Create atoms less to JS template
 */
const _blockTypeTemplate = (
  blockTypeList,
  pFileTabRegex = new RegExp(`(\n${"\t\t\t"})`, "gmi")
) => {
  // get output file name without extensions
  return `<?php
/**
 * WARNING
 * Auto-generated file, do not edit!
 * This file is generated on block creation via the wp-scaffold task
 */

namespace CherAmi\block;

const GUTENBERG_CUSTOM_BLOCKS = array(
    ${blockTypeList
      .map((block) => {
        return `'acf/g-${block.name}',`
      })
      .join("\n")}
);

class BlockTypes{
${blockTypeList
  .map((block) => {
    return `    public const ${block.upperCaseBlockName} = 'acf/g-${block.name}';`
  })
  .join("\n")}

}`.replace(pFileTabRegex, "\n")
}

const buildBlockType = async () => {
  return new Promise(async (resolve) => {
    const generatedFilePath = `${config.wpTheme}/block/BlockType.php`

    const blockFolderContent = await mfs.readDir(`${config.wpTheme}/block/`, false)
    const blockFolder = blockFolderContent.filter(async (e) => await mfs.dirExists(e))
    console.log("blockFolder", blockFolder)

    const formatedBlocks = blockFolder.map((block) => {
      const blockName = block.substring(block.lastIndexOf("/") + 1)
      return {
        name: changeCase.paramCase(blockName),
        upperCaseBlockName: changeCase.constantCase(blockName),
        pasclaCaseName: blockName,
      }
    })

    const blockTypeFile = _blockTypeTemplate(formatedBlocks)
    await mfs.createFile(generatedFilePath, blockTypeFile)

    logs.done("Block Types file updated.")
    resolve()
  })
}

export default buildBlock
