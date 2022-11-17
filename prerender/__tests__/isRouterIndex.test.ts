import { expect, it } from "vitest"
import { isRouteIndex } from "../helpers/isRouteIndex"

it("should detect if URL is a route index", () => {
  // prettier-ignore
  const urls = [
    "/",
    "/xp",
    "/xp-1",
    "/xp-2",
    "/x/p-2",
    "/experience",
    "/thanks/test",
    "/thanks",
    "/thanks/form",
    "/thanks/form/test",

    "/en",
    "/en/experience",
    "/en/thanks/test",
    "/en/thanks",
    "/en/thanks/form",
    "/en/thanks/form/test",
  ]

  // url "/" always need to return true
  expect(isRouteIndex("/", urls)).toBe(true)

  // multi urls start with /xp but is not index
  // because no subRoute /xp /xp-1 /xp-2...
  expect(isRouteIndex("/xp", urls)).toBe(false)

  // this url doesn't exist, return false
  expect(isRouteIndex("/x", urls)).toBe(false)

  // ...
  expect(isRouteIndex("/thanks", urls)).toBe(true)
  expect(isRouteIndex("/thanks/test", urls)).toBe(false)
  expect(isRouteIndex("/thanks/form", urls)).toBe(true)
  expect(isRouteIndex("/thanks/form/test", urls)).toBe(false)

  // same with another language level
  expect(isRouteIndex("/en", urls)).toBe(true)
  expect(isRouteIndex("/en/xp", urls)).toBe(false)
  expect(isRouteIndex("/en/experience", urls)).toBe(false)
  expect(isRouteIndex("/en/thanks", urls)).toBe(true)
  expect(isRouteIndex("/en/thanks/test", urls)).toBe(false)
  expect(isRouteIndex("/en/thanks/form", urls)).toBe(true)
  expect(isRouteIndex("/en/thanks/form/test", urls)).toBe(false)
})
