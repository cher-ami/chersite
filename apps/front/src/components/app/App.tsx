import debug from "@cher-ami/debug"
import { Link, Stack, TManageTransitions } from "@cher-ami/router"
import React, { useEffect } from "react"
import { useZoomLevel } from "~/libs/hooks/useZoomLevel"
import { EPages } from "~/routes"
import css from "./App.module.scss"
const log = debug(`front:App`)

function App() {
  const zoom = useZoomLevel(false)

  useEffect(() => {
    log("Zoom level", zoom)
  }, [zoom])

  /**
   * Manage page transitions scenario
   * https://github.com/cher-ami/router/tree/main#manage-transitions
   * @param TManageTransitions
   * @returns Promise <void>
   */
  const manageTransitions = async ({
    previousPage,
    currentPage,
    unmountPreviousPage
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

  const navExample = (
    <nav className={css.nav}>
      <div>
        <Link className={css.link} to={{ name: EPages.HOME }}>
          Home
        </Link>
      </div>
      {["first", "second"].map((slug) => (
        <div key={slug}>
          <Link className={css.link} to={{ name: EPages.WORK, params: { slug } }}>
            Work {slug}
          </Link>
        </div>
      ))}
    </nav>
  )

  return (
    <div className={css.root}>
      {navExample}
      <Stack className={css.stack} manageTransitions={manageTransitions} />
    </div>
  )
}

export default App
