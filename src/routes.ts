import { TRoute } from "@cher-ami/router"
import HomePage from "./pages/homePage/HomePage"
import WorkPage from "./pages/workPage/WorkPage"
import NotFoundPage from "./pages/notFoundPage/NotFoundPage"

export const routes: TRoute[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/work/:id",
    component: WorkPage,
  },
  {
    path: "/:rest",
    component: NotFoundPage,
  },
]
