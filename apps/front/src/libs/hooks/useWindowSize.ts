import { useEffect, useState } from "react"
import { isBrowser } from "@cher-ami/utils"

/**
 * Return window Size
 */
export const useWindowSize = (): { width: number; height: number } => {
  const [size, setSize] = useState(
    isBrowser()
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: null, height: null },
  )
  useEffect(() => {
    const handler = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    handler()
    window.addEventListener("resize", handler)
    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])
  return size
}
