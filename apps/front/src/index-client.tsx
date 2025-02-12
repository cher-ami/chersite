import debug from "@cher-ami/debug"
import { LangService, Router } from "@cher-ami/router"
import { createBrowserHistory } from "history"
import React from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { languages, showDefaultLangInUrl } from "~/languages"
import * as packageJson from "../package.json"
import App from "./components/app/App"
import { routes } from "./routes"
import { GlobalDataContext } from "./store/GlobalDataContext"
import "./styles/index.scss"

/**
 * Initial logs
 */
const log = debug("front:index")
log("version:", packageJson.version)
log("public env:", import.meta.env)

/**
 * Base
 * Load process.env base if is available by external load, else we get vite app base
 * (process.env.VITE_APP_BASE is replaced on build by vite (check vite.config.ts)
 */
const base: string = process.env.VITE_APP_BASE || import.meta.env.VITE_APP_BASE
log("Selected base", base)

/**
 * Create a history for the global router instance
 * @doc https://github.com/remix-run/history/blob/dev/docs/api-reference.md
 */
const history = createBrowserHistory()

/**
 *  Init router lang service
 *  @doc https://github.com/cher-ami/router/tree/v3#LangService
 */
const langService = new LangService({
  showDefaultLangInUrl,
  languages,
  base
})

/**
 * Render react app wrapped by @cher-ami/router
 *  @doc https://github.com/cher-ami/router
 */

const rootEl = document.getElementById("root")
const render = (
  <Router
    routes={routes}
    base={base}
    history={history}
    initialStaticProps={window["__SSR_STATIC_PROPS__"]}
    langService={langService}
  >
    <GlobalDataContext.Provider value={window["__GLOBAL_DATA__"]}>
      <App />
    </GlobalDataContext.Provider>
  </Router>
)

/**
 * Render or hydrate the app, depends on build type
 */
if (import.meta.env.VITE_SPA === "true") {
  createRoot(rootEl).render(render)
} else {
  hydrateRoot(rootEl, render)
}
