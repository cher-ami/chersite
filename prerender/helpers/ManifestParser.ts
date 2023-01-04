/**
 *
 * @param manifestRawFile
 */

export class ManifestParser {
  public manifestRawFile: string
  public assetsList: string[]
  public assetListByType: string[][]

  constructor(manifestRawFile: string) {
    this.manifestRawFile = manifestRawFile
    this.assetsList = this.getAssets(this.manifestRawFile)
    // this.assetListByType = this.getAssetsByType(this.assetsList)
  }

  getScriptTags() {}

  /**
   * Group by extensions
   * @param assetList
   */
  getAssetsByType(assetList: string[]) {
    return assetList.reduce((a, b) => {
      const ext = b.split(".")[b.split(".").length - 1]
      if (a?.[ext]) {
        a[ext].push(b)
        return a
      } else {
        return {
          ...a,
          [ext]: [b],
        }
      }
    }, {})
  }

  /**
   * Return all assets
   * @param manifestRawFile
   */
  getAssets(manifestRawFile: string = this.manifestRawFile): string[] {
    const jsonManifest = JSON.parse(manifestRawFile)
    console.log("jsonManifest", jsonManifest)

    return Object.keys(jsonManifest)
      .reduce(
        (a, b) =>
          jsonManifest[b].isEntry
            ? [
                ...a,
                jsonManifest[b].file,
                ...(jsonManifest[b]?.assets || []),
                ...(jsonManifest[b]?.css || []),
              ]
            : a,
        []
      )
      .filter((e) => e)
  }
}
