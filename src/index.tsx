import "./index.less"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/app/App"
import { routes } from "./routes"
import { Router } from "@cher-ami/router"
import { createBrowserHistory } from "history"
import VhHelper from "./helpers/VhHelper"
import * as packageJson from "../package.json"
import debug from "@wbe/debug"

const appBase = import.meta.env.VITE_APP_BASE as string

/**
 * Logs
 */
const log = debug("front:index")
log("version:", packageJson.version)
log("public env:", import.meta.env)

/**
 * Init global helpers
 */
new VhHelper()

/**
 * Create an history for the global router instance
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
  <Router routes={routes} base={appBase} history={history}>
    <App />
  </Router>
)
