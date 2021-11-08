/**
 * Breakpoints
 * NOTE: These values need to be sync with partials/breakpoints.less
 * These are used by "useIsLessThan" hook
 * In the future, there will need to be inject in a responsive manager
 */
export enum EBreakpoints {
  MOBILE = 320,
  PHABLET = 600,
  TABLET = 768,
  LAPTOP = 1024,
  BIG_LAPTOP = 1440,
  DESKTOP = 1680,
}
