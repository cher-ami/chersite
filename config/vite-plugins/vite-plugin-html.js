export default function htmlPlugin(env) {
  return {
    name: "html-transform",
    transformIndexHtml(html) {
      return html.replace(/<!-- VITE_APP_URL -->/gm, `${env.VITE_APP_URL}`)
    },
  }
}
