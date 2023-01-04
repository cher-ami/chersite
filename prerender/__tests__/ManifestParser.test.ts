import { expect, it } from "vitest"
import { ManifestParser } from "../helpers/ManifestParser"
import * as mfs from "../../config/helpers/mfs.js"
import config from "../../config/config.js"

const manifestRaw = await mfs.readFile(`${config.outDirStatic}/manifest.json`)
const parser = new ManifestParser(manifestRaw)

it("should return assets list", () => {
  expect(parser.getAssets()).toEqual([
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

it("should return l", () => {
  expect(parser.getAssetsByType(parser.getAssets())).toEqual("")
})
