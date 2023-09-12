import React, { useEffect, useState } from "react"
import css from "./DevMenu.module.less"
import { cls } from "@cher-ami/utils"
import debug from "@wbe/debug"

interface IProps {
  className?: string
}

const componentName = "DevMenu"
const log = debug(`front:${componentName}`)

/**
 * @name DevMenu
 */
function DevMenu(props: IProps) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)

  const toggleMenuVisibility = (): void => {
    setIsMenuVisible(!isMenuVisible)
  }

  // ------------------------------------------------------------------------------- HANDLERS

  const onButtonClickHandler = (): void => {
    toggleMenuVisibility()
  }

  const onKeyDownHandler = (event): void => {
    // Press shift + D
    if (event.shiftKey && event.keyCode === 68) {
      toggleMenuVisibility()
    }
  }

  // ------------------------------------------------------------------------------- LISTENERS

  useEffect(() => {
    window.addEventListener("keydown", onKeyDownHandler)

    return () => {
      window.removeEventListener("keydown", onKeyDownHandler)
    }
  }, [isMenuVisible])

  // ------------------------------------------------------------------------------- RENDER

  return (
    <div className={cls(css.root, props.className)}>
      <button className={css.button} onClick={onButtonClickHandler} />
      {isMenuVisible && <div className={css.wrapper}>Menu</div>}
    </div>
  )
}

export default DevMenu
