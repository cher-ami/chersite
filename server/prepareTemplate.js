/**
 * Replace strings
 * @param layout
 * @param meta
 * @param app
 * @param ssrStaticProps
 * @param globalData
 * @param lang
 * @return {string}
 */
export const prepareTemplate = (
  layout,
  { meta, app, ssrStaticProps, globalData, lang }
) => {
  if (!layout) return ""
  return layout
    .replaceAll(`<!--meta-title-->`, meta?.title ?? "")
    .replaceAll(`<!--meta-description-->`, meta?.description ?? "")
    .replaceAll(`<!--meta-imageUrl-->`, meta?.imageUrl ?? "")
    .replaceAll(`<!--meta-url-->`, meta?.url ?? "")
    .replaceAll(`<!--meta-siteName-->`, meta?.siteName ?? "")
    .replace(`<!--lang-->`, lang)
    .replace(`<!--app-html-->`, app)
    .replace(`"<!--ssr-static-props-->"`, JSON.stringify(ssrStaticProps))
    .replace(`"<!--ssr-global-data-->"`, JSON.stringify(globalData))
}
