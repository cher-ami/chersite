import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { routes } from "./routes";
import { Router } from "@cher-ami/router";
import VhHelper from "./helpers/VhHelper";
import * as packageJson from "../package.json";

import debug from "@wbe/debug";
const log = debug("front:index");

/**
 * Init App
 */
class InitApp {
  constructor() {
    log("version:", packageJson.version);
    log("public env:", import.meta.env);

    this.initHelpers();
    this.render();
  }

  /**
   * Init Helpers
   */
  protected initHelpers() {
    new VhHelper();
  }

  /**
   * render the App
   */
  protected render() {
    ReactDOM.render(
      // <React.StrictMode>
        <Router routes={routes} base={import.meta.env.VITE_ROUTER_BASE_URL as string}>
          <App />
        </Router>,
      // </React.StrictMode>,
      document.getElementById("root")
    );
  }
}

export default new InitApp();
