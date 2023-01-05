import { expect, it } from "vitest"
import { ManifestParser } from "../helpers/ManifestParser"
import * as mfs from "../../config/helpers/mfs.js"
import config from "../../config/config.js"

const manifestRaw = await mfs.readFile(`${config.outDirStatic}/manifest.json`)

it("should return assets list", () => {
  const assets = ManifestParser.getAssets(manifestRaw)
  expect(assets).toEqual([
    "index-legacy-e92b0b23.js",
    "roboto-regular-8cef0863.woff2",
    "roboto-regular-18ab5ae4.woff",
    "roboto-regular-b122d9b1.ttf",
    "polyfills-legacy-163e9122.js",
    "index-475b5da0.js",
    "roboto-regular-8cef0863.woff2",
    "roboto-regular-18ab5ae4.woff",
    "roboto-regular-b122d9b1.ttf",
    "index-ef71c845.css",
  ])
})

it("should return a list of assets by type", () => {
  const assets = ManifestParser.getAssets(manifestRaw)
  const assetsByType = ManifestParser.sortAssetsByType(assets)
  const extensions = ["js", "woff2", "woff", "ttf", "css"]
  expect(Object.keys(assetsByType)).toEqual(extensions)

  extensions.forEach((e) => {
    expect(
      assetsByType[e].every((f) => f.split(".")[f.split(".").length - 1] === e)
    ).toBe(true)
  })
})

it("should return a list of script tag", () => {
  const assets = ManifestParser.getAssets(manifestRaw)
  const assetsByType = ManifestParser.sortAssetsByType(assets)
  const scriptTags = ManifestParser.getScriptTags(assetsByType)
  const scriptTagsFromManifest = ManifestParser.getScriptTagFromManifest(manifestRaw)
  expect(scriptTags).toEqual(scriptTagsFromManifest)
})
