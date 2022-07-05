/**
 * getCssVars
 * Returns css var value
 * @param varName
 * @param target
 */
export function getCssVariable<T extends string>(
  varName: T,
  target = document.documentElement
): string {
  return getComputedStyle(target).getPropertyValue(varName)
}
