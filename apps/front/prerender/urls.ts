import fetch from "cross-fetch"

/**
 *  Return available Urls of our application
 */
export const fetchAvailableUrls = async (): Promise<string[]> => {
  /**
   If urls come from API, fetch and return URLS instead

       let data = []
       try {
        data = await fetch(import.meta.env.VITE_API_SERVER_URL + "generate-url").then((res) =>
          res.json()
        )
      } catch (e) {
        console.log(e)
      }

       // return static urls
       // prettier-ignore
       return new Promise(resolve => {
       resolve([
        "/404",
         ...data
      ])
   
   */

  // return static urls
  // prettier-ignore
  return new Promise(resolve => {
   resolve([
    "/",
    "/work",
    "/work/first-work",
    "/work/second-work",
    "/404"
  ])
  })
}
