import fetch from "cross-fetch"
import { TLanguage, TRoute } from "@cher-ami/router"
import { TMetaTags } from "~/libs/dom/MetaManager"
import HomePage from "./pages/homePage/HomePage"
import WorkPage from "./pages/workPage/WorkPage"
import NotFoundPage from "./pages/notFoundPage/NotFoundPage"

export enum EPages {
  HOME = "home",
  WORK = "work",
  NOT_FOUND = "not-found"
}

const siteTitle = "Cher ami, App"

/**
 * Get not found static props
 * @returns {data: any, meta: TMetaTags, notFound: boolean}
 */
const getNotFoundStaticProps = (): { data: any; meta: TMetaTags; notFound: boolean } => {
  return {
    data: null,
    meta: {
      title: `${siteTitle} | 404`,
      description: "Not found",
      imageUrl: "",
      pageUrl: import.meta.env.VITE_APP_URL
    },
    notFound: true
  }
}

/**
 * Routes
 */
export const routes: TRoute[] = [
  {
    path: "/",
    component: HomePage,
    name: EPages.HOME,
    getStaticProps: async (props, currentLang: TLanguage) => {
      try {
        const res = await fetch("https://api.sampleapis.com/coffee/hot")
        const data = await res.json()

        const meta: TMetaTags = {
          title: `${siteTitle} | Home`,
          description: "Home description",
          imageUrl: "",
          pageUrl: import.meta.env.VITE_APP_URL
        }

        return { data, meta }
      } catch (e) {
        return getNotFoundStaticProps()
      }
    }
  },
  {
    path: "/work/:slug?",
    name: EPages.WORK,
    component: WorkPage,
    getStaticProps: async (props, currentLang: TLanguage) => {
      try {
        const meta: TMetaTags = {
          title: `${siteTitle} | Work - ${props.params.slug}`,
          description: "Work description",
          imageUrl: "",
          pageUrl: import.meta.env.VITE_APP_URL
        }
        return { meta }
      } catch (e) {
        return getNotFoundStaticProps()
      }
    }
  },
  {
    path: "/:rest",
    name: EPages.NOT_FOUND,
    component: NotFoundPage,
    getStaticProps: async (props, currentLang: TLanguage) => {
      return getNotFoundStaticProps()
    }
  }
]
