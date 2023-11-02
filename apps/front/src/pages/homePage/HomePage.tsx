import css from "./HomePage.module.less"
import React, { ForwardedRef, forwardRef, Suspense, useEffect, useRef } from "react"
import { useStack } from "@cher-ami/router"
import debug from "@cher-ami/debug"
import { MetasManager, TMetaTags } from "~/libs/dom/MetaManager"
const TestComponent = React.lazy(() => import("./LazyTest"))

interface IProps {
  meta: TMetaTags
  time?: {
    utc_datetime: string
  }
}

const componentName = "HomePage"
const log = debug(`front:${componentName}`)

/**
 * @name HomePage
 */
function HomePage(props: IProps, handleRef: ForwardedRef<any>) {
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
      <Suspense fallback="...">
        <TestComponent />
      </Suspense>
      {componentName}
      <br />
      <br />
      <div>data from getStaticProps: </div>
      <em>{props.time?.utc_datetime}</em>
    </div>
  )
}

HomePage.displayName = componentName
export default forwardRef(HomePage)
