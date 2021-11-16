/**
 * Set --vh variables on document, depending of clientHeight
 *
 * @example
 * height: calc(var(--vh, 1vh) * 100);
 *
 * @see {@link https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ | The trick to viewport units on mobile}
 */
export default class VhHelper {
  constructor() {
    this.onResize()
    this.initEvents()
  }

  public initEvents() {
    window.addEventListener("resize", this.onResize)
  }

  public removeEvents() {
    window.removeEventListener("resize", this.onResize)
  }

  protected onResize = () => {
    const doc = document.documentElement
    const calc = (doc.clientHeight || window.innerHeight) * 0.01
    doc.style.setProperty("--vh", `${calc}px`)
  }
}
