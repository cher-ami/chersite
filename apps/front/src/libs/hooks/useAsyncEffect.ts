import { useEffect, DependencyList, EffectCallback } from "react"
import { useIsomorphicLayoutEffect } from "~/libs/hooks/useIsomorphicLayoutEffect"
type Fn = () => Promise<ReturnType<EffectCallback>>

/**
 * Async version of useEffect
 * @param fn
 * @param deps
 */
export function useAsyncEffect(fn: Fn, deps: DependencyList): void {
  useEffect(() => {
    fn()
  }, deps)
}

/**
 * Async version of useLayoutEffect
 * @param fn
 * @param deps
 */
export function useAsyncLayoutEffect(fn: Fn, deps: DependencyList): void {
  useIsomorphicLayoutEffect(() => {
    fn()
  }, deps)
}
