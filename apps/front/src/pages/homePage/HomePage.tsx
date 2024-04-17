import css from "./HomePage.module.scss"
import React, {
  ForwardedRef,
  forwardRef,
  Suspense,
  useEffect,
  useRef,
  useState
} from "react"
import { useStack } from "@cher-ami/router"
import debug from "@cher-ami/debug"
import { MetasManager, TMetaTags } from "~/libs/dom/MetaManager"
import { listen } from "@cher-ami/utils"
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
  //--------------------------------------------------------------------- REFS
  const rootRef = useRef<HTMLDivElement>(null)

  //--------------------------------------------------------------------- STATE
  const [fontSize, setFontSize] = useState<string>("0")

  //--------------------------------------------------------------------- EFFECTS

  useEffect(() => {
    setFontSize(window.getComputedStyle(document.body).getPropertyValue("font-size"))
    return listen(window, "resize", () =>
      setFontSize(window.getComputedStyle(document.body).getPropertyValue("font-size"))
    )
  }, [])

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
      <div className={css.fontSize}>{fontSize}</div>
      <br />
      <br />
      <div>data from getStaticProps: </div>
      <em>{props.time?.utc_datetime}</em>
    </div>
  )
}

HomePage.displayName = componentName
export default forwardRef(HomePage)
