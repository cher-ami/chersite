// const { Files } = require("@zouloux/files")
// const logger = require("../../helpers/logger")
// const debug = require("@wbe/debug")("config:build-atoms")

// /**
//  * Create atoms less to JS template
//  * @private
//  */
// const _getAtomsTemplate = (
//   varAtomsList,
//   outputFilename = "atoms",
//   fileTabRegex = new RegExp(`(\n${"\t\t\t"})`, "gmi")
// ) => {
//   return `
// 			/**
// 			 * WARNING
// 			 * Auto-generated file, do not edit!
// 			 * Auto-Updated with HMR and generated on production build.
// 			 * This file is ignored in .gitignore
// 			 */
// 			export default {
// 			${varAtomsList
//         .map((atom) => {
//           return `	"${atom.name}": ${atom.value},`
//         })
//         .join("\n")}
// 			};`.replace(fileTabRegex, "\n")
// }

// /**
//  * Parse atoms list
//  * @param varFilesToWatch Files to parse
//  * @private
//  */
// const _getAtomsVarList = (varFilesToWatch) => {
//   // Get less files
//   const atomsLessFiles = Files.getFiles(varFilesToWatch)

//   // Generated atoms list
//   let atomList = []

//   // Browse less files
//   atomsLessFiles.all((lessFile) => {
//     // Read less file
//     const lessContent = Files.getFiles(lessFile).read()

//     // Browse lines
//     lessContent.split("\n").map((el) => {
//       // Trim line
//       el = el.trim()
//       // Get @ index (starting of a new less var)
//       const atIndex = el.indexOf("@")
//       // If @ is not at first index (we are trimmed), next
//       if (atIndex !== 0) return
//       // Get colon index (starting of a value in less)
//       const colonIndex = el.indexOf(":")
//       // If there is no value on this line, next
//       if (colonIndex === -1) return
//       // Get optionnal semi colon index
//       const semiIndex = el.indexOf(";")
//       // Extract var name and trim it
//       const varName = el.substring(atIndex + 1, colonIndex).trim()
//       // Extract value and trim it
//       const varValue = el.substring(colonIndex + 1, Math.min(el.length, semiIndex)).trim()
//       // final name
//       const name = varName

//       // final value
//       const value =
//         // if value is a number
//         !isNaN(varValue) ||
//         // or if value already begin and ending with quote
//         varValue.charAt(0) === "'" ||
//         varValue.charAt(0) === '"'
//           ? // return value without formating
//             varValue
//           : // return value with quote
//             "'" + varValue + "'"

//       // Add this atom
//       atomList.push({ name, value })
//     })
//   })

//   return atomList
// }

// /**
//  * Generate atoms typescript file from less files inside atoms directory
//  * Return a promise
//  */
// module.exports = ({ varFilesToWatch = "", outputPath = "", outputFilename = "" }) => {
//   logger.start("Build atoms")

//   // Generate File path
//   const generatedFilePath = `${outputPath}/${outputFilename}`
//   logger.note(`path: ${generatedFilePath}`)

//   // get var atoms list
//   const varList = _getAtomsVarList(varFilesToWatch)
//   // get template
//   const template = _getAtomsTemplate(varList, outputFilename)

//   Files.new(generatedFilePath).write(template)
// }
