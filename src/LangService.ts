import { LangService, TLanguage } from "@cher-ami/router"

/**
 * Available languages
 * list of available languages
 *
 */
const languages: TLanguage[] = [
  {
    key: "fr",
    default: true,
  },
  // {
  //   key: "en",
  // },
]

/**
 * Create LangService instance
 * @param base
 * @param url
 */
export const langServiceInstance = (base = "/", url?: string): LangService =>
  new LangService({
    ...(url ? { staticLocation: url } : {}),
    showDefaultLangInUrl: false,
    languages,
    base,
  })
