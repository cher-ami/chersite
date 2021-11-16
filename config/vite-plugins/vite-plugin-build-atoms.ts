import { Files } from "@zouloux/files"
import { HmrContext, PluginOption } from "vite"
import buildAtoms from "../tasks/build-atoms/build-atoms"

export default function buildAtomsPlugin({
  varFilesToWatch,
  outputPath,
  outputFilename,
}: {
  varFilesToWatch: string
  outputPath: string
  outputFilename: string
}): PluginOption {
  /**
   * Check if watching var file has changed
   * @param ctx
   */
  const _watchingFileAsChanged = (ctx: HmrContext): boolean => {
    const glob = Files.getFiles(varFilesToWatch)
    return glob?.files?.some((globEl) => globEl.includes(ctx.file))
  }

  return {
    name: "vite-plugin-build-atoms",
    buildStart: () => {
      buildAtoms({ varFilesToWatch, outputPath, outputFilename })
    },
    handleHotUpdate(ctx: HmrContext) {
      const watchingFileHasChanged = _watchingFileAsChanged(ctx)
      if (watchingFileHasChanged) {
        buildAtoms({ varFilesToWatch, outputPath, outputFilename })
      }
    },
  }
}
