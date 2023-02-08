import debug from "@wbe/debug"
import { Beeper } from "~/libs/events/Beeper"
const componentName = "PreloadService"
const log = debug(`front:${componentName}`)

export interface IPreloadSignal {
  complete: boolean
  counter: number
  percent: number
}

export class PreloadService {
  public preloadUrls = []
  public onPreloadSignal

  constructor(preloadUrls: string[]) {
    this.preloadUrls = preloadUrls
    this.onPreloadSignal = Beeper<IPreloadSignal>({
      complete: false,
      counter: 0,
      percent: 0,
    })
  }

  /**
   * Start preload
   * @protected
   */
  public start(): Promise<void> {
    return new Promise((resolve) => {
      log("this.preloadUrls", this.preloadUrls)

      if (!this.preloadUrls?.length) {
        log("no urls to preloads, complete states and return")
        this.onPreloadSignal.dispatch({
          complete: true,
          percent: 100,
          counter: 0,
        })
        return
      }

      this.preloadUrls.forEach(async (el) => {
        const image = el.match(/\.(jpg|jpeg|png|gif|svg|webp|tiff|bmp|ico)$/)
        const video = el.match(/\.(mp4|mov|webm)$/)

        if (image) {
          try {
            await this.preloadImage(el)
            log("image is preloaded", el)
          } catch (e) {
            log("Not found, not preloaded, sorry daddy!", e)
          }
        }

        if (video) {
          try {
            await this.preloadVideo(el)
            log("video is preloaded", el)
          } catch (e) {
            log("Not found, not preloaded, sorry daddy!", e)
          }
        }

        this.updateStates()

        if (this.onPreloadSignal.state.complete) {
          log("is complete")
          resolve()
        }
      })
    })
  }

  /**
   * updateStates states on each preloaded asset
   * @protected
   */
  protected updateStates() {
    const counter = this.onPreloadSignal.state.counter + 1
    const percent = Math.round((100 / this.preloadUrls.length) * counter)
    const complete = percent === 100

    const dispatchValue = {
      counter,
      percent,
      complete,
    }
    log("dispatchValue", dispatchValue)
    this.onPreloadSignal.dispatch(dispatchValue)
  }

  // ---------------------------------------------------------------------------

  /**
   * Preload image
   * @param src
   * @protected
   */
  protected preloadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      let $img = document.createElement("img")
      $img.src = src
      $img.onload = () => resolve($img)
      $img.onerror = $img.onabort = () => reject(src)
    })
  }

  /**
   * Preload file
   * @param url
   * @protected
   */
  protected preloadFile(url: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(() => resolve(true))
        .catch(() => reject(url))
    })
  }

  /**
   * Preload Video
   * @param url
   * @protected
   */
  protected preloadVideo(url: string): Promise<HTMLVideoElement> {
    return new Promise((resolve, reject) => {
      let $video = document.createElement("video")
      $video.src = url
      $video.onloadedmetadata = () => resolve($video)
      $video.onerror = $video.onabort = () => reject(url)
    })
  }
}
