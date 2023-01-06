import fetch from "cross-fetch"
import * as React from "react"
import { renderToString } from "react-dom/server"
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
import { patchScriptAttribute } from "~/server/helpers/patchScriptAttribute"
import { InsertScript } from "~/server/helpers/InsertScript"

// ----------------------------------------------------------------------------- PREPARE

/**
 * Server render
 * @param url
 * @param isPrerender
 * @param scripts
 */
export async function render(url: string, scripts: TScriptsObj, isPrerender = false) {
  const loadEnvVars = loadEnv("", process.cwd(), "")

  // Load process.env base if is available by external load, else we get vite app base
  // (process.env.VITE_APP_BASE is replaced on build by vite (check vite.config.ts)
  let base: string = process.env.VITE_APP_BASE || loadEnvVars.VITE_APP_BASE
  const preparedUrl = preventSlashes(`${isPrerender ? base : ""}${url}`)

  if (isPrerender) {
    console.log(palette.grey(` base → ${base}`))
    console.log(palette.grey(` URL → ${url}`))
    console.log(palette.grey(` preparedUrl (base + URL) → ${preparedUrl}`))
  }

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
  const rToString = renderToString(
    <html>
      {/* Head */}
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta httpEquiv="x-ua-compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <link rel="canonical" href={meta?.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta?.siteName} />
        <meta property="og:url" content={meta?.url} />
        <meta property="og:title" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:image" content={meta?.image} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={meta?.siteName} />
        <meta name="twitter:url" content={meta?.url} />
        <meta name="twitter:title" content={meta?.title} />
        <meta name="twitter:description" content={meta?.description} />
        <meta name="twitter:image" content={meta?.image} />

        {/* INJECT */}
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

  return patchScriptAttribute(rToString)
}
