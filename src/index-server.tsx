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
export async function render(url: string, prerender = false) {
  // Prepare
  const loadEnvVars = loadEnv("", process.cwd(), "")
  const base = process.env.VITE_APP_BASE || loadEnvVars?.VITE_APP_BASE
  const langService = langServiceInstance(base, url)
  const preparedUrl = preventSlashes(`${base}${url}`)

  if (prerender) {
    console.log(palette.grey(` Prepared URL (VITE_APP_BASE + URL) → ${preparedUrl}`))
  }

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
      <GlobalDataContext.Provider value={{ globalData }}>
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
