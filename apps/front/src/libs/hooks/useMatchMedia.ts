import { useEffect, useState } from "react"

/**
 * useMatchMedia
 * ex:
 *  const isTabletAndMore = useMatchMedia("(min-width:768px)")
 */
export const useMatchMedia = (value: string): boolean => {
  const matcher = window.matchMedia(value)
  const [match, setMatch] = useState<boolean>(matcher.matches)
  useEffect(() => {
    const handler = (): void => setMatch(matcher.matches)
    handler()
    matcher.addEventListener("change", handler)
    return () => {
      matcher.removeEventListener("change", handler)
    }
  }, [])
  return match
}
