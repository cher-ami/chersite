import "./index.less"
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/app/App"
import { routes } from "./routes"
import { Router } from "@cher-ami/router"
import VhHelper from "./helpers/VhHelper"
import * as packageJson from "../package.json"

import debug from "@wbe/debug"
const log = debug("front:index")

/**
 * Init App
 */
class InitApp {
  public reactApp

  constructor() {
    log("version:", packageJson.version)
    log("public env:", import.meta.env)
    this.initHelpers()
    this.render()
  }

  protected initHelpers() {
    new VhHelper()
  }

  protected render() {
    this.reactApp = ReactDOM.render(
      <React.StrictMode>
        {/*
           @cher-ami/router
           @doc: https://github.com/cher-ami/router
         */}
        <Router routes={routes} base={import.meta.env.VITE_APP_BASE as string}>
          <App />
        </Router>
      </React.StrictMode>,
      document.getElementById("root")
    )
  }
}

export default new InitApp()
