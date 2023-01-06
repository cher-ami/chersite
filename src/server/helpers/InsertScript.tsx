import * as React from "react"

/**
 * Insert script
 * @param name
 * @param obj
 */
export const InsertScript = ({ name, data }) => {
  const stringify = (e): string => JSON.stringify(e, null, 2).replace(/\s/g, "")
  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `window.${name}=${stringify(data)}`,
      }}
    />
  )
}
