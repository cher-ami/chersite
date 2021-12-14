import "./index.less"
import React from "react"
import ReactDOM, { Renderer } from "react-dom"
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
  public reactApp: void
  public appBase = import.meta.env.VITE_APP_BASE as string

  constructor() {
    log("version:", packageJson.version)
    log("public env:", import.meta.env)

    this.initHelpers()
    this.render()
  }

  /**
   * Init global helpers
   */
  protected initHelpers(): void {
    new VhHelper()
  }

  /**
   * Render react app
   *
   *  Default use @cher-ami/router
   *  @doc: https://github.com/cher-ami/router
   */
  protected render(): void {
    this.reactApp = ReactDOM.render(
      <Router routes={routes} base={this.appBase}>
        <App />
      </Router>,
      document.getElementById("root")
    )
  }
}

export default new InitApp()
