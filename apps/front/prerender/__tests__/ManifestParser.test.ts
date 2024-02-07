import { expect, it } from "vitest"
import { ManifestParser } from "../helpers/ManifestParser"
import path from "path"
import { fileURLToPath } from "url"
import * as fs from "fs"
const url = import.meta.url

const manifestRaw = fs.readFileSync(
  path.join(path.dirname(fileURLToPath(url)), `fixtures/manifest.json`),
  { encoding: "utf8" },
)

it("should return assets list", () => {
  const assets = ManifestParser.getAssets(manifestRaw)
  expect(assets).toBeDefined()
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
  const scriptTags = ManifestParser.getScripts(assetsByType)
  const scriptTagsFromManifest = ManifestParser.getScriptTagFromManifest(manifestRaw)
  expect(scriptTags).toEqual(scriptTagsFromManifest)
})
