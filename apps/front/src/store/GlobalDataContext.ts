import { createContext } from "react"
import { IGlobalData } from "~/types/IGlobalData"

export const GlobalDataContext = createContext<IGlobalData>(null)
