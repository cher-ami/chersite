import { useEffect, useState } from "react"

/**
 * useIsLandscapeScreen
 * @return boolean
 */
export function useIsLandscapeScreen(): boolean {
  const [isLandscapeScreen, setIsLandscapeScreen] = useState<boolean>(
    window.innerWidth > window.innerHeight,
  )

  const handler = () => {
    setIsLandscapeScreen(window.innerWidth > window.innerHeight)
  }

  useEffect(() => {
    handler()
    window.addEventListener("resize", handler)
    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])

  return isLandscapeScreen
}
