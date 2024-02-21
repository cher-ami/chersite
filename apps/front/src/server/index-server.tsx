import fetch from "cross-fetch"
import * as React from "react"
import { routes } from "~/routes"
import App from "../components/app/App"
import { languages, showDefaultLangInUrl } from "~/languages"
import { LangService, requestStaticPropsFromRoute, Router } from "@cher-ami/router"
import { GlobalDataContext } from "~/store/GlobalDataContext"
import { TScriptsObj } from "../../prerender/helpers/ManifestParser"
import { CherScripts } from "~/server/helpers/CherScripts"
import { RawScript } from "~/server/helpers/RawScript"
import { ViteDevScripts } from "~/server/helpers/ViteDevScripts"
import { ReactElement } from "react"
import { preventSlashes } from "~/server/helpers/preventSlashes"

// ----------------------------------------------------------------------------- PREPARE

/**
 * Server render
 * @param url
 * @param isPrerender
 * @param scripts
 * @param base
 */
// prettier-ignore
export async function render(
  url: string,
  scripts: TScriptsObj,
  isPrerender = false,
  base: string
): Promise<ReactElement> {
  // prepare base & URL
  url = preventSlashes(`${isPrerender ? base : ""}${url}`)

  // Init lang service
  const langService = new LangService({
    staticLocation: url,
    showDefaultLangInUrl,
    languages,
    base
  })

  // Request static props
  const ssrStaticProps = await requestStaticPropsFromRoute({
    url,
    base,
    routes,
    langService
  })
  const meta = ssrStaticProps?.props?.meta
  const globalData = { foo: "bar" }

  return (
    <html lang={langService.currentLang.key}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>{meta?.title || "app"}</title>
        <meta name="description" content={meta?.description} />
        <link rel="canonical" href={meta?.url || url} />
        <ViteDevScripts />
        <CherScripts scripts={scripts.css} />
        <CherScripts scripts={scripts.woff2} />
      </head>
      <body>
        <div id="root">
          <Router
            base={base}
            routes={routes}
            langService={langService}
            staticLocation={url}
            initialStaticProps={ssrStaticProps}
          >
            <GlobalDataContext.Provider value={globalData}>
              <App />
            </GlobalDataContext.Provider>
          </Router>
        </div>
        <CherScripts scripts={scripts.js} />
        <RawScript name={"__SSR_STATIC_PROPS__"} data={ssrStaticProps} />
        <RawScript name={"__GLOBAL_DATA__"} data={globalData} />
      </body>
    </html>
  )
}
