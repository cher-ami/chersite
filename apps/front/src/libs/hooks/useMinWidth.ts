import {
  getBreakpointCssVariable,
  TBreakpoint,
} from "~/libs/dom/getBreakpointCssVariable"
import { browserOnly } from "@cher-ami/utils"
import { useMatchMedia } from "~/libs/hooks/useMatchMedia"

/**
 * useMatchMedia's shortcut for min-width
 * @param breakpoint
 *
 * ex:
 *  const isMinWidthTablet = useIsMinWidth("--breakpoint-tablet")
 *
 */
export const useIsMinWidth = (breakpoint: TBreakpoint): boolean => {
  return browserOnly(() =>
    useMatchMedia(`(min-width:${getBreakpointCssVariable(breakpoint)})`),
  )
}
