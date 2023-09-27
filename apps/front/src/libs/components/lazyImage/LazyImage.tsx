import React, { CSSProperties, useEffect, useRef, useState } from "react"
import css from "./LazyImage.module.less"
import { cls } from "@cher-ami/utils"
import useIntersectionObserver from "~/libs/hooks/useIntersectionObserver"
import { useAsyncEffect } from "~/libs/hooks/useAsyncEffect"

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
  const observer = useIntersectionObserver(imageRef, {})
  const isVisible = !!observer?.isIntersecting

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
  useAsyncEffect(async () => {
    if (isVisible) {
      if (lazyState === "lazyloaded") return

      setLazyState("lazyloading")

      // Start preload
      await preloadImage(imageRef.current)

      // Set src & srcset, then remove data-attr on DOM
      if (imageRef.current.dataset.src)
        imageRef.current.src = imageRef.current.dataset.src
      if (imageRef.current.dataset.srcset)
        imageRef.current.srcset = imageRef.current.dataset.srcset
      imageRef.current.removeAttribute("data-src")
      imageRef.current.removeAttribute("data-srcset")

      // end!
      setLazyState("lazyloaded")
      props.onLoaded?.(imageRef.current)
    }
  }, [isVisible])

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
