import { TLanguage, TRoute } from "@cher-ami/router"

export type TExtendLangage = TLanguage & { tag: string }

export interface IConfigData {
  lang: TExtendLangage[]
  routes: TRoute[]
}

export interface IGlobalData {
  dictionary: TDictionary
  lang: TExtendLangage[]
}
export type TDictionary<T = string> = { [key: string]: T }

export type TImageData = {
  id: number
  title: string
  filename: string
  alt: string
  description: string
  caption: string
  subtype: string
  srcset: string
  ratio: number
  paddingRatio: string
  width: number
  height: number
  url: string
}

export type TFileData = {
  id: number
  title: string
  url: string
  filename: string
  description: string
  caption: string
  mimeType: string
}

// ----------------------------------------------------------------------------- POSTS

// ----------------------------------------------------------------------------------- PAGES

/**
 * Page interfaces struct
 */

export type TGlobalPageData = {
  metas: {
    title: string
    description: string
    imageUrl: string
  }
  alternateLanguage: {
    lang: string
    slug: string
  }[]
}

export interface IPage<TPage> {
  global: TGlobalPageData
  data: TPage
}

export interface IHomePageData {
  // ...
}
