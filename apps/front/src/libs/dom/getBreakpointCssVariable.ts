export type TBreakpoint =
  | "--breakpoint-mobile"
  | "--breakpoint-tablet"
  | "--breakpoint-laptop"
  | "--breakpoint-bigLaptop"
  | "--breakpoint-desktop"

export const getBreakpointCssVariable = (breakpoint: TBreakpoint): string =>
  getComputedStyle(document.documentElement).getPropertyValue(breakpoint)
