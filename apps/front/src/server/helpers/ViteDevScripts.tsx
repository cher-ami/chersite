import * as React from "react"

export const ViteDevScripts = () => {
  if (process.env.NODE_ENV !== "development") return null
  return (
    <>
      {/* vite HMR */}
      <script type="module" src="/@vite/client"></script>

      {/* react plugin HMR */}
      <script
        type="module"
        dangerouslySetInnerHTML={{
          __html: `
          import RefreshRuntime from '/@react-refresh'
          RefreshRuntime.injectIntoGlobalHook(window)
          window.$RefreshReg$ = () => {}
          window.$RefreshSig$ = () => (type) => type
          window.__vite_plugin_react_preamble_installed__ = true`
        }}
      />
    </>
  )
}
