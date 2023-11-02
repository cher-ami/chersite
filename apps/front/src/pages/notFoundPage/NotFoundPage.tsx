import css from "./NotFoundPage.module.less"
import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react"
import { useStack } from "@cher-ami/router"
import debug from "@cher-ami/debug"
import { MetasManager, TMetaTags } from "~/libs/dom/MetaManager"

interface IProps {
  meta: TMetaTags
}

const componentName = "NotFoundPage"
const log = debug(`front:${componentName}`)

/**
 * @name NotFoundPage
 */
function NotFoundPage(props: IProps, handleRef: ForwardedRef<any>) {
  const rootRef = useRef<HTMLDivElement>(null)

  /**
   * Client meta
   */
  useEffect(() => {
    MetasManager.inject({ values: props.meta })
  }, [props.meta])

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
      {componentName}
    </div>
  )
}

NotFoundPage.displayName = componentName
export default forwardRef(NotFoundPage)
