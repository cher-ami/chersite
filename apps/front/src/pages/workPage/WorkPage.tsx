import css from "./WorkPage.module.less"
import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react"
import { useStack } from "@cher-ami/router"
import debug from "@wbe/debug"
import { MetasManager, TMetaTags } from "~/libs/dom/MetaManager"

interface IProps {
  meta: TMetaTags
  params: {
    slug: string
  }
}

const componentName = "WorkPage"
const log = debug(`front:${componentName}`)

/**
 * @name WorkPage
 */
function WorkPage(props: IProps, handleRef: ForwardedRef<any>) {
  const rootRef = useRef<HTMLDivElement>(null)

  /**
   * Client meta
   */
  useEffect(() => {
    MetasManager.inject({ values: props.meta })
  }, [props])

  /**
   * playIn page transition
   * (remove this example if not use)
   */
  const playIn = (): Promise<void> => Promise.resolve()

  /**
   * playOut page transition
   * (remove this example if not use)
   */
  const playOut = (): Promise<void> => Promise.resolve()

  /**
   * Handle page for Stack
   * Minimal arguments should be: useStack({ componentName, handleRef, rootRef });
   * (remove playIn and playOut if not use)
   */
  useStack({ componentName, handleRef, rootRef, playIn, playOut })

  return (
    <div className={css.root} ref={rootRef}>
      {componentName} with slug: <em>{props.params?.slug}</em>
    </div>
  )
}

WorkPage.displayName = componentName
export default forwardRef(WorkPage)
