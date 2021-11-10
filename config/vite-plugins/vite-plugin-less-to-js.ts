import debug from "@wbe/debug";
import { Files } from "@zouloux/files";
import { HmrContext, PluginOption } from "vite";
import buildAtoms from "../tasks/build-atoms";
const log = debug("config:lessToJsPlugin");

export default function lessToJsPlugin({
  varFilesToWatch,
  outputPath,
  outputFilename,
}: {
  varFilesToWatch: string;
  outputPath: string;
  outputFilename: string;
}): PluginOption {
  /**
   * Check if watching var file has changed
   * @param ctx
   */
  const _watchingFileAsChanged = (ctx: HmrContext): boolean => {
    // check files to watch
    const glob = Files.getFiles(varFilesToWatch);
    // check if a file of change file list match with one of glob files
    return glob?.files?.some((globEl) => globEl.includes(ctx.file));
  };

  return {
    name: "vite-less-to-js-plugin",

    /**
     * When build start
     */
    buildStart: () => {
      log("build atoms file", {
        varFilesToWatch,
        outputPath,
        outputFilename,
      });
      buildAtoms({ varFilesToWatch, outputPath, outputFilename });
    },

    /**
     * When hot update
     * @param ctx
     */
    handleHotUpdate(ctx: HmrContext) {
      const watchingFileHasChanged = _watchingFileAsChanged(ctx);
      log("watching file has changed", watchingFileHasChanged);

      if (watchingFileHasChanged) {
        buildAtoms({ varFilesToWatch, outputPath, outputFilename });
      }
    },
  };
}
