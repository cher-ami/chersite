import { useReducer, useEffect } from "react"
import debug from "@wbe/debug"
import { Routers } from "@cher-ami/router"
const log = debug(`front:useFetchApi_`)

enum EFetchState {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
}

export interface IFetchState<G = any> {
  response: G
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  errorMessage?: any
}

interface IAction {
  type: EFetchState
  payload?: any
  errorMessage?: any
}

/**
 * Object used by useFetchApi hook to manage
 * ex:
 * {
 *    "pathname-endpoint": response,
 *    // ...
 * }
 */
const DATA_CACHE = {}

/**
 * use fetch API
 * Allow to fetch API, return data and state
 *
 * ex:
 *    const url = builApidUrl("home") // -> {VITE_API_URL}/home
 *    const { response, isError, isLoading, isSuccess } = useFetchApi<MyPageInterface>(url)
 *
 * @param endpoint
 * @param apiUrl
 */
export const useFetchApi = <GData>(url: string): IFetchState<GData> => {
  const dataFetchReducer = (state: IFetchState<GData>, action: IAction) => {
    switch (action.type) {
      case EFetchState.FETCH_INIT:
        return {
          ...state,
          isLoading: true,
          isError: false,
          isSuccess: false,
        }
      case EFetchState.FETCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          isSuccess: true,
          response: action.payload,
        }
      case EFetchState.FETCH_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
          isSuccess: false,
          errorMessage: action.errorMessage,
        }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    isError: false,
    isSuccess: false,
    errorMessage: null,
    response: null,
  })

  /**
   * Get data from cache
   */
  const getDataFromCache = (key = url): GData | null => {
    const dataAlreadyExist: boolean = Object.keys(DATA_CACHE).some((el) => el === key)
    if (!dataAlreadyExist) {
      log(`"${key}" data isn't in DATA_CACHE, we need to request the API. return.`)
      return null
    }
    const data = DATA_CACHE[key]
    log("current page data is already in DATA_CACHE, we use it.", data)
    return data
  }

  /**
   * Set Data in cache
   */
  const setDataInCache = (data: GData, key = url): void => {
    DATA_CACHE[key] = data
    log("DATA_CACHE after set", DATA_CACHE)
  }

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: EFetchState.FETCH_INIT })

      // get data from cache
      const dataFromCache = getDataFromCache()

      if (dataFromCache) {
        dispatch({ type: EFetchState.FETCH_SUCCESS, payload: dataFromCache })
      } else {
        // request API
        try {
          const result = await fetch(url).then((response) => {
            if (!response.ok) {
              throw new Error(`Unable to fetch "${url}", status: ${response.status}`)
            }
            return response.json()
          })
          log(`request result`, result)

          // set data in cache
          setDataInCache(result)

          dispatch({ type: EFetchState.FETCH_SUCCESS, payload: result })
        } catch (error) {
          dispatch({ type: EFetchState.FETCH_FAILURE, errorMessage: error })
        }
      }
    }

    fetchData()
  }, [url])

  return state
}

// -------------------------------------------------------------------------- HELPERS

/**
 * Build URL to request
 * @param endpoint Enpoint name to request
 * @param lang Language to request
 */
export const builApidUrl = (
  endpoint: string,
  apiUrl = import.meta.env.VITE_API_URL as string,
  lang = Routers.langService?.currentLang?.key
): string => {
  const url = [
    apiUrl,
    "/",
    endpoint,
    // add lang param only if param lang is not default lang
    lang !== Routers.langService?.defaultLang.key && `?lang=${lang}`,
  ]
    .filter((e) => e)
    .join("")
    .replace(/(https?:\/\/)|(\/)+/g, "$1$2")
  return url
}
