import debug from "@cher-ami/debug"
import { useEffect, useState } from "react"

const log = debug("front:zoomLevel")

/**
 * useFontZoom
 * Update font-size according to zoom level but keeps the viewport units
 * @return number
 */
export function useZoomLevel(enableFont: boolean = true): number {
  const [zoomLevel, setZoomLevel] = useState<number>(1)
  let lastWindowSize = null

  /**
   * Init font size calcul
   */
  useEffect(() => {
    const observer = new ResizeObserver(changeZoomLevel)
    observer.observe(document.body)

    return () => {
      observer.disconnect()
    }
  }, [])

  /**
   * On zoom, set font size according to zoom level, but keep vh/vw ratio
   */
  const changeZoomLevel = (entries?: ResizeObserverEntry[]): void => {
    if (window.outerWidth === entries[0].contentBoxSize[0].inlineSize) return

    const zoom = getZoomLevel(entries?.[0] || null)
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
  const getZoomLevel = (entry?: ResizeObserverEntry): number => {
    let zoom = 1

    if (screen.width === window.innerWidth) {
      //Firefox Trick; set first DPR in localstorage to get a reference DPR
      let initialDpr = getInitialDPR()
      zoom = window.devicePixelRatio / initialDpr
    } else {
      zoom = window.outerWidth / entry.contentBoxSize[0].inlineSize
    }
    log("zoom", zoom)
    lastWindowSize = window.outerWidth
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
