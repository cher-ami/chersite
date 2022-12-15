import "./index.less"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/app/App"
import { routes } from "./routes"
import { Router } from "@cher-ami/router"
import { createBrowserHistory } from "history"
import VhHelper from "./helpers/VhHelper"
import * as packageJson from "../package.json"
import { GlobalDataContext } from "./GlobalDataContext"
import { langServiceInstance } from "~/LangService"
import debug from "@wbe/debug"

/**
 * Logs
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
 * https://github.com/remix-run/history/blob/dev/docs/api-reference.md
 */
const history = createBrowserHistory()

/**
 * Render react app
 *
 *  Default use @cher-ami/router
 *  @doc: https://github.com/cher-ami/router
 */
const root = createRoot(document.getElementById("root"))
root.render(
  <Router
    routes={routes}
    base={base}
    history={history}
    initialStaticProps={window["__SSR_STATIC_PROPS__"]}
    langService={langServiceInstance(base)}
  >
    <GlobalDataContext.Provider value={{ globalData: window["__GLOBAL_DATA__"] }}>
      <App />
    </GlobalDataContext.Provider>
  </Router>
)
