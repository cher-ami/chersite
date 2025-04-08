import { useEffect } from "react"

const DisablePinchZoom = () => {
  useEffect(() => {
    const disableZoom = (e: Event) => {
      e.preventDefault()
      document.body.style.zoom = "0.999999999"
    }

    const restoreZoom = (e: Event) => {
      e.preventDefault()
      document.body.style.zoom = "1"
    }

    document.addEventListener("gesturestart", disableZoom)
    document.addEventListener("gesturechange", disableZoom)
    document.addEventListener("gestureend", restoreZoom)

    return () => {
      document.removeEventListener("gesturestart", disableZoom)
      document.removeEventListener("gesturechange", disableZoom)
      document.removeEventListener("gestureend", restoreZoom)
    }
  }, [])
}

export default DisablePinchZoom
