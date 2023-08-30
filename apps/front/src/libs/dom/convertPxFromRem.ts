/**
 * @name convertPxFromRem
 * @decription Convert px from Rem from CSS variable calculated in the ratio.less file
 * Usefull to get the same value in px that the value we put in rem in our CSS
 * @param {number} pxValue
 * @returns {number}
 */

export const convertPxFromRem = (pxValue: number): number => {
  const baseFonSizeVariable = getRootCssVariable("--font-size")
  const baseFontSizesPxValue = convertFontSizeCssVarToPx(baseFonSizeVariable)

  return pxValue * baseFontSizesPxValue
}

/**
 * @name convertFontSizeCssVarToPx
 * @description Convert the font size variable, calculated in the ratio.less file to px
 * @param cssUnitValue
 * @returns
 */
const convertFontSizeCssVarToPx = (cssUnitValue: string): number => {
  const isCalc = cssUnitValue.startsWith("calc")
  const isVw = cssUnitValue.endsWith("vw")
  const isVh = cssUnitValue.endsWith("vh")

  if (isCalc) {
    const viewportReferenceDesktopHeight = parseFloat(
      getRootCssVariable("--viewport-reference-desktop-height")
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
 * @name getRootCssVariable
 * @description Get CSS variable from root element
 * @param variableName
 * @returns
 */
const getRootCssVariable = (variableName: string): string => {
  const rootStyles = window.getComputedStyle(document.documentElement)
  return rootStyles.getPropertyValue(variableName)
}
