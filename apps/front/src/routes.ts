import fetch from "cross-fetch"
import { TLanguage, TRoute } from "@cher-ami/router"
import { TMetaTags } from "~/libs/dom/MetaManager"
import HomePage from "./pages/homePage/HomePage"
import WorkPage from "./pages/workPage/WorkPage"
import NotFoundPage from "./pages/notFoundPage/NotFoundPage"

export enum EPages {
  HOME = "home",
  WORK = "work",
  NOT_FOUND = "not-found",
}

export const routes: TRoute[] = [
  {
    path: "/",
    component: HomePage,
    name: EPages.HOME,
    getStaticProps: async (props, currentLang: TLanguage) => {
      const res = await fetch("https://worldtimeapi.org/api/ip")
      const time = await res.json()
      const meta: TMetaTags = {
        title: "Home",
        description: "Home description",
        imageUrl: "",
      }
      return { time, meta }
    },
  },
  {
    path: "/work/:slug?",
    name: EPages.WORK,
    component: WorkPage,
    getStaticProps: async (props, currentLang: TLanguage) => {
      const meta: TMetaTags = {
        title: `Work - ${props.params.slug}`,
        description: "Work description",
        imageUrl: "",
      }
      return { meta }
    },
  },
  {
    path: "/:rest",
    name: EPages.NOT_FOUND,
    component: NotFoundPage,
    getStaticProps: async (props, currentLang: TLanguage) => {
      const meta = {
        title: `404`,
        description: "Not found",
        imageUrl: "",
      }
      return { meta }
    },
  },
]
