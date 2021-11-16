import debug from "@wbe/debug";
import { Files } from "@zouloux/files";
import { HmrContext, PluginOption } from "vite";
import buildAtoms from "../tasks/build-atoms";
const log = debug("config:vite-plugin-build-atoms");

export default function buildAtomsPlugin({
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
    name: "vite-plugin-build-atoms",
    buildStart: () => {
      buildAtoms({ varFilesToWatch, outputPath, outputFilename });
    },
    handleHotUpdate(ctx: HmrContext) {
      const watchingFileHasChanged = _watchingFileAsChanged(ctx);
      if (watchingFileHasChanged) {
        buildAtoms({ varFilesToWatch, outputPath, outputFilename });
      }
    },
  };
}
