/**
 * couleur util API
 */
function initCouleur() {
  const _close = "\u001B[39m"

  /**
   * Wrapper for ansi 256 code
   * @param code
   */
  const _wrapAnsi256 = (code) => `\u001B[${38};5;${code}m`

  /**
   * Convert RGB color to ansi 256
   * @param red
   * @param green
   * @param blue
   */
  const _rgbToAnsi256 = (red: number, green: number, blue: number): number => {
    if (red === green && green === blue) {
      if (red < 8) return 16
      if (red > 248) return 231
      return Math.round(((red - 8) / 247) * 24) + 232
    }
    return (
      16 +
      36 * Math.round((red / 255) * 5) +
      6 * Math.round((green / 255) * 5) +
      Math.round((blue / 255) * 5)
    )
  }

  /**
   * Color string with rbg color
   * ex: couleur.rbg(255,0,0)('foo')
   */
  const rgb =
    (r: number, g: number, b: number) =>
    (str: string): string =>
      _wrapAnsi256(_rgbToAnsi256(r, g, b)) + str + _close

  /**
   * Bold text
   * @param str
   */
  const bold = (str: string): string => "\x1B[1m" + str + "\x1B[22m"

  return {
    rgb,
    bold,
  }
}

const couleur = initCouleur()
export default couleur
