const { Files } = require("@zouloux/files");
const { quickTemplate } = require("./template-helper");
const debug = require("@wbe/debug")("lib:create-file");
const logs = require("../../../helpers/logger");

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
    logs.error(`This file already exists. Aborting.`);
    return;
  }

  debug("create file with template and replace expression");
  Files.new(destinationFilePath).write(
    quickTemplate(Files.getFiles(templateFilePath).read(), replaceExpressions)
  );
};

module.exports = createFile;
