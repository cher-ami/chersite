import css from "./App.module.less"
import React from "react"
import { Link, Stack, TManageTransitions } from "@cher-ami/router"

import debug from "@wbe/debug"
import { EPages } from "~/routes"
import DevMenu from "~/components/devMenu/DevMenu"
const log = debug(`front:App`)

export interface IProps {}

function App(props: IProps) {
  /**
   * Manage page transitions scenario
   * https://github.com/cher-ami/router/tree/main#manage-transitions
   * @param TManageTransitions
   * @returns Promise <void>
   */
  const manageTransitions = async ({
    previousPage,
    currentPage,
    unmountPreviousPage,
  }: TManageTransitions): Promise<void> => {
    const $current = currentPage?.$element

    // hide new page
    if ($current) $current.style.visibility = "hidden"

    // play out and unmount previous page
    if (previousPage) {
      await previousPage.playOut()
      unmountPreviousPage()
    }

    // wait page isReady promise
    await currentPage?.isReadyPromise?.()

    // show and play in new page
    if (currentPage) {
      if ($current) $current.style.visibility = "visible"
      await currentPage?.playIn()
    }
  }

  // ------------------------------------------------------------------------------- RENDER

  return (
    <div className={css.root}>
      <nav>
        <ul>
          <li>
            <Link to={{ name: EPages.HOME }}>Home</Link>
          </li>
          <li>
            <Link to={{ name: EPages.WORK, params: { slug: "first-work" } }}>
              Work - id: "first-work"
            </Link>
          </li>
          <li>
            <Link to={{ name: EPages.WORK, params: { slug: "second-work" } }}>
              Work - id: "second-work"
            </Link>
          </li>
        </ul>
      </nav>
      <Stack className={css.stack} manageTransitions={manageTransitions} />

      <DevMenu />
    </div>
  )
}

export default App
