import { listen } from "@cher-ami/utils"
import { useEffect, useState } from "react"
import debug from "@cher-ami/debug"

const log = debug("front:zoomLevel")

/**
 * useFontZoom
 * Update font-size according to zoom level but keeps the viewport units
 * @return number
 */
export function useZoomLevel(enableFont: boolean = true): number {
  const [zoomLevel, setZoomLevel] = useState<number>(1)
  let lastDPR = null

  /**
   * Init font size calcul
   */
  useEffect(() => {
    changeZoomLevel()
    return listen(window, "resize", changeZoomLevel)
  }, [])

  /**
   * On zoom, set font size according to zoom level, but keep vh/vw ratio
   */
  const changeZoomLevel = (): void => {
    if (lastDPR === window.devicePixelRatio) return
    const zoom = getZoomLevel()
    setZoomLevel(zoom)

    if (!enableFont) return

    const fontSize = getComputedStyle(document.documentElement).getPropertyValue(
      "--initial-font-size"
    )
    const unit = fontSize.includes("vh") ? "vh" : "vw"
    document.documentElement.style.setProperty(
      "--font-size",
      parseFloat(fontSize) * zoom + unit
    )
  }

  /**
   * Get zoom level
   * WARNING : Tricks for firefox using localstorage
   * @returns number
   */
  const getZoomLevel = (): number => {
    let zoom = 1

    if (screen.width === window.innerWidth) {
      //Firefox Trick; set first DPR in localstorage to get a reference DPR
      let initialDpr = getInitialDPR()
      zoom = window.devicePixelRatio / initialDpr
    } else {
      zoom = screen.width / window.innerWidth
      if (isNaN(zoom) || zoom <= 0) {
        zoom = window.outerWidth / window.innerWidth
      }
    }
    log("zoom", zoom)
    lastDPR = window.devicePixelRatio
    return zoom
  }

  /**
   * Get DPR,
   * If first load, get from window, else from localStorage
   * @returns number
   */
  const getInitialDPR = (): number => {
    let initialDpr = window.localStorage.getItem("idpr")
    if (!initialDpr) {
      initialDpr = window.devicePixelRatio.toString()
      window.localStorage.setItem("idpr", initialDpr)
    }

    return parseFloat(initialDpr)
  }

  return zoomLevel
}
