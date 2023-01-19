import fetch from "cross-fetch"
import * as React from "react"
import { routes } from "./routes"
import App from "./components/app/App"
import { langServiceInstance } from "./LangService"
import { requestStaticPropsFromRoute, Router } from "@cher-ami/router"
import { GlobalDataContext } from "./GlobalDataContext"
import { preventSlashes } from "../config/helpers/prevent-slashes.js"
import palette from "../config/helpers/palette.js"
import { loadEnv } from "vite"
import { TScript, TScriptsObj } from "../prerender/helpers/ManifestParser"
import { CherScripts } from "~/server/helpers/CherScripts"
import { InsertScript } from "~/server/helpers/InsertScript"
import { ViteDevScripts } from "~/server/helpers/ViteDevScripts"

// ----------------------------------------------------------------------------- PREPARE

/**
 * Server render
 * @param url
 * @param isPrerender
 * @param scripts
 */
export async function render(url: string, scripts: TScriptsObj, isPrerender = false) {
  // Load process.env base if is available by external load, else we use VITE_APP_BASE
  // (process.env.VITE_APP_BASE is replaced on build by vite (check vite.config.ts)
  const loadEnvVars = loadEnv("", process.cwd(), "")
  let base: string = process.env.VITE_APP_BASE || loadEnvVars.VITE_APP_BASE
  const preparedUrl = preventSlashes(`${isPrerender ? base : ""}${url}`)

  // Init lang service
  const langService = langServiceInstance(base, preparedUrl)

  // Request static props
  const ssrStaticProps = await requestStaticPropsFromRoute({
    url: preparedUrl,
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
  const dom = (
    <html>
      {/* prettier-ignore */}
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

      {/* ROOT */}
      <body>
        <div id="root">
          <Router
            base={base}
            routes={routes}
            langService={langService}
            staticLocation={preparedUrl}
            initialStaticProps={ssrStaticProps}
          >
            <GlobalDataContext.Provider value={globalData}>
              <App />
            </GlobalDataContext.Provider>
          </Router>
        </div>

        {/* INJECT */}
        <CherScripts scripts={scripts.js} />
        <InsertScript name={"__SSR_STATIC_PROPS__"} data={ssrStaticProps} />
        <InsertScript name={"__GLOBAL_DATA__"} data={globalData} />
      </body>
    </html>
  )

  return dom
}
