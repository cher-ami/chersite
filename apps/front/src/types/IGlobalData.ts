import { TLanguage, TRoute } from "@cher-ami/router"

/**
 * Global data interface
 */
export interface IGlobalData {
  // dictionary: TDictionary
  // ...
}

export interface IApiConfig {
  lang: TLanguage[]
  routes: TRoute[]
}

export type IFetchError = {
  error: boolean
  status: number
  message: string
  url: string
}
