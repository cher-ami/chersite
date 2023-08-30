import { browserOnly } from "@cher-ami/utils"

class ScrollLocker {
  isLocked = false
  el = browserOnly(() => document.body)

  public lock(): void {
    if (!this.el) return
    this.el.style.overflow = "hidden"
    this.isLocked = true
  }

  public unlock(): void {
    if (!this.el) return
    this.el.style.overflow = "auto"
    this.isLocked = false
  }

  public set(lock: boolean): void {
    if (lock) this.lock()
    else this.unlock()
  }
}

export default new ScrollLocker()
