import { expect, it } from "vitest"
import { envVarsLocalIp } from "./env-vars-local-ip.js"

const testObj = {
  VITE_APP_BASE: "/test/dist/web/",
  VITE_APP_BASE_1: "foo/test/dist/{LOCAL_IP}/web/",
  VITE_APP_BASE_2: "foo/test/dist/web/",
  VITE_APP_BASE_3: "foo/test/dist/web/",
  WP_HOME: "http://{{LOCAL_IP}}/test/dist/web",
  WP_HOME_2: "http://{{LOCAL_IP}}/test/dist/web",
}

it("should replace strings {{LOCAL_IP}} in var values", () => {
  const iPAddress = "192.168.1.1"
  const obj = envVarsLocalIp(testObj, iPAddress)
  expect(obj).toEqual({
    VITE_APP_BASE: "/test/dist/web/",
    VITE_APP_BASE_1: "foo/test/dist/{LOCAL_IP}/web/",
    VITE_APP_BASE_2: "foo/test/dist/web/",
    VITE_APP_BASE_3: "foo/test/dist/web/",
    WP_HOME: `http://${iPAddress}/test/dist/web`,
    WP_HOME_2: `http://${iPAddress}/test/dist/web`,
  })
})
