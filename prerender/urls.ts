import fetch from "cross-fetch"

/**
 *  Return available Urls of our application
 *
 *
 *
 */
export const fetchAvailableUrls = async (): Promise<string[]> => {
  /**
   If urls come from API, fetch and return URLS instead

   let data
   try {
    data = await fetch("urls.json").then((res) => res.json())
   } catch (e) {
      console.log(e)
   }
   return data
   */

  // return static urls
  // prettier-ignore
  return new Promise(resolve => {
   resolve([
    "/",
    "/work/first-work",
    "/work/second-work",
    "/404"
  ])
  })
}
