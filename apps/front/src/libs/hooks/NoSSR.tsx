import React, { useEffect, useState } from "react"
import { isBrowser } from "@cher-ami/utils"

/**
 * NoSSR
 *
 * Allows to render DOM only on the client
 *
 * @param children
 * @constructor
 */
export const NoSSR = ({ children }): JSX.Element => {
  const [shouldRender, setShouldRender] = useState(false)
  useEffect(() => {
    setShouldRender(isBrowser())
  }, [])
  if (!shouldRender) return null
  else return <>{children}</>
}
