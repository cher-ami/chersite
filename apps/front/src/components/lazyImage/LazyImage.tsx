import React, { CSSProperties, useEffect, useRef, useState } from "react"
import css from "./LazyImage.module.scss"
import { cls } from "@cher-ami/utils"

interface IProps {
  src?: string
  dataSrc?: string
  dataSrcSet?: string
  className?: string
  alt?: string
  style?: CSSProperties
  aspectRatio?: string // ex: "16/9" "4/3"
  width: number
  height: number
  onLoaded?: (img: HTMLImageElement) => void
}

export type Lazy = "lazyload" | "lazyloading" | "lazyloaded"

/**
 * @name LazyImage
 * @description Lazy load image component with srcset and src fallback
 * @example <LazyImage dataSrcSet="image-600 600w, image-800 800w, image-1024 1024w" src="image-800" alt="image" width={800} height={600} aspectRatio={"4 / 3"} />
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
    // if img lazy is supported by the browser we don't need to use IntersectionObserver
    if ("loading" in HTMLImageElement.prototype) {
      // add src and srcset to image
      if (imageRef.current) {
        imageRef.current.srcset = props.dataSrcSet ?? ""
        imageRef.current.src = props.src && !props.dataSrcSet ? props.src : ""
      }
      return
    }

    // add class lazyJs on imageRef
    if (imageRef.current) {
      imageRef.current.classList.add("lazyJs")
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement
          if (lazyStateRef.current === "lazyloaded") return
          lazyStateRef.current = "lazyloading"
          setLazyState("lazyloading")

          // Start preload
          await preloadImage(image)

          // Set new src fallback
          image.src = props.src ?? "data:,"

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

  const aspectRatioPadding =
    props.width && props.height ? (props.height / props.width) * 100 : 0

  return (
    <>
      <div
        className={cls(css.imageWrapper, props.className)}
        style={{
          paddingBottom: props.aspectRatio
            ? `calc((2 - ${props.aspectRatio})* 100%)`
            : `${aspectRatioPadding}%`
        }}
      >
        <img
          ref={imageRef}
          className={cls(css.image, lazyState)}
          src={"data:,"}
          data-src={props?.dataSrc}
          data-srcset={props?.dataSrcSet}
          alt={props?.alt ?? ""}
          width={props.width}
          height={props.height}
          style={props.style}
          loading={"lazy"}
        />
      </div>
      <noscript>
        <img
          className={cls(css.image, props.className)}
          src={props.src}
          srcSet={props.dataSrcSet}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      </noscript>
    </>
  )
}

export default LazyImage
