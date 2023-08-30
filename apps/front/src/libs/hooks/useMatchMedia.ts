import { useEffect, useState } from "react"
import { browserOnly } from "@cher-ami/utils"

/**
 * useMatchMedia
 * ex:
 *  const isTabletAndMore = useMatchMedia("(min-width:768px)")
 */
export const useMatchMedia = (value: string): boolean => {
  const matcher = browserOnly(() => window.matchMedia(value))
  const [match, setMatch] = useState<boolean>(matcher?.matches)
  useEffect(() => {
    const handler = (): void => setMatch(matcher?.matches)
    handler()
    matcher.addEventListener("change", handler)
    return () => {
      matcher.removeEventListener("change", handler)
    }
  }, [])
  return match
}
