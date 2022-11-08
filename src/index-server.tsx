import fetch from "cross-fetch"
import * as React from "react"
import ReactDOMServer from "react-dom/server"
import { routes } from "./routes"
import App from "./components/app/App"
import { langServiceInstance } from "./LangService"
import { requestStaticPropsFromRoute, Router } from "@cher-ami/router"
import { GlobalDataContext } from "./GlobalDataContext"
import { preventSlashes } from "../config/helpers/prevent-slashes.js"
import palette from "../config/helpers/palette.js"
import { loadEnv } from "vite"
export async function render(url: string, isPrerender = false) {
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

  // Request Global data example-client
  const requestGlobalData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()
    return { users }
  }

  const globalData = await requestGlobalData()

  // Template for server
  const renderToString = ReactDOMServer.renderToString(
    <Router
      base={base}
      routes={routes}
      staticLocation={preparedUrl}
      initialStaticProps={ssrStaticProps}
      langService={langService}
    >
      <GlobalDataContext.Provider value={globalData}>
        <App />
      </GlobalDataContext.Provider>
    </Router>
  )

  return {
    meta: ssrStaticProps?.props?.meta,
    renderToString,
    ssrStaticProps,
    globalData,
    languages: langService.languages,
  }
}
