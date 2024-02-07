import { Beeper } from "~/libs/events/Beeper"

class CookiesBannerService {
  public displaySignal = Beeper<boolean>(false)

  public show(): void {
    this.displaySignal.dispatch(true)
  }

  public hide(): void {
    this.displaySignal.dispatch(false)
  }

  public toggle(): void {
    this.displaySignal.dispatch(!this.displaySignal.state)
  }
}

export default new CookiesBannerService()
