import fetch from "cross-fetch"
import * as React from "react"
import { routes } from "~/routes"
import App from "./components/app/App"
import { languages, showDefaultLangInUrl } from "~/languages"
import { LangService, requestStaticPropsFromRoute, Router } from "@cher-ami/router"
import { GlobalDataContext } from "~/store/GlobalDataContext"
import { TScriptsObj } from "../prerender/helpers/ManifestParser"
import { CherScripts } from "~/libs/core/CherScripts"
import { RawScript } from "~/libs/core/RawScript"
import { ViteDevScripts } from "~/libs/core/ViteDevScripts"
import { ReactElement } from "react"
import favicon from "./assets/favicon.png"

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

  // prepare base & URL, remove trailing slashes
  url = `${isPrerender ? base : ""}${url}`.replace(/(https?:\/\/)|(\/)+/g, "$1$2")

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

  const is404 = ssrStaticProps?.props?.notFound

  return (
    <html lang={langService.currentLang.key} data-is404={is404}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>{meta?.title || "Cher ami, App"}</title>
        <meta name="description" content={meta?.description} />
        <link rel="canonical" href={meta?.url || url} />
        
        {/* OG Meta */}
        <meta property="og:type" content="siteweb" />
        <meta property="og:title" content={meta?.title || "Cher ami, App"} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:image" content={import.meta.env.VITE_APP_URL + "/share_image.png"} />
        <meta property="og:url" content={meta?.pageUrl || url} />
        <meta property="og:site_name" content={meta?.title ||  "Cher ami, App"} />

        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />

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
