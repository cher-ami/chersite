export type TAssetsList = string[]
export type TAssetsByType = { [x: string]: string[] }
export type TScriptTags = { [x: string]: string[] }

/**
 * ManifestParser
 * Allow to get scriptTags
 *
 *
 *
 */
export class ManifestParser {
  /**
   * Directly get script Tags from raw manifest string
   * @param manifestRaw
   */
  static getScriptTagFromManifest(manifestRaw: string): TScriptTags {
    const assets = ManifestParser.getAssets(manifestRaw)
    const assetsByType = ManifestParser.sortAssetsByType(assets)
    return ManifestParser.getScriptTags(assetsByType)
  }

  /**
   * Get script tags
   *  ex:
   *
   *  {
   *   js: [
   *     '<script nomodule crossorigin src="/index-legacy-e92b0b23.js"></script>',
   *     '<script module crossorigin src="/index-475b5da0.js"></script>'
   *   ],
   *   woff2: [
   *     '<link rel="preload" as=“font” type=“font/woff2" crossorigin href="/roboto-regular-8cef0863.woff2">'
   *   ],
   *   css: [ '<link rel="stylesheet" crossorigin href="/index-ef71c845.css">' ]
   * }
   *
   * @param assetListByType
   * @param base
   */
  static getScriptTags(assetListByType: TAssetsByType, base = "/"): TScriptTags {
    if (typeof assetListByType !== "object" || !assetListByType) {
      console.error("assetListByType is not valid, return", assetListByType)
      return
    }
    // prettier-ignore
    return Object.keys(assetListByType).reduce((a, b: string) =>
    {
      const scriptURLs = assetListByType[b]
      let scriptTags: string[]
      if (b === "js") {
        scriptTags = scriptURLs.map(url => {
          const moduleType = url.includes("legacy") ? "nomodule" : "module"
          return `<script ${moduleType} crossorigin src="${base}${url}"></script>`
        })
      }
      else if (b === "css") {
        scriptTags = scriptURLs.map(url =>
          `<link rel="stylesheet" crossorigin href="${base}${url}">`
        )
      }
      else if (b === "woff2") {
        scriptTags = scriptURLs.map(url =>
          `<link rel="preload" as=“font” type=“font/woff2" crossorigin href="${base}${url}">`
        )
      }
      return { ...a, ...(scriptTags ? {[b]: scriptTags} : {}) }
    },{})
  }

  /**
   *
   * Get assets by type (by extension):
   * ex:
   *    {
   *     js: [
   *       'index-legacy-e92b0b23.js',
   *       'polyfills-legacy-163e9122.js',
   *       'index-475b5da0.js'
   *     ],
   *     woff2: [
   *       'roboto-regular-8cef0863.woff2',
   *       'roboto-regular-8cef0863.woff2'
   *     ],
   *     css: [
   *       'index-ef71c845.css'
   *     ],
   *     ...
   *   }
   *
   * Group by extensions
   * @param assetList
   */
  static sortAssetsByType(assetList: TAssetsList): TAssetsByType {
    return assetList.reduce((a, b) => {
      const ext = b.split(".")[b.split(".").length - 1]
      if (a?.[ext] && !a[ext].includes(b)) {
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
   * Get assets list
   *
   * [
   *   'index-legacy-e92b0b23.js',
   *   'roboto-regular-8cef0863.woff2',
   *   'roboto-regular-18ab5ae4.woff',
   *   'roboto-regular-b122d9b1.ttf',
   *   'polyfills-legacy-163e9122.js',
   *   'index-475b5da0.js',
   * ]
   *
   *
   * Return all assets
   * @param manifestRawFile
   */
  static getAssets(manifestRawFile: string): TAssetsList {
    const jsonManifest = JSON.parse(manifestRawFile)

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
