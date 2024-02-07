import "./styles/index.scss"
import React from "react"
import { hydrateRoot } from "react-dom/client"
import App from "./components/app/App"
import { routes } from "./routes"
import { LangService, Router } from "@cher-ami/router"
import { createBrowserHistory } from "history"
import * as packageJson from "../package.json"
import { GlobalDataContext } from "./store/GlobalDataContext"
import { languages, showDefaultLangInUrl } from "~/languages"
import debug from "@cher-ami/debug"
import VhHelper from "~/libs/dom/VhHelper"

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
 * Init global helpers
 */
new VhHelper()

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
  base,
})

/**
 * Render react app wrapped by @cher-ami/router
 *  @doc https://github.com/cher-ami/router
 */
hydrateRoot(
  document.getElementById("root"),
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
