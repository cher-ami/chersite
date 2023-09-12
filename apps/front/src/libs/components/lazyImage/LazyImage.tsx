import React, { CSSProperties, useEffect, useRef, useState } from "react"
import css from "./LazyImage.module.less"
import { cls } from "@cher-ami/utils"

interface IProps {
  src?: string
  dataSrc?: string
  dataSrcset?: string
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
      const img = document.createElement("img")
      if (dataSrc) img.src = dataSrc
      if (dataSrcSet) img.srcset = dataSrcSet

      // Resolve
      img.onload = () => resolve()
    })

  /**
   * Intersection observer
   */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement
          if (lazyState === "lazyloaded") return
          setLazyState("lazyloading")

          // Start preload
          await preloadImage(image)

          // Set src & srcset, then remove data-attr on DOM
          if (image.dataset.src) image.src = image.dataset.src
          if (image.dataset.srcset) image.srcset = image.dataset.srcset
          image.removeAttribute("data-src")
          image.removeAttribute("data-srcset")

          // end!
          setLazyState("lazyloaded")
          observer.unobserve(image)
          props.onLoaded?.(image)
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
      data-srcset={props?.dataSrcset}
      alt={props?.alt}
      style={{
        ...(props.aspectRatio ? { aspectRatio: `${props.aspectRatio}` } : {}),
        ...(props.style || {}),
      }}
    />
  )
}

export default LazyImage
