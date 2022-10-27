import fetch from "cross-fetch"
import * as React from "react"
import ReactDOMServer from "react-dom/server"
import { routes } from "./routes"
import App from "./components/app/App"
import { langServiceInstance } from "./LangService"
import { requestStaticPropsFromRoute, Router } from "@cher-ami/router"
import { GlobalDataContext } from "./GlobalDataContext"

export async function render(url: string) {
  // Prepare common
  const base = process.env.VITE_APP_BASE
  const langService = langServiceInstance(base, url)

  // Request static props
  const ssrStaticProps = await requestStaticPropsFromRoute({
    url,
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
      staticLocation={url}
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
  }
}
