import css from "./App.module.less"
import React from "react"
import { Link, Stack, TManageTransitions } from "@cher-ami/router"

export interface IProps {}

function App(props: IProps): JSX.Element {
  // ...
  // ------------------------------------------------------------------------------- PAGE TRANSITIONS

  /**
   * Manage page tranisitons senario
   * https://github.com/cher-ami/router/tree/main#manage-transitions
   * @param TManageTransitions
   * @returns Promise <void>
   */
  const manageTransitions = ({
    previousPage,
    currentPage,
    unmountPreviousPage,
  }: TManageTransitions): Promise<void> => {
    return new Promise(async (resolve) => {
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

      resolve()
    })
  }

  // ------------------------------------------------------------------------------- RENDER

  return (
    <div className={css.root}>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/work/first-work"}>Work - id: "first-work"</Link>
          </li>
        </ul>
      </nav>
      <Stack className={css.stack} manageTransitions={manageTransitions} />
    </div>
  )
}

export default App
