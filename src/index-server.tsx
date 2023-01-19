import fetch from "cross-fetch"
import * as React from "react"
import { routes } from "./routes"
import App from "./components/app/App"
import { langServiceInstance } from "./LangService"
import { requestStaticPropsFromRoute, Router } from "@cher-ami/router"
import { GlobalDataContext } from "./GlobalDataContext"
import { preventSlashes } from "../config/helpers/prevent-slashes.js"
import { loadEnv } from "vite"
import { TScriptsObj } from "../prerender/helpers/ManifestParser"
import { CherScripts } from "~/server/helpers/CherScripts"
import { InsertScript } from "~/server/helpers/InsertScript"
import { ViteDevScripts } from "~/server/helpers/ViteDevScripts"
import { JSXElementConstructor, ReactElement } from "react"

// ----------------------------------------------------------------------------- PREPARE

/**
 * Server render
 * @param url
 * @param isPrerender
 * @param scripts
 */
export async function render(
  url: string,
  scripts: TScriptsObj,
  isPrerender = false
): Promise<ReactElement> {
  // prepare base
  const base = process.env.VITE_APP_BASE || loadEnv("", process.cwd(), "").VITE_APP_BASE
  url = preventSlashes(`${isPrerender ? base : ""}${url}`)

  // Init lang service
  const langService = langServiceInstance(base, url)

  // Request static props
  const ssrStaticProps = await requestStaticPropsFromRoute({
    url,
    base,
    routes,
    langService,
  })
  const meta = ssrStaticProps?.props?.meta

  // Request Global data example-client
  const requestGlobalData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const users = await res.json()
    return { users }
  }

  const globalData = await requestGlobalData()

  // Template for server
  // prettier-ignore
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
        <InsertScript name={"__SSR_STATIC_PROPS__"} data={ssrStaticProps} />
        <InsertScript name={"__GLOBAL_DATA__"} data={globalData} />
      </body>
    </html>
  )
}
