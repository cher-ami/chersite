/**
 * @name convertRemToPx
 * @description Convert px from Rem from CSS variable calculated in the _ratio.scss file
 * Usefully to get the same value in px that the value we put in rem in our CSS
 * @param {number} pxValue
 * @returns {number}
 */

export const convertRemToPx = (pxValue: number): number => {
  const baseFonSizeVariable = _getRootCssVariable("--font-size")
  const baseFontSizesPxValue = _convertFontSizeCssVarToPx(baseFonSizeVariable)
  return pxValue * baseFontSizesPxValue
}

/**
 * @name _convertFontSizeCssVarToPx
 * @description Convert the font size variable, calculated in the _ratio.scss file to px
 * @param cssUnitValue
 * @returns
 */
const _convertFontSizeCssVarToPx = (cssUnitValue: string): number => {
  const isCalc = cssUnitValue.includes("calc")
  const isVw = cssUnitValue.endsWith("vw")
  const isVh = cssUnitValue.endsWith("vh")

  if (isCalc) {
    const viewportReferenceDesktopHeight = parseFloat(
      _getRootCssVariable("--viewport-reference-desktop-height")
    )
    return (1 / viewportReferenceDesktopHeight) * window.innerHeight
  }
  if (isVw) {
    return (parseFloat(cssUnitValue.split("vw")[0]) * window.innerWidth) / 100
  }
  if (isVh) {
    return (parseFloat(cssUnitValue.split("vh")[0]) * window.innerHeight) / 100
  }
}

/**
 * @name _getRootCssVariable
 * @description Get CSS variable from root element
 * @param variableName
 * @returns
 */
const _getRootCssVariable = (variableName: string): string => {
  const rootStyles = window.getComputedStyle(document.documentElement)
  return rootStyles.getPropertyValue(variableName)
}
