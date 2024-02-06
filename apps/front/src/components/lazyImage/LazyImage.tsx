import React, { CSSProperties, useEffect, useRef, useState } from "react"
import css from "./LazyImage.module.scss"
import { cls } from "@cher-ami/utils"

interface IProps {
  src?: string
  dataSrc?: string
  dataSrcSet?: string
  className?: string
  alt?: string
  aspectRatio?: number
  style?: CSSProperties
  onLoaded?: (img: HTMLImageElement) => void
}

export type Lazy = "lazyload" | "lazyloading" | "lazyloaded"

/**
 * @name LazyImage
 */
function LazyImage(props: IProps) {
  const imageRef = useRef<HTMLImageElement>(null)
  const [lazyState, setLazyState] = useState<Lazy>("lazyload")

  /**
   * Preload one image
   * @param image
   */
  const preloadImage = (image: HTMLImageElement): Promise<void> =>
    new Promise((resolve) => {
      const dataSrc = image.dataset.src
      const dataSrcSet = image.dataset.srcset
      // create void image tag for start preload
      // const img = document.createElement("img")
      if (dataSrc) image.src = dataSrc
      if (dataSrcSet) image.srcset = dataSrcSet

      image.onload = () => {
        // remove new unused attributes
        image.removeAttribute("data-src")
        image.removeAttribute("data-srcset")

        resolve()
      }
    })

  /**
   * Intersection observer
   */

  const lazyStateRef = useRef<Lazy>("lazyload")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement
          if (lazyStateRef.current === "lazyloaded") return
          lazyStateRef.current = "lazyloading"
          setLazyState("lazyloading")

          // Start preload
          await preloadImage(image)

          // end!
          setLazyState("lazyloaded")
          props.onLoaded?.(image)
          observer.disconnect()
          observer.unobserve(imageRef.current)
        }
      })
    })
    if (imageRef.current) observer.observe(imageRef.current)
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current)
    }
  }, [])

  return (
    <img
      ref={imageRef}
      className={cls(css.root, props.className, lazyState)}
      src={props.src ?? "data:,"}
      data-src={props?.dataSrc}
      data-srcset={props?.dataSrcSet}
      alt={props?.alt}
      style={{
        ...(props.aspectRatio ? { aspectRatio: `${props.aspectRatio}` } : {}),
        ...(props.style || {})
      }}
    />
  )
}

export default LazyImage
