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
const LazyComponent = React.lazy(() => import("./LazyTest"))

interface IProps {
  meta: TMetaTags
  data: any[]
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
      <h2 className={css.title}>Home : {props.data[0]?.title}</h2>
      <p className={css.paragraphe}>{props.data[0]?.description}</p>
      <legend className={css.legend}>Data from staticProps</legend>

      <Suspense fallback="LazyComponent loading...">
        <LazyComponent />
      </Suspense>
    </div>
  )
}

HomePage.displayName = componentName
export default forwardRef(HomePage)
