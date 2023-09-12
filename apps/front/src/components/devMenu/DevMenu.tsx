import React, { useEffect, useMemo, useState } from "react"
import css from "./DevMenu.module.less"
import { cls } from "@cher-ami/utils"
import debug from "@wbe/debug"
import { routes } from "~/routes"
import { Link } from "@cher-ami/router"

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

  // ------------------------------------------------------------------------------- RETRIEVE ROUTES TO SHOW

  const routeList = useMemo(() => {
    const local = []
    const getRoutesToShow = (r) => {
      for (let route of r) {
        if (route.props?.showInDevMenu) {
          local.push(route)
          if (route.children) {
            getRoutesToShow(route.children)
          }
        } else {
          if (route.children) {
            getRoutesToShow(route.children)
          }
        }
      }
    }

    getRoutesToShow(routes)

    return local
  }, [routes])

  // ------------------------------------------------------------------------------- TOGGLE MENU

  const toggleMenuVisibility = (): void => {
    setIsMenuVisible(!isMenuVisible)
  }

  // ------------------------------------------------------------------------------- HANDLERS

  const onButtonClickHandler = (): void => {
    toggleMenuVisibility()
  }

  const onKeyPressHandler = ({ key }): void => {
    if (key === "m") toggleMenuVisibility()
  }

  // ------------------------------------------------------------------------------- LISTENERS

  useEffect(() => {
    window.addEventListener("keypress", onKeyPressHandler)

    return () => {
      window.removeEventListener("keypress", onKeyPressHandler)
    }
  }, [isMenuVisible])

  // ------------------------------------------------------------------------------- RENDER

  return (
    <div className={cls(css.root, props.className)}>
      <button className={css.button} onClick={onButtonClickHandler} />

      {isMenuVisible && (
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            {routeList
              .filter((route) => route.props?.showInDevMenu)
              .map((route, index) => (
                <li className={css.navigationItem} key={index}>
                  <Link className={css.navigationLink} to={{ name: route.name }}>
                    {route.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default DevMenu
