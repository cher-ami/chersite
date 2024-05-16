System.register([], function (e, t) {
  "use strict"
  return {
    execute: function () {
      var n = document.createElement("style")
      ;(n.textContent =
        ':root{--breakpoint-mobile: 320px;--breakpoint-mobile-horizontal: 500px;--breakpoint-tablet: 768px;--breakpoint-laptop: 1024px;--breakpoint-bigLaptop: 1440px;--breakpoint-desktop: 1680px}:root{--color-black: #000;--color-white: #fff;--color-bg: var(--color-white);--color-text: var(--color-black);--color-blue-cher-ami: #2263fd}:root{--ease-power1-in: cubic-bezier(.55, .085, .68, .53);--ease-power1-out: cubic-bezier(.25, .46, .45, .94);--ease-power1-in-out: cubic-bezier(.455, .03, .515, .955);--ease-power2-in: cubic-bezier(.55, .055, .675, .19);--ease-power2-out: cubic-bezier(.215, .61, .355, 1);--ease-power2-in-out: cubic-bezier(.645, .045, .355, 1);--ease-power3-in: cubic-bezier(.895, .03, .685, .22);--ease-power3-out: cubic-bezier(.165, .84, .44, 1);--ease-power3-in-out: cubic-bezier(.77, 0, .175, 1);--ease-power4-in: cubic-bezier(.755, .05, .855, .06);--ease-power4-out: cubic-bezier(.23, 1, .32, 1);--ease-power4-in-out: cubic-bezier(.86, 0, .07, 1);--ease-expo-in: cubic-bezier(.95, .05, .795, .035);--ease-expo-out: cubic-bezier(.19, 1, .22, 1);--ease-expo-in-out: cubic-bezier(1, 0, 0, 1);--ease-circ-in: cubic-bezier(.6, .04, .98, .335);--ease-circ-out: cubic-bezier(.075, .82, .165, 1);--ease-circ-in-out: cubic-bezier(.785, .135, .15, .86);--ease-sine-in: cubic-bezier(.47, 0, .745, .715);--ease-sine-out: cubic-bezier(.39, .575, .565, 1);--ease-sine-in-out: cubic-bezier(.445, .05, .55, .95);--ease-back-in: cubic-bezier(.6, -.28, .735, .045);--ease-back-out: cubic-bezier(.175, .885, .32, 1.275);--ease-back-in-out: cubic-bezier(.68, -.55, .265, 1.55)}@font-face{font-family:roboto-regular;src:url(/roboto-regular-Oei-oi_i.woff2) format("woff2"),url(/roboto-regular-bDfIj9p3.woff) format("woff"),url(/roboto-regular-7Oiq2hnj.ttf) format("truetype");font-weight:400;font-style:normal}:root{--grid-column-1: 8rem;--grid-column-2: calc(var(--grid-column-1) * 2);--grid-column-3: calc(var(--grid-column-1) * 3);--grid-column-4: calc(var(--grid-column-1) * 4);--grid-column-5: calc(var(--grid-column-1) * 5);--grid-column-6: calc(var(--grid-column-1) * 6);--grid-column-7: calc(var(--grid-column-1) * 7);--grid-column-8: calc(var(--grid-column-1) * 8);--grid-column-9: calc(var(--grid-column-1) * 9);--grid-column-10: calc(var(--grid-column-1) * 10);--grid-column-11: calc(var(--grid-column-1) * 11);--grid-column-12: calc(var(--grid-column-1) * 12);--grid-column-13: calc(var(--grid-column-1) * 13);--grid-column-14: calc(var(--grid-column-1) * 14);--grid-column-15: calc(var(--grid-column-1) * 15);--grid-column-16: calc(var(--grid-column-1) * 16);--grid-column-17: calc(var(--grid-column-1) * 17);--grid-column-18: calc(var(--grid-column-1) * 18)}*{margin:0;padding:0}*,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit}html{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.15;-webkit-text-size-adjust:100%}main{display:block}h1,h2,h3,h4,h5,h6{font-size:1em;margin:0;font-weight:400}a{background-color:transparent;text-decoration:none}b,strong{font-weight:400}ul{list-style:none}pre{font-size:1em;font-family:inherit;margin:0}code,kbd,samp{font-family:inherit;font-size:1em}small{font-size:1em}sub,sup{font-size:1em;line-height:0;position:relative;vertical-align:baseline}sub{bottom:0}sup{top:0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;margin:0 auto}details{display:block}summary{display:block;outline:none}details summary::-webkit-details-marker{display:none}img{display:block;border-style:none}button,input,optgroup,option,select,textarea{display:block;margin:0;border:0;font-family:inherit;font-size:1em;font-weight:400;line-height:normal;color:inherit;background:none;text-transform:none;-moz-appearance:none;appearance:none;-webkit-appearance:none;outline:none;overflow:visible}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{display:block;font-size:1em;padding:0;border:0}legend{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;border:none;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}template{display:none}[hidden]{display:none}:root{--viewport-reference-width: 375;--viewport-reference-height: 667;--viewport-reference-desktop-width: 1440;--viewport-reference-desktop-height: 800}:root{--font-size: .2666666667vw}@media (min-width: 768px) and (min-height: 500px) and (orientation: landscape){:root{--font-size: .125vh}}@media (min-width: 768px) and (orientation: portrait){:root{--font-size: .1302083333vw}}@media (max-width: 1023px) and (orientation: landscape){:root{--font-size: .2666666667vh}}html{font-size:var(--font-size)}body{font-size:16rem;font-family:sans-serif;font-family:roboto-regular,sans-serif;background:var(--color-bg);color:var(--color-text)}.App-module__root__JTuhI{background-color:var(--color-bg)}.HomePage-module__root__z770C{background:salmon}@media (min-width: 768px) and (min-height: 500px) and (orientation: landscape){.HomePage-module__root__z770C{background:red}}@media (min-width: 768px) and (orientation: portrait){.HomePage-module__root__z770C{background:green}}@media (max-width: 1023px) and (orientation: landscape){.HomePage-module__root__z770C{background:#00f}}.HomePage-module__fontSize__Xvj92{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:40rem}\n'),
        document.head.appendChild(n)
      var r =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
                ? self
                : {}
      function a(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e
      }
      var o = { exports: {} },
        l = {},
        i = { exports: {} },
        u = {},
        s = Symbol.for("react.element"),
        c = Symbol.for("react.portal"),
        f = Symbol.for("react.fragment"),
        d = Symbol.for("react.strict_mode"),
        p = Symbol.for("react.profiler"),
        h = Symbol.for("react.provider"),
        m = Symbol.for("react.context"),
        g = Symbol.for("react.forward_ref"),
        y = Symbol.for("react.suspense"),
        v = Symbol.for("react.memo"),
        b = Symbol.for("react.lazy"),
        w = Symbol.iterator,
        k = {
          isMounted: function () {
            return !1
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {}
        },
        S = Object.assign,
        x = {}
      function E(e, t, n) {
        ;(this.props = e), (this.context = t), (this.refs = x), (this.updater = n || k)
      }
      function _() {}
      function P(e, t, n) {
        ;(this.props = e), (this.context = t), (this.refs = x), (this.updater = n || k)
      }
      ;(E.prototype.isReactComponent = {}),
        (E.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            )
          this.updater.enqueueSetState(this, e, t, "setState")
        }),
        (E.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }),
        (_.prototype = E.prototype)
      var C = (P.prototype = new _())
      ;(C.constructor = P), S(C, E.prototype), (C.isPureReactComponent = !0)
      var L = Array.isArray,
        T = Object.prototype.hasOwnProperty,
        R = { current: null },
        z = { key: !0, ref: !0, __self: !0, __source: !0 }
      function N(e, t, n) {
        var r,
          a = {},
          o = null,
          l = null
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (o = "" + t.key),
          t))
            T.call(t, r) && !z.hasOwnProperty(r) && (a[r] = t[r])
        var i = arguments.length - 2
        if (1 === i) a.children = n
        else if (1 < i) {
          for (var u = Array(i), c = 0; c < i; c++) u[c] = arguments[c + 2]
          a.children = u
        }
        if (e && e.defaultProps)
          for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r])
        return { $$typeof: s, type: e, key: o, ref: l, props: a, _owner: R.current }
      }
      function O(e) {
        return "object" == typeof e && null !== e && e.$$typeof === s
      }
      var A = /\/+/g
      function M(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" }
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e]
                })
              )
            })("" + e.key)
          : t.toString(36)
      }
      function D(e, t, n, r, a) {
        var o = typeof e
        ;("undefined" !== o && "boolean" !== o) || (e = null)
        var l = !1
        if (null === e) l = !0
        else
          switch (o) {
            case "string":
            case "number":
              l = !0
              break
            case "object":
              switch (e.$$typeof) {
                case s:
                case c:
                  l = !0
              }
          }
        if (l)
          return (
            (a = a((l = e))),
            (e = "" === r ? "." + M(l, 0) : r),
            L(a)
              ? ((n = ""),
                null != e && (n = e.replace(A, "$&/") + "/"),
                D(a, t, n, "", function (e) {
                  return e
                }))
              : null != a &&
                (O(a) &&
                  (a = (function (e, t) {
                    return {
                      $$typeof: s,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner
                    }
                  })(
                    a,
                    n +
                      (!a.key || (l && l.key === a.key)
                        ? ""
                        : ("" + a.key).replace(A, "$&/") + "/") +
                      e
                  )),
                t.push(a)),
            1
          )
        if (((l = 0), (r = "" === r ? "." : r + ":"), L(e)))
          for (var i = 0; i < e.length; i++) {
            var u = r + M((o = e[i]), i)
            l += D(o, t, n, u, a)
          }
        else if (
          ((u = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (w && e[w]) || e["@@iterator"])
                ? e
                : null
          })(e)),
          "function" == typeof u)
        )
          for (e = u.call(e), i = 0; !(o = e.next()).done; )
            l += D((o = o.value), t, n, (u = r + M(o, i++)), a)
        else if ("object" === o)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          )
        return l
      }
      function I(e, t, n) {
        if (null == e) return e
        var r = [],
          a = 0
        return (
          D(e, r, "", "", function (e) {
            return t.call(n, e, a++)
          }),
          r
        )
      }
      function U(e) {
        if (-1 === e._status) {
          var t = e._result
          ;(t = t()).then(
            function (t) {
              ;(0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t))
            },
            function (t) {
              ;(0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t))
            }
          ),
            -1 === e._status && ((e._status = 0), (e._result = t))
        }
        if (1 === e._status) return e._result.default
        throw e._result
      }
      var F = { current: null },
        j = { transition: null },
        B = {
          ReactCurrentDispatcher: F,
          ReactCurrentBatchConfig: j,
          ReactCurrentOwner: R
        }
      ;(u.Children = {
        map: I,
        forEach: function (e, t, n) {
          I(
            e,
            function () {
              t.apply(this, arguments)
            },
            n
          )
        },
        count: function (e) {
          var t = 0
          return (
            I(e, function () {
              t++
            }),
            t
          )
        },
        toArray: function (e) {
          return (
            I(e, function (e) {
              return e
            }) || []
          )
        },
        only: function (e) {
          if (!O(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            )
          return e
        }
      }),
        (u.Component = E),
        (u.Fragment = f),
        (u.Profiler = p),
        (u.PureComponent = P),
        (u.StrictMode = d),
        (u.Suspense = y),
        (u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
        (u.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
            )
          var r = S({}, e.props),
            a = e.key,
            o = e.ref,
            l = e._owner
          if (null != t) {
            if (
              (void 0 !== t.ref && ((o = t.ref), (l = R.current)),
              void 0 !== t.key && (a = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var i = e.type.defaultProps
            for (u in t)
              T.call(t, u) &&
                !z.hasOwnProperty(u) &&
                (r[u] = void 0 === t[u] && void 0 !== i ? i[u] : t[u])
          }
          var u = arguments.length - 2
          if (1 === u) r.children = n
          else if (1 < u) {
            i = Array(u)
            for (var c = 0; c < u; c++) i[c] = arguments[c + 2]
            r.children = i
          }
          return { $$typeof: s, type: e.type, key: a, ref: o, props: r, _owner: l }
        }),
        (u.createContext = function (e) {
          return (
            ((e = {
              $$typeof: m,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null
            }).Provider = { $$typeof: h, _context: e }),
            (e.Consumer = e)
          )
        }),
        (u.createElement = N),
        (u.createFactory = function (e) {
          var t = N.bind(null, e)
          return (t.type = e), t
        }),
        (u.createRef = function () {
          return { current: null }
        }),
        (u.forwardRef = function (e) {
          return { $$typeof: g, render: e }
        }),
        (u.isValidElement = O),
        (u.lazy = function (e) {
          return { $$typeof: b, _payload: { _status: -1, _result: e }, _init: U }
        }),
        (u.memo = function (e, t) {
          return { $$typeof: v, type: e, compare: void 0 === t ? null : t }
        }),
        (u.startTransition = function (e) {
          var t = j.transition
          j.transition = {}
          try {
            e()
          } finally {
            j.transition = t
          }
        }),
        (u.unstable_act = function () {
          throw Error("act(...) is not supported in production builds of React.")
        }),
        (u.useCallback = function (e, t) {
          return F.current.useCallback(e, t)
        }),
        (u.useContext = function (e) {
          return F.current.useContext(e)
        }),
        (u.useDebugValue = function () {}),
        (u.useDeferredValue = function (e) {
          return F.current.useDeferredValue(e)
        }),
        (u.useEffect = function (e, t) {
          return F.current.useEffect(e, t)
        }),
        (u.useId = function () {
          return F.current.useId()
        }),
        (u.useImperativeHandle = function (e, t, n) {
          return F.current.useImperativeHandle(e, t, n)
        }),
        (u.useInsertionEffect = function (e, t) {
          return F.current.useInsertionEffect(e, t)
        }),
        (u.useLayoutEffect = function (e, t) {
          return F.current.useLayoutEffect(e, t)
        }),
        (u.useMemo = function (e, t) {
          return F.current.useMemo(e, t)
        }),
        (u.useReducer = function (e, t, n) {
          return F.current.useReducer(e, t, n)
        }),
        (u.useRef = function (e) {
          return F.current.useRef(e)
        }),
        (u.useState = function (e) {
          return F.current.useState(e)
        }),
        (u.useSyncExternalStore = function (e, t, n) {
          return F.current.useSyncExternalStore(e, t, n)
        }),
        (u.useTransition = function () {
          return F.current.useTransition()
        }),
        (u.version = "18.2.0"),
        (i.exports = u)
      var V = i.exports
      const $ = a(V)
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var H = V,
        W = Symbol.for("react.element"),
        Q = Symbol.for("react.fragment"),
        q = Object.prototype.hasOwnProperty,
        K = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        G = { key: !0, ref: !0, __self: !0, __source: !0 }
      function Y(e, t, n) {
        var r,
          a = {},
          o = null,
          l = null
        for (r in (void 0 !== n && (o = "" + n),
        void 0 !== t.key && (o = "" + t.key),
        void 0 !== t.ref && (l = t.ref),
        t))
          q.call(t, r) && !G.hasOwnProperty(r) && (a[r] = t[r])
        if (e && e.defaultProps)
          for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r])
        return { $$typeof: W, type: e, key: o, ref: l, props: a, _owner: K.current }
      }
      ;(l.Fragment = Q), (l.jsx = Y), (l.jsxs = Y), (o.exports = l)
      var X = e("j", o.exports),
        J = { exports: {} },
        Z = {},
        ee = { exports: {} },
        te = {}
      /**
       * @license React
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      !(function (e) {
        function t(e, t) {
          var n = e.length
          e.push(t)
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r]
            if (!(0 < a(o, t))) break e
            ;(e[r] = t), (e[n] = o), (n = r)
          }
        }
        function n(e) {
          return 0 === e.length ? null : e[0]
        }
        function r(e) {
          if (0 === e.length) return null
          var t = e[0],
            n = e.pop()
          if (n !== t) {
            e[0] = n
            e: for (var r = 0, o = e.length, l = o >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s]
              if (0 > a(u, n))
                s < o && 0 > a(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i))
              else {
                if (!(s < o && 0 > a(c, n))) break e
                ;(e[r] = c), (e[s] = n), (r = s)
              }
            }
          }
          return t
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex
          return 0 !== n ? n : e.id - t.id
        }
        if ("object" == typeof performance && "function" == typeof performance.now) {
          var o = performance
          e.unstable_now = function () {
            return o.now()
          }
        } else {
          var l = Date,
            i = l.now()
          e.unstable_now = function () {
            return l.now() - i
          }
        }
        var u = [],
          s = [],
          c = 1,
          f = null,
          d = 3,
          p = !1,
          h = !1,
          m = !1,
          g = "function" == typeof setTimeout ? setTimeout : null,
          y = "function" == typeof clearTimeout ? clearTimeout : null,
          v = "undefined" != typeof setImmediate ? setImmediate : null
        function b(e) {
          for (var a = n(s); null !== a; ) {
            if (null === a.callback) r(s)
            else {
              if (!(a.startTime <= e)) break
              r(s), (a.sortIndex = a.expirationTime), t(u, a)
            }
            a = n(s)
          }
        }
        function w(e) {
          if (((m = !1), b(e), !h))
            if (null !== n(u)) (h = !0), N(k)
            else {
              var t = n(s)
              null !== t && O(w, t.startTime - e)
            }
        }
        function k(t, a) {
          ;(h = !1), m && ((m = !1), y(_), (_ = -1)), (p = !0)
          var o = d
          try {
            for (
              b(a), f = n(u);
              null !== f && (!(f.expirationTime > a) || (t && !L()));

            ) {
              var l = f.callback
              if ("function" == typeof l) {
                ;(f.callback = null), (d = f.priorityLevel)
                var i = l(f.expirationTime <= a)
                ;(a = e.unstable_now()),
                  "function" == typeof i ? (f.callback = i) : f === n(u) && r(u),
                  b(a)
              } else r(u)
              f = n(u)
            }
            if (null !== f) var c = !0
            else {
              var g = n(s)
              null !== g && O(w, g.startTime - a), (c = !1)
            }
            return c
          } finally {
            ;(f = null), (d = o), (p = !1)
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        var S,
          x = !1,
          E = null,
          _ = -1,
          P = 5,
          C = -1
        function L() {
          return !(e.unstable_now() - C < P)
        }
        function T() {
          if (null !== E) {
            var t = e.unstable_now()
            C = t
            var n = !0
            try {
              n = E(!0, t)
            } finally {
              n ? S() : ((x = !1), (E = null))
            }
          } else x = !1
        }
        if ("function" == typeof v)
          S = function () {
            v(T)
          }
        else if ("undefined" != typeof MessageChannel) {
          var R = new MessageChannel(),
            z = R.port2
          ;(R.port1.onmessage = T),
            (S = function () {
              z.postMessage(null)
            })
        } else
          S = function () {
            g(T, 0)
          }
        function N(e) {
          ;(E = e), x || ((x = !0), S())
        }
        function O(t, n) {
          _ = g(function () {
            t(e.unstable_now())
          }, n)
        }
        ;(e.unstable_IdlePriority = 5),
          (e.unstable_ImmediatePriority = 1),
          (e.unstable_LowPriority = 4),
          (e.unstable_NormalPriority = 3),
          (e.unstable_Profiling = null),
          (e.unstable_UserBlockingPriority = 2),
          (e.unstable_cancelCallback = function (e) {
            e.callback = null
          }),
          (e.unstable_continueExecution = function () {
            h || p || ((h = !0), N(k))
          }),
          (e.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5)
          }),
          (e.unstable_getCurrentPriorityLevel = function () {
            return d
          }),
          (e.unstable_getFirstCallbackNode = function () {
            return n(u)
          }),
          (e.unstable_next = function (e) {
            switch (d) {
              case 1:
              case 2:
              case 3:
                var t = 3
                break
              default:
                t = d
            }
            var n = d
            d = t
            try {
              return e()
            } finally {
              d = n
            }
          }),
          (e.unstable_pauseExecution = function () {}),
          (e.unstable_requestPaint = function () {}),
          (e.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                e = 3
            }
            var n = d
            d = e
            try {
              return t()
            } finally {
              d = n
            }
          }),
          (e.unstable_scheduleCallback = function (r, a, o) {
            var l = e.unstable_now()
            switch (
              ((o =
                "object" == typeof o &&
                null !== o &&
                "number" == typeof (o = o.delay) &&
                0 < o
                  ? l + o
                  : l),
              r)
            ) {
              case 1:
                var i = -1
                break
              case 2:
                i = 250
                break
              case 5:
                i = 1073741823
                break
              case 4:
                i = 1e4
                break
              default:
                i = 5e3
            }
            return (
              (r = {
                id: c++,
                callback: a,
                priorityLevel: r,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1
              }),
              o > l
                ? ((r.sortIndex = o),
                  t(s, r),
                  null === n(u) &&
                    r === n(s) &&
                    (m ? (y(_), (_ = -1)) : (m = !0), O(w, o - l)))
                : ((r.sortIndex = i), t(u, r), h || p || ((h = !0), N(k))),
              r
            )
          }),
          (e.unstable_shouldYield = L),
          (e.unstable_wrapCallback = function (e) {
            var t = d
            return function () {
              var n = d
              d = t
              try {
                return e.apply(this, arguments)
              } finally {
                d = n
              }
            }
          })
      })(te),
        (ee.exports = te)
      var ne = ee.exports,
        re = V,
        ae = ne
      /**
       * @license React
       * react-dom.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function oe(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n])
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        )
      }
      var le = new Set(),
        ie = {}
      function ue(e, t) {
        se(e, t), se(e + "Capture", t)
      }
      function se(e, t) {
        for (ie[e] = t, e = 0; e < t.length; e++) le.add(t[e])
      }
      var ce = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        fe = Object.prototype.hasOwnProperty,
        de =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        pe = {},
        he = {}
      function me(e, t, n, r, a, o, l) {
        ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o),
          (this.removeEmptyString = l)
      }
      var ge = {}
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          ge[e] = new me(e, 0, !1, e, null, !1, !1)
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"]
        ].forEach(function (e) {
          var t = e[0]
          ge[t] = new me(t, 1, !1, e[1], null, !1, !1)
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
          ge[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1)
        }),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha"
        ].forEach(function (e) {
          ge[e] = new me(e, 2, !1, e, null, !1, !1)
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            ge[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1)
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          ge[e] = new me(e, 3, !0, e, null, !1, !1)
        }),
        ["capture", "download"].forEach(function (e) {
          ge[e] = new me(e, 4, !1, e, null, !1, !1)
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          ge[e] = new me(e, 6, !1, e, null, !1, !1)
        }),
        ["rowSpan", "start"].forEach(function (e) {
          ge[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1)
        })
      var ye = /[\-:]([a-z])/g
      function ve(e) {
        return e[1].toUpperCase()
      }
      function be(e, t, n, r) {
        var a = ge.hasOwnProperty(t) ? ge[t] : null
        ;(null !== a
          ? 0 !== a.type
          : r ||
            !(2 < t.length) ||
            ("o" !== t[0] && "O" !== t[0]) ||
            ("n" !== t[1] && "N" !== t[1])) &&
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
                    )
                  default:
                    return !1
                }
              })(e, t, n, r)
            )
              return !0
            if (r) return !1
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t
                case 4:
                  return !1 === t
                case 5:
                  return isNaN(t)
                case 6:
                  return isNaN(t) || 1 > t
              }
            return !1
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function (e) {
                return (
                  !!fe.call(he, e) ||
                  (!fe.call(pe, e) && (de.test(e) ? (he[e] = !0) : ((pe[e] = !0), !1)))
                )
              })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(ye, ve)
          ge[t] = new me(t, 1, !1, e, null, !1, !1)
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(ye, ve)
            ge[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(ye, ve)
          ge[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          ge[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1)
        }),
        (ge.xlinkHref = new me(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          ge[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0)
        })
      var we = re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ke = Symbol.for("react.element"),
        Se = Symbol.for("react.portal"),
        xe = Symbol.for("react.fragment"),
        Ee = Symbol.for("react.strict_mode"),
        _e = Symbol.for("react.profiler"),
        Pe = Symbol.for("react.provider"),
        Ce = Symbol.for("react.context"),
        Le = Symbol.for("react.forward_ref"),
        Te = Symbol.for("react.suspense"),
        Re = Symbol.for("react.suspense_list"),
        ze = Symbol.for("react.memo"),
        Ne = Symbol.for("react.lazy"),
        Oe = Symbol.for("react.offscreen"),
        Ae = Symbol.iterator
      function Me(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (Ae && e[Ae]) || e["@@iterator"])
            ? e
            : null
      }
      var De,
        Ie = Object.assign
      function Ue(e) {
        if (void 0 === De)
          try {
            throw Error()
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/)
            De = (t && t[1]) || ""
          }
        return "\n" + De + e
      }
      var Fe = !1
      function je(e, t) {
        if (!e || Fe) return ""
        Fe = !0
        var n = Error.prepareStackTrace
        Error.prepareStackTrace = void 0
        try {
          if (t)
            if (
              ((t = function () {
                throw Error()
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error()
                }
              }),
              "object" == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, [])
              } catch (s) {
                var r = s
              }
              Reflect.construct(e, [], t)
            } else {
              try {
                t.call()
              } catch (s) {
                r = s
              }
              e.call(t.prototype)
            }
          else {
            try {
              throw Error()
            } catch (s) {
              r = s
            }
            e()
          }
        } catch (s) {
          if (s && r && "string" == typeof s.stack) {
            for (
              var a = s.stack.split("\n"),
                o = r.stack.split("\n"),
                l = a.length - 1,
                i = o.length - 1;
              1 <= l && 0 <= i && a[l] !== o[i];

            )
              i--
            for (; 1 <= l && 0 <= i; l--, i--)
              if (a[l] !== o[i]) {
                if (1 !== l || 1 !== i)
                  do {
                    if ((l--, 0 > --i || a[l] !== o[i])) {
                      var u = "\n" + a[l].replace(" at new ", " at ")
                      return (
                        e.displayName &&
                          u.includes("<anonymous>") &&
                          (u = u.replace("<anonymous>", e.displayName)),
                        u
                      )
                    }
                  } while (1 <= l && 0 <= i)
                break
              }
          }
        } finally {
          ;(Fe = !1), (Error.prepareStackTrace = n)
        }
        return (e = e ? e.displayName || e.name : "") ? Ue(e) : ""
      }
      function Be(e) {
        switch (e.tag) {
          case 5:
            return Ue(e.type)
          case 16:
            return Ue("Lazy")
          case 13:
            return Ue("Suspense")
          case 19:
            return Ue("SuspenseList")
          case 0:
          case 2:
          case 15:
            return (e = je(e.type, !1))
          case 11:
            return (e = je(e.type.render, !1))
          case 1:
            return (e = je(e.type, !0))
          default:
            return ""
        }
      }
      function Ve(e) {
        if (null == e) return null
        if ("function" == typeof e) return e.displayName || e.name || null
        if ("string" == typeof e) return e
        switch (e) {
          case xe:
            return "Fragment"
          case Se:
            return "Portal"
          case _e:
            return "Profiler"
          case Ee:
            return "StrictMode"
          case Te:
            return "Suspense"
          case Re:
            return "SuspenseList"
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case Ce:
              return (e.displayName || "Context") + ".Consumer"
            case Pe:
              return (e._context.displayName || "Context") + ".Provider"
            case Le:
              var t = e.render
              return (
                (e = e.displayName) ||
                  (e =
                    "" !== (e = t.displayName || t.name || "")
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              )
            case ze:
              return null !== (t = e.displayName || null) ? t : Ve(e.type) || "Memo"
            case Ne:
              ;(t = e._payload), (e = e._init)
              try {
                return Ve(e(t))
              } catch (n) {}
          }
        return null
      }
      function $e(e) {
        var t = e.type
        switch (e.tag) {
          case 24:
            return "Cache"
          case 9:
            return (t.displayName || "Context") + ".Consumer"
          case 10:
            return (t._context.displayName || "Context") + ".Provider"
          case 18:
            return "DehydratedFragment"
          case 11:
            return (
              (e = (e = t.render).displayName || e.name || ""),
              t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
            )
          case 7:
            return "Fragment"
          case 5:
            return t
          case 4:
            return "Portal"
          case 3:
            return "Root"
          case 6:
            return "Text"
          case 16:
            return Ve(t)
          case 8:
            return t === Ee ? "StrictMode" : "Mode"
          case 22:
            return "Offscreen"
          case 12:
            return "Profiler"
          case 21:
            return "Scope"
          case 13:
            return "Suspense"
          case 19:
            return "SuspenseList"
          case 25:
            return "TracingMarker"
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" == typeof t) return t.displayName || t.name || null
            if ("string" == typeof t) return t
        }
        return null
      }
      function He(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return e
          default:
            return ""
        }
      }
      function We(e) {
        var t = e.type
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        )
      }
      function Qe(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = We(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t]
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var a = n.get,
                o = n.set
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this)
                  },
                  set: function (e) {
                    ;(r = "" + e), o.call(this, e)
                  }
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r
                  },
                  setValue: function (e) {
                    r = "" + e
                  },
                  stopTracking: function () {
                    ;(e._valueTracker = null), delete e[t]
                  }
                }
              )
            }
          })(e))
      }
      function qe(e) {
        if (!e) return !1
        var t = e._valueTracker
        if (!t) return !0
        var n = t.getValue(),
          r = ""
        return (
          e && (r = We(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        )
      }
      function Ke(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
          return null
        try {
          return e.activeElement || e.body
        } catch (t) {
          return e.body
        }
      }
      function Ge(e, t) {
        var n = t.checked
        return Ie({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked
        })
      }
      function Ye(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked
        ;(n = He(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value
          })
      }
      function Xe(e, t) {
        null != (t = t.checked) && be(e, "checked", t, !1)
      }
      function Je(e, t) {
        Xe(e, t)
        var n = He(t.value),
          r = t.type
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n)
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value")
        t.hasOwnProperty("value")
          ? et(e, t.type, n)
          : t.hasOwnProperty("defaultValue") && et(e, t.type, He(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked)
      }
      function Ze(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return
          ;(t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t)
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n)
      }
      function et(e, t, n) {
        ;("number" === t && Ke(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
      }
      var tt = Array.isArray
      function nt(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {}
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0)
        } else {
          for (n = "" + He(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
            null !== t || e[a].disabled || (t = e[a])
          }
          null !== t && (t.selected = !0)
        }
      }
      function rt(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(oe(91))
        return Ie({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue
        })
      }
      function at(e, t) {
        var n = t.value
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(oe(92))
            if (tt(n)) {
              if (1 < n.length) throw Error(oe(93))
              n = n[0]
            }
            t = n
          }
          null == t && (t = ""), (n = t)
        }
        e._wrapperState = { initialValue: He(n) }
      }
      function ot(e, t) {
        var n = He(t.value),
          r = He(t.defaultValue)
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r)
      }
      function lt(e) {
        var t = e.textContent
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
      }
      function it(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg"
          case "math":
            return "http://www.w3.org/1998/Math/MathML"
          default:
            return "http://www.w3.org/1999/xhtml"
        }
      }
      function ut(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? it(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e
      }
      var st,
        ct = (function (e) {
          return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, a) {
                MSApp.execUnsafeLocalFunction(function () {
                  return e(t, n)
                })
              }
            : e
        })(function (e, t) {
          if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t
          else {
            for (
              (st = st || document.createElement("div")).innerHTML =
                "<svg>" + t.valueOf().toString() + "</svg>",
                t = st.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild)
            for (; t.firstChild; ) e.appendChild(t.firstChild)
          }
        })
      function ft(e, t) {
        if (t) {
          var n = e.firstChild
          if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
        }
        e.textContent = t
      }
      var dt = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        pt = ["Webkit", "ms", "Moz", "O"]
      function ht(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n || "number" != typeof t || 0 === t || (dt.hasOwnProperty(e) && dt[e])
            ? ("" + t).trim()
            : t + "px"
      }
      function mt(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = ht(n, t[n], r)
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a)
          }
      }
      Object.keys(dt).forEach(function (e) {
        pt.forEach(function (t) {
          ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dt[t] = dt[e])
        })
      })
      var gt = Ie(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0
        }
      )
      function yt(e, t) {
        if (t) {
          if (gt[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
            throw Error(oe(137, e))
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(oe(60))
            if (
              "object" != typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(oe(61))
          }
          if (null != t.style && "object" != typeof t.style) throw Error(oe(62))
        }
      }
      function vt(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1
          default:
            return !0
        }
      }
      var bt = null
      function wt(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        )
      }
      var kt = null,
        St = null,
        xt = null
      function Et(e) {
        if ((e = bo(e))) {
          if ("function" != typeof kt) throw Error(oe(280))
          var t = e.stateNode
          t && ((t = ko(t)), kt(e.stateNode, e.type, t))
        }
      }
      function _t(e) {
        St ? (xt ? xt.push(e) : (xt = [e])) : (St = e)
      }
      function Pt() {
        if (St) {
          var e = St,
            t = xt
          if (((xt = St = null), Et(e), t)) for (e = 0; e < t.length; e++) Et(t[e])
        }
      }
      function Ct(e, t) {
        return e(t)
      }
      function Lt() {}
      var Tt = !1
      function Rt(e, t, n) {
        if (Tt) return e(t, n)
        Tt = !0
        try {
          return Ct(e, t, n)
        } finally {
          ;(Tt = !1), (null !== St || null !== xt) && (Lt(), Pt())
        }
      }
      function zt(e, t) {
        var n = e.stateNode
        if (null === n) return null
        var r = ko(n)
        if (null === r) return null
        n = r[t]
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            ;(r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r)
            break e
          default:
            e = !1
        }
        if (e) return null
        if (n && "function" != typeof n) throw Error(oe(231, t, typeof n))
        return n
      }
      var Nt = !1
      if (ce)
        try {
          var Ot = {}
          Object.defineProperty(Ot, "passive", {
            get: function () {
              Nt = !0
            }
          }),
            window.addEventListener("test", Ot, Ot),
            window.removeEventListener("test", Ot, Ot)
        } catch (kf) {
          Nt = !1
        }
      function At(e, t, n, r, a, o, l, i, u) {
        var s = Array.prototype.slice.call(arguments, 3)
        try {
          t.apply(n, s)
        } catch (lf) {
          this.onError(lf)
        }
      }
      var Mt = !1,
        Dt = null,
        It = !1,
        Ut = null,
        Ft = {
          onError: function (e) {
            ;(Mt = !0), (Dt = e)
          }
        }
      function jt(e, t, n, r, a, o, l, i, u) {
        ;(Mt = !1), (Dt = null), At.apply(Ft, arguments)
      }
      function Bt(e) {
        var t = e,
          n = e
        if (e.alternate) for (; t.return; ) t = t.return
        else {
          e = t
          do {
            0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return)
          } while (e)
        }
        return 3 === t.tag ? n : null
      }
      function Vt(e) {
        if (13 === e.tag) {
          var t = e.memoizedState
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated
        }
        return null
      }
      function $t(e) {
        if (Bt(e) !== e) throw Error(oe(188))
      }
      function Ht(e) {
        return (
          (e = (function (e) {
            var t = e.alternate
            if (!t) {
              if (null === (t = Bt(e))) throw Error(oe(188))
              return t !== e ? null : e
            }
            for (var n = e, r = t; ; ) {
              var a = n.return
              if (null === a) break
              var o = a.alternate
              if (null === o) {
                if (null !== (r = a.return)) {
                  n = r
                  continue
                }
                break
              }
              if (a.child === o.child) {
                for (o = a.child; o; ) {
                  if (o === n) return $t(a), e
                  if (o === r) return $t(a), t
                  o = o.sibling
                }
                throw Error(oe(188))
              }
              if (n.return !== r.return) (n = a), (r = o)
              else {
                for (var l = !1, i = a.child; i; ) {
                  if (i === n) {
                    ;(l = !0), (n = a), (r = o)
                    break
                  }
                  if (i === r) {
                    ;(l = !0), (r = a), (n = o)
                    break
                  }
                  i = i.sibling
                }
                if (!l) {
                  for (i = o.child; i; ) {
                    if (i === n) {
                      ;(l = !0), (n = o), (r = a)
                      break
                    }
                    if (i === r) {
                      ;(l = !0), (r = o), (n = a)
                      break
                    }
                    i = i.sibling
                  }
                  if (!l) throw Error(oe(189))
                }
              }
              if (n.alternate !== r) throw Error(oe(190))
            }
            if (3 !== n.tag) throw Error(oe(188))
            return n.stateNode.current === n ? e : t
          })(e)),
          null !== e ? Wt(e) : null
        )
      }
      function Wt(e) {
        if (5 === e.tag || 6 === e.tag) return e
        for (e = e.child; null !== e; ) {
          var t = Wt(e)
          if (null !== t) return t
          e = e.sibling
        }
        return null
      }
      var Qt = ae.unstable_scheduleCallback,
        qt = ae.unstable_cancelCallback,
        Kt = ae.unstable_shouldYield,
        Gt = ae.unstable_requestPaint,
        Yt = ae.unstable_now,
        Xt = ae.unstable_getCurrentPriorityLevel,
        Jt = ae.unstable_ImmediatePriority,
        Zt = ae.unstable_UserBlockingPriority,
        en = ae.unstable_NormalPriority,
        tn = ae.unstable_LowPriority,
        nn = ae.unstable_IdlePriority,
        rn = null,
        an = null,
        on = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === (e >>>= 0) ? 32 : (31 - ((ln(e) / un) | 0)) | 0
            },
        ln = Math.log,
        un = Math.LN2,
        sn = 64,
        cn = 4194304
      function fn(e) {
        switch (e & -e) {
          case 1:
            return 1
          case 2:
            return 2
          case 4:
            return 4
          case 8:
            return 8
          case 16:
            return 16
          case 32:
            return 32
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194240 & e
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e
          case 134217728:
            return 134217728
          case 268435456:
            return 268435456
          case 536870912:
            return 536870912
          case 1073741824:
            return 1073741824
          default:
            return e
        }
      }
      function dn(e, t) {
        var n = e.pendingLanes
        if (0 === n) return 0
        var r = 0,
          a = e.suspendedLanes,
          o = e.pingedLanes,
          l = 268435455 & n
        if (0 !== l) {
          var i = l & ~a
          0 !== i ? (r = fn(i)) : 0 != (o &= l) && (r = fn(o))
        } else 0 != (l = n & ~a) ? (r = fn(l)) : 0 !== o && (r = fn(o))
        if (0 === r) return 0
        if (
          0 !== t &&
          t !== r &&
          0 == (t & a) &&
          ((a = r & -r) >= (o = t & -t) || (16 === a && 0 != (4194240 & o)))
        )
          return t
        if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
          for (e = e.entanglements, t &= r; 0 < t; )
            (a = 1 << (n = 31 - on(t))), (r |= e[n]), (t &= ~a)
        return r
      }
      function pn(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3
          default:
            return -1
        }
      }
      function hn(e) {
        return 0 != (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
            ? 1073741824
            : 0
      }
      function mn() {
        var e = sn
        return 0 == (4194240 & (sn <<= 1)) && (sn = 64), e
      }
      function gn(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e)
        return t
      }
      function yn(e, t, n) {
        ;(e.pendingLanes |= t),
          536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
          ((e = e.eventTimes)[(t = 31 - on(t))] = n)
      }
      function vn(e, t) {
        var n = (e.entangledLanes |= t)
        for (e = e.entanglements; n; ) {
          var r = 31 - on(n),
            a = 1 << r
          ;(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a)
        }
      }
      var bn = 0
      function wn(e) {
        return 1 < (e &= -e) ? (4 < e ? (0 != (268435455 & e) ? 16 : 536870912) : 4) : 1
      }
      var kn,
        Sn,
        xn,
        En,
        _n,
        Pn = !1,
        Cn = [],
        Ln = null,
        Tn = null,
        Rn = null,
        zn = new Map(),
        Nn = new Map(),
        On = [],
        An =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          )
      function Mn(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            Ln = null
            break
          case "dragenter":
          case "dragleave":
            Tn = null
            break
          case "mouseover":
          case "mouseout":
            Rn = null
            break
          case "pointerover":
          case "pointerout":
            zn.delete(t.pointerId)
            break
          case "gotpointercapture":
          case "lostpointercapture":
            Nn.delete(t.pointerId)
        }
      }
      function Dn(e, t, n, r, a, o) {
        return null === e || e.nativeEvent !== o
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [a]
            }),
            null !== t && null !== (t = bo(t)) && Sn(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a),
            e)
      }
      function In(e) {
        var t = vo(e.target)
        if (null !== t) {
          var n = Bt(t)
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Vt(n)))
                return (
                  (e.blockedOn = t),
                  void _n(e.priority, function () {
                    xn(n)
                  })
                )
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
              return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
      }
      function Un(e) {
        if (null !== e.blockedOn) return !1
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Gn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
          if (null !== n) return null !== (t = bo(n)) && Sn(t), (e.blockedOn = n), !1
          var r = new (n = e.nativeEvent).constructor(n.type, n)
          ;(bt = r), n.target.dispatchEvent(r), (bt = null), t.shift()
        }
        return !0
      }
      function Fn(e, t, n) {
        Un(e) && n.delete(t)
      }
      function jn() {
        ;(Pn = !1),
          null !== Ln && Un(Ln) && (Ln = null),
          null !== Tn && Un(Tn) && (Tn = null),
          null !== Rn && Un(Rn) && (Rn = null),
          zn.forEach(Fn),
          Nn.forEach(Fn)
      }
      function Bn(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          Pn || ((Pn = !0), ae.unstable_scheduleCallback(ae.unstable_NormalPriority, jn)))
      }
      function Vn(e) {
        function t(t) {
          return Bn(t, e)
        }
        if (0 < Cn.length) {
          Bn(Cn[0], e)
          for (var n = 1; n < Cn.length; n++) {
            var r = Cn[n]
            r.blockedOn === e && (r.blockedOn = null)
          }
        }
        for (
          null !== Ln && Bn(Ln, e),
            null !== Tn && Bn(Tn, e),
            null !== Rn && Bn(Rn, e),
            zn.forEach(t),
            Nn.forEach(t),
            n = 0;
          n < On.length;
          n++
        )
          (r = On[n]).blockedOn === e && (r.blockedOn = null)
        for (; 0 < On.length && null === (n = On[0]).blockedOn; )
          In(n), null === n.blockedOn && On.shift()
      }
      var $n = we.ReactCurrentBatchConfig,
        Hn = !0
      function Wn(e, t, n, r) {
        var a = bn,
          o = $n.transition
        $n.transition = null
        try {
          ;(bn = 1), qn(e, t, n, r)
        } finally {
          ;(bn = a), ($n.transition = o)
        }
      }
      function Qn(e, t, n, r) {
        var a = bn,
          o = $n.transition
        $n.transition = null
        try {
          ;(bn = 4), qn(e, t, n, r)
        } finally {
          ;(bn = a), ($n.transition = o)
        }
      }
      function qn(e, t, n, r) {
        if (Hn) {
          var a = Gn(e, t, n, r)
          if (null === a) $a(e, t, r, Kn, n), Mn(e, r)
          else if (
            (function (e, t, n, r, a) {
              switch (t) {
                case "focusin":
                  return (Ln = Dn(Ln, e, t, n, r, a)), !0
                case "dragenter":
                  return (Tn = Dn(Tn, e, t, n, r, a)), !0
                case "mouseover":
                  return (Rn = Dn(Rn, e, t, n, r, a)), !0
                case "pointerover":
                  var o = a.pointerId
                  return zn.set(o, Dn(zn.get(o) || null, e, t, n, r, a)), !0
                case "gotpointercapture":
                  return (
                    (o = a.pointerId), Nn.set(o, Dn(Nn.get(o) || null, e, t, n, r, a)), !0
                  )
              }
              return !1
            })(a, e, t, n, r)
          )
            r.stopPropagation()
          else if ((Mn(e, r), 4 & t && -1 < An.indexOf(e))) {
            for (; null !== a; ) {
              var o = bo(a)
              if (
                (null !== o && kn(o),
                null === (o = Gn(e, t, n, r)) && $a(e, t, r, Kn, n),
                o === a)
              )
                break
              a = o
            }
            null !== a && r.stopPropagation()
          } else $a(e, t, r, null, n)
        }
      }
      var Kn = null
      function Gn(e, t, n, r) {
        if (((Kn = null), null !== (e = vo((e = wt(r))))))
          if (null === (t = Bt(e))) e = null
          else if (13 === (n = t.tag)) {
            if (null !== (e = Vt(t))) return e
            e = null
          } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return 3 === t.tag ? t.stateNode.containerInfo : null
            e = null
          } else t !== e && (e = null)
        return (Kn = e), null
      }
      function Yn(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4
          case "message":
            switch (Xt()) {
              case Jt:
                return 1
              case Zt:
                return 4
              case en:
              case tn:
                return 16
              case nn:
                return 536870912
              default:
                return 16
            }
          default:
            return 16
        }
      }
      var Xn = null,
        Jn = null,
        Zn = null
      function er() {
        if (Zn) return Zn
        var e,
          t,
          n = Jn,
          r = n.length,
          a = "value" in Xn ? Xn.value : Xn.textContent,
          o = a.length
        for (e = 0; e < r && n[e] === a[e]; e++);
        var l = r - e
        for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
        return (Zn = a.slice(e, 1 < t ? 1 - t : void 0))
      }
      function tr(e) {
        var t = e.keyCode
        return (
          "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        )
      }
      function nr() {
        return !0
      }
      function rr() {
        return !1
      }
      function ar(e) {
        function t(t, n, r, a, o) {
          for (var l in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = o),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]))
          return (
            (this.isDefaultPrevented = (
              null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
            )
              ? nr
              : rr),
            (this.isPropagationStopped = rr),
            this
          )
        }
        return (
          Ie(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0
              var e = this.nativeEvent
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = nr))
            },
            stopPropagation: function () {
              var e = this.nativeEvent
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = nr))
            },
            persist: function () {},
            isPersistent: nr
          }),
          t
        )
      }
      var or,
        lr,
        ir,
        ur = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now()
          },
          defaultPrevented: 0,
          isTrusted: 0
        },
        sr = ar(ur),
        cr = Ie({}, ur, { view: 0, detail: 0 }),
        fr = ar(cr),
        dr = Ie({}, cr, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Er,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== ir &&
                  (ir && "mousemove" === e.type
                    ? ((or = e.screenX - ir.screenX), (lr = e.screenY - ir.screenY))
                    : (lr = or = 0),
                  (ir = e)),
                or)
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : lr
          }
        }),
        pr = ar(dr),
        hr = ar(Ie({}, dr, { dataTransfer: 0 })),
        mr = ar(Ie({}, cr, { relatedTarget: 0 })),
        gr = ar(Ie({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
        yr = Ie({}, ur, {
          clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
          }
        }),
        vr = ar(yr),
        br = ar(Ie({}, ur, { data: 0 })),
        wr = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified"
        },
        kr = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta"
        },
        Sr = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }
      function xr(e) {
        var t = this.nativeEvent
        return t.getModifierState ? t.getModifierState(e) : !!(e = Sr[e]) && !!t[e]
      }
      function Er() {
        return xr
      }
      var _r = Ie({}, cr, {
          key: function (e) {
            if (e.key) {
              var t = wr[e.key] || e.key
              if ("Unidentified" !== t) return t
            }
            return "keypress" === e.type
              ? 13 === (e = tr(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
                ? kr[e.keyCode] || "Unidentified"
                : ""
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Er,
          charCode: function (e) {
            return "keypress" === e.type ? tr(e) : 0
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
          },
          which: function (e) {
            return "keypress" === e.type
              ? tr(e)
              : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0
          }
        }),
        Pr = ar(_r),
        Cr = ar(
          Ie({}, dr, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
          })
        ),
        Lr = ar(
          Ie({}, cr, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Er
          })
        ),
        Tr = ar(Ie({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
        Rr = Ie({}, dr, {
          deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0
          },
          deltaZ: 0,
          deltaMode: 0
        }),
        zr = ar(Rr),
        Nr = [9, 13, 27, 32],
        Or = ce && "CompositionEvent" in window,
        Ar = null
      ce && "documentMode" in document && (Ar = document.documentMode)
      var Mr = ce && "TextEvent" in window && !Ar,
        Dr = ce && (!Or || (Ar && 8 < Ar && 11 >= Ar)),
        Ir = String.fromCharCode(32),
        Ur = !1
      function Fr(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Nr.indexOf(t.keyCode)
          case "keydown":
            return 229 !== t.keyCode
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0
          default:
            return !1
        }
      }
      function jr(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
      }
      var Br = !1,
        Vr = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0
        }
      function $r(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase()
        return "input" === t ? !!Vr[e.type] : "textarea" === t
      }
      function Hr(e, t, n, r) {
        _t(r),
          0 < (t = Wa(t, "onChange")).length &&
            ((n = new sr("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }))
      }
      var Wr = null,
        Qr = null
      function qr(e) {
        Ia(e, 0)
      }
      function Kr(e) {
        if (qe(wo(e))) return e
      }
      function Gr(e, t) {
        if ("change" === e) return t
      }
      var Yr = !1
      if (ce) {
        var Xr
        if (ce) {
          var Jr = "oninput" in document
          if (!Jr) {
            var Zr = document.createElement("div")
            Zr.setAttribute("oninput", "return;"), (Jr = "function" == typeof Zr.oninput)
          }
          Xr = Jr
        } else Xr = !1
        Yr = Xr && (!document.documentMode || 9 < document.documentMode)
      }
      function ea() {
        Wr && (Wr.detachEvent("onpropertychange", ta), (Qr = Wr = null))
      }
      function ta(e) {
        if ("value" === e.propertyName && Kr(Qr)) {
          var t = []
          Hr(t, Qr, e, wt(e)), Rt(qr, t)
        }
      }
      function na(e, t, n) {
        "focusin" === e
          ? (ea(), (Qr = n), (Wr = t).attachEvent("onpropertychange", ta))
          : "focusout" === e && ea()
      }
      function ra(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kr(Qr)
      }
      function aa(e, t) {
        if ("click" === e) return Kr(t)
      }
      function oa(e, t) {
        if ("input" === e || "change" === e) return Kr(t)
      }
      var la =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            }
      function ia(e, t) {
        if (la(e, t)) return !0
        if ("object" != typeof e || null === e || "object" != typeof t || null === t)
          return !1
        var n = Object.keys(e),
          r = Object.keys(t)
        if (n.length !== r.length) return !1
        for (r = 0; r < n.length; r++) {
          var a = n[r]
          if (!fe.call(t, a) || !la(e[a], t[a])) return !1
        }
        return !0
      }
      function ua(e) {
        for (; e && e.firstChild; ) e = e.firstChild
        return e
      }
      function sa(e, t) {
        var n,
          r = ua(e)
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e }
            e = n
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling
                break e
              }
              r = r.parentNode
            }
            r = void 0
          }
          r = ua(r)
        }
      }
      function ca(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? ca(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
        )
      }
      function fa() {
        for (var e = window, t = Ke(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href
          } catch (r) {
            n = !1
          }
          if (!n) break
          t = Ke((e = t.contentWindow).document)
        }
        return t
      }
      function da(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase()
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        )
      }
      function pa(e) {
        var t = fa(),
          n = e.focusedElem,
          r = e.selectionRange
        if (t !== n && n && n.ownerDocument && ca(n.ownerDocument.documentElement, n)) {
          if (null !== r && da(n))
            if (((t = r.start), void 0 === (e = r.end) && (e = t), "selectionStart" in n))
              (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
            else if (
              (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
                .getSelection
            ) {
              e = e.getSelection()
              var a = n.textContent.length,
                o = Math.min(r.start, a)
              ;(r = void 0 === r.end ? o : Math.min(r.end, a)),
                !e.extend && o > r && ((a = r), (r = o), (o = a)),
                (a = sa(n, o))
              var l = sa(n, r)
              a &&
                l &&
                (1 !== e.rangeCount ||
                  e.anchorNode !== a.node ||
                  e.anchorOffset !== a.offset ||
                  e.focusNode !== l.node ||
                  e.focusOffset !== l.offset) &&
                ((t = t.createRange()).setStart(a.node, a.offset),
                e.removeAllRanges(),
                o > r
                  ? (e.addRange(t), e.extend(l.node, l.offset))
                  : (t.setEnd(l.node, l.offset), e.addRange(t)))
            }
          for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType &&
              t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
          for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
            ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top)
        }
      }
      var ha = ce && "documentMode" in document && 11 >= document.documentMode,
        ma = null,
        ga = null,
        ya = null,
        va = !1
      function ba(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
        va ||
          null == ma ||
          ma !== Ke(r) ||
          ((r =
            "selectionStart" in (r = ma) && da(r)
              ? { start: r.selectionStart, end: r.selectionEnd }
              : {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset
                }),
          (ya && ia(ya, r)) ||
            ((ya = r),
            0 < (r = Wa(ga, "onSelect")).length &&
              ((t = new sr("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = ma))))
      }
      function wa(e, t) {
        var n = {}
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        )
      }
      var ka = {
          animationend: wa("Animation", "AnimationEnd"),
          animationiteration: wa("Animation", "AnimationIteration"),
          animationstart: wa("Animation", "AnimationStart"),
          transitionend: wa("Transition", "TransitionEnd")
        },
        Sa = {},
        xa = {}
      function Ea(e) {
        if (Sa[e]) return Sa[e]
        if (!ka[e]) return e
        var t,
          n = ka[e]
        for (t in n) if (n.hasOwnProperty(t) && t in xa) return (Sa[e] = n[t])
        return e
      }
      ce &&
        ((xa = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete ka.animationend.animation,
          delete ka.animationiteration.animation,
          delete ka.animationstart.animation),
        "TransitionEvent" in window || delete ka.transitionend.transition)
      var _a = Ea("animationend"),
        Pa = Ea("animationiteration"),
        Ca = Ea("animationstart"),
        La = Ea("transitionend"),
        Ta = new Map(),
        Ra =
          "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
          )
      function za(e, t) {
        Ta.set(e, t), ue(t, [e])
      }
      for (var Na = 0; Na < Ra.length; Na++) {
        var Oa = Ra[Na]
        za(Oa.toLowerCase(), "on" + (Oa[0].toUpperCase() + Oa.slice(1)))
      }
      za(_a, "onAnimationEnd"),
        za(Pa, "onAnimationIteration"),
        za(Ca, "onAnimationStart"),
        za("dblclick", "onDoubleClick"),
        za("focusin", "onFocus"),
        za("focusout", "onBlur"),
        za(La, "onTransitionEnd"),
        se("onMouseEnter", ["mouseout", "mouseover"]),
        se("onMouseLeave", ["mouseout", "mouseover"]),
        se("onPointerEnter", ["pointerout", "pointerover"]),
        se("onPointerLeave", ["pointerout", "pointerover"]),
        ue(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(" ")
        ),
        ue(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        ue("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        ue(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        ue(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(" ")
        ),
        ue(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
        )
      var Aa =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        Ma = new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa))
      function Da(e, t, n) {
        var r = e.type || "unknown-event"
        ;(e.currentTarget = n),
          (function (e, t, n, r, a, o, l, i, u) {
            if ((jt.apply(this, arguments), Mt)) {
              if (!Mt) throw Error(oe(198))
              var s = Dt
              ;(Mt = !1), (Dt = null), It || ((It = !0), (Ut = s))
            }
          })(r, t, void 0, e),
          (e.currentTarget = null)
      }
      function Ia(e, t) {
        t = 0 != (4 & t)
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event
          r = r.listeners
          e: {
            var o = void 0
            if (t)
              for (var l = r.length - 1; 0 <= l; l--) {
                var i = r[l],
                  u = i.instance,
                  s = i.currentTarget
                if (((i = i.listener), u !== o && a.isPropagationStopped())) break e
                Da(a, i, s), (o = u)
              }
            else
              for (l = 0; l < r.length; l++) {
                if (
                  ((u = (i = r[l]).instance),
                  (s = i.currentTarget),
                  (i = i.listener),
                  u !== o && a.isPropagationStopped())
                )
                  break e
                Da(a, i, s), (o = u)
              }
          }
        }
        if (It) throw ((e = Ut), (It = !1), (Ut = null), e)
      }
      function Ua(e, t) {
        var n = t[mo]
        void 0 === n && (n = t[mo] = new Set())
        var r = e + "__bubble"
        n.has(r) || (Va(t, e, 2, !1), n.add(r))
      }
      function Fa(e, t, n) {
        var r = 0
        t && (r |= 4), Va(n, e, r, t)
      }
      var ja = "_reactListening" + Math.random().toString(36).slice(2)
      function Ba(e) {
        if (!e[ja]) {
          ;(e[ja] = !0),
            le.forEach(function (t) {
              "selectionchange" !== t && (Ma.has(t) || Fa(t, !1, e), Fa(t, !0, e))
            })
          var t = 9 === e.nodeType ? e : e.ownerDocument
          null === t || t[ja] || ((t[ja] = !0), Fa("selectionchange", !1, t))
        }
      }
      function Va(e, t, n, r) {
        switch (Yn(t)) {
          case 1:
            var a = Wn
            break
          case 4:
            a = Qn
            break
          default:
            a = qn
        }
        ;(n = a.bind(null, t, n, e)),
          (a = void 0),
          !Nt || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1)
      }
      function $a(e, t, n, r, a) {
        var o = r
        if (0 == (1 & t) && 0 == (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return
            var l = r.tag
            if (3 === l || 4 === l) {
              var i = r.stateNode.containerInfo
              if (i === a || (8 === i.nodeType && i.parentNode === a)) break
              if (4 === l)
                for (l = r.return; null !== l; ) {
                  var u = l.tag
                  if (
                    (3 === u || 4 === u) &&
                    ((u = l.stateNode.containerInfo) === a ||
                      (8 === u.nodeType && u.parentNode === a))
                  )
                    return
                  l = l.return
                }
              for (; null !== i; ) {
                if (null === (l = vo(i))) return
                if (5 === (u = l.tag) || 6 === u) {
                  r = o = l
                  continue e
                }
                i = i.parentNode
              }
            }
            r = r.return
          }
        Rt(function () {
          var r = o,
            a = wt(n),
            l = []
          e: {
            var i = Ta.get(e)
            if (void 0 !== i) {
              var u = sr,
                s = e
              switch (e) {
                case "keypress":
                  if (0 === tr(n)) break e
                case "keydown":
                case "keyup":
                  u = Pr
                  break
                case "focusin":
                  ;(s = "focus"), (u = mr)
                  break
                case "focusout":
                  ;(s = "blur"), (u = mr)
                  break
                case "beforeblur":
                case "afterblur":
                  u = mr
                  break
                case "click":
                  if (2 === n.button) break e
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  u = pr
                  break
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  u = hr
                  break
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  u = Lr
                  break
                case _a:
                case Pa:
                case Ca:
                  u = gr
                  break
                case La:
                  u = Tr
                  break
                case "scroll":
                  u = fr
                  break
                case "wheel":
                  u = zr
                  break
                case "copy":
                case "cut":
                case "paste":
                  u = vr
                  break
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  u = Cr
              }
              var c = 0 != (4 & t),
                f = !c && "scroll" === e,
                d = c ? (null !== i ? i + "Capture" : null) : i
              c = []
              for (var p, h = r; null !== h; ) {
                var m = (p = h).stateNode
                if (
                  (5 === p.tag &&
                    null !== m &&
                    ((p = m),
                    null !== d && null != (m = zt(h, d)) && c.push(Ha(h, m, p))),
                  f)
                )
                  break
                h = h.return
              }
              0 < c.length &&
                ((i = new u(i, s, null, n, a)), l.push({ event: i, listeners: c }))
            }
          }
          if (0 == (7 & t)) {
            if (
              ((u = "mouseout" === e || "pointerout" === e),
              (!(i = "mouseover" === e || "pointerover" === e) ||
                n === bt ||
                !(s = n.relatedTarget || n.fromElement) ||
                (!vo(s) && !s[ho])) &&
                (u || i) &&
                ((i =
                  a.window === a
                    ? a
                    : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                u
                  ? ((u = r),
                    null !== (s = (s = n.relatedTarget || n.toElement) ? vo(s) : null) &&
                      (s !== (f = Bt(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                      (s = null))
                  : ((u = null), (s = r)),
                u !== s))
            ) {
              if (
                ((c = pr),
                (m = "onMouseLeave"),
                (d = "onMouseEnter"),
                (h = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = Cr),
                  (m = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (h = "pointer")),
                (f = null == u ? i : wo(u)),
                (p = null == s ? i : wo(s)),
                ((i = new c(m, h + "leave", u, n, a)).target = f),
                (i.relatedTarget = p),
                (m = null),
                vo(a) === r &&
                  (((c = new c(d, h + "enter", s, n, a)).target = p),
                  (c.relatedTarget = f),
                  (m = c)),
                (f = m),
                u && s)
              )
                e: {
                  for (d = s, h = 0, p = c = u; p; p = Qa(p)) h++
                  for (p = 0, m = d; m; m = Qa(m)) p++
                  for (; 0 < h - p; ) (c = Qa(c)), h--
                  for (; 0 < p - h; ) (d = Qa(d)), p--
                  for (; h--; ) {
                    if (c === d || (null !== d && c === d.alternate)) break e
                    ;(c = Qa(c)), (d = Qa(d))
                  }
                  c = null
                }
              else c = null
              null !== u && qa(l, i, u, c, !1),
                null !== s && null !== f && qa(l, f, s, c, !0)
            }
            if (
              "select" ===
                (u = (i = r ? wo(r) : window).nodeName && i.nodeName.toLowerCase()) ||
              ("input" === u && "file" === i.type)
            )
              var g = Gr
            else if ($r(i))
              if (Yr) g = oa
              else {
                g = ra
                var y = na
              }
            else
              (u = i.nodeName) &&
                "input" === u.toLowerCase() &&
                ("checkbox" === i.type || "radio" === i.type) &&
                (g = aa)
            switch (
              (g && (g = g(e, r))
                ? Hr(l, g, n, a)
                : (y && y(e, i, r),
                  "focusout" === e &&
                    (y = i._wrapperState) &&
                    y.controlled &&
                    "number" === i.type &&
                    et(i, "number", i.value)),
              (y = r ? wo(r) : window),
              e)
            ) {
              case "focusin":
                ;($r(y) || "true" === y.contentEditable) &&
                  ((ma = y), (ga = r), (ya = null))
                break
              case "focusout":
                ya = ga = ma = null
                break
              case "mousedown":
                va = !0
                break
              case "contextmenu":
              case "mouseup":
              case "dragend":
                ;(va = !1), ba(l, n, a)
                break
              case "selectionchange":
                if (ha) break
              case "keydown":
              case "keyup":
                ba(l, n, a)
            }
            var v
            if (Or)
              e: {
                switch (e) {
                  case "compositionstart":
                    var b = "onCompositionStart"
                    break e
                  case "compositionend":
                    b = "onCompositionEnd"
                    break e
                  case "compositionupdate":
                    b = "onCompositionUpdate"
                    break e
                }
                b = void 0
              }
            else
              Br
                ? Fr(e, n) && (b = "onCompositionEnd")
                : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart")
            b &&
              (Dr &&
                "ko" !== n.locale &&
                (Br || "onCompositionStart" !== b
                  ? "onCompositionEnd" === b && Br && (v = er())
                  : ((Jn = "value" in (Xn = a) ? Xn.value : Xn.textContent), (Br = !0))),
              0 < (y = Wa(r, b)).length &&
                ((b = new br(b, e, null, n, a)),
                l.push({ event: b, listeners: y }),
                (v || null !== (v = jr(n))) && (b.data = v))),
              (v = Mr
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return jr(t)
                      case "keypress":
                        return 32 !== t.which ? null : ((Ur = !0), Ir)
                      case "textInput":
                        return (e = t.data) === Ir && Ur ? null : e
                      default:
                        return null
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Br)
                      return "compositionend" === e || (!Or && Fr(e, t))
                        ? ((e = er()), (Zn = Jn = Xn = null), (Br = !1), e)
                        : null
                    switch (e) {
                      case "paste":
                      default:
                        return null
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char
                          if (t.which) return String.fromCharCode(t.which)
                        }
                        return null
                      case "compositionend":
                        return Dr && "ko" !== t.locale ? null : t.data
                    }
                  })(e, n)) &&
                0 < (r = Wa(r, "onBeforeInput")).length &&
                ((a = new br("onBeforeInput", "beforeinput", null, n, a)),
                l.push({ event: a, listeners: r }),
                (a.data = v))
          }
          Ia(l, t)
        })
      }
      function Ha(e, t, n) {
        return { instance: e, listener: t, currentTarget: n }
      }
      function Wa(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var a = e,
            o = a.stateNode
          5 === a.tag &&
            null !== o &&
            ((a = o),
            null != (o = zt(e, n)) && r.unshift(Ha(e, o, a)),
            null != (o = zt(e, t)) && r.push(Ha(e, o, a))),
            (e = e.return)
        }
        return r
      }
      function Qa(e) {
        if (null === e) return null
        do {
          e = e.return
        } while (e && 5 !== e.tag)
        return e || null
      }
      function qa(e, t, n, r, a) {
        for (var o = t._reactName, l = []; null !== n && n !== r; ) {
          var i = n,
            u = i.alternate,
            s = i.stateNode
          if (null !== u && u === r) break
          5 === i.tag &&
            null !== s &&
            ((i = s),
            a
              ? null != (u = zt(n, o)) && l.unshift(Ha(n, u, i))
              : a || (null != (u = zt(n, o)) && l.push(Ha(n, u, i)))),
            (n = n.return)
        }
        0 !== l.length && e.push({ event: t, listeners: l })
      }
      var Ka = /\r\n?/g,
        Ga = /\u0000|\uFFFD/g
      function Ya(e) {
        return ("string" == typeof e ? e : "" + e).replace(Ka, "\n").replace(Ga, "")
      }
      function Xa(e, t, n) {
        if (((t = Ya(t)), Ya(e) !== t && n)) throw Error(oe(425))
      }
      function Ja() {}
      var Za = null,
        eo = null
      function to(e, t) {
        return (
          "textarea" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        )
      }
      var no = "function" == typeof setTimeout ? setTimeout : void 0,
        ro = "function" == typeof clearTimeout ? clearTimeout : void 0,
        ao = "function" == typeof Promise ? Promise : void 0,
        oo =
          "function" == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(lo)
                }
              : no
      function lo(e) {
        setTimeout(function () {
          throw e
        })
      }
      function io(e, t) {
        var n = t,
          r = 0
        do {
          var a = n.nextSibling
          if ((e.removeChild(n), a && 8 === a.nodeType))
            if ("/$" === (n = a.data)) {
              if (0 === r) return e.removeChild(a), void Vn(t)
              r--
            } else ("$" !== n && "$?" !== n && "$!" !== n) || r++
          n = a
        } while (n)
        Vn(t)
      }
      function uo(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType
          if (1 === t || 3 === t) break
          if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break
            if ("/$" === t) return null
          }
        }
        return e
      }
      function so(e) {
        e = e.previousSibling
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e
              t--
            } else "/$" === n && t++
          }
          e = e.previousSibling
        }
        return null
      }
      var co = Math.random().toString(36).slice(2),
        fo = "__reactFiber$" + co,
        po = "__reactProps$" + co,
        ho = "__reactContainer$" + co,
        mo = "__reactEvents$" + co,
        go = "__reactListeners$" + co,
        yo = "__reactHandles$" + co
      function vo(e) {
        var t = e[fo]
        if (t) return t
        for (var n = e.parentNode; n; ) {
          if ((t = n[ho] || n[fo])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
              for (e = so(e); null !== e; ) {
                if ((n = e[fo])) return n
                e = so(e)
              }
            return t
          }
          n = (e = n).parentNode
        }
        return null
      }
      function bo(e) {
        return !(e = e[fo] || e[ho]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e
      }
      function wo(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode
        throw Error(oe(33))
      }
      function ko(e) {
        return e[po] || null
      }
      var So = [],
        xo = -1
      function Eo(e) {
        return { current: e }
      }
      function _o(e) {
        0 > xo || ((e.current = So[xo]), (So[xo] = null), xo--)
      }
      function Po(e, t) {
        xo++, (So[xo] = e.current), (e.current = t)
      }
      var Co = {},
        Lo = Eo(Co),
        To = Eo(!1),
        Ro = Co
      function zo(e, t) {
        var n = e.type.contextTypes
        if (!n) return Co
        var r = e.stateNode
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext
        var a,
          o = {}
        for (a in n) o[a] = t[a]
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        )
      }
      function No(e) {
        return null != (e = e.childContextTypes)
      }
      function Oo() {
        _o(To), _o(Lo)
      }
      function Ao(e, t, n) {
        if (Lo.current !== Co) throw Error(oe(168))
        Po(Lo, t), Po(To, n)
      }
      function Mo(e, t, n) {
        var r = e.stateNode
        if (((t = t.childContextTypes), "function" != typeof r.getChildContext)) return n
        for (var a in (r = r.getChildContext()))
          if (!(a in t)) throw Error(oe(108, $e(e) || "Unknown", a))
        return Ie({}, n, r)
      }
      function Do(e) {
        return (
          (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Co),
          (Ro = Lo.current),
          Po(Lo, e),
          Po(To, To.current),
          !0
        )
      }
      function Io(e, t, n) {
        var r = e.stateNode
        if (!r) throw Error(oe(169))
        n
          ? ((e = Mo(e, t, Ro)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            _o(To),
            _o(Lo),
            Po(Lo, e))
          : _o(To),
          Po(To, n)
      }
      var Uo = null,
        Fo = !1,
        jo = !1
      function Bo(e) {
        null === Uo ? (Uo = [e]) : Uo.push(e)
      }
      function Vo() {
        if (!jo && null !== Uo) {
          jo = !0
          var e = 0,
            t = bn
          try {
            var n = Uo
            for (bn = 1; e < n.length; e++) {
              var r = n[e]
              do {
                r = r(!0)
              } while (null !== r)
            }
            ;(Uo = null), (Fo = !1)
          } catch (df) {
            throw (null !== Uo && (Uo = Uo.slice(e + 1)), Qt(Jt, Vo), df)
          } finally {
            ;(bn = t), (jo = !1)
          }
        }
        return null
      }
      var $o = [],
        Ho = 0,
        Wo = null,
        Qo = 0,
        qo = [],
        Ko = 0,
        Go = null,
        Yo = 1,
        Xo = ""
      function Jo(e, t) {
        ;($o[Ho++] = Qo), ($o[Ho++] = Wo), (Wo = e), (Qo = t)
      }
      function Zo(e, t, n) {
        ;(qo[Ko++] = Yo), (qo[Ko++] = Xo), (qo[Ko++] = Go), (Go = e)
        var r = Yo
        e = Xo
        var a = 32 - on(r) - 1
        ;(r &= ~(1 << a)), (n += 1)
        var o = 32 - on(t) + a
        if (30 < o) {
          var l = a - (a % 5)
          ;(o = (r & ((1 << l) - 1)).toString(32)),
            (r >>= l),
            (a -= l),
            (Yo = (1 << (32 - on(t) + a)) | (n << a) | r),
            (Xo = o + e)
        } else (Yo = (1 << o) | (n << a) | r), (Xo = e)
      }
      function el(e) {
        null !== e.return && (Jo(e, 1), Zo(e, 1, 0))
      }
      function tl(e) {
        for (; e === Wo; )
          (Wo = $o[--Ho]), ($o[Ho] = null), (Qo = $o[--Ho]), ($o[Ho] = null)
        for (; e === Go; )
          (Go = qo[--Ko]),
            (qo[Ko] = null),
            (Xo = qo[--Ko]),
            (qo[Ko] = null),
            (Yo = qo[--Ko]),
            (qo[Ko] = null)
      }
      var nl = null,
        rl = null,
        al = !1,
        ol = null
      function ll(e, t) {
        var n = zc(5, null, null, 0)
        ;(n.elementType = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          null === (t = e.deletions) ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
      }
      function il(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type
            return (
              null !==
                (t =
                  1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), (nl = e), (rl = uo(t.firstChild)), !0)
            )
          case 6:
            return (
              null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), (nl = e), (rl = null), !0)
            )
          case 13:
            return (
              null !== (t = 8 !== t.nodeType ? null : t) &&
              ((n = null !== Go ? { id: Yo, overflow: Xo } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
              }),
              ((n = zc(18, null, null, 0)).stateNode = t),
              (n.return = e),
              (e.child = n),
              (nl = e),
              (rl = null),
              !0)
            )
          default:
            return !1
        }
      }
      function ul(e) {
        return 0 != (1 & e.mode) && 0 == (128 & e.flags)
      }
      function sl(e) {
        if (al) {
          var t = rl
          if (t) {
            var n = t
            if (!il(e, t)) {
              if (ul(e)) throw Error(oe(418))
              t = uo(n.nextSibling)
              var r = nl
              t && il(e, t)
                ? ll(r, n)
                : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e))
            }
          } else {
            if (ul(e)) throw Error(oe(418))
            ;(e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e)
          }
        }
      }
      function cl(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
          e = e.return
        nl = e
      }
      function fl(e) {
        if (e !== nl) return !1
        if (!al) return cl(e), (al = !0), !1
        var t
        if (
          ((t = 3 !== e.tag) &&
            !(t = 5 !== e.tag) &&
            (t = "head" !== (t = e.type) && "body" !== t && !to(e.type, e.memoizedProps)),
          t && (t = rl))
        ) {
          if (ul(e)) throw (dl(), Error(oe(418)))
          for (; t; ) ll(e, t), (t = uo(t.nextSibling))
        }
        if ((cl(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(oe(317))
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data
                if ("/$" === n) {
                  if (0 === t) {
                    rl = uo(e.nextSibling)
                    break e
                  }
                  t--
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++
              }
              e = e.nextSibling
            }
            rl = null
          }
        } else rl = nl ? uo(e.stateNode.nextSibling) : null
        return !0
      }
      function dl() {
        for (var e = rl; e; ) e = uo(e.nextSibling)
      }
      function pl() {
        ;(rl = nl = null), (al = !1)
      }
      function hl(e) {
        null === ol ? (ol = [e]) : ol.push(e)
      }
      var ml = we.ReactCurrentBatchConfig
      function gl(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = Ie({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n])
          return t
        }
        return t
      }
      var yl = Eo(null),
        vl = null,
        bl = null,
        wl = null
      function kl() {
        wl = bl = vl = null
      }
      function Sl(e) {
        var t = yl.current
        _o(yl), (e._currentValue = t)
      }
      function xl(e, t, n) {
        for (; null !== e; ) {
          var r = e.alternate
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
              : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
          )
            break
          e = e.return
        }
      }
      function El(e, t) {
        ;(vl = e),
          (wl = bl = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (bu = !0), (e.firstContext = null))
      }
      function _l(e) {
        var t = e._currentValue
        if (wl !== e)
          if (((e = { context: e, memoizedValue: t, next: null }), null === bl)) {
            if (null === vl) throw Error(oe(308))
            ;(bl = e), (vl.dependencies = { lanes: 0, firstContext: e })
          } else bl = bl.next = e
        return t
      }
      var Pl = null
      function Cl(e) {
        null === Pl ? (Pl = [e]) : Pl.push(e)
      }
      function Ll(e, t, n, r) {
        var a = t.interleaved
        return (
          null === a ? ((n.next = n), Cl(t)) : ((n.next = a.next), (a.next = n)),
          (t.interleaved = n),
          Tl(e, r)
        )
      }
      function Tl(e, t) {
        e.lanes |= t
        var n = e.alternate
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return)
        return 3 === n.tag ? n.stateNode : null
      }
      var Rl = !1
      function zl(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: 0 },
          effects: null
        }
      }
      function Nl(e, t) {
        ;(e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects
            })
      }
      function Ol(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        }
      }
      function Al(e, t, n) {
        var r = e.updateQueue
        if (null === r) return null
        if (((r = r.shared), 0 != (2 & Ls))) {
          var a = r.pending
          return (
            null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
            (r.pending = t),
            Tl(e, n)
          )
        }
        return (
          null === (a = r.interleaved)
            ? ((t.next = t), Cl(r))
            : ((t.next = a.next), (a.next = t)),
          (r.interleaved = t),
          Tl(e, n)
        )
      }
      function Ml(e, t, n) {
        if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
          var r = t.lanes
          ;(n |= r &= e.pendingLanes), (t.lanes = n), vn(e, n)
        }
      }
      function Dl(e, t) {
        var n = e.updateQueue,
          r = e.alternate
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            o = null
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var l = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null
              }
              null === o ? (a = o = l) : (o = o.next = l), (n = n.next)
            } while (null !== n)
            null === o ? (a = o = t) : (o = o.next = t)
          } else a = o = t
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: o,
              shared: r.shared,
              effects: r.effects
            }),
            void (e.updateQueue = n)
          )
        }
        null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
          (n.lastBaseUpdate = t)
      }
      function Il(e, t, n, r) {
        var a = e.updateQueue
        Rl = !1
        var o = a.firstBaseUpdate,
          l = a.lastBaseUpdate,
          i = a.shared.pending
        if (null !== i) {
          a.shared.pending = null
          var u = i,
            s = u.next
          ;(u.next = null), null === l ? (o = s) : (l.next = s), (l = u)
          var c = e.alternate
          null !== c &&
            (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
            (null === i ? (c.firstBaseUpdate = s) : (i.next = s), (c.lastBaseUpdate = u))
        }
        if (null !== o) {
          var f = a.baseState
          for (l = 0, c = s = u = null, i = o; ; ) {
            var d = i.lane,
              p = i.eventTime
            if ((r & d) === d) {
              null !== c &&
                (c = c.next =
                  {
                    eventTime: p,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                  })
              e: {
                var h = e,
                  m = i
                switch (((d = t), (p = n), m.tag)) {
                  case 1:
                    if ("function" == typeof (h = m.payload)) {
                      f = h.call(p, f, d)
                      break e
                    }
                    f = h
                    break e
                  case 3:
                    h.flags = (-65537 & h.flags) | 128
                  case 0:
                    if (
                      null ==
                      (d = "function" == typeof (h = m.payload) ? h.call(p, f, d) : h)
                    )
                      break e
                    f = Ie({}, f, d)
                    break e
                  case 2:
                    Rl = !0
                }
              }
              null !== i.callback &&
                0 !== i.lane &&
                ((e.flags |= 64),
                null === (d = a.effects) ? (a.effects = [i]) : d.push(i))
            } else
              (p = {
                eventTime: p,
                lane: d,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null
              }),
                null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                (l |= d)
            if (null === (i = i.next)) {
              if (null === (i = a.shared.pending)) break
              ;(i = (d = i).next),
                (d.next = null),
                (a.lastBaseUpdate = d),
                (a.shared.pending = null)
            }
          }
          if (
            (null === c && (u = f),
            (a.baseState = u),
            (a.firstBaseUpdate = s),
            (a.lastBaseUpdate = c),
            null !== (t = a.shared.interleaved))
          ) {
            a = t
            do {
              ;(l |= a.lane), (a = a.next)
            } while (a !== t)
          } else null === o && (a.shared.lanes = 0)
          ;(Ds |= l), (e.lanes = l), (e.memoizedState = f)
        }
      }
      function Ul(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" != typeof a))
                throw Error(oe(191, a))
              a.call(r)
            }
          }
      }
      var Fl = new re.Component().refs
      function jl(e, t, n, r) {
        ;(n = null == (n = n(r, (t = e.memoizedState))) ? t : Ie({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n)
      }
      var Bl = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Bt(e) === e
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals
          var r = ec(),
            a = tc(e),
            o = Ol(r, a)
          ;(o.payload = t),
            null != n && (o.callback = n),
            null !== (t = Al(e, o, a)) && (nc(t, e, a, r), Ml(t, e, a))
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals
          var r = ec(),
            a = tc(e),
            o = Ol(r, a)
          ;(o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            null !== (t = Al(e, o, a)) && (nc(t, e, a, r), Ml(t, e, a))
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals
          var n = ec(),
            r = tc(e),
            a = Ol(n, r)
          ;(a.tag = 2),
            null != t && (a.callback = t),
            null !== (t = Al(e, a, r)) && (nc(t, e, r, n), Ml(t, e, r))
        }
      }
      function Vl(e, t, n, r, a, o, l) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, l)
          : !(t.prototype && t.prototype.isPureReactComponent && ia(n, r) && ia(a, o))
      }
      function $l(e, t, n) {
        var r = !1,
          a = Co,
          o = t.contextType
        return (
          "object" == typeof o && null !== o
            ? (o = _l(o))
            : ((a = No(t) ? Ro : Lo.current),
              (o = (r = null != (r = t.contextTypes)) ? zo(e, a) : Co)),
          (t = new t(n, o)),
          (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = Bl),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        )
      }
      function Hl(e, t, n, r) {
        ;(e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && Bl.enqueueReplaceState(t, t.state, null)
      }
      function Wl(e, t, n, r) {
        var a = e.stateNode
        ;(a.props = n), (a.state = e.memoizedState), (a.refs = Fl), zl(e)
        var o = t.contextType
        "object" == typeof o && null !== o
          ? (a.context = _l(o))
          : ((o = No(t) ? Ro : Lo.current), (a.context = zo(e, o))),
          (a.state = e.memoizedState),
          "function" == typeof (o = t.getDerivedStateFromProps) &&
            (jl(e, t, o, n), (a.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount &&
              "function" != typeof a.componentWillMount) ||
            ((t = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && Bl.enqueueReplaceState(a, a.state, null),
            Il(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" == typeof a.componentDidMount && (e.flags |= 4194308)
      }
      function Ql(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(oe(309))
              var r = n.stateNode
            }
            if (!r) throw Error(oe(147, e))
            var a = r,
              o = "" + e
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === o
              ? t.ref
              : ((t = function (e) {
                  var t = a.refs
                  t === Fl && (t = a.refs = {}), null === e ? delete t[o] : (t[o] = e)
                }),
                (t._stringRef = o),
                t)
          }
          if ("string" != typeof e) throw Error(oe(284))
          if (!n._owner) throw Error(oe(290, e))
        }
        return e
      }
      function ql(e, t) {
        throw (
          ((e = Object.prototype.toString.call(t)),
          Error(
            oe(
              31,
              "[object Object]" === e
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e
            )
          ))
        )
      }
      function Kl(e) {
        return (0, e._init)(e._payload)
      }
      function Gl(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
          }
        }
        function n(n, r) {
          if (!e) return null
          for (; null !== r; ) t(n, r), (r = r.sibling)
          return null
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling)
          return e
        }
        function a(e, t) {
          return ((e = Oc(e, t)).index = 0), (e.sibling = null), e
        }
        function o(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags |= 2), n)
                  : r
                : ((t.flags |= 2), n)
              : ((t.flags |= 1048576), n)
          )
        }
        function l(t) {
          return e && null === t.alternate && (t.flags |= 2), t
        }
        function i(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Ic(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t)
        }
        function u(e, t, n, r) {
          var o = n.type
          return o === xe
            ? c(e, t, n.props.children, r, n.key)
            : null !== t &&
                (t.elementType === o ||
                  ("object" == typeof o &&
                    null !== o &&
                    o.$$typeof === Ne &&
                    Kl(o) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Ac(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(e, t, n)),
                (r.return = e),
                r)
        }
        function s(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Uc(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t)
        }
        function c(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Mc(n, e.mode, r, o)).return = e), t)
            : (((t = a(t, n)).return = e), t)
        }
        function f(e, t, n) {
          if (("string" == typeof t && "" !== t) || "number" == typeof t)
            return ((t = Ic("" + t, e.mode, n)).return = e), t
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case ke:
                return (
                  ((n = Ac(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                )
              case Se:
                return ((t = Uc(t, e.mode, n)).return = e), t
              case Ne:
                return f(e, (0, t._init)(t._payload), n)
            }
            if (tt(t) || Me(t)) return ((t = Mc(t, e.mode, n, null)).return = e), t
            ql(e, t)
          }
          return null
        }
        function d(e, t, n, r) {
          var a = null !== t ? t.key : null
          if (("string" == typeof n && "" !== n) || "number" == typeof n)
            return null !== a ? null : i(e, t, "" + n, r)
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case ke:
                return n.key === a ? u(e, t, n, r) : null
              case Se:
                return n.key === a ? s(e, t, n, r) : null
              case Ne:
                return d(e, t, (a = n._init)(n._payload), r)
            }
            if (tt(n) || Me(n)) return null !== a ? null : c(e, t, n, r, null)
            ql(e, n)
          }
          return null
        }
        function p(e, t, n, r, a) {
          if (("string" == typeof r && "" !== r) || "number" == typeof r)
            return i(t, (e = e.get(n) || null), "" + r, a)
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case ke:
                return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a)
              case Se:
                return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a)
              case Ne:
                return p(e, t, n, (0, r._init)(r._payload), a)
            }
            if (tt(r) || Me(r)) return c(t, (e = e.get(n) || null), r, a, null)
            ql(t, r)
          }
          return null
        }
        function h(a, l, i, u) {
          for (
            var s = null, c = null, h = l, m = (l = 0), g = null;
            null !== h && m < i.length;
            m++
          ) {
            h.index > m ? ((g = h), (h = null)) : (g = h.sibling)
            var y = d(a, h, i[m], u)
            if (null === y) {
              null === h && (h = g)
              break
            }
            e && h && null === y.alternate && t(a, h),
              (l = o(y, l, m)),
              null === c ? (s = y) : (c.sibling = y),
              (c = y),
              (h = g)
          }
          if (m === i.length) return n(a, h), al && Jo(a, m), s
          if (null === h) {
            for (; m < i.length; m++)
              null !== (h = f(a, i[m], u)) &&
                ((l = o(h, l, m)), null === c ? (s = h) : (c.sibling = h), (c = h))
            return al && Jo(a, m), s
          }
          for (h = r(a, h); m < i.length; m++)
            null !== (g = p(h, a, m, i[m], u)) &&
              (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
              (l = o(g, l, m)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g))
          return (
            e &&
              h.forEach(function (e) {
                return t(a, e)
              }),
            al && Jo(a, m),
            s
          )
        }
        function m(a, l, i, u) {
          var s = Me(i)
          if ("function" != typeof s) throw Error(oe(150))
          if (null == (i = s.call(i))) throw Error(oe(151))
          for (
            var c = (s = null), h = l, m = (l = 0), g = null, y = i.next();
            null !== h && !y.done;
            m++, y = i.next()
          ) {
            h.index > m ? ((g = h), (h = null)) : (g = h.sibling)
            var v = d(a, h, y.value, u)
            if (null === v) {
              null === h && (h = g)
              break
            }
            e && h && null === v.alternate && t(a, h),
              (l = o(v, l, m)),
              null === c ? (s = v) : (c.sibling = v),
              (c = v),
              (h = g)
          }
          if (y.done) return n(a, h), al && Jo(a, m), s
          if (null === h) {
            for (; !y.done; m++, y = i.next())
              null !== (y = f(a, y.value, u)) &&
                ((l = o(y, l, m)), null === c ? (s = y) : (c.sibling = y), (c = y))
            return al && Jo(a, m), s
          }
          for (h = r(a, h); !y.done; m++, y = i.next())
            null !== (y = p(h, a, m, y.value, u)) &&
              (e && null !== y.alternate && h.delete(null === y.key ? m : y.key),
              (l = o(y, l, m)),
              null === c ? (s = y) : (c.sibling = y),
              (c = y))
          return (
            e &&
              h.forEach(function (e) {
                return t(a, e)
              }),
            al && Jo(a, m),
            s
          )
        }
        return function e(r, o, i, u) {
          if (
            ("object" == typeof i &&
              null !== i &&
              i.type === xe &&
              null === i.key &&
              (i = i.props.children),
            "object" == typeof i && null !== i)
          ) {
            switch (i.$$typeof) {
              case ke:
                e: {
                  for (var s = i.key, c = o; null !== c; ) {
                    if (c.key === s) {
                      if ((s = i.type) === xe) {
                        if (7 === c.tag) {
                          n(r, c.sibling),
                            ((o = a(c, i.props.children)).return = r),
                            (r = o)
                          break e
                        }
                      } else if (
                        c.elementType === s ||
                        ("object" == typeof s &&
                          null !== s &&
                          s.$$typeof === Ne &&
                          Kl(s) === c.type)
                      ) {
                        n(r, c.sibling),
                          ((o = a(c, i.props)).ref = Ql(r, c, i)),
                          (o.return = r),
                          (r = o)
                        break e
                      }
                      n(r, c)
                      break
                    }
                    t(r, c), (c = c.sibling)
                  }
                  i.type === xe
                    ? (((o = Mc(i.props.children, r.mode, u, i.key)).return = r), (r = o))
                    : (((u = Ac(i.type, i.key, i.props, null, r.mode, u)).ref = Ql(
                        r,
                        o,
                        i
                      )),
                      (u.return = r),
                      (r = u))
                }
                return l(r)
              case Se:
                e: {
                  for (c = i.key; null !== o; ) {
                    if (o.key === c) {
                      if (
                        4 === o.tag &&
                        o.stateNode.containerInfo === i.containerInfo &&
                        o.stateNode.implementation === i.implementation
                      ) {
                        n(r, o.sibling),
                          ((o = a(o, i.children || [])).return = r),
                          (r = o)
                        break e
                      }
                      n(r, o)
                      break
                    }
                    t(r, o), (o = o.sibling)
                  }
                  ;((o = Uc(i, r.mode, u)).return = r), (r = o)
                }
                return l(r)
              case Ne:
                return e(r, o, (c = i._init)(i._payload), u)
            }
            if (tt(i)) return h(r, o, i, u)
            if (Me(i)) return m(r, o, i, u)
            ql(r, i)
          }
          return ("string" == typeof i && "" !== i) || "number" == typeof i
            ? ((i = "" + i),
              null !== o && 6 === o.tag
                ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                : (n(r, o), ((o = Ic(i, r.mode, u)).return = r), (r = o)),
              l(r))
            : n(r, o)
        }
      }
      var Yl = Gl(!0),
        Xl = Gl(!1),
        Jl = {},
        Zl = Eo(Jl),
        ei = Eo(Jl),
        ti = Eo(Jl)
      function ni(e) {
        if (e === Jl) throw Error(oe(174))
        return e
      }
      function ri(e, t) {
        switch ((Po(ti, t), Po(ei, e), Po(Zl, Jl), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ut(null, "")
            break
          default:
            t = ut(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            )
        }
        _o(Zl), Po(Zl, t)
      }
      function ai() {
        _o(Zl), _o(ei), _o(ti)
      }
      function oi(e) {
        ni(ti.current)
        var t = ni(Zl.current),
          n = ut(t, e.type)
        t !== n && (Po(ei, e), Po(Zl, n))
      }
      function li(e) {
        ei.current === e && (_o(Zl), _o(ei))
      }
      var ii = Eo(0)
      function ui(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState
            if (
              null !== n &&
              (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
            )
              return t
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (128 & t.flags)) return t
          } else if (null !== t.child) {
            ;(t.child.return = t), (t = t.child)
            continue
          }
          if (t === e) break
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null
            t = t.return
          }
          ;(t.sibling.return = t.return), (t = t.sibling)
        }
        return null
      }
      var si = []
      function ci() {
        for (var e = 0; e < si.length; e++) si[e]._workInProgressVersionPrimary = null
        si.length = 0
      }
      var fi = we.ReactCurrentDispatcher,
        di = we.ReactCurrentBatchConfig,
        pi = 0,
        hi = null,
        mi = null,
        gi = null,
        yi = !1,
        vi = !1,
        bi = 0,
        wi = 0
      function ki() {
        throw Error(oe(321))
      }
      function Si(e, t) {
        if (null === t) return !1
        for (var n = 0; n < t.length && n < e.length; n++) if (!la(e[n], t[n])) return !1
        return !0
      }
      function xi(e, t, n, r, a, o) {
        if (
          ((pi = o),
          (hi = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (fi.current = null === e || null === e.memoizedState ? lu : iu),
          (e = n(r, a)),
          vi)
        ) {
          o = 0
          do {
            if (((vi = !1), (bi = 0), 25 <= o)) throw Error(oe(301))
            ;(o += 1),
              (gi = mi = null),
              (t.updateQueue = null),
              (fi.current = uu),
              (e = n(r, a))
          } while (vi)
        }
        if (
          ((fi.current = ou),
          (t = null !== mi && null !== mi.next),
          (pi = 0),
          (gi = mi = hi = null),
          (yi = !1),
          t)
        )
          throw Error(oe(300))
        return e
      }
      function Ei() {
        var e = 0 !== bi
        return (bi = 0), e
      }
      function _i() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        }
        return null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e), gi
      }
      function Pi() {
        if (null === mi) {
          var e = hi.alternate
          e = null !== e ? e.memoizedState : null
        } else e = mi.next
        var t = null === gi ? hi.memoizedState : gi.next
        if (null !== t) (gi = t), (mi = e)
        else {
          if (null === e) throw Error(oe(310))
          ;(e = {
            memoizedState: (mi = e).memoizedState,
            baseState: mi.baseState,
            baseQueue: mi.baseQueue,
            queue: mi.queue,
            next: null
          }),
            null === gi ? (hi.memoizedState = gi = e) : (gi = gi.next = e)
        }
        return gi
      }
      function Ci(e, t) {
        return "function" == typeof t ? t(e) : t
      }
      function Li(e) {
        var t = Pi(),
          n = t.queue
        if (null === n) throw Error(oe(311))
        n.lastRenderedReducer = e
        var r = mi,
          a = r.baseQueue,
          o = n.pending
        if (null !== o) {
          if (null !== a) {
            var l = a.next
            ;(a.next = o.next), (o.next = l)
          }
          ;(r.baseQueue = a = o), (n.pending = null)
        }
        if (null !== a) {
          ;(o = a.next), (r = r.baseState)
          var i = (l = null),
            u = null,
            s = o
          do {
            var c = s.lane
            if ((pi & c) === c)
              null !== u &&
                (u = u.next =
                  {
                    lane: 0,
                    action: s.action,
                    hasEagerState: s.hasEagerState,
                    eagerState: s.eagerState,
                    next: null
                  }),
                (r = s.hasEagerState ? s.eagerState : e(r, s.action))
            else {
              var f = {
                lane: c,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null
              }
              null === u ? ((i = u = f), (l = r)) : (u = u.next = f),
                (hi.lanes |= c),
                (Ds |= c)
            }
            s = s.next
          } while (null !== s && s !== o)
          null === u ? (l = r) : (u.next = i),
            la(r, t.memoizedState) || (bu = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = u),
            (n.lastRenderedState = r)
        }
        if (null !== (e = n.interleaved)) {
          a = e
          do {
            ;(o = a.lane), (hi.lanes |= o), (Ds |= o), (a = a.next)
          } while (a !== e)
        } else null === a && (n.lanes = 0)
        return [t.memoizedState, n.dispatch]
      }
      function Ti(e) {
        var t = Pi(),
          n = t.queue
        if (null === n) throw Error(oe(311))
        n.lastRenderedReducer = e
        var r = n.dispatch,
          a = n.pending,
          o = t.memoizedState
        if (null !== a) {
          n.pending = null
          var l = (a = a.next)
          do {
            ;(o = e(o, l.action)), (l = l.next)
          } while (l !== a)
          la(o, t.memoizedState) || (bu = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o)
        }
        return [o, r]
      }
      function Ri() {}
      function zi(e, t) {
        var n = hi,
          r = Pi(),
          a = t(),
          o = !la(r.memoizedState, a)
        if (
          (o && ((r.memoizedState = a), (bu = !0)),
          (r = r.queue),
          $i(Ai.bind(null, n, r, e), [e]),
          r.getSnapshot !== t || o || (null !== gi && 1 & gi.memoizedState.tag))
        ) {
          if (
            ((n.flags |= 2048),
            Ui(9, Oi.bind(null, n, r, a, t), void 0, null),
            null === Ts)
          )
            throw Error(oe(349))
          0 != (30 & pi) || Ni(n, t, a)
        }
        return a
      }
      function Ni(e, t, n) {
        ;(e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          null === (t = hi.updateQueue)
            ? ((t = { lastEffect: null, stores: null }),
              (hi.updateQueue = t),
              (t.stores = [e]))
            : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e)
      }
      function Oi(e, t, n, r) {
        ;(t.value = n), (t.getSnapshot = r), Mi(t) && Di(e)
      }
      function Ai(e, t, n) {
        return n(function () {
          Mi(t) && Di(e)
        })
      }
      function Mi(e) {
        var t = e.getSnapshot
        e = e.value
        try {
          var n = t()
          return !la(e, n)
        } catch (r) {
          return !0
        }
      }
      function Di(e) {
        var t = Tl(e, 1)
        null !== t && nc(t, e, 1, -1)
      }
      function Ii(e) {
        var t = _i()
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ci,
            lastRenderedState: e
          }),
          (t.queue = e),
          (e = e.dispatch = tu.bind(null, hi, e)),
          [t.memoizedState, e]
        )
      }
      function Ui(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = hi.updateQueue)
            ? ((t = { lastEffect: null, stores: null }),
              (hi.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        )
      }
      function Fi() {
        return Pi().memoizedState
      }
      function ji(e, t, n, r) {
        var a = _i()
        ;(hi.flags |= e),
          (a.memoizedState = Ui(1 | t, n, void 0, void 0 === r ? null : r))
      }
      function Bi(e, t, n, r) {
        var a = Pi()
        r = void 0 === r ? null : r
        var o = void 0
        if (null !== mi) {
          var l = mi.memoizedState
          if (((o = l.destroy), null !== r && Si(r, l.deps)))
            return void (a.memoizedState = Ui(t, n, o, r))
        }
        ;(hi.flags |= e), (a.memoizedState = Ui(1 | t, n, o, r))
      }
      function Vi(e, t) {
        return ji(8390656, 8, e, t)
      }
      function $i(e, t) {
        return Bi(2048, 8, e, t)
      }
      function Hi(e, t) {
        return Bi(4, 2, e, t)
      }
      function Wi(e, t) {
        return Bi(4, 4, e, t)
      }
      function Qi(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null)
            })
          : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null
              })
            : void 0
      }
      function qi(e, t, n) {
        return (n = null != n ? n.concat([e]) : null), Bi(4, 4, Qi.bind(null, t, e), n)
      }
      function Ki() {}
      function Gi(e, t) {
        var n = Pi()
        t = void 0 === t ? null : t
        var r = n.memoizedState
        return null !== r && null !== t && Si(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e)
      }
      function Yi(e, t) {
        var n = Pi()
        t = void 0 === t ? null : t
        var r = n.memoizedState
        return null !== r && null !== t && Si(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e)
      }
      function Xi(e, t, n) {
        return 0 == (21 & pi)
          ? (e.baseState && ((e.baseState = !1), (bu = !0)), (e.memoizedState = n))
          : (la(n, t) || ((n = mn()), (hi.lanes |= n), (Ds |= n), (e.baseState = !0)), t)
      }
      function Ji(e, t) {
        var n = bn
        ;(bn = 0 !== n && 4 > n ? n : 4), e(!0)
        var r = di.transition
        di.transition = {}
        try {
          e(!1), t()
        } finally {
          ;(bn = n), (di.transition = r)
        }
      }
      function Zi() {
        return Pi().memoizedState
      }
      function eu(e, t, n) {
        var r = tc(e)
        ;(n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
          nu(e)
            ? ru(t, n)
            : null !== (n = Ll(e, t, n, r)) && (nc(n, e, r, ec()), au(n, t, r))
      }
      function tu(e, t, n) {
        var r = tc(e),
          a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
        if (nu(e)) ru(t, a)
        else {
          var o = e.alternate
          if (
            0 === e.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var l = t.lastRenderedState,
                i = o(l, n)
              if (((a.hasEagerState = !0), (a.eagerState = i), la(i, l))) {
                var u = t.interleaved
                return (
                  null === u ? ((a.next = a), Cl(t)) : ((a.next = u.next), (u.next = a)),
                  void (t.interleaved = a)
                )
              }
            } catch (s) {}
          null !== (n = Ll(e, t, a, r)) && (nc(n, e, r, (a = ec())), au(n, t, r))
        }
      }
      function nu(e) {
        var t = e.alternate
        return e === hi || (null !== t && t === hi)
      }
      function ru(e, t) {
        vi = yi = !0
        var n = e.pending
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
      }
      function au(e, t, n) {
        if (0 != (4194240 & n)) {
          var r = t.lanes
          ;(n |= r &= e.pendingLanes), (t.lanes = n), vn(e, n)
        }
      }
      var ou = {
          readContext: _l,
          useCallback: ki,
          useContext: ki,
          useEffect: ki,
          useImperativeHandle: ki,
          useInsertionEffect: ki,
          useLayoutEffect: ki,
          useMemo: ki,
          useReducer: ki,
          useRef: ki,
          useState: ki,
          useDebugValue: ki,
          useDeferredValue: ki,
          useTransition: ki,
          useMutableSource: ki,
          useSyncExternalStore: ki,
          useId: ki,
          unstable_isNewReconciler: !1
        },
        lu = {
          readContext: _l,
          useCallback: function (e, t) {
            return (_i().memoizedState = [e, void 0 === t ? null : t]), e
          },
          useContext: _l,
          useEffect: Vi,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              ji(4194308, 4, Qi.bind(null, t, e), n)
            )
          },
          useLayoutEffect: function (e, t) {
            return ji(4194308, 4, e, t)
          },
          useInsertionEffect: function (e, t) {
            return ji(4, 2, e, t)
          },
          useMemo: function (e, t) {
            var n = _i()
            return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e
          },
          useReducer: function (e, t, n) {
            var r = _i()
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
              }),
              (r.queue = e),
              (e = e.dispatch = eu.bind(null, hi, e)),
              [r.memoizedState, e]
            )
          },
          useRef: function (e) {
            return (e = { current: e }), (_i().memoizedState = e)
          },
          useState: Ii,
          useDebugValue: Ki,
          useDeferredValue: function (e) {
            return (_i().memoizedState = e)
          },
          useTransition: function () {
            var e = Ii(!1),
              t = e[0]
            return (e = Ji.bind(null, e[1])), (_i().memoizedState = e), [t, e]
          },
          useMutableSource: function () {},
          useSyncExternalStore: function (e, t, n) {
            var r = hi,
              a = _i()
            if (al) {
              if (void 0 === n) throw Error(oe(407))
              n = n()
            } else {
              if (((n = t()), null === Ts)) throw Error(oe(349))
              0 != (30 & pi) || Ni(r, t, n)
            }
            a.memoizedState = n
            var o = { value: n, getSnapshot: t }
            return (
              (a.queue = o),
              Vi(Ai.bind(null, r, o, e), [e]),
              (r.flags |= 2048),
              Ui(9, Oi.bind(null, r, o, n, t), void 0, null),
              n
            )
          },
          useId: function () {
            var e = _i(),
              t = Ts.identifierPrefix
            if (al) {
              var n = Xo
              ;(t =
                ":" + t + "R" + (n = (Yo & ~(1 << (32 - on(Yo) - 1))).toString(32) + n)),
                0 < (n = bi++) && (t += "H" + n.toString(32)),
                (t += ":")
            } else t = ":" + t + "r" + (n = wi++).toString(32) + ":"
            return (e.memoizedState = t)
          },
          unstable_isNewReconciler: !1
        },
        iu = {
          readContext: _l,
          useCallback: Gi,
          useContext: _l,
          useEffect: $i,
          useImperativeHandle: qi,
          useInsertionEffect: Hi,
          useLayoutEffect: Wi,
          useMemo: Yi,
          useReducer: Li,
          useRef: Fi,
          useState: function () {
            return Li(Ci)
          },
          useDebugValue: Ki,
          useDeferredValue: function (e) {
            return Xi(Pi(), mi.memoizedState, e)
          },
          useTransition: function () {
            return [Li(Ci)[0], Pi().memoizedState]
          },
          useMutableSource: Ri,
          useSyncExternalStore: zi,
          useId: Zi,
          unstable_isNewReconciler: !1
        },
        uu = {
          readContext: _l,
          useCallback: Gi,
          useContext: _l,
          useEffect: $i,
          useImperativeHandle: qi,
          useInsertionEffect: Hi,
          useLayoutEffect: Wi,
          useMemo: Yi,
          useReducer: Ti,
          useRef: Fi,
          useState: function () {
            return Ti(Ci)
          },
          useDebugValue: Ki,
          useDeferredValue: function (e) {
            var t = Pi()
            return null === mi ? (t.memoizedState = e) : Xi(t, mi.memoizedState, e)
          },
          useTransition: function () {
            return [Ti(Ci)[0], Pi().memoizedState]
          },
          useMutableSource: Ri,
          useSyncExternalStore: zi,
          useId: Zi,
          unstable_isNewReconciler: !1
        }
      function su(e, t) {
        try {
          var n = "",
            r = t
          do {
            ;(n += Be(r)), (r = r.return)
          } while (r)
          var a = n
        } catch (H) {
          a = "\nError generating stack: " + H.message + "\n" + H.stack
        }
        return { value: e, source: t, stack: a, digest: null }
      }
      function cu(e, t, n) {
        return {
          value: e,
          source: null,
          stack: null != n ? n : null,
          digest: null != t ? t : null
        }
      }
      function fu(e, t) {
        try {
          console.error(t.value)
        } catch (n) {
          setTimeout(function () {
            throw n
          })
        }
      }
      var du = "function" == typeof WeakMap ? WeakMap : Map
      function pu(e, t, n) {
        ;((n = Ol(-1, n)).tag = 3), (n.payload = { element: null })
        var r = t.value
        return (
          (n.callback = function () {
            Hs || ((Hs = !0), (Ws = r)), fu(0, t)
          }),
          n
        )
      }
      function hu(e, t, n) {
        ;(n = Ol(-1, n)).tag = 3
        var r = e.type.getDerivedStateFromError
        if ("function" == typeof r) {
          var a = t.value
          ;(n.payload = function () {
            return r(a)
          }),
            (n.callback = function () {
              fu(0, t)
            })
        }
        var o = e.stateNode
        return (
          null !== o &&
            "function" == typeof o.componentDidCatch &&
            (n.callback = function () {
              fu(0, t),
                "function" != typeof r &&
                  (null === Qs ? (Qs = new Set([this])) : Qs.add(this))
              var e = t.stack
              this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" })
            }),
          n
        )
      }
      function mu(e, t, n) {
        var r = e.pingCache
        if (null === r) {
          r = e.pingCache = new du()
          var a = new Set()
          r.set(t, a)
        } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a))
        a.has(n) || (a.add(n), (e = _c.bind(null, e, t, n)), t.then(e, e))
      }
      function gu(e) {
        do {
          var t
          if (
            ((t = 13 === e.tag) &&
              (t = null === (t = e.memoizedState) || null !== t.dehydrated),
            t)
          )
            return e
          e = e.return
        } while (null !== e)
        return null
      }
      function yu(e, t, n, r, a) {
        return 0 == (1 & e.mode)
          ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                1 === n.tag &&
                  (null === n.alternate
                    ? (n.tag = 17)
                    : (((t = Ol(-1, 1)).tag = 2), Al(n, t, 1))),
                (n.lanes |= 1)),
            e)
          : ((e.flags |= 65536), (e.lanes = a), e)
      }
      var vu = we.ReactCurrentOwner,
        bu = !1
      function wu(e, t, n, r) {
        t.child = null === e ? Xl(t, null, n, r) : Yl(t, e.child, n, r)
      }
      function ku(e, t, n, r, a) {
        n = n.render
        var o = t.ref
        return (
          El(t, a),
          (r = xi(e, t, n, r, o, a)),
          (n = Ei()),
          null === e || bu
            ? (al && n && el(t), (t.flags |= 1), wu(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a),
              Hu(e, t, a))
        )
      }
      function Su(e, t, n, r, a) {
        if (null === e) {
          var o = n.type
          return "function" != typeof o ||
            Nc(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Ac(n.type, null, r, t, t.mode, a)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), xu(e, t, o, r, a))
        }
        if (((o = e.child), 0 == (e.lanes & a))) {
          var l = o.memoizedProps
          if ((n = null !== (n = n.compare) ? n : ia)(l, r) && e.ref === t.ref)
            return Hu(e, t, a)
        }
        return (t.flags |= 1), ((e = Oc(o, r)).ref = t.ref), (e.return = t), (t.child = e)
      }
      function xu(e, t, n, r, a) {
        if (null !== e) {
          var o = e.memoizedProps
          if (ia(o, r) && e.ref === t.ref) {
            if (((bu = !1), (t.pendingProps = r = o), 0 == (e.lanes & a)))
              return (t.lanes = e.lanes), Hu(e, t, a)
            0 != (131072 & e.flags) && (bu = !0)
          }
        }
        return Pu(e, t, n, r, a)
      }
      function Eu(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          o = null !== e ? e.memoizedState : null
        if ("hidden" === r.mode)
          if (0 == (1 & t.mode))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
              Po(Os, Ns),
              (Ns |= n)
          else {
            if (0 == (1073741824 & n))
              return (
                (e = null !== o ? o.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                (t.updateQueue = null),
                Po(Os, Ns),
                (Ns |= e),
                null
              )
            ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
              (r = null !== o ? o.baseLanes : n),
              Po(Os, Ns),
              (Ns |= r)
          }
        else
          null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
            Po(Os, Ns),
            (Ns |= r)
        return wu(e, t, a, n), t.child
      }
      function _u(e, t) {
        var n = t.ref
        ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          ((t.flags |= 512), (t.flags |= 2097152))
      }
      function Pu(e, t, n, r, a) {
        var o = No(n) ? Ro : Lo.current
        return (
          (o = zo(t, o)),
          El(t, a),
          (n = xi(e, t, n, r, o, a)),
          (r = Ei()),
          null === e || bu
            ? (al && r && el(t), (t.flags |= 1), wu(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a),
              Hu(e, t, a))
        )
      }
      function Cu(e, t, n, r, a) {
        if (No(n)) {
          var o = !0
          Do(t)
        } else o = !1
        if ((El(t, a), null === t.stateNode))
          $u(e, t), $l(t, n, r), Wl(t, n, r, a), (r = !0)
        else if (null === e) {
          var l = t.stateNode,
            i = t.memoizedProps
          l.props = i
          var u = l.context,
            s = n.contextType
          s =
            "object" == typeof s && null !== s
              ? _l(s)
              : zo(t, (s = No(n) ? Ro : Lo.current))
          var c = n.getDerivedStateFromProps,
            f = "function" == typeof c || "function" == typeof l.getSnapshotBeforeUpdate
          f ||
            ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
              "function" != typeof l.componentWillReceiveProps) ||
            ((i !== r || u !== s) && Hl(t, l, r, s)),
            (Rl = !1)
          var d = t.memoizedState
          ;(l.state = d),
            Il(t, r, l, a),
            (u = t.memoizedState),
            i !== r || d !== u || To.current || Rl
              ? ("function" == typeof c && (jl(t, n, c, r), (u = t.memoizedState)),
                (i = Rl || Vl(t, n, i, r, d, u, s))
                  ? (f ||
                      ("function" != typeof l.UNSAFE_componentWillMount &&
                        "function" != typeof l.componentWillMount) ||
                      ("function" == typeof l.componentWillMount &&
                        l.componentWillMount(),
                      "function" == typeof l.UNSAFE_componentWillMount &&
                        l.UNSAFE_componentWillMount()),
                    "function" == typeof l.componentDidMount && (t.flags |= 4194308))
                  : ("function" == typeof l.componentDidMount && (t.flags |= 4194308),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (l.props = r),
                (l.state = u),
                (l.context = s),
                (r = i))
              : ("function" == typeof l.componentDidMount && (t.flags |= 4194308),
                (r = !1))
        } else {
          ;(l = t.stateNode),
            Nl(e, t),
            (i = t.memoizedProps),
            (s = t.type === t.elementType ? i : gl(t.type, i)),
            (l.props = s),
            (f = t.pendingProps),
            (d = l.context),
            (u =
              "object" == typeof (u = n.contextType) && null !== u
                ? _l(u)
                : zo(t, (u = No(n) ? Ro : Lo.current)))
          var p = n.getDerivedStateFromProps
          ;(c =
            "function" == typeof p || "function" == typeof l.getSnapshotBeforeUpdate) ||
            ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
              "function" != typeof l.componentWillReceiveProps) ||
            ((i !== f || d !== u) && Hl(t, l, r, u)),
            (Rl = !1),
            (d = t.memoizedState),
            (l.state = d),
            Il(t, r, l, a)
          var h = t.memoizedState
          i !== f || d !== h || To.current || Rl
            ? ("function" == typeof p && (jl(t, n, p, r), (h = t.memoizedState)),
              (s = Rl || Vl(t, n, s, r, d, h, u) || !1)
                ? (c ||
                    ("function" != typeof l.UNSAFE_componentWillUpdate &&
                      "function" != typeof l.componentWillUpdate) ||
                    ("function" == typeof l.componentWillUpdate &&
                      l.componentWillUpdate(r, h, u),
                    "function" == typeof l.UNSAFE_componentWillUpdate &&
                      l.UNSAFE_componentWillUpdate(r, h, u)),
                  "function" == typeof l.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024))
                : ("function" != typeof l.componentDidUpdate ||
                    (i === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof l.getSnapshotBeforeUpdate ||
                    (i === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = h)),
              (l.props = r),
              (l.state = h),
              (l.context = u),
              (r = s))
            : ("function" != typeof l.componentDidUpdate ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof l.getSnapshotBeforeUpdate ||
                (i === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (r = !1))
        }
        return Lu(e, t, n, r, o, a)
      }
      function Lu(e, t, n, r, a, o) {
        _u(e, t)
        var l = 0 != (128 & t.flags)
        if (!r && !l) return a && Io(t, n, !1), Hu(e, t, o)
        ;(r = t.stateNode), (vu.current = t)
        var i = l && "function" != typeof n.getDerivedStateFromError ? null : r.render()
        return (
          (t.flags |= 1),
          null !== e && l
            ? ((t.child = Yl(t, e.child, null, o)), (t.child = Yl(t, null, i, o)))
            : wu(e, t, i, o),
          (t.memoizedState = r.state),
          a && Io(t, n, !0),
          t.child
        )
      }
      function Tu(e) {
        var t = e.stateNode
        t.pendingContext
          ? Ao(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Ao(0, t.context, !1),
          ri(e, t.containerInfo)
      }
      function Ru(e, t, n, r, a) {
        return pl(), hl(a), (t.flags |= 256), wu(e, t, n, r), t.child
      }
      var zu,
        Nu,
        Ou,
        Au,
        Mu = { dehydrated: null, treeContext: null, retryLane: 0 }
      function Du(e) {
        return { baseLanes: e, cachePool: null, transitions: null }
      }
      function Iu(e, t, n) {
        var r,
          a = t.pendingProps,
          o = ii.current,
          l = !1,
          i = 0 != (128 & t.flags)
        if (
          ((r = i) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
          r
            ? ((l = !0), (t.flags &= -129))
            : (null !== e && null === e.memoizedState) || (o |= 1),
          Po(ii, 1 & o),
          null === e)
        )
          return (
            sl(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
              ? (0 == (1 & t.mode)
                  ? (t.lanes = 1)
                  : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                null)
              : ((i = a.children),
                (e = a.fallback),
                l
                  ? ((a = t.mode),
                    (l = t.child),
                    (i = { mode: "hidden", children: i }),
                    0 == (1 & a) && null !== l
                      ? ((l.childLanes = 0), (l.pendingProps = i))
                      : (l = Dc(i, a, 0, null)),
                    (e = Mc(e, a, n, null)),
                    (l.return = t),
                    (e.return = t),
                    (l.sibling = e),
                    (t.child = l),
                    (t.child.memoizedState = Du(n)),
                    (t.memoizedState = Mu),
                    e)
                  : Uu(t, i))
          )
        if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
          return (function (e, t, n, r, a, o, l) {
            if (n)
              return 256 & t.flags
                ? ((t.flags &= -257), Fu(e, t, l, (r = cu(Error(oe(422))))))
                : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Dc({ mode: "visible", children: r.children }, a, 0, null)),
                    ((o = Mc(o, a, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 != (1 & t.mode) && Yl(t, e.child, null, l),
                    (t.child.memoizedState = Du(l)),
                    (t.memoizedState = Mu),
                    o)
            if (0 == (1 & t.mode)) return Fu(e, t, l, null)
            if ("$!" === a.data) {
              if ((r = a.nextSibling && a.nextSibling.dataset)) var i = r.dgst
              return (r = i), Fu(e, t, l, (r = cu((o = Error(oe(419))), r, void 0)))
            }
            if (((i = 0 != (l & e.childLanes)), bu || i)) {
              if (null !== (r = Ts)) {
                switch (l & -l) {
                  case 4:
                    a = 2
                    break
                  case 16:
                    a = 8
                    break
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    a = 32
                    break
                  case 536870912:
                    a = 268435456
                    break
                  default:
                    a = 0
                }
                0 !== (a = 0 != (a & (r.suspendedLanes | l)) ? 0 : a) &&
                  a !== o.retryLane &&
                  ((o.retryLane = a), Tl(e, a), nc(r, e, a, -1))
              }
              return mc(), Fu(e, t, l, (r = cu(Error(oe(421)))))
            }
            return "$?" === a.data
              ? ((t.flags |= 128),
                (t.child = e.child),
                (t = Cc.bind(null, e)),
                (a._reactRetry = t),
                null)
              : ((e = o.treeContext),
                (rl = uo(a.nextSibling)),
                (nl = t),
                (al = !0),
                (ol = null),
                null !== e &&
                  ((qo[Ko++] = Yo),
                  (qo[Ko++] = Xo),
                  (qo[Ko++] = Go),
                  (Yo = e.id),
                  (Xo = e.overflow),
                  (Go = t)),
                ((t = Uu(t, r.children)).flags |= 4096),
                t)
          })(e, t, i, a, r, o, n)
        if (l) {
          ;(l = a.fallback), (i = t.mode), (r = (o = e.child).sibling)
          var u = { mode: "hidden", children: a.children }
          return (
            0 == (1 & i) && t.child !== o
              ? (((a = t.child).childLanes = 0),
                (a.pendingProps = u),
                (t.deletions = null))
              : ((a = Oc(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
            null !== r ? (l = Oc(r, l)) : ((l = Mc(l, i, n, null)).flags |= 2),
            (l.return = t),
            (a.return = t),
            (a.sibling = l),
            (t.child = a),
            (a = l),
            (l = t.child),
            (i =
              null === (i = e.child.memoizedState)
                ? Du(n)
                : {
                    baseLanes: i.baseLanes | n,
                    cachePool: null,
                    transitions: i.transitions
                  }),
            (l.memoizedState = i),
            (l.childLanes = e.childLanes & ~n),
            (t.memoizedState = Mu),
            a
          )
        }
        return (
          (e = (l = e.child).sibling),
          (a = Oc(l, { mode: "visible", children: a.children })),
          0 == (1 & t.mode) && (a.lanes = n),
          (a.return = t),
          (a.sibling = null),
          null !== e &&
            (null === (n = t.deletions)
              ? ((t.deletions = [e]), (t.flags |= 16))
              : n.push(e)),
          (t.child = a),
          (t.memoizedState = null),
          a
        )
      }
      function Uu(e, t) {
        return (
          ((t = Dc({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
          (e.child = t)
        )
      }
      function Fu(e, t, n, r) {
        return (
          null !== r && hl(r),
          Yl(t, e.child, null, n),
          ((e = Uu(t, t.pendingProps.children)).flags |= 2),
          (t.memoizedState = null),
          e
        )
      }
      function ju(e, t, n) {
        e.lanes |= t
        var r = e.alternate
        null !== r && (r.lanes |= t), xl(e.return, t, n)
      }
      function Bu(e, t, n, r, a) {
        var o = e.memoizedState
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = a))
      }
      function Vu(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          o = r.tail
        if ((wu(e, t, r.children, n), 0 != (2 & (r = ii.current))))
          (r = (1 & r) | 2), (t.flags |= 128)
        else {
          if (null !== e && 0 != (128 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && ju(e, n, t)
              else if (19 === e.tag) ju(e, n, t)
              else if (null !== e.child) {
                ;(e.child.return = e), (e = e.child)
                continue
              }
              if (e === t) break e
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e
                e = e.return
              }
              ;(e.sibling.return = e.return), (e = e.sibling)
            }
          r &= 1
        }
        if ((Po(ii, r), 0 == (1 & t.mode))) t.memoizedState = null
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === ui(e) && (a = n), (n = n.sibling)
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                Bu(t, !1, a, n, o)
              break
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === ui(e)) {
                  t.child = a
                  break
                }
                ;(e = a.sibling), (a.sibling = n), (n = a), (a = e)
              }
              Bu(t, !0, n, null, o)
              break
            case "together":
              Bu(t, !1, null, null, void 0)
              break
            default:
              t.memoizedState = null
          }
        return t.child
      }
      function $u(e, t) {
        0 == (1 & t.mode) &&
          null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
      }
      function Hu(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (Ds |= t.lanes),
          0 == (n & t.childLanes))
        )
          return null
        if (null !== e && t.child !== e.child) throw Error(oe(153))
        if (null !== t.child) {
          for (
            n = Oc((e = t.child), e.pendingProps), t.child = n, n.return = t;
            null !== e.sibling;

          )
            (e = e.sibling), ((n = n.sibling = Oc(e, e.pendingProps)).return = t)
          n.sibling = null
        }
        return t.child
      }
      function Wu(e, t) {
        if (!al)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling)
              null === n ? (e.tail = null) : (n.sibling = null)
              break
            case "collapsed":
              n = e.tail
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling)
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null)
          }
      }
      function Qu(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          r = 0
        if (t)
          for (var a = e.child; null !== a; )
            (n |= a.lanes | a.childLanes),
              (r |= 14680064 & a.subtreeFlags),
              (r |= 14680064 & a.flags),
              (a.return = e),
              (a = a.sibling)
        else
          for (a = e.child; null !== a; )
            (n |= a.lanes | a.childLanes),
              (r |= a.subtreeFlags),
              (r |= a.flags),
              (a.return = e),
              (a = a.sibling)
        return (e.subtreeFlags |= r), (e.childLanes = n), t
      }
      function qu(e, t, n) {
        var r = t.pendingProps
        switch ((tl(t), t.tag)) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Qu(t), null
          case 1:
          case 17:
            return No(t.type) && Oo(), Qu(t), null
          case 3:
            return (
              (r = t.stateNode),
              ai(),
              _o(To),
              _o(Lo),
              ci(),
              r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (fl(t)
                  ? (t.flags |= 4)
                  : null === e ||
                    (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                    ((t.flags |= 1024), null !== ol && (lc(ol), (ol = null)))),
              Nu(e, t),
              Qu(t),
              null
            )
          case 5:
            li(t)
            var a = ni(ti.current)
            if (((n = t.type), null !== e && null != t.stateNode))
              Ou(e, t, n, r, a),
                e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(oe(166))
                return Qu(t), null
              }
              if (((e = ni(Zl.current)), fl(t))) {
                ;(r = t.stateNode), (n = t.type)
                var o = t.memoizedProps
                switch (((r[fo] = t), (r[po] = o), (e = 0 != (1 & t.mode)), n)) {
                  case "dialog":
                    Ua("cancel", r), Ua("close", r)
                    break
                  case "iframe":
                  case "object":
                  case "embed":
                    Ua("load", r)
                    break
                  case "video":
                  case "audio":
                    for (a = 0; a < Aa.length; a++) Ua(Aa[a], r)
                    break
                  case "source":
                    Ua("error", r)
                    break
                  case "img":
                  case "image":
                  case "link":
                    Ua("error", r), Ua("load", r)
                    break
                  case "details":
                    Ua("toggle", r)
                    break
                  case "input":
                    Ye(r, o), Ua("invalid", r)
                    break
                  case "select":
                    ;(r._wrapperState = { wasMultiple: !!o.multiple }), Ua("invalid", r)
                    break
                  case "textarea":
                    at(r, o), Ua("invalid", r)
                }
                for (var l in (yt(n, o), (a = null), o))
                  if (o.hasOwnProperty(l)) {
                    var i = o[l]
                    "children" === l
                      ? "string" == typeof i
                        ? r.textContent !== i &&
                          (!0 !== o.suppressHydrationWarning && Xa(r.textContent, i, e),
                          (a = ["children", i]))
                        : "number" == typeof i &&
                          r.textContent !== "" + i &&
                          (!0 !== o.suppressHydrationWarning && Xa(r.textContent, i, e),
                          (a = ["children", "" + i]))
                      : ie.hasOwnProperty(l) &&
                        null != i &&
                        "onScroll" === l &&
                        Ua("scroll", r)
                  }
                switch (n) {
                  case "input":
                    Qe(r), Ze(r, o, !0)
                    break
                  case "textarea":
                    Qe(r), lt(r)
                    break
                  case "select":
                  case "option":
                    break
                  default:
                    "function" == typeof o.onClick && (r.onclick = Ja)
                }
                ;(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4)
              } else {
                ;(l = 9 === a.nodeType ? a : a.ownerDocument),
                  "http://www.w3.org/1999/xhtml" === e && (e = it(n)),
                  "http://www.w3.org/1999/xhtml" === e
                    ? "script" === n
                      ? (((e = l.createElement("div")).innerHTML = "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" == typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
                    : (e = l.createElementNS(e, n)),
                  (e[fo] = t),
                  (e[po] = r),
                  zu(e, t, !1, !1),
                  (t.stateNode = e)
                e: {
                  switch (((l = vt(n, r)), n)) {
                    case "dialog":
                      Ua("cancel", e), Ua("close", e), (a = r)
                      break
                    case "iframe":
                    case "object":
                    case "embed":
                      Ua("load", e), (a = r)
                      break
                    case "video":
                    case "audio":
                      for (a = 0; a < Aa.length; a++) Ua(Aa[a], e)
                      a = r
                      break
                    case "source":
                      Ua("error", e), (a = r)
                      break
                    case "img":
                    case "image":
                    case "link":
                      Ua("error", e), Ua("load", e), (a = r)
                      break
                    case "details":
                      Ua("toggle", e), (a = r)
                      break
                    case "input":
                      Ye(e, r), (a = Ge(e, r)), Ua("invalid", e)
                      break
                    case "option":
                    default:
                      a = r
                      break
                    case "select":
                      ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = Ie({}, r, { value: void 0 })),
                        Ua("invalid", e)
                      break
                    case "textarea":
                      at(e, r), (a = rt(e, r)), Ua("invalid", e)
                  }
                  for (o in (yt(n, a), (i = a)))
                    if (i.hasOwnProperty(o)) {
                      var u = i[o]
                      "style" === o
                        ? mt(e, u)
                        : "dangerouslySetInnerHTML" === o
                          ? null != (u = u ? u.__html : void 0) && ct(e, u)
                          : "children" === o
                            ? "string" == typeof u
                              ? ("textarea" !== n || "" !== u) && ft(e, u)
                              : "number" == typeof u && ft(e, "" + u)
                            : "suppressContentEditableWarning" !== o &&
                              "suppressHydrationWarning" !== o &&
                              "autoFocus" !== o &&
                              (ie.hasOwnProperty(o)
                                ? null != u && "onScroll" === o && Ua("scroll", e)
                                : null != u && be(e, o, u, l))
                    }
                  switch (n) {
                    case "input":
                      Qe(e), Ze(e, r, !1)
                      break
                    case "textarea":
                      Qe(e), lt(e)
                      break
                    case "option":
                      null != r.value && e.setAttribute("value", "" + He(r.value))
                      break
                    case "select":
                      ;(e.multiple = !!r.multiple),
                        null != (o = r.value)
                          ? nt(e, !!r.multiple, o, !1)
                          : null != r.defaultValue &&
                            nt(e, !!r.multiple, r.defaultValue, !0)
                      break
                    default:
                      "function" == typeof a.onClick && (e.onclick = Ja)
                  }
                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus
                      break e
                    case "img":
                      r = !0
                      break e
                    default:
                      r = !1
                  }
                }
                r && (t.flags |= 4)
              }
              null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
            }
            return Qu(t), null
          case 6:
            if (e && null != t.stateNode) Au(e, t, e.memoizedProps, r)
            else {
              if ("string" != typeof r && null === t.stateNode) throw Error(oe(166))
              if (((n = ni(ti.current)), ni(Zl.current), fl(t))) {
                if (
                  ((r = t.stateNode),
                  (n = t.memoizedProps),
                  (r[fo] = t),
                  (o = r.nodeValue !== n) && null !== (e = nl))
                )
                  switch (e.tag) {
                    case 3:
                      Xa(r.nodeValue, n, 0 != (1 & e.mode))
                      break
                    case 5:
                      !0 !== e.memoizedProps.suppressHydrationWarning &&
                        Xa(r.nodeValue, n, 0 != (1 & e.mode))
                  }
                o && (t.flags |= 4)
              } else
                ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fo] =
                  t),
                  (t.stateNode = r)
            }
            return Qu(t), null
          case 13:
            if (
              (_o(ii),
              (r = t.memoizedState),
              null === e ||
                (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
              if (al && null !== rl && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                dl(), pl(), (t.flags |= 98560), (o = !1)
              else if (((o = fl(t)), null !== r && null !== r.dehydrated)) {
                if (null === e) {
                  if (!o) throw Error(oe(318))
                  if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                    throw Error(oe(317))
                  o[fo] = t
                } else
                  pl(), 0 == (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4)
                Qu(t), (o = !1)
              } else null !== ol && (lc(ol), (ol = null)), (o = !0)
              if (!o) return 65536 & t.flags ? t : null
            }
            return 0 != (128 & t.flags)
              ? ((t.lanes = n), t)
              : ((r = null !== r) != (null !== e && null !== e.memoizedState) &&
                  r &&
                  ((t.child.flags |= 8192),
                  0 != (1 & t.mode) &&
                    (null === e || 0 != (1 & ii.current) ? 0 === As && (As = 3) : mc())),
                null !== t.updateQueue && (t.flags |= 4),
                Qu(t),
                null)
          case 4:
            return (
              ai(), Nu(e, t), null === e && Ba(t.stateNode.containerInfo), Qu(t), null
            )
          case 10:
            return Sl(t.type._context), Qu(t), null
          case 19:
            if ((_o(ii), null === (o = t.memoizedState))) return Qu(t), null
            if (((r = 0 != (128 & t.flags)), null === (l = o.rendering)))
              if (r) Wu(o, !1)
              else {
                if (0 !== As || (null !== e && 0 != (128 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (l = ui(e))) {
                      for (
                        t.flags |= 128,
                          Wu(o, !1),
                          null !== (r = l.updateQueue) &&
                            ((t.updateQueue = r), (t.flags |= 4)),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((o = n).flags &= 14680066),
                          null === (l = o.alternate)
                            ? ((o.childLanes = 0),
                              (o.lanes = e),
                              (o.child = null),
                              (o.subtreeFlags = 0),
                              (o.memoizedProps = null),
                              (o.memoizedState = null),
                              (o.updateQueue = null),
                              (o.dependencies = null),
                              (o.stateNode = null))
                            : ((o.childLanes = l.childLanes),
                              (o.lanes = l.lanes),
                              (o.child = l.child),
                              (o.subtreeFlags = 0),
                              (o.deletions = null),
                              (o.memoizedProps = l.memoizedProps),
                              (o.memoizedState = l.memoizedState),
                              (o.updateQueue = l.updateQueue),
                              (o.type = l.type),
                              (e = l.dependencies),
                              (o.dependencies =
                                null === e
                                  ? null
                                  : { lanes: e.lanes, firstContext: e.firstContext })),
                          (n = n.sibling)
                      return Po(ii, (1 & ii.current) | 2), t.child
                    }
                    e = e.sibling
                  }
                null !== o.tail &&
                  Yt() > Vs &&
                  ((t.flags |= 128), (r = !0), Wu(o, !1), (t.lanes = 4194304))
              }
            else {
              if (!r)
                if (null !== (e = ui(l))) {
                  if (
                    ((t.flags |= 128),
                    (r = !0),
                    null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                    Wu(o, !0),
                    null === o.tail && "hidden" === o.tailMode && !l.alternate && !al)
                  )
                    return Qu(t), null
                } else
                  2 * Yt() - o.renderingStartTime > Vs &&
                    1073741824 !== n &&
                    ((t.flags |= 128), (r = !0), Wu(o, !1), (t.lanes = 4194304))
              o.isBackwards
                ? ((l.sibling = t.child), (t.child = l))
                : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l), (o.last = l))
            }
            return null !== o.tail
              ? ((t = o.tail),
                (o.rendering = t),
                (o.tail = t.sibling),
                (o.renderingStartTime = Yt()),
                (t.sibling = null),
                (n = ii.current),
                Po(ii, r ? (1 & n) | 2 : 1 & n),
                t)
              : (Qu(t), null)
          case 22:
          case 23:
            return (
              fc(),
              (r = null !== t.memoizedState),
              null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
              r && 0 != (1 & t.mode)
                ? 0 != (1073741824 & Ns) &&
                  (Qu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                : Qu(t),
              null
            )
          case 24:
          case 25:
            return null
        }
        throw Error(oe(156, t.tag))
      }
      function Ku(e, t) {
        switch ((tl(t), t.tag)) {
          case 1:
            return (
              No(t.type) && Oo(),
              65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
            )
          case 3:
            return (
              ai(),
              _o(To),
              _o(Lo),
              ci(),
              0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            )
          case 5:
            return li(t), null
          case 13:
            if ((_o(ii), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
              if (null === t.alternate) throw Error(oe(340))
              pl()
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
          case 19:
            return _o(ii), null
          case 4:
            return ai(), null
          case 10:
            return Sl(t.type._context), null
          case 22:
          case 23:
            return fc(), null
          default:
            return null
        }
      }
      ;(zu = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
          else if (4 !== n.tag && null !== n.child) {
            ;(n.child.return = n), (n = n.child)
            continue
          }
          if (n === t) break
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return
            n = n.return
          }
          ;(n.sibling.return = n.return), (n = n.sibling)
        }
      }),
        (Nu = function () {}),
        (Ou = function (e, t, n, r) {
          var a = e.memoizedProps
          if (a !== r) {
            ;(e = t.stateNode), ni(Zl.current)
            var o,
              l = null
            switch (n) {
              case "input":
                ;(a = Ge(e, a)), (r = Ge(e, r)), (l = [])
                break
              case "select":
                ;(a = Ie({}, a, { value: void 0 })),
                  (r = Ie({}, r, { value: void 0 })),
                  (l = [])
                break
              case "textarea":
                ;(a = rt(e, a)), (r = rt(e, r)), (l = [])
                break
              default:
                "function" != typeof a.onClick &&
                  "function" == typeof r.onClick &&
                  (e.onclick = Ja)
            }
            for (s in (yt(n, r), (n = null), a))
              if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                if ("style" === s) {
                  var i = a[s]
                  for (o in i) i.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""))
                } else
                  "dangerouslySetInnerHTML" !== s &&
                    "children" !== s &&
                    "suppressContentEditableWarning" !== s &&
                    "suppressHydrationWarning" !== s &&
                    "autoFocus" !== s &&
                    (ie.hasOwnProperty(s) ? l || (l = []) : (l = l || []).push(s, null))
            for (s in r) {
              var u = r[s]
              if (
                ((i = null != a ? a[s] : void 0),
                r.hasOwnProperty(s) && u !== i && (null != u || null != i))
              )
                if ("style" === s)
                  if (i) {
                    for (o in i)
                      !i.hasOwnProperty(o) ||
                        (u && u.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""))
                    for (o in u)
                      u.hasOwnProperty(o) &&
                        i[o] !== u[o] &&
                        (n || (n = {}), (n[o] = u[o]))
                  } else n || (l || (l = []), l.push(s, n)), (n = u)
                else
                  "dangerouslySetInnerHTML" === s
                    ? ((u = u ? u.__html : void 0),
                      (i = i ? i.__html : void 0),
                      null != u && i !== u && (l = l || []).push(s, u))
                    : "children" === s
                      ? ("string" != typeof u && "number" != typeof u) ||
                        (l = l || []).push(s, "" + u)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (ie.hasOwnProperty(s)
                          ? (null != u && "onScroll" === s && Ua("scroll", e),
                            l || i === u || (l = []))
                          : (l = l || []).push(s, u))
            }
            n && (l = l || []).push("style", n)
            var s = l
            ;(t.updateQueue = s) && (t.flags |= 4)
          }
        }),
        (Au = function (e, t, n, r) {
          n !== r && (t.flags |= 4)
        })
      var Gu = !1,
        Yu = !1,
        Xu = "function" == typeof WeakSet ? WeakSet : Set,
        Ju = null
      function Zu(e, t) {
        var n = e.ref
        if (null !== n)
          if ("function" == typeof n)
            try {
              n(null)
            } catch (r) {
              Ec(e, t, r)
            }
          else n.current = null
      }
      function es(e, t, n) {
        try {
          n()
        } catch (r) {
          Ec(e, t, r)
        }
      }
      var ts = !1
      function ns(e, t, n) {
        var r = t.updateQueue
        if (null !== (r = null !== r ? r.lastEffect : null)) {
          var a = (r = r.next)
          do {
            if ((a.tag & e) === e) {
              var o = a.destroy
              ;(a.destroy = void 0), void 0 !== o && es(t, n, o)
            }
            a = a.next
          } while (a !== r)
        }
      }
      function rs(e, t) {
        if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
          var n = (t = t.next)
          do {
            if ((n.tag & e) === e) {
              var r = n.create
              n.destroy = r()
            }
            n = n.next
          } while (n !== t)
        }
      }
      function as(e) {
        var t = e.ref
        if (null !== t) {
          var n = e.stateNode
          e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e)
        }
      }
      function os(e) {
        var t = e.alternate
        null !== t && ((e.alternate = null), os(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          5 === e.tag &&
            null !== (t = e.stateNode) &&
            (delete t[fo], delete t[po], delete t[mo], delete t[go], delete t[yo]),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null)
      }
      function ls(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
      }
      function is(e) {
        e: for (;;) {
          for (; null === e.sibling; ) {
            if (null === e.return || ls(e.return)) return null
            e = e.return
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

          ) {
            if (2 & e.flags) continue e
            if (null === e.child || 4 === e.tag) continue e
            ;(e.child.return = e), (e = e.child)
          }
          if (!(2 & e.flags)) return e.stateNode
        }
      }
      function us(e, t, n) {
        var r = e.tag
        if (5 === r || 6 === r)
          (e = e.stateNode),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = Ja))
        else if (4 !== r && null !== (e = e.child))
          for (us(e, t, n), e = e.sibling; null !== e; ) us(e, t, n), (e = e.sibling)
      }
      function ss(e, t, n) {
        var r = e.tag
        if (5 === r || 6 === r)
          (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
        else if (4 !== r && null !== (e = e.child))
          for (ss(e, t, n), e = e.sibling; null !== e; ) ss(e, t, n), (e = e.sibling)
      }
      var cs = null,
        fs = !1
      function ds(e, t, n) {
        for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling)
      }
      function ps(e, t, n) {
        if (an && "function" == typeof an.onCommitFiberUnmount)
          try {
            an.onCommitFiberUnmount(rn, n)
          } catch (i) {}
        switch (n.tag) {
          case 5:
            Yu || Zu(n, t)
          case 6:
            var r = cs,
              a = fs
            ;(cs = null),
              ds(e, t, n),
              (fs = a),
              null !== (cs = r) &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n))
                  : cs.removeChild(n.stateNode))
            break
          case 18:
            null !== cs &&
              (fs
                ? ((e = cs),
                  (n = n.stateNode),
                  8 === e.nodeType ? io(e.parentNode, n) : 1 === e.nodeType && io(e, n),
                  Vn(e))
                : io(cs, n.stateNode))
            break
          case 4:
            ;(r = cs),
              (a = fs),
              (cs = n.stateNode.containerInfo),
              (fs = !0),
              ds(e, t, n),
              (cs = r),
              (fs = a)
            break
          case 0:
          case 11:
          case 14:
          case 15:
            if (!Yu && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
              a = r = r.next
              do {
                var o = a,
                  l = o.destroy
                ;(o = o.tag),
                  void 0 !== l && (0 != (2 & o) || 0 != (4 & o)) && es(n, t, l),
                  (a = a.next)
              } while (a !== r)
            }
            ds(e, t, n)
            break
          case 1:
            if (
              !Yu &&
              (Zu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)
            )
              try {
                ;(r.props = n.memoizedProps),
                  (r.state = n.memoizedState),
                  r.componentWillUnmount()
              } catch (i) {
                Ec(n, t, i)
              }
            ds(e, t, n)
            break
          case 21:
            ds(e, t, n)
            break
          case 22:
            1 & n.mode
              ? ((Yu = (r = Yu) || null !== n.memoizedState), ds(e, t, n), (Yu = r))
              : ds(e, t, n)
            break
          default:
            ds(e, t, n)
        }
      }
      function hs(e) {
        var t = e.updateQueue
        if (null !== t) {
          e.updateQueue = null
          var n = e.stateNode
          null === n && (n = e.stateNode = new Xu()),
            t.forEach(function (t) {
              var r = Lc.bind(null, e, t)
              n.has(t) || (n.add(t), t.then(r, r))
            })
        }
      }
      function ms(e, t) {
        var n = t.deletions
        if (null !== n)
          for (var r = 0; r < n.length; r++) {
            var a = n[r]
            try {
              var o = e,
                l = t,
                i = l
              e: for (; null !== i; ) {
                switch (i.tag) {
                  case 5:
                    ;(cs = i.stateNode), (fs = !1)
                    break e
                  case 3:
                  case 4:
                    ;(cs = i.stateNode.containerInfo), (fs = !0)
                    break e
                }
                i = i.return
              }
              if (null === cs) throw Error(oe(160))
              ps(o, l, a), (cs = null), (fs = !1)
              var u = a.alternate
              null !== u && (u.return = null), (a.return = null)
            } catch (s) {
              Ec(a, t, s)
            }
          }
        if (12854 & t.subtreeFlags)
          for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling)
      }
      function gs(e, t) {
        var n = e.alternate,
          r = e.flags
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if ((ms(t, e), ys(e), 4 & r)) {
              try {
                ns(3, e, e.return), rs(3, e)
              } catch (pf) {
                Ec(e, e.return, pf)
              }
              try {
                ns(5, e, e.return)
              } catch (pf) {
                Ec(e, e.return, pf)
              }
            }
            break
          case 1:
            ms(t, e), ys(e), 512 & r && null !== n && Zu(n, n.return)
            break
          case 5:
            if (
              (ms(t, e), ys(e), 512 & r && null !== n && Zu(n, n.return), 32 & e.flags)
            ) {
              var a = e.stateNode
              try {
                ft(a, "")
              } catch (pf) {
                Ec(e, e.return, pf)
              }
            }
            if (4 & r && null != (a = e.stateNode)) {
              var o = e.memoizedProps,
                l = null !== n ? n.memoizedProps : o,
                i = e.type,
                u = e.updateQueue
              if (((e.updateQueue = null), null !== u))
                try {
                  "input" === i && "radio" === o.type && null != o.name && Xe(a, o),
                    vt(i, l)
                  var s = vt(i, o)
                  for (l = 0; l < u.length; l += 2) {
                    var c = u[l],
                      f = u[l + 1]
                    "style" === c
                      ? mt(a, f)
                      : "dangerouslySetInnerHTML" === c
                        ? ct(a, f)
                        : "children" === c
                          ? ft(a, f)
                          : be(a, c, f, s)
                  }
                  switch (i) {
                    case "input":
                      Je(a, o)
                      break
                    case "textarea":
                      ot(a, o)
                      break
                    case "select":
                      var d = a._wrapperState.wasMultiple
                      a._wrapperState.wasMultiple = !!o.multiple
                      var p = o.value
                      null != p
                        ? nt(a, !!o.multiple, p, !1)
                        : d !== !!o.multiple &&
                          (null != o.defaultValue
                            ? nt(a, !!o.multiple, o.defaultValue, !0)
                            : nt(a, !!o.multiple, o.multiple ? [] : "", !1))
                  }
                  a[po] = o
                } catch (pf) {
                  Ec(e, e.return, pf)
                }
            }
            break
          case 6:
            if ((ms(t, e), ys(e), 4 & r)) {
              if (null === e.stateNode) throw Error(oe(162))
              ;(a = e.stateNode), (o = e.memoizedProps)
              try {
                a.nodeValue = o
              } catch (pf) {
                Ec(e, e.return, pf)
              }
            }
            break
          case 3:
            if ((ms(t, e), ys(e), 4 & r && null !== n && n.memoizedState.isDehydrated))
              try {
                Vn(t.containerInfo)
              } catch (pf) {
                Ec(e, e.return, pf)
              }
            break
          case 4:
          default:
            ms(t, e), ys(e)
            break
          case 13:
            ms(t, e),
              ys(e),
              8192 & (a = e.child).flags &&
                ((o = null !== a.memoizedState),
                (a.stateNode.isHidden = o),
                !o ||
                  (null !== a.alternate && null !== a.alternate.memoizedState) ||
                  (Bs = Yt())),
              4 & r && hs(e)
            break
          case 22:
            if (
              ((c = null !== n && null !== n.memoizedState),
              1 & e.mode ? ((Yu = (s = Yu) || c), ms(t, e), (Yu = s)) : ms(t, e),
              ys(e),
              8192 & r)
            ) {
              if (
                ((s = null !== e.memoizedState),
                (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode))
              )
                for (Ju = e, c = e.child; null !== c; ) {
                  for (f = Ju = c; null !== Ju; ) {
                    switch (((p = (d = Ju).child), d.tag)) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        ns(4, d, d.return)
                        break
                      case 1:
                        Zu(d, d.return)
                        var h = d.stateNode
                        if ("function" == typeof h.componentWillUnmount) {
                          ;(r = d), (n = d.return)
                          try {
                            ;(t = r),
                              (h.props = t.memoizedProps),
                              (h.state = t.memoizedState),
                              h.componentWillUnmount()
                          } catch (pf) {
                            Ec(r, n, pf)
                          }
                        }
                        break
                      case 5:
                        Zu(d, d.return)
                        break
                      case 22:
                        if (null !== d.memoizedState) {
                          ks(f)
                          continue
                        }
                    }
                    null !== p ? ((p.return = d), (Ju = p)) : ks(f)
                  }
                  c = c.sibling
                }
              e: for (c = null, f = e; ; ) {
                if (5 === f.tag) {
                  if (null === c) {
                    c = f
                    try {
                      ;(a = f.stateNode),
                        s
                          ? "function" == typeof (o = a.style).setProperty
                            ? o.setProperty("display", "none", "important")
                            : (o.display = "none")
                          : ((i = f.stateNode),
                            (l =
                              null != (u = f.memoizedProps.style) &&
                              u.hasOwnProperty("display")
                                ? u.display
                                : null),
                            (i.style.display = ht("display", l)))
                    } catch (pf) {
                      Ec(e, e.return, pf)
                    }
                  }
                } else if (6 === f.tag) {
                  if (null === c)
                    try {
                      f.stateNode.nodeValue = s ? "" : f.memoizedProps
                    } catch (pf) {
                      Ec(e, e.return, pf)
                    }
                } else if (
                  ((22 !== f.tag && 23 !== f.tag) ||
                    null === f.memoizedState ||
                    f === e) &&
                  null !== f.child
                ) {
                  ;(f.child.return = f), (f = f.child)
                  continue
                }
                if (f === e) break e
                for (; null === f.sibling; ) {
                  if (null === f.return || f.return === e) break e
                  c === f && (c = null), (f = f.return)
                }
                c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
              }
            }
            break
          case 19:
            ms(t, e), ys(e), 4 & r && hs(e)
          case 21:
        }
      }
      function ys(e) {
        var t = e.flags
        if (2 & t) {
          try {
            e: {
              for (var n = e.return; null !== n; ) {
                if (ls(n)) {
                  var r = n
                  break e
                }
                n = n.return
              }
              throw Error(oe(160))
            }
            switch (r.tag) {
              case 5:
                var a = r.stateNode
                32 & r.flags && (ft(a, ""), (r.flags &= -33)), ss(e, is(e), a)
                break
              case 3:
              case 4:
                var o = r.stateNode.containerInfo
                us(e, is(e), o)
                break
              default:
                throw Error(oe(161))
            }
          } catch (W) {
            Ec(e, e.return, W)
          }
          e.flags &= -3
        }
        4096 & t && (e.flags &= -4097)
      }
      function vs(e, t, n) {
        ;(Ju = e), bs(e)
      }
      function bs(e, t, n) {
        for (var r = 0 != (1 & e.mode); null !== Ju; ) {
          var a = Ju,
            o = a.child
          if (22 === a.tag && r) {
            var l = null !== a.memoizedState || Gu
            if (!l) {
              var i = a.alternate,
                u = (null !== i && null !== i.memoizedState) || Yu
              i = Gu
              var s = Yu
              if (((Gu = l), (Yu = u) && !s))
                for (Ju = a; null !== Ju; )
                  (u = (l = Ju).child),
                    22 === l.tag && null !== l.memoizedState
                      ? Ss(a)
                      : null !== u
                        ? ((u.return = l), (Ju = u))
                        : Ss(a)
              for (; null !== o; ) (Ju = o), bs(o), (o = o.sibling)
              ;(Ju = a), (Gu = i), (Yu = s)
            }
            ws(e)
          } else
            0 != (8772 & a.subtreeFlags) && null !== o
              ? ((o.return = a), (Ju = o))
              : ws(e)
        }
      }
      function ws(e) {
        for (; null !== Ju; ) {
          var t = Ju
          if (0 != (8772 & t.flags)) {
            var n = t.alternate
            try {
              if (0 != (8772 & t.flags))
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yu || rs(5, t)
                    break
                  case 1:
                    var r = t.stateNode
                    if (4 & t.flags && !Yu)
                      if (null === n) r.componentDidMount()
                      else {
                        var a =
                          t.elementType === t.type
                            ? n.memoizedProps
                            : gl(t.type, n.memoizedProps)
                        r.componentDidUpdate(
                          a,
                          n.memoizedState,
                          r.__reactInternalSnapshotBeforeUpdate
                        )
                      }
                    var o = t.updateQueue
                    null !== o && Ul(t, o, r)
                    break
                  case 3:
                    var l = t.updateQueue
                    if (null !== l) {
                      if (((n = null), null !== t.child))
                        switch (t.child.tag) {
                          case 5:
                          case 1:
                            n = t.child.stateNode
                        }
                      Ul(t, l, n)
                    }
                    break
                  case 5:
                    var i = t.stateNode
                    if (null === n && 4 & t.flags) {
                      n = i
                      var u = t.memoizedProps
                      switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          u.autoFocus && n.focus()
                          break
                        case "img":
                          u.src && (n.src = u.src)
                      }
                    }
                    break
                  case 6:
                  case 4:
                  case 12:
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break
                  case 13:
                    if (null === t.memoizedState) {
                      var s = t.alternate
                      if (null !== s) {
                        var c = s.memoizedState
                        if (null !== c) {
                          var f = c.dehydrated
                          null !== f && Vn(f)
                        }
                      }
                    }
                    break
                  default:
                    throw Error(oe(163))
                }
              Yu || (512 & t.flags && as(t))
            } catch (p) {
              Ec(t, t.return, p)
            }
          }
          if (t === e) {
            Ju = null
            break
          }
          if (null !== (n = t.sibling)) {
            ;(n.return = t.return), (Ju = n)
            break
          }
          Ju = t.return
        }
      }
      function ks(e) {
        for (; null !== Ju; ) {
          var t = Ju
          if (t === e) {
            Ju = null
            break
          }
          var n = t.sibling
          if (null !== n) {
            ;(n.return = t.return), (Ju = n)
            break
          }
          Ju = t.return
        }
      }
      function Ss(e) {
        for (; null !== Ju; ) {
          var t = Ju
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return
                try {
                  rs(4, t)
                } catch (W) {
                  Ec(t, n, W)
                }
                break
              case 1:
                var r = t.stateNode
                if ("function" == typeof r.componentDidMount) {
                  var a = t.return
                  try {
                    r.componentDidMount()
                  } catch (W) {
                    Ec(t, a, W)
                  }
                }
                var o = t.return
                try {
                  as(t)
                } catch (W) {
                  Ec(t, o, W)
                }
                break
              case 5:
                var l = t.return
                try {
                  as(t)
                } catch (W) {
                  Ec(t, l, W)
                }
            }
          } catch (W) {
            Ec(t, t.return, W)
          }
          if (t === e) {
            Ju = null
            break
          }
          var i = t.sibling
          if (null !== i) {
            ;(i.return = t.return), (Ju = i)
            break
          }
          Ju = t.return
        }
      }
      var xs,
        Es = Math.ceil,
        _s = we.ReactCurrentDispatcher,
        Ps = we.ReactCurrentOwner,
        Cs = we.ReactCurrentBatchConfig,
        Ls = 0,
        Ts = null,
        Rs = null,
        zs = 0,
        Ns = 0,
        Os = Eo(0),
        As = 0,
        Ms = null,
        Ds = 0,
        Is = 0,
        Us = 0,
        Fs = null,
        js = null,
        Bs = 0,
        Vs = 1 / 0,
        $s = null,
        Hs = !1,
        Ws = null,
        Qs = null,
        qs = !1,
        Ks = null,
        Gs = 0,
        Ys = 0,
        Xs = null,
        Js = -1,
        Zs = 0
      function ec() {
        return 0 != (6 & Ls) ? Yt() : -1 !== Js ? Js : (Js = Yt())
      }
      function tc(e) {
        return 0 == (1 & e.mode)
          ? 1
          : 0 != (2 & Ls) && 0 !== zs
            ? zs & -zs
            : null !== ml.transition
              ? (0 === Zs && (Zs = mn()), Zs)
              : 0 !== (e = bn)
                ? e
                : (e = void 0 === (e = window.event) ? 16 : Yn(e.type))
      }
      function nc(e, t, n, r) {
        if (50 < Ys) throw ((Ys = 0), (Xs = null), Error(oe(185)))
        yn(e, n, r),
          (0 != (2 & Ls) && e === Ts) ||
            (e === Ts && (0 == (2 & Ls) && (Is |= n), 4 === As && ic(e, zs)),
            rc(e, r),
            1 === n && 0 === Ls && 0 == (1 & t.mode) && ((Vs = Yt() + 500), Fo && Vo()))
      }
      function rc(e, t) {
        var n = e.callbackNode
        !(function (e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              o = e.pendingLanes;
            0 < o;

          ) {
            var l = 31 - on(o),
              i = 1 << l,
              u = a[l]
            ;-1 === u
              ? (0 != (i & n) && 0 == (i & r)) || (a[l] = pn(i, t))
              : u <= t && (e.expiredLanes |= i),
              (o &= ~i)
          }
        })(e, t)
        var r = dn(e, e === Ts ? zs : 0)
        if (0 === r)
          null !== n && qt(n), (e.callbackNode = null), (e.callbackPriority = 0)
        else if (((t = r & -r), e.callbackPriority !== t)) {
          if ((null != n && qt(n), 1 === t))
            0 === e.tag
              ? (function (e) {
                  ;(Fo = !0), Bo(e)
                })(uc.bind(null, e))
              : Bo(uc.bind(null, e)),
              oo(function () {
                0 == (6 & Ls) && Vo()
              }),
              (n = null)
          else {
            switch (wn(r)) {
              case 1:
                n = Jt
                break
              case 4:
                n = Zt
                break
              case 16:
              default:
                n = en
                break
              case 536870912:
                n = nn
            }
            n = Tc(n, ac.bind(null, e))
          }
          ;(e.callbackPriority = t), (e.callbackNode = n)
        }
      }
      function ac(e, t) {
        if (((Js = -1), (Zs = 0), 0 != (6 & Ls))) throw Error(oe(327))
        var n = e.callbackNode
        if (Sc() && e.callbackNode !== n) return null
        var r = dn(e, e === Ts ? zs : 0)
        if (0 === r) return null
        if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = gc(e, r)
        else {
          t = r
          var a = Ls
          Ls |= 2
          var o = hc()
          for ((Ts === e && zs === t) || (($s = null), (Vs = Yt() + 500), dc(e, t)); ; )
            try {
              vc()
              break
            } catch (i) {
              pc(e, i)
            }
          kl(),
            (_s.current = o),
            (Ls = a),
            null !== Rs ? (t = 0) : ((Ts = null), (zs = 0), (t = As))
        }
        if (0 !== t) {
          if ((2 === t && 0 !== (a = hn(e)) && ((r = a), (t = oc(e, a))), 1 === t))
            throw ((n = Ms), dc(e, 0), ic(e, r), rc(e, Yt()), n)
          if (6 === t) ic(e, r)
          else {
            if (
              ((a = e.current.alternate),
              0 == (30 & r) &&
                !(function (e) {
                  for (var t = e; ; ) {
                    if (16384 & t.flags) {
                      var n = t.updateQueue
                      if (null !== n && null !== (n = n.stores))
                        for (var r = 0; r < n.length; r++) {
                          var a = n[r],
                            o = a.getSnapshot
                          a = a.value
                          try {
                            if (!la(o(), a)) return !1
                          } catch (l) {
                            return !1
                          }
                        }
                    }
                    if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                      (n.return = t), (t = n)
                    else {
                      if (t === e) break
                      for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) return !0
                        t = t.return
                      }
                      ;(t.sibling.return = t.return), (t = t.sibling)
                    }
                  }
                  return !0
                })(a) &&
                (2 === (t = gc(e, r)) && 0 !== (o = hn(e)) && ((r = o), (t = oc(e, o))),
                1 === t))
            )
              throw ((n = Ms), dc(e, 0), ic(e, r), rc(e, Yt()), n)
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
              case 0:
              case 1:
                throw Error(oe(345))
              case 2:
              case 5:
                kc(e, js, $s)
                break
              case 3:
                if ((ic(e, r), (130023424 & r) === r && 10 < (t = Bs + 500 - Yt()))) {
                  if (0 !== dn(e, 0)) break
                  if (((a = e.suspendedLanes) & r) !== r) {
                    ec(), (e.pingedLanes |= e.suspendedLanes & a)
                    break
                  }
                  e.timeoutHandle = no(kc.bind(null, e, js, $s), t)
                  break
                }
                kc(e, js, $s)
                break
              case 4:
                if ((ic(e, r), (4194240 & r) === r)) break
                for (t = e.eventTimes, a = -1; 0 < r; ) {
                  var l = 31 - on(r)
                  ;(o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o)
                }
                if (
                  ((r = a),
                  10 <
                    (r =
                      (120 > (r = Yt() - r)
                        ? 120
                        : 480 > r
                          ? 480
                          : 1080 > r
                            ? 1080
                            : 1920 > r
                              ? 1920
                              : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                  ? 4320
                                  : 1960 * Es(r / 1960)) - r))
                ) {
                  e.timeoutHandle = no(kc.bind(null, e, js, $s), r)
                  break
                }
                kc(e, js, $s)
                break
              default:
                throw Error(oe(329))
            }
          }
        }
        return rc(e, Yt()), e.callbackNode === n ? ac.bind(null, e) : null
      }
      function oc(e, t) {
        var n = Fs
        return (
          e.current.memoizedState.isDehydrated && (dc(e, t).flags |= 256),
          2 !== (e = gc(e, t)) && ((t = js), (js = n), null !== t && lc(t)),
          e
        )
      }
      function lc(e) {
        null === js ? (js = e) : js.push.apply(js, e)
      }
      function ic(e, t) {
        for (
          t &= ~Us,
            t &= ~Is,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - on(t),
            r = 1 << n
          ;(e[n] = -1), (t &= ~r)
        }
      }
      function uc(e) {
        if (0 != (6 & Ls)) throw Error(oe(327))
        Sc()
        var t = dn(e, 0)
        if (0 == (1 & t)) return rc(e, Yt()), null
        var n = gc(e, t)
        if (0 !== e.tag && 2 === n) {
          var r = hn(e)
          0 !== r && ((t = r), (n = oc(e, r)))
        }
        if (1 === n) throw ((n = Ms), dc(e, 0), ic(e, t), rc(e, Yt()), n)
        if (6 === n) throw Error(oe(345))
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          kc(e, js, $s),
          rc(e, Yt()),
          null
        )
      }
      function sc(e, t) {
        var n = Ls
        Ls |= 1
        try {
          return e(t)
        } finally {
          0 === (Ls = n) && ((Vs = Yt() + 500), Fo && Vo())
        }
      }
      function cc(e) {
        null !== Ks && 0 === Ks.tag && 0 == (6 & Ls) && Sc()
        var t = Ls
        Ls |= 1
        var n = Cs.transition,
          r = bn
        try {
          if (((Cs.transition = null), (bn = 1), e)) return e()
        } finally {
          ;(bn = r), (Cs.transition = n), 0 == (6 & (Ls = t)) && Vo()
        }
      }
      function fc() {
        ;(Ns = Os.current), _o(Os)
      }
      function dc(e, t) {
        ;(e.finishedWork = null), (e.finishedLanes = 0)
        var n = e.timeoutHandle
        if ((-1 !== n && ((e.timeoutHandle = -1), ro(n)), null !== Rs))
          for (n = Rs.return; null !== n; ) {
            var r = n
            switch ((tl(r), r.tag)) {
              case 1:
                null != (r = r.type.childContextTypes) && Oo()
                break
              case 3:
                ai(), _o(To), _o(Lo), ci()
                break
              case 5:
                li(r)
                break
              case 4:
                ai()
                break
              case 13:
              case 19:
                _o(ii)
                break
              case 10:
                Sl(r.type._context)
                break
              case 22:
              case 23:
                fc()
            }
            n = n.return
          }
        if (
          ((Ts = e),
          (Rs = e = Oc(e.current, null)),
          (zs = Ns = t),
          (As = 0),
          (Ms = null),
          (Us = Is = Ds = 0),
          (js = Fs = null),
          null !== Pl)
        ) {
          for (t = 0; t < Pl.length; t++)
            if (null !== (r = (n = Pl[t]).interleaved)) {
              n.interleaved = null
              var a = r.next,
                o = n.pending
              if (null !== o) {
                var l = o.next
                ;(o.next = a), (r.next = l)
              }
              n.pending = r
            }
          Pl = null
        }
        return e
      }
      function pc(e, t) {
        for (;;) {
          var n = Rs
          try {
            if ((kl(), (fi.current = ou), yi)) {
              for (var r = hi.memoizedState; null !== r; ) {
                var a = r.queue
                null !== a && (a.pending = null), (r = r.next)
              }
              yi = !1
            }
            if (
              ((pi = 0),
              (gi = mi = hi = null),
              (vi = !1),
              (bi = 0),
              (Ps.current = null),
              null === n || null === n.return)
            ) {
              ;(As = 1), (Ms = t), (Rs = null)
              break
            }
            e: {
              var o = e,
                l = n.return,
                i = n,
                u = t
              if (
                ((t = zs),
                (i.flags |= 32768),
                null !== u && "object" == typeof u && "function" == typeof u.then)
              ) {
                var s = u,
                  c = i,
                  f = c.tag
                if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                  var d = c.alternate
                  d
                    ? ((c.updateQueue = d.updateQueue),
                      (c.memoizedState = d.memoizedState),
                      (c.lanes = d.lanes))
                    : ((c.updateQueue = null), (c.memoizedState = null))
                }
                var p = gu(l)
                if (null !== p) {
                  ;(p.flags &= -257),
                    yu(p, l, i, 0, t),
                    1 & p.mode && mu(o, s, t),
                    (u = s)
                  var h = (t = p).updateQueue
                  if (null === h) {
                    var m = new Set()
                    m.add(u), (t.updateQueue = m)
                  } else h.add(u)
                  break e
                }
                if (0 == (1 & t)) {
                  mu(o, s, t), mc()
                  break e
                }
                u = Error(oe(426))
              } else if (al && 1 & i.mode) {
                var g = gu(l)
                if (null !== g) {
                  0 == (65536 & g.flags) && (g.flags |= 256),
                    yu(g, l, i, 0, t),
                    hl(su(u, i))
                  break e
                }
              }
              ;(o = u = su(u, i)),
                4 !== As && (As = 2),
                null === Fs ? (Fs = [o]) : Fs.push(o),
                (o = l)
              do {
                switch (o.tag) {
                  case 3:
                    ;(o.flags |= 65536), (t &= -t), (o.lanes |= t), Dl(o, pu(0, u, t))
                    break e
                  case 1:
                    i = u
                    var y = o.type,
                      v = o.stateNode
                    if (
                      0 == (128 & o.flags) &&
                      ("function" == typeof y.getDerivedStateFromError ||
                        (null !== v &&
                          "function" == typeof v.componentDidCatch &&
                          (null === Qs || !Qs.has(v))))
                    ) {
                      ;(o.flags |= 65536), (t &= -t), (o.lanes |= t), Dl(o, hu(o, i, t))
                      break e
                    }
                }
                o = o.return
              } while (null !== o)
            }
            wc(n)
          } catch (b) {
            ;(t = b), Rs === n && null !== n && (Rs = n = n.return)
            continue
          }
          break
        }
      }
      function hc() {
        var e = _s.current
        return (_s.current = ou), null === e ? ou : e
      }
      function mc() {
        ;(0 !== As && 3 !== As && 2 !== As) || (As = 4),
          null === Ts || (0 == (268435455 & Ds) && 0 == (268435455 & Is)) || ic(Ts, zs)
      }
      function gc(e, t) {
        var n = Ls
        Ls |= 2
        var r = hc()
        for ((Ts === e && zs === t) || (($s = null), dc(e, t)); ; )
          try {
            yc()
            break
          } catch (df) {
            pc(e, df)
          }
        if ((kl(), (Ls = n), (_s.current = r), null !== Rs)) throw Error(oe(261))
        return (Ts = null), (zs = 0), As
      }
      function yc() {
        for (; null !== Rs; ) bc(Rs)
      }
      function vc() {
        for (; null !== Rs && !Kt(); ) bc(Rs)
      }
      function bc(e) {
        var t = xs(e.alternate, e, Ns)
        ;(e.memoizedProps = e.pendingProps),
          null === t ? wc(e) : (Rs = t),
          (Ps.current = null)
      }
      function wc(e) {
        var t = e
        do {
          var n = t.alternate
          if (((e = t.return), 0 == (32768 & t.flags))) {
            if (null !== (n = qu(n, t, Ns))) return void (Rs = n)
          } else {
            if (null !== (n = Ku(n, t))) return (n.flags &= 32767), void (Rs = n)
            if (null === e) return (As = 6), void (Rs = null)
            ;(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
          }
          if (null !== (t = t.sibling)) return void (Rs = t)
          Rs = t = e
        } while (null !== t)
        0 === As && (As = 5)
      }
      function kc(e, t, n) {
        var r = bn,
          a = Cs.transition
        try {
          ;(Cs.transition = null),
            (bn = 1),
            (function (e, t, n, r) {
              do {
                Sc()
              } while (null !== Ks)
              if (0 != (6 & Ls)) throw Error(oe(327))
              n = e.finishedWork
              var a = e.finishedLanes
              if (null === n) return null
              if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
                throw Error(oe(177))
              ;(e.callbackNode = null), (e.callbackPriority = 0)
              var o = n.lanes | n.childLanes
              if (
                ((function (e, t) {
                  var n = e.pendingLanes & ~t
                  ;(e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements)
                  var r = e.eventTimes
                  for (e = e.expirationTimes; 0 < n; ) {
                    var a = 31 - on(n),
                      o = 1 << a
                    ;(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o)
                  }
                })(e, o),
                e === Ts && ((Rs = Ts = null), (zs = 0)),
                (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                  qs ||
                  ((qs = !0),
                  Tc(en, function () {
                    return Sc(), null
                  })),
                (o = 0 != (15990 & n.flags)),
                0 != (15990 & n.subtreeFlags) || o)
              ) {
                ;(o = Cs.transition), (Cs.transition = null)
                var l = bn
                bn = 1
                var i = Ls
                ;(Ls |= 4),
                  (Ps.current = null),
                  (function (e, t) {
                    if (((Za = Hn), da((e = fa())))) {
                      if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd }
                      else
                        e: {
                          var r =
                            (n = ((n = e.ownerDocument) && n.defaultView) || window)
                              .getSelection && n.getSelection()
                          if (r && 0 !== r.rangeCount) {
                            n = r.anchorNode
                            var a = r.anchorOffset,
                              o = r.focusNode
                            r = r.focusOffset
                            try {
                              n.nodeType, o.nodeType
                            } catch (w) {
                              n = null
                              break e
                            }
                            var l = 0,
                              i = -1,
                              u = -1,
                              s = 0,
                              c = 0,
                              f = e,
                              d = null
                            t: for (;;) {
                              for (
                                var p;
                                f !== n || (0 !== a && 3 !== f.nodeType) || (i = l + a),
                                  f !== o || (0 !== r && 3 !== f.nodeType) || (u = l + r),
                                  3 === f.nodeType && (l += f.nodeValue.length),
                                  null !== (p = f.firstChild);

                              )
                                (d = f), (f = p)
                              for (;;) {
                                if (f === e) break t
                                if (
                                  (d === n && ++s === a && (i = l),
                                  d === o && ++c === r && (u = l),
                                  null !== (p = f.nextSibling))
                                )
                                  break
                                d = (f = d).parentNode
                              }
                              f = p
                            }
                            n = -1 === i || -1 === u ? null : { start: i, end: u }
                          } else n = null
                        }
                      n = n || { start: 0, end: 0 }
                    } else n = null
                    for (
                      eo = { focusedElem: e, selectionRange: n }, Hn = !1, Ju = t;
                      null !== Ju;

                    )
                      if (
                        ((e = (t = Ju).child), 0 != (1028 & t.subtreeFlags) && null !== e)
                      )
                        (e.return = t), (Ju = e)
                      else
                        for (; null !== Ju; ) {
                          t = Ju
                          try {
                            var h = t.alternate
                            if (0 != (1024 & t.flags))
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break
                                case 1:
                                  if (null !== h) {
                                    var m = h.memoizedProps,
                                      g = h.memoizedState,
                                      y = t.stateNode,
                                      v = y.getSnapshotBeforeUpdate(
                                        t.elementType === t.type ? m : gl(t.type, m),
                                        g
                                      )
                                    y.__reactInternalSnapshotBeforeUpdate = v
                                  }
                                  break
                                case 3:
                                  var b = t.stateNode.containerInfo
                                  1 === b.nodeType
                                    ? (b.textContent = "")
                                    : 9 === b.nodeType &&
                                      b.documentElement &&
                                      b.removeChild(b.documentElement)
                                  break
                                default:
                                  throw Error(oe(163))
                              }
                          } catch (w) {
                            Ec(t, t.return, w)
                          }
                          if (null !== (e = t.sibling)) {
                            ;(e.return = t.return), (Ju = e)
                            break
                          }
                          Ju = t.return
                        }
                    ;(h = ts), (ts = !1)
                  })(e, n),
                  gs(n, e),
                  pa(eo),
                  (Hn = !!Za),
                  (eo = Za = null),
                  (e.current = n),
                  vs(n),
                  Gt(),
                  (Ls = i),
                  (bn = l),
                  (Cs.transition = o)
              } else e.current = n
              if (
                (qs && ((qs = !1), (Ks = e), (Gs = a)),
                0 === (o = e.pendingLanes) && (Qs = null),
                (function (e) {
                  if (an && "function" == typeof an.onCommitFiberRoot)
                    try {
                      an.onCommitFiberRoot(rn, e, void 0, 128 == (128 & e.current.flags))
                    } catch (t) {}
                })(n.stateNode),
                rc(e, Yt()),
                null !== t)
              )
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                  (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest })
              if (Hs) throw ((Hs = !1), (e = Ws), (Ws = null), e)
              0 != (1 & Gs) && 0 !== e.tag && Sc(),
                0 != (1 & (o = e.pendingLanes))
                  ? e === Xs
                    ? Ys++
                    : ((Ys = 0), (Xs = e))
                  : (Ys = 0),
                Vo()
            })(e, t, n, r)
        } finally {
          ;(Cs.transition = a), (bn = r)
        }
        return null
      }
      function Sc() {
        if (null !== Ks) {
          var e = wn(Gs),
            t = Cs.transition,
            n = bn
          try {
            if (((Cs.transition = null), (bn = 16 > e ? 16 : e), null === Ks)) var r = !1
            else {
              if (((e = Ks), (Ks = null), (Gs = 0), 0 != (6 & Ls))) throw Error(oe(331))
              var a = Ls
              for (Ls |= 4, Ju = e.current; null !== Ju; ) {
                var o = Ju,
                  l = o.child
                if (0 != (16 & Ju.flags)) {
                  var i = o.deletions
                  if (null !== i) {
                    for (var u = 0; u < i.length; u++) {
                      var s = i[u]
                      for (Ju = s; null !== Ju; ) {
                        var c = Ju
                        switch (c.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(8, c, o)
                        }
                        var f = c.child
                        if (null !== f) (f.return = c), (Ju = f)
                        else
                          for (; null !== Ju; ) {
                            var d = (c = Ju).sibling,
                              p = c.return
                            if ((os(c), c === s)) {
                              Ju = null
                              break
                            }
                            if (null !== d) {
                              ;(d.return = p), (Ju = d)
                              break
                            }
                            Ju = p
                          }
                      }
                    }
                    var h = o.alternate
                    if (null !== h) {
                      var m = h.child
                      if (null !== m) {
                        h.child = null
                        do {
                          var g = m.sibling
                          ;(m.sibling = null), (m = g)
                        } while (null !== m)
                      }
                    }
                    Ju = o
                  }
                }
                if (0 != (2064 & o.subtreeFlags) && null !== l) (l.return = o), (Ju = l)
                else
                  e: for (; null !== Ju; ) {
                    if (0 != (2048 & (o = Ju).flags))
                      switch (o.tag) {
                        case 0:
                        case 11:
                        case 15:
                          ns(9, o, o.return)
                      }
                    var y = o.sibling
                    if (null !== y) {
                      ;(y.return = o.return), (Ju = y)
                      break e
                    }
                    Ju = o.return
                  }
              }
              var v = e.current
              for (Ju = v; null !== Ju; ) {
                var b = (l = Ju).child
                if (0 != (2064 & l.subtreeFlags) && null !== b) (b.return = l), (Ju = b)
                else
                  e: for (l = v; null !== Ju; ) {
                    if (0 != (2048 & (i = Ju).flags))
                      try {
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i)
                        }
                      } catch (k) {
                        Ec(i, i.return, k)
                      }
                    if (i === l) {
                      Ju = null
                      break e
                    }
                    var w = i.sibling
                    if (null !== w) {
                      ;(w.return = i.return), (Ju = w)
                      break e
                    }
                    Ju = i.return
                  }
              }
              if (((Ls = a), Vo(), an && "function" == typeof an.onPostCommitFiberRoot))
                try {
                  an.onPostCommitFiberRoot(rn, e)
                } catch (k) {}
              r = !0
            }
            return r
          } finally {
            ;(bn = n), (Cs.transition = t)
          }
        }
        return !1
      }
      function xc(e, t, n) {
        ;(e = Al(e, (t = pu(0, (t = su(n, t)), 1)), 1)),
          (t = ec()),
          null !== e && (yn(e, 1, t), rc(e, t))
      }
      function Ec(e, t, n) {
        if (3 === e.tag) xc(e, e, n)
        else
          for (; null !== t; ) {
            if (3 === t.tag) {
              xc(t, e, n)
              break
            }
            if (1 === t.tag) {
              var r = t.stateNode
              if (
                "function" == typeof t.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch && (null === Qs || !Qs.has(r)))
              ) {
                ;(t = Al(t, (e = hu(t, (e = su(n, e)), 1)), 1)),
                  (e = ec()),
                  null !== t && (yn(t, 1, e), rc(t, e))
                break
              }
            }
            t = t.return
          }
      }
      function _c(e, t, n) {
        var r = e.pingCache
        null !== r && r.delete(t),
          (t = ec()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Ts === e &&
            (zs & n) === n &&
            (4 === As || (3 === As && (130023424 & zs) === zs && 500 > Yt() - Bs)
              ? dc(e, 0)
              : (Us |= n)),
          rc(e, t)
      }
      function Pc(e, t) {
        0 === t &&
          (0 == (1 & e.mode)
            ? (t = 1)
            : ((t = cn), 0 == (130023424 & (cn <<= 1)) && (cn = 4194304)))
        var n = ec()
        null !== (e = Tl(e, t)) && (yn(e, t, n), rc(e, n))
      }
      function Cc(e) {
        var t = e.memoizedState,
          n = 0
        null !== t && (n = t.retryLane), Pc(e, n)
      }
      function Lc(e, t) {
        var n = 0
        switch (e.tag) {
          case 13:
            var r = e.stateNode,
              a = e.memoizedState
            null !== a && (n = a.retryLane)
            break
          case 19:
            r = e.stateNode
            break
          default:
            throw Error(oe(314))
        }
        null !== r && r.delete(t), Pc(e, n)
      }
      function Tc(e, t) {
        return Qt(e, t)
      }
      function Rc(e, t, n, r) {
        ;(this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null)
      }
      function zc(e, t, n, r) {
        return new Rc(e, t, n, r)
      }
      function Nc(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
      }
      function Oc(e, t) {
        var n = e.alternate
        return (
          null === n
            ? (((n = zc(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
          (n.flags = 14680064 & e.flags),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        )
      }
      function Ac(e, t, n, r, a, o) {
        var l = 2
        if (((r = e), "function" == typeof e)) Nc(e) && (l = 1)
        else if ("string" == typeof e) l = 5
        else
          e: switch (e) {
            case xe:
              return Mc(n.children, a, o, t)
            case Ee:
              ;(l = 8), (a |= 8)
              break
            case _e:
              return ((e = zc(12, n, t, 2 | a)).elementType = _e), (e.lanes = o), e
            case Te:
              return ((e = zc(13, n, t, a)).elementType = Te), (e.lanes = o), e
            case Re:
              return ((e = zc(19, n, t, a)).elementType = Re), (e.lanes = o), e
            case Oe:
              return Dc(n, a, o, t)
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case Pe:
                    l = 10
                    break e
                  case Ce:
                    l = 9
                    break e
                  case Le:
                    l = 11
                    break e
                  case ze:
                    l = 14
                    break e
                  case Ne:
                    ;(l = 16), (r = null)
                    break e
                }
              throw Error(oe(130, null == e ? e : typeof e, ""))
          }
        return ((t = zc(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t
      }
      function Mc(e, t, n, r) {
        return ((e = zc(7, e, r, t)).lanes = n), e
      }
      function Dc(e, t, n, r) {
        return (
          ((e = zc(22, e, r, t)).elementType = Oe),
          (e.lanes = n),
          (e.stateNode = { isHidden: !1 }),
          e
        )
      }
      function Ic(e, t, n) {
        return ((e = zc(6, e, null, t)).lanes = n), e
      }
      function Uc(e, t, n) {
        return (
          ((t = zc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
          }),
          t
        )
      }
      function Fc(e, t, n, r, a) {
        ;(this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.pendingContext = this.context = null),
          (this.callbackPriority = 0),
          (this.eventTimes = gn(0)),
          (this.expirationTimes = gn(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = gn(0)),
          (this.identifierPrefix = r),
          (this.onRecoverableError = a),
          (this.mutableSourceEagerHydrationData = null)
      }
      function jc(e, t, n, r, a, o, l, i, u) {
        return (
          (e = new Fc(e, t, n, i, u)),
          1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
          (o = zc(3, null, null, t)),
          (e.current = o),
          (o.stateNode = e),
          (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
          }),
          zl(o),
          e
        )
      }
      function Bc(e) {
        if (!e) return Co
        e: {
          if (Bt((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(oe(170))
          var t = e
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context
                break e
              case 1:
                if (No(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext
                  break e
                }
            }
            t = t.return
          } while (null !== t)
          throw Error(oe(171))
        }
        if (1 === e.tag) {
          var n = e.type
          if (No(n)) return Mo(e, n, t)
        }
        return t
      }
      function Vc(e, t, n, r, a, o, l, i, u) {
        return (
          ((e = jc(n, r, !0, e, 0, o, 0, i, u)).context = Bc(null)),
          (n = e.current),
          ((o = Ol((r = ec()), (a = tc(n)))).callback = null != t ? t : null),
          Al(n, o, a),
          (e.current.lanes = a),
          yn(e, a, r),
          rc(e, r),
          e
        )
      }
      function $c(e, t, n, r) {
        var a = t.current,
          o = ec(),
          l = tc(a)
        return (
          (n = Bc(n)),
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = Ol(o, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          null !== (e = Al(a, t, l)) && (nc(e, a, l, o), Ml(e, a, l)),
          l
        )
      }
      function Hc(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
      }
      function Wc(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane
          e.retryLane = 0 !== n && n < t ? n : t
        }
      }
      function Qc(e, t) {
        Wc(e, t), (e = e.alternate) && Wc(e, t)
      }
      xs = function (e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || To.current) bu = !0
          else {
            if (0 == (e.lanes & n) && 0 == (128 & t.flags))
              return (
                (bu = !1),
                (function (e, t, n) {
                  switch (t.tag) {
                    case 3:
                      Tu(t), pl()
                      break
                    case 5:
                      oi(t)
                      break
                    case 1:
                      No(t.type) && Do(t)
                      break
                    case 4:
                      ri(t, t.stateNode.containerInfo)
                      break
                    case 10:
                      var r = t.type._context,
                        a = t.memoizedProps.value
                      Po(yl, r._currentValue), (r._currentValue = a)
                      break
                    case 13:
                      if (null !== (r = t.memoizedState))
                        return null !== r.dehydrated
                          ? (Po(ii, 1 & ii.current), (t.flags |= 128), null)
                          : 0 != (n & t.child.childLanes)
                            ? Iu(e, t, n)
                            : (Po(ii, 1 & ii.current),
                              null !== (e = Hu(e, t, n)) ? e.sibling : null)
                      Po(ii, 1 & ii.current)
                      break
                    case 19:
                      if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                        if (r) return Vu(e, t, n)
                        t.flags |= 128
                      }
                      if (
                        (null !== (a = t.memoizedState) &&
                          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                        Po(ii, ii.current),
                        r)
                      )
                        break
                      return null
                    case 22:
                    case 23:
                      return (t.lanes = 0), Eu(e, t, n)
                  }
                  return Hu(e, t, n)
                })(e, t, n)
              )
            bu = 0 != (131072 & e.flags)
          }
        else (bu = !1), al && 0 != (1048576 & t.flags) && Zo(t, Qo, t.index)
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            var r = t.type
            $u(e, t), (e = t.pendingProps)
            var a = zo(t, Lo.current)
            El(t, n), (a = xi(null, t, r, e, a, n))
            var o = Ei()
            return (
              (t.flags |= 1),
              "object" == typeof a &&
              null !== a &&
              "function" == typeof a.render &&
              void 0 === a.$$typeof
                ? ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  No(r) ? ((o = !0), Do(t)) : (o = !1),
                  (t.memoizedState =
                    null !== a.state && void 0 !== a.state ? a.state : null),
                  zl(t),
                  (a.updater = Bl),
                  (t.stateNode = a),
                  (a._reactInternals = t),
                  Wl(t, r, e, n),
                  (t = Lu(null, t, r, !0, o, n)))
                : ((t.tag = 0), al && o && el(t), wu(null, t, a, n), (t = t.child)),
              t
            )
          case 16:
            r = t.elementType
            e: {
              switch (
                ($u(e, t),
                (e = t.pendingProps),
                (r = (a = r._init)(r._payload)),
                (t.type = r),
                (a = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return Nc(e) ? 1 : 0
                    if (null != e) {
                      if ((e = e.$$typeof) === Le) return 11
                      if (e === ze) return 14
                    }
                    return 2
                  })(r)),
                (e = gl(r, e)),
                a)
              ) {
                case 0:
                  t = Pu(null, t, r, e, n)
                  break e
                case 1:
                  t = Cu(null, t, r, e, n)
                  break e
                case 11:
                  t = ku(null, t, r, e, n)
                  break e
                case 14:
                  t = Su(null, t, r, gl(r.type, e), n)
                  break e
              }
              throw Error(oe(306, r, ""))
            }
            return t
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Pu(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
            )
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Cu(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
            )
          case 3:
            e: {
              if ((Tu(t), null === e)) throw Error(oe(387))
              ;(r = t.pendingProps),
                (a = (o = t.memoizedState).element),
                Nl(e, t),
                Il(t, r, null, n)
              var l = t.memoizedState
              if (((r = l.element), o.isDehydrated)) {
                if (
                  ((o = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                  }),
                  (t.updateQueue.baseState = o),
                  (t.memoizedState = o),
                  256 & t.flags)
                ) {
                  t = Ru(e, t, r, n, (a = su(Error(oe(423)), t)))
                  break e
                }
                if (r !== a) {
                  t = Ru(e, t, r, n, (a = su(Error(oe(424)), t)))
                  break e
                }
                for (
                  rl = uo(t.stateNode.containerInfo.firstChild),
                    nl = t,
                    al = !0,
                    ol = null,
                    n = Xl(t, null, r, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (-3 & n.flags) | 4096), (n = n.sibling)
              } else {
                if ((pl(), r === a)) {
                  t = Hu(e, t, n)
                  break e
                }
                wu(e, t, r, n)
              }
              t = t.child
            }
            return t
          case 5:
            return (
              oi(t),
              null === e && sl(t),
              (r = t.type),
              (a = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (l = a.children),
              to(r, a) ? (l = null) : null !== o && to(r, o) && (t.flags |= 32),
              _u(e, t),
              wu(e, t, l, n),
              t.child
            )
          case 6:
            return null === e && sl(t), null
          case 13:
            return Iu(e, t, n)
          case 4:
            return (
              ri(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Yl(t, null, r, n)) : wu(e, t, r, n),
              t.child
            )
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              ku(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
            )
          case 7:
            return wu(e, t, t.pendingProps, n), t.child
          case 8:
          case 12:
            return wu(e, t, t.pendingProps.children, n), t.child
          case 10:
            e: {
              if (
                ((r = t.type._context),
                (a = t.pendingProps),
                (o = t.memoizedProps),
                (l = a.value),
                Po(yl, r._currentValue),
                (r._currentValue = l),
                null !== o)
              )
                if (la(o.value, l)) {
                  if (o.children === a.children && !To.current) {
                    t = Hu(e, t, n)
                    break e
                  }
                } else
                  for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                    var i = o.dependencies
                    if (null !== i) {
                      l = o.child
                      for (var u = i.firstContext; null !== u; ) {
                        if (u.context === r) {
                          if (1 === o.tag) {
                            ;(u = Ol(-1, n & -n)).tag = 2
                            var s = o.updateQueue
                            if (null !== s) {
                              var c = (s = s.shared).pending
                              null === c
                                ? (u.next = u)
                                : ((u.next = c.next), (c.next = u)),
                                (s.pending = u)
                            }
                          }
                          ;(o.lanes |= n),
                            null !== (u = o.alternate) && (u.lanes |= n),
                            xl(o.return, n, t),
                            (i.lanes |= n)
                          break
                        }
                        u = u.next
                      }
                    } else if (10 === o.tag) l = o.type === t.type ? null : o.child
                    else if (18 === o.tag) {
                      if (null === (l = o.return)) throw Error(oe(341))
                      ;(l.lanes |= n),
                        null !== (i = l.alternate) && (i.lanes |= n),
                        xl(l, n, t),
                        (l = o.sibling)
                    } else l = o.child
                    if (null !== l) l.return = o
                    else
                      for (l = o; null !== l; ) {
                        if (l === t) {
                          l = null
                          break
                        }
                        if (null !== (o = l.sibling)) {
                          ;(o.return = l.return), (l = o)
                          break
                        }
                        l = l.return
                      }
                    o = l
                  }
              wu(e, t, a.children, n), (t = t.child)
            }
            return t
          case 9:
            return (
              (a = t.type),
              (r = t.pendingProps.children),
              El(t, n),
              (r = r((a = _l(a)))),
              (t.flags |= 1),
              wu(e, t, r, n),
              t.child
            )
          case 14:
            return (
              (a = gl((r = t.type), t.pendingProps)), Su(e, t, r, (a = gl(r.type, a)), n)
            )
          case 15:
            return xu(e, t, t.type, t.pendingProps, n)
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : gl(r, a)),
              $u(e, t),
              (t.tag = 1),
              No(r) ? ((e = !0), Do(t)) : (e = !1),
              El(t, n),
              $l(t, r, a),
              Wl(t, r, a, n),
              Lu(null, t, r, !0, e, n)
            )
          case 19:
            return Vu(e, t, n)
          case 22:
            return Eu(e, t, n)
        }
        throw Error(oe(156, t.tag))
      }
      var qc =
        "function" == typeof reportError
          ? reportError
          : function (e) {
              console.error(e)
            }
      function Kc(e) {
        this._internalRoot = e
      }
      function Gc(e) {
        this._internalRoot = e
      }
      function Yc(e) {
        return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType))
      }
      function Xc(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
        )
      }
      function Jc() {}
      function Zc(e, t, n, r, a) {
        var o = n._reactRootContainer
        if (o) {
          var l = o
          if ("function" == typeof a) {
            var i = a
            a = function () {
              var e = Hc(l)
              i.call(e)
            }
          }
          $c(t, l, e, a)
        } else
          l = (function (e, t, n, r, a) {
            if (a) {
              if ("function" == typeof r) {
                var o = r
                r = function () {
                  var e = Hc(l)
                  o.call(e)
                }
              }
              var l = Vc(t, r, e, 0, null, !1, 0, "", Jc)
              return (
                (e._reactRootContainer = l),
                (e[ho] = l.current),
                Ba(8 === e.nodeType ? e.parentNode : e),
                cc(),
                l
              )
            }
            for (; (a = e.lastChild); ) e.removeChild(a)
            if ("function" == typeof r) {
              var i = r
              r = function () {
                var e = Hc(u)
                i.call(e)
              }
            }
            var u = jc(e, 0, !1, null, 0, !1, 0, "", Jc)
            return (
              (e._reactRootContainer = u),
              (e[ho] = u.current),
              Ba(8 === e.nodeType ? e.parentNode : e),
              cc(function () {
                $c(t, u, n, r)
              }),
              u
            )
          })(n, t, e, a, r)
        return Hc(l)
      }
      ;(Gc.prototype.render = Kc.prototype.render =
        function (e) {
          var t = this._internalRoot
          if (null === t) throw Error(oe(409))
          $c(e, t, null, null)
        }),
        (Gc.prototype.unmount = Kc.prototype.unmount =
          function () {
            var e = this._internalRoot
            if (null !== e) {
              this._internalRoot = null
              var t = e.containerInfo
              cc(function () {
                $c(null, e, null, null)
              }),
                (t[ho] = null)
            }
          }),
        (Gc.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = En()
            e = { blockedOn: null, target: e, priority: t }
            for (var n = 0; n < On.length && 0 !== t && t < On[n].priority; n++);
            On.splice(n, 0, e), 0 === n && In(e)
          }
        }),
        (kn = function (e) {
          switch (e.tag) {
            case 3:
              var t = e.stateNode
              if (t.current.memoizedState.isDehydrated) {
                var n = fn(t.pendingLanes)
                0 !== n &&
                  (vn(t, 1 | n), rc(t, Yt()), 0 == (6 & Ls) && ((Vs = Yt() + 500), Vo()))
              }
              break
            case 13:
              cc(function () {
                var t = Tl(e, 1)
                if (null !== t) {
                  var n = ec()
                  nc(t, e, 1, n)
                }
              }),
                Qc(e, 1)
          }
        }),
        (Sn = function (e) {
          if (13 === e.tag) {
            var t = Tl(e, 134217728)
            null !== t && nc(t, e, 134217728, ec()), Qc(e, 134217728)
          }
        }),
        (xn = function (e) {
          if (13 === e.tag) {
            var t = tc(e),
              n = Tl(e, t)
            null !== n && nc(n, e, t, ec()), Qc(e, t)
          }
        }),
        (En = function () {
          return bn
        }),
        (_n = function (e, t) {
          var n = bn
          try {
            return (bn = e), t()
          } finally {
            bn = n
          }
        }),
        (kt = function (e, t, n) {
          switch (t) {
            case "input":
              if ((Je(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t]
                  if (r !== e && r.form === e.form) {
                    var a = ko(r)
                    if (!a) throw Error(oe(90))
                    qe(r), Je(r, a)
                  }
                }
              }
              break
            case "textarea":
              ot(e, n)
              break
            case "select":
              null != (t = n.value) && nt(e, !!n.multiple, t, !1)
          }
        }),
        (Ct = sc),
        (Lt = cc)
      var ef = { usingClientEntryPoint: !1, Events: [bo, wo, ko, _t, Pt, sc] },
        tf = {
          findFiberByHostInstance: vo,
          bundleType: 0,
          version: "18.2.0",
          rendererPackageName: "react-dom"
        },
        nf = {
          bundleType: tf.bundleType,
          version: tf.version,
          rendererPackageName: tf.rendererPackageName,
          rendererConfig: tf.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: we.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Ht(e)) ? null : e.stateNode
          },
          findFiberByHostInstance:
            tf.findFiberByHostInstance ||
            function () {
              return null
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
        }
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var rf = __REACT_DEVTOOLS_GLOBAL_HOOK__
        if (!rf.isDisabled && rf.supportsFiber)
          try {
            ;(rn = rf.inject(nf)), (an = rf)
          } catch (kf) {}
      }
      ;(Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ef),
        (Z.createPortal = function (e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
          if (!Yc(t)) throw Error(oe(200))
          return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
            return {
              $$typeof: Se,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n
            }
          })(e, t, null, n)
        }),
        (Z.createRoot = function (e, t) {
          if (!Yc(e)) throw Error(oe(299))
          var n = !1,
            r = "",
            a = qc
          return (
            null != t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
            (t = jc(e, 1, !1, null, 0, n, 0, r, a)),
            (e[ho] = t.current),
            Ba(8 === e.nodeType ? e.parentNode : e),
            new Kc(t)
          )
        }),
        (Z.findDOMNode = function (e) {
          if (null == e) return null
          if (1 === e.nodeType) return e
          var t = e._reactInternals
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(oe(188))
            throw ((e = Object.keys(e).join(",")), Error(oe(268, e)))
          }
          return (e = null === (e = Ht(t)) ? null : e.stateNode)
        }),
        (Z.flushSync = function (e) {
          return cc(e)
        }),
        (Z.hydrate = function (e, t, n) {
          if (!Xc(t)) throw Error(oe(200))
          return Zc(null, e, t, !0, n)
        }),
        (Z.hydrateRoot = function (e, t, n) {
          if (!Yc(e)) throw Error(oe(405))
          var r = (null != n && n.hydratedSources) || null,
            a = !1,
            o = "",
            l = qc
          if (
            (null != n &&
              (!0 === n.unstable_strictMode && (a = !0),
              void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
              void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
            (t = Vc(t, null, e, 1, null != n ? n : null, a, 0, o, l)),
            (e[ho] = t.current),
            Ba(e),
            r)
          )
            for (e = 0; e < r.length; e++)
              (a = (a = (n = r[e])._getVersion)(n._source)),
                null == t.mutableSourceEagerHydrationData
                  ? (t.mutableSourceEagerHydrationData = [n, a])
                  : t.mutableSourceEagerHydrationData.push(n, a)
          return new Gc(t)
        }),
        (Z.render = function (e, t, n) {
          if (!Xc(t)) throw Error(oe(200))
          return Zc(null, e, t, !1, n)
        }),
        (Z.unmountComponentAtNode = function (e) {
          if (!Xc(e)) throw Error(oe(40))
          return (
            !!e._reactRootContainer &&
            (cc(function () {
              Zc(null, null, e, !1, function () {
                ;(e._reactRootContainer = null), (e[ho] = null)
              })
            }),
            !0)
          )
        }),
        (Z.unstable_batchedUpdates = sc),
        (Z.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
          if (!Xc(n)) throw Error(oe(200))
          if (null == e || void 0 === e._reactInternals) throw Error(oe(38))
          return Zc(e, t, n, !1, r)
        }),
        (Z.version = "18.2.0-next-9e3b772b8-20220608"),
        (function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
              console.error(t)
            }
        })(),
        (J.exports = Z)
      var af,
        of,
        lf = J.exports
      ;(of = lf.createRoot), (af = lf.hydrateRoot)
      const uf = {
        root: "App-module__root__JTuhI",
        wrapper: "App-module__wrapper__GovBS"
      }
      var sf = {},
        cf = (e, t, n) => (r) => {
          return (
            (l = n),
            `[38;5;${(a = e) === (o = t) && o === l ? (a < 8 ? 16 : a > 248 ? 231 : Math.round(((a - 8) / 247) * 24) + 232) : 16 + 36 * Math.round((a / 255) * 5) + 6 * Math.round((o / 255) * 5) + Math.round((l / 255) * 5)}m` +
              r +
              "[39m"
          )
          var a, o, l
        },
        ff = (e) => "[1m" + e + "[22m",
        df = !("undefined" == typeof window || !window.document),
        pf =
          (e) =>
          (...t) => {
            const n = (function (e) {
                let t = 0
                for (let n = 0; n < e.length; n++)
                  (t = (t << 5) - t + e.charCodeAt(n)), (t = Math.abs(t & t))
                return [(16711680 & t) >> 16, (65280 & t) >> 8, 255 & t]
              })(e),
              r = (t) =>
                t?.includes(":*") ? e.startsWith(t.split(":*")[0]) : t === e || "*" === t
            df
              ? r(localStorage.getItem("debug")) &&
                console.log(e && `%c${e}`, `color: rgb(${n[0]}, ${n[1]}, ${n[2]})`, ...t)
              : r(sf.DEBUG) && console.log(e && ff(cf(n[0], n[1], n[2])(e)), ...t)
          }
      function hf(e, t) {
        void 0 === t && (t = {})
        for (
          var n = (function (e) {
              for (var t = [], n = 0; n < e.length; ) {
                var r = e[n]
                if ("*" !== r && "+" !== r && "?" !== r)
                  if ("\\" !== r)
                    if ("{" !== r)
                      if ("}" !== r)
                        if (":" !== r)
                          if ("(" !== r) t.push({ type: "CHAR", index: n, value: e[n++] })
                          else {
                            var a = 1,
                              o = ""
                            if ("?" === e[(i = n + 1)])
                              throw new TypeError(
                                'Pattern cannot start with "?" at '.concat(i)
                              )
                            for (; i < e.length; )
                              if ("\\" !== e[i]) {
                                if (")" === e[i]) {
                                  if (0 == --a) {
                                    i++
                                    break
                                  }
                                } else if ("(" === e[i] && (a++, "?" !== e[i + 1]))
                                  throw new TypeError(
                                    "Capturing groups are not allowed at ".concat(i)
                                  )
                                o += e[i++]
                              } else o += e[i++] + e[i++]
                            if (a) throw new TypeError("Unbalanced pattern at ".concat(n))
                            if (!o) throw new TypeError("Missing pattern at ".concat(n))
                            t.push({ type: "PATTERN", index: n, value: o }), (n = i)
                          }
                        else {
                          for (var l = "", i = n + 1; i < e.length; ) {
                            var u = e.charCodeAt(i)
                            if (
                              !(
                                (u >= 48 && u <= 57) ||
                                (u >= 65 && u <= 90) ||
                                (u >= 97 && u <= 122) ||
                                95 === u
                              )
                            )
                              break
                            l += e[i++]
                          }
                          if (!l)
                            throw new TypeError("Missing parameter name at ".concat(n))
                          t.push({ type: "NAME", index: n, value: l }), (n = i)
                        }
                      else t.push({ type: "CLOSE", index: n, value: e[n++] })
                    else t.push({ type: "OPEN", index: n, value: e[n++] })
                  else t.push({ type: "ESCAPED_CHAR", index: n++, value: e[n++] })
                else t.push({ type: "MODIFIER", index: n, value: e[n++] })
              }
              return t.push({ type: "END", index: n, value: "" }), t
            })(e),
            r = t.prefixes,
            a = void 0 === r ? "./" : r,
            o = "[^".concat(yf(t.delimiter || "/#?"), "]+?"),
            l = [],
            i = 0,
            u = 0,
            s = "",
            c = function (e) {
              if (u < n.length && n[u].type === e) return n[u++].value
            },
            f = function (e) {
              var t = c(e)
              if (void 0 !== t) return t
              var r = n[u],
                a = r.type,
                o = r.index
              throw new TypeError(
                "Unexpected ".concat(a, " at ").concat(o, ", expected ").concat(e)
              )
            },
            d = function () {
              for (var e, t = ""; (e = c("CHAR") || c("ESCAPED_CHAR")); ) t += e
              return t
            };
          u < n.length;

        ) {
          var p = c("CHAR"),
            h = c("NAME"),
            m = c("PATTERN")
          if (h || m) {
            var g = p || ""
            ;-1 === a.indexOf(g) && ((s += g), (g = "")),
              s && (l.push(s), (s = "")),
              l.push({
                name: h || i++,
                prefix: g,
                suffix: "",
                pattern: m || o,
                modifier: c("MODIFIER") || ""
              })
          } else {
            var y = p || c("ESCAPED_CHAR")
            if (y) s += y
            else if ((s && (l.push(s), (s = "")), c("OPEN"))) {
              g = d()
              var v = c("NAME") || "",
                b = c("PATTERN") || "",
                w = d()
              f("CLOSE"),
                l.push({
                  name: v || (b ? i++ : ""),
                  pattern: v && !b ? o : b,
                  prefix: g,
                  suffix: w,
                  modifier: c("MODIFIER") || ""
                })
            } else f("END")
          }
        }
        return l
      }
      function mf(e, t) {
        return (function (e, t) {
          void 0 === t && (t = {})
          var n = vf(t),
            r = t.encode,
            a =
              void 0 === r
                ? function (e) {
                    return e
                  }
                : r,
            o = t.validate,
            l = void 0 === o || o,
            i = e.map(function (e) {
              if ("object" == typeof e)
                return new RegExp("^(?:".concat(e.pattern, ")$"), n)
            })
          return function (t) {
            for (var n = "", r = 0; r < e.length; r++) {
              var o = e[r]
              if ("string" != typeof o) {
                var u = t ? t[o.name] : void 0,
                  s = "?" === o.modifier || "*" === o.modifier,
                  c = "*" === o.modifier || "+" === o.modifier
                if (Array.isArray(u)) {
                  if (!c)
                    throw new TypeError(
                      'Expected "'.concat(o.name, '" to not repeat, but got an array')
                    )
                  if (0 === u.length) {
                    if (s) continue
                    throw new TypeError('Expected "'.concat(o.name, '" to not be empty'))
                  }
                  for (var f = 0; f < u.length; f++) {
                    var d = a(u[f], o)
                    if (l && !i[r].test(d))
                      throw new TypeError(
                        'Expected all "'
                          .concat(o.name, '" to match "')
                          .concat(o.pattern, '", but got "')
                          .concat(d, '"')
                      )
                    n += o.prefix + d + o.suffix
                  }
                } else if ("string" != typeof u && "number" != typeof u) {
                  if (!s) {
                    var p = c ? "an array" : "a string"
                    throw new TypeError('Expected "'.concat(o.name, '" to be ').concat(p))
                  }
                } else {
                  if (((d = a(String(u), o)), l && !i[r].test(d)))
                    throw new TypeError(
                      'Expected "'
                        .concat(o.name, '" to match "')
                        .concat(o.pattern, '", but got "')
                        .concat(d, '"')
                    )
                  n += o.prefix + d + o.suffix
                }
              } else n += o
            }
            return n
          }
        })(hf(e, t), t)
      }
      function gf(e, t) {
        var n = []
        return (function (e, t, n) {
          void 0 === n && (n = {})
          var r = n.decode,
            a =
              void 0 === r
                ? function (e) {
                    return e
                  }
                : r
          return function (n) {
            var r = e.exec(n)
            if (!r) return !1
            for (
              var o = r[0],
                l = r.index,
                i = Object.create(null),
                u = function (e) {
                  if (void 0 === r[e]) return "continue"
                  var n = t[e - 1]
                  "*" === n.modifier || "+" === n.modifier
                    ? (i[n.name] = r[e].split(n.prefix + n.suffix).map(function (e) {
                        return a(e, n)
                      }))
                    : (i[n.name] = a(r[e], n))
                },
                s = 1;
              s < r.length;
              s++
            )
              u(s)
            return { path: o, index: l, params: i }
          }
        })(wf(e, n, t), n, t)
      }
      function yf(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
      }
      function vf(e) {
        return e && e.sensitive ? "" : "i"
      }
      function bf(e, t, n) {
        return (function (e, t, n) {
          void 0 === n && (n = {})
          for (
            var r = n.strict,
              a = void 0 !== r && r,
              o = n.start,
              l = void 0 === o || o,
              i = n.end,
              u = void 0 === i || i,
              s = n.encode,
              c =
                void 0 === s
                  ? function (e) {
                      return e
                    }
                  : s,
              f = n.delimiter,
              d = void 0 === f ? "/#?" : f,
              p = n.endsWith,
              h = "[".concat(yf(void 0 === p ? "" : p), "]|$"),
              m = "[".concat(yf(d), "]"),
              g = l ? "^" : "",
              y = 0,
              v = e;
            y < v.length;
            y++
          ) {
            var b = v[y]
            if ("string" == typeof b) g += yf(c(b))
            else {
              var w = yf(c(b.prefix)),
                k = yf(c(b.suffix))
              if (b.pattern)
                if ((t && t.push(b), w || k))
                  if ("+" === b.modifier || "*" === b.modifier) {
                    var S = "*" === b.modifier ? "?" : ""
                    g += "(?:"
                      .concat(w, "((?:")
                      .concat(b.pattern, ")(?:")
                      .concat(k)
                      .concat(w, "(?:")
                      .concat(b.pattern, "))*)")
                      .concat(k, ")")
                      .concat(S)
                  } else
                    g += "(?:"
                      .concat(w, "(")
                      .concat(b.pattern, ")")
                      .concat(k, ")")
                      .concat(b.modifier)
                else
                  "+" === b.modifier || "*" === b.modifier
                    ? (g += "((?:".concat(b.pattern, ")").concat(b.modifier, ")"))
                    : (g += "(".concat(b.pattern, ")").concat(b.modifier))
              else g += "(?:".concat(w).concat(k, ")").concat(b.modifier)
            }
          }
          if (u)
            a || (g += "".concat(m, "?")), (g += n.endsWith ? "(?=".concat(h, ")") : "$")
          else {
            var x = e[e.length - 1],
              E = "string" == typeof x ? m.indexOf(x[x.length - 1]) > -1 : void 0 === x
            a || (g += "(?:".concat(m, "(?=").concat(h, "))?")),
              E || (g += "(?=".concat(m, "|").concat(h, ")"))
          }
          return new RegExp(g, vf(n))
        })(hf(e, n), t, n)
      }
      function wf(e, t, n) {
        return e instanceof RegExp
          ? (function (e, t) {
              if (!t) return e
              for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, r = 0, a = n.exec(e.source); a; )
                t.push({
                  name: a[1] || r++,
                  prefix: "",
                  suffix: "",
                  modifier: "",
                  pattern: ""
                }),
                  (a = n.exec(e.source))
              return e
            })(e, t)
          : Array.isArray(e)
            ? (function (e, t, n) {
                var r = e.map(function (e) {
                  return wf(e, t, n).source
                })
                return new RegExp("(?:".concat(r.join("|"), ")"), vf(n))
              })(e, t, n)
            : bf(e, t, n)
      }
      void 0 !== t && (t.exports = pf)
      var kf = {
        base: void 0,
        routes: void 0,
        history: void 0,
        staticLocation: void 0,
        routeCounter: 1,
        isFirstRoute: !0,
        currentRoute: void 0,
        langService: void 0,
        staticPropsCache: {}
      }
      function Sf(e, t = "") {
        let n = e?.filter((e) => e).join(t)
        return (function (e) {
          return e.replace(/(https?:\/\/)|(\/)+/g, "$1$2")
        })(n)
      }
      function xf(e, t, n = !0) {
        return (n && e === t) || (e?.endsWith(t) && (e = e.slice(0, -1))), e
      }
      function Ef() {
        return !(typeof window < "u" && window.document)
      }
      var _f = pf("router:core")
      function Pf(e, t = kf.base, n = kf.routes, r = kf.langService) {
        if (!n) return
        let a
        if ("string" == typeof e)
          return (
            (a = e),
            r &&
              (a = (function (
                e,
                t = kf.langService?.currentLang.key,
                n = kf.langService?.showLangInUrl()
              ) {
                return n && (e = Sf([`/${t}`, "/" === e ? "" : e])), e
              })(a)),
            (a = Sf(["/" === t ? "" : t, a])),
            a
          )
        if ("object" == typeof e && e?.name) {
          let a = function (e, t, n = kf.base || "/", r = kf.langService) {
            let a = (e, t, n) => {
              for (let o of e) {
                let e = t.params?.lang || r?.currentLang.key,
                  l = o._langPath?.[e],
                  i = o.path
                if (o?.name === t.name || o.component?.displayName === t.name)
                  return (n + mf(l || i)(t.params)).replace(/(\/)+/g, "/")
                if (o.children?.length > 0) {
                  let e = a(o.children, t, n + mf(l || i)(t.params))
                  if (e) return e
                }
              }
            }
            return a(e, t, n)
          }
          r && !e.params?.lang && (e.params = { ...e.params, lang: r.currentLang.key })
          let o = ""
          e?.queryParams &&
            ((o = "?"),
            (o += Object.keys(e.queryParams)
              .map((t) => `${t}=${e?.queryParams[t]}`)
              .join("&")))
          let l = ""
          e?.hash && (l = "#" + e.hash)
          let i = a(n, e, t)
          if (i) return i + o + l
        } else console.warn("createUrl param isn't valid. to use createUrl return.", e)
      }
      var Cf = (e) => {
        let t = {},
          n = null,
          r = e.indexOf("?"),
          a = e.indexOf("#")
        if (-1 === r && -1 === a)
          return { queryParams: t, hash: n, urlWithoutHashAndQuery: e }
        if ((-1 !== a && (n = e.slice(a + 1)), -1 !== r)) {
          let n = e.slice(r + 1, -1 !== a ? a : void 0)
          new URLSearchParams(n).forEach((e, n) => (t[n] = e))
        }
        for (let o of ["?", "#"]) e = e.includes(o) ? e.split(o)[0] : e
        return { queryParams: t, hash: n, urlWithoutHashAndQuery: e }
      }
      function Lf(e, t, n, r) {
        if (!e) return void console.error(r, "props.routes is missing or empty, return.")
        let a = (function (e = kf.routes) {
          if (e)
            return (
              e.some(
                (e) =>
                  ("object" == typeof e.path &&
                    Object.keys(e.path).some(
                      (t) => "/" === e.path[t] || "/:lang" === e.path[t]
                    )) ||
                  "/" === e.path ||
                  "/:lang" === e.path
              ) ||
                e.unshift({
                  path: "/",
                  component: null,
                  name: `auto-generate-slash-route-${Math.random()}`
                }),
              e
            )
          _f("routes doesnt exist, return", e)
        })(e)
        return (
          n &&
            (a = (function (e, t) {
              return t?.reduce((e, t) => t(e), e) || e
            })(a, n)),
          t && (a = t.addLangParamToRoutes(a)),
          a
        )
      }
      var Tf = pf("router:cache"),
        Rf = "Router",
        zf = pf(`router:${Rf}`),
        Nf = Ef(),
        Of = V.createContext({
          base: "/",
          routes: void 0,
          history: void 0,
          langService: void 0,
          currentRoute: void 0,
          previousRoute: void 0,
          routeIndex: 0,
          previousPageIsMount: !0,
          staticLocation: void 0,
          unmountPreviousPage: () => {},
          getPaused: () => !1,
          setPaused: (e) => {}
        })
      function Af(e) {
        let t = V.useMemo(() => {
            let t = !!e.staticLocation || !!e.history
            return (
              zf(e.id, "IS_CLIENT_OR_SERVER_ROOT_ROUTER", t),
              Nf &&
                t &&
                ((kf.base = void 0),
                (kf.routes = void 0),
                (kf.history = void 0),
                (kf.staticLocation = void 0),
                (kf.routeCounter = 1),
                (kf.isFirstRoute = !0),
                (kf.currentRoute = void 0),
                (kf.langService = void 0),
                (kf.staticPropsCache = {})),
              t
            )
          }, [e.id, e.staticLocation, e.history]),
          n = V.useMemo(
            () => (t && (kf.langService = e.langService), kf.langService),
            [e.langService]
          ),
          r = V.useMemo(() => {
            let t = Lf(e.routes, n, e.middlewares, e.id)
            return !kf.routes && e.routes && (kf.routes = t), t
          }, [e.routes, n, e.middlewares, e.id])
        kf.base || (kf.base = e.base)
        let a = kf.base
        !kf.history && e.history && (kf.history = e.history)
        let o = kf.history
        e.staticLocation && (kf.staticLocation = e.staticLocation)
        let l = kf.staticLocation
        Nf && (kf.isFirstRoute = !0)
        let [i, u] = V.useReducer(
            (e, t) => {
              switch (t.type) {
                case "update-current-route":
                  return {
                    ...e,
                    previousRoute: e.currentRoute,
                    currentRoute: t.value,
                    routeIndex: e.routeIndex + 1,
                    previousPageIsMount: !0
                  }
                case "unmount-previous-page":
                  return { ...e, previousPageIsMount: !1 }
              }
            },
            {
              currentRoute: void 0,
              previousRoute: void 0,
              previousPageIsMount: !1,
              routeIndex: 0
            }
          ),
          s = V.useRef(),
          c = V.useRef(null),
          f = V.useRef(!1),
          d = async (t = "") => {
            if (f.current) return void (c.current = t)
            let a = (function ({ pUrl: e, pRoutes: t, pBase: n, pMatcher: r, id: a }) {
                if (!t || 0 === t?.length) return
                let { queryParams: o, hash: l, urlWithoutHashAndQuery: i } = Cf(e)
                return (function e({
                  pUrl: t,
                  urlWithoutHashAndQuery: n,
                  pRoutes: r,
                  pBase: a,
                  pMatcher: i,
                  pParent: u,
                  id: s
                }) {
                  for (let c of r) {
                    let r = xf(Sf([a, c.path]), "/"),
                      f = gf(r)(n)
                    if ((_f(s, `url "${n}" match path "${r}"?`, !!f), f)) {
                      let e = i?.params || f?.params,
                        n = (n) => {
                          if (n)
                            return {
                              path: n?.path,
                              url: mf(n.path)(e),
                              base: a,
                              component: n?.component,
                              children: n?.children,
                              parser: i || f,
                              name: n?.name || n?.component?.displayName,
                              getStaticProps: n?.getStaticProps,
                              params: e,
                              queryParams: o,
                              hash: l,
                              props: {
                                params: e,
                                queryParams: o,
                                hash: l,
                                ...(n?.props || {})
                              },
                              _fullPath: r,
                              _fullUrl: t,
                              _langPath: n?._langPath
                            }
                        },
                        d = n(c),
                        p = { ...d, _context: u ? n(u) : d }
                      return _f(s, "match", p), p
                    }
                    if (c?.children) {
                      let a = e({
                        pUrl: t,
                        urlWithoutHashAndQuery: n,
                        id: s,
                        pRoutes: c?.children,
                        pParent: u || c,
                        pBase: r,
                        pMatcher: f
                      })
                      if (a) return a
                    }
                  }
                })({
                  pUrl: e,
                  urlWithoutHashAndQuery: i,
                  pRoutes: t,
                  pBase: n,
                  pMatcher: r,
                  id: a
                })
              })({ pUrl: t, pRoutes: r, pBase: e.base, id: e.id }),
              o = (function (e) {
                return e?.find(
                  (e) =>
                    "/:rest" === e.path || "NotFoundPage" === e.component?.displayName
                )
              })(e.routes)
            if (!a && !o)
              return void zf(
                e.id,
                "matchingRoute not found & 'notFoundRoute' not found, return."
              )
            if (
              (s.current?._context?.url ?? s.current?.url) ===
              (a?._context?.url ?? a?.url)
            )
              return void zf(e.id, "this is the same route 'url', return.")
            let l = a || o
            if (!l) return
            let i = (function (e = kf.staticPropsCache) {
                return Object.freeze({
                  get: (t) => {
                    if (!Object.keys(e).some((e) => e === t))
                      return Tf(`"${t}" data doesn't exist in cache.`), null
                    let n = e[t]
                    return Tf("data is already in cache, return it.", n), n
                  },
                  set: (t, n) => {
                    ;(e[t] = n), Tf("cache after set", e)
                  }
                })
              })(),
              d = xf(l._fullUrl, "/"),
              [p] = d.split("#"),
              h = async () => {
                try {
                  let e = await l.getStaticProps(l.props, n?.currentLang)
                  Object.assign(l.props, e), i.set(p, e)
                } catch {
                  console.error("requestStaticProps failed")
                }
              }
            if (Nf)
              e.initialStaticProps &&
                (zf(
                  "firstRoute > isServer > assign initialStaticProps to newRoute props & set cache"
                ),
                Object.assign(l.props, e.initialStaticProps?.props ?? {}))
            else if (kf.isFirstRoute)
              e.initialStaticProps
                ? (zf(
                    e.id,
                    "firstRoute > isClient > assign initialStaticProps to newRoute props & set cache"
                  ),
                  Object.assign(l.props, e.initialStaticProps?.props ?? {}),
                  i.set(p, l.props ?? {}))
                : l.getStaticProps &&
                  (zf(e.id, "firstRoute > isClient > request getStaticProps & set cache"),
                  await h())
            else {
              let t = i.get(p)
              t
                ? (zf(
                    e.id,
                    "not firstRoute > isClient > assign dataFromCache to newRoute.props"
                  ),
                  Object.assign(l.props, t))
                : l.getStaticProps &&
                  (zf(e.id, "not firstRoute > isClient > request getStaticProps"),
                  await h())
            }
            u({ type: "update-current-route", value: l }),
              (s.current = l),
              (kf.currentRoute = l),
              (kf.isFirstRoute = !1)
          },
          p = V.useMemo(
            () =>
              r
                ? (() => {
                    if (!l || !o)
                      return l
                        ? void d(l)
                        : o
                          ? (d(
                              window.location.pathname +
                                window.location.search +
                                window.location.hash
                            ),
                            o?.listen(({ location: e }) => {
                              d(e.pathname + e.search + e.hash)
                            }))
                          : void console.error(
                              "An history or staticLocation props is required, return."
                            )
                    console.error(
                      "You can't set history and staticLocation props together, return."
                    )
                  })()
                : void 0,
            [r, o]
          )
        V.useEffect(
          () => () => {
            zf(e.id, "Stop to listen history."), p()
          },
          [p, r, l]
        )
        let {
          currentRoute: h,
          previousRoute: m,
          routeIndex: g,
          previousPageIsMount: y
        } = i
        return $.createElement(Of.Provider, {
          children: e.children,
          value: {
            routes: r,
            base: a,
            langService: n,
            history: o,
            staticLocation: l,
            currentRoute: h,
            previousRoute: m,
            routeIndex: g,
            previousPageIsMount: y,
            unmountPreviousPage: () => u({ type: "unmount-previous-page" }),
            getPaused: () => f.current,
            setPaused: (e) => {
              ;(f.current = e), !e && c.current && (d(c.current), (c.current = null))
            }
          }
        })
      }
      ;(Of.displayName = "RouterContext"),
        (Af.defaultProps = { base: "/", id: 1 }),
        (Af.displayName = Rf)
      var Mf = V.memo(Af),
        Df = () => V.useContext(Of),
        If = () => {
          let { staticLocation: e } = Df(),
            t = (function (e, t = []) {
              let { history: n } = Df()
              return (
                $.useEffect(
                  () =>
                    n?.listen((t) => {
                      e?.(t)
                    }),
                  [n, ...t]
                ),
                n
              )
            })((e) => {
              r(e.location.pathname + e.location.search + e.location.hash)
            }, []),
            [n, r] = V.useState(
              e || t?.location.pathname + t?.location.search + t?.location.hash
            )
          return [
            n,
            function (e) {
              t?.push(Pf(e))
            }
          ]
        },
        Uf = $.forwardRef(function (e, t) {
          let { history: n, staticLocation: r } = Df(),
            [a] = If(),
            o = V.useMemo(() => Pf(e.to), [e.to]),
            l = V.useCallback(
              (t) => {
                t.preventDefault(), e.onClick?.(), n?.push(o)
              },
              [o, n]
            ),
            [i, u] = $.useState()
          return (
            $.useEffect(() => {
              let e = n ? a : r
              u(e === o || e === xf(o, "/", !0))
            }, [n, r, a, o]),
            $.createElement("a", {
              ...e,
              to: void 0,
              className: Sf(["Link", e.className, i && "active"], " "),
              onClick: l,
              children: e.children,
              href: o,
              ref: t
            })
          )
        })
      function Ff(e) {
        let {
            routeIndex: t,
            currentRoute: n,
            previousRoute: r,
            unmountPreviousPage: a,
            previousPageIsMount: o
          } = Df(),
          l = $.useRef(null),
          i = $.useRef(null),
          u = $.useCallback(
            ({ previousPage: e, currentPage: t, unmountPreviousPage: n }) =>
              new Promise(async (r) => {
                let a = t?.$element
                a && (a.style.visibility = "hidden"),
                  e && (await e.playOut(), n()),
                  t &&
                    (await t.isReadyPromise(),
                    a && (a.style.visibility = "visible"),
                    await t.playIn()),
                  r()
              }),
            []
          )
        $[Ef() ? "useEffect" : "useLayoutEffect"](() => {
          n &&
            (e.manageTransitions || u)({
              previousPage: l.current,
              currentPage: i.current,
              unmountPreviousPage: a
            }).then(() => {
              a()
            })
        }, [t])
        let [s, c] = [r?._context ?? r, n?._context ?? n]
        return $.createElement(
          "div",
          { className: ["Stack", e.className].filter((e) => e).join(" ") },
          o &&
            s?.component &&
            $.createElement(s.component, {
              ref: l,
              key: `${s._fullUrl || ""}_${t - 1}`,
              ...(s.props || {})
            }),
          c?.component &&
            $.createElement(c.component, {
              ref: i,
              key: `${c?._fullUrl || ""}_${t}`,
              ...(c.props || {})
            })
        )
      }
      var jf = ({
          componentName: e,
          playIn: t = () => Promise.resolve(),
          playOut: n = () => Promise.resolve(),
          handleRef: r,
          rootRef: a,
          isReady: o = !0
        }) => {
          let l = V.useMemo(() => {
            let e = {}
            return (
              (e.promise = new Promise((t) => {
                e.resolve = t
              })),
              e
            )
          }, [])
          V.useEffect(() => {
            o && l.resolve()
          }, [o]),
            V.useImperativeHandle(
              r,
              () => ({
                componentName: e,
                playIn: t,
                playOut: n,
                isReady: o,
                isReadyPromise: () => l.promise,
                $element: a.current
              }),
              [l]
            )
        },
        Bf = pf("router:LangService"),
        Vf = class {
          languages
          currentLang
          defaultLang
          browserLang
          showDefaultLangInUrl
          base
          staticLocation
          constructor({
            languages: e,
            showDefaultLangInUrl: t = !0,
            base: n = "/",
            staticLocation: r
          }) {
            if (0 === e?.length) throw new Error("ERROR, no language is set.")
            ;(this.languages = e),
              (this.base = xf(n, "/", !0)),
              (this.staticLocation = r),
              (this.defaultLang = this.getDefaultLang(e)),
              (this.currentLang = this.getLangFromString() || this.defaultLang),
              (this.browserLang = this.getBrowserLang(e)),
              (this.showDefaultLangInUrl = t)
          }
          setLang(e, t = !0, n = kf.currentRoute) {
            if (e.key === this.currentLang.key)
              return void Bf("setLang: This is the same language, exit.")
            if (!this.langIsAvailable(e))
              return void Bf(
                `setLang: lang ${e.key} is not available in languages list, exit.`
              )
            let r = Pf({
              name: n?.name,
              params: { ...(n.props?.params || {}), lang: e.key }
            })
            Bf("preparedNewUrl", r)
            let a,
              o = t
            if (this.showDefaultLangInUrl) a = r
            else if (!this.showDefaultLangInUrl && this.isDefaultLangKey(e.key)) {
              let t = `${this.base}/${e.key}`,
                n = r.substring(t.length, r.length)
              ;(a = Sf([this.base, n])), (o = !0), Bf("2. after remove lang from URL", a)
            } else if (
              !this.showDefaultLangInUrl &&
              this.isDefaultLangKey(this.currentLang.key)
            ) {
              let t = r.substring(this.base.length, r.length)
              ;(a = Sf([this.base, "/", e.key, "/", t])),
                Bf("3. after add lang in URL", a)
            } else (a = r), Bf("4, other case")
            a
              ? ((this.currentLang = e), (a = xf(a, "/", !0)), this.reloadOrRefresh(a, o))
              : Bf("newUrl is no set, do not reload or refresh, return.", a)
          }
          redirectToBrowserLang(e = !0) {
            if ((Bf("browserLang object", this.browserLang), !this.browserLang))
              return (
                Bf("browserLang is not set, redirect to defaultLang"),
                void this.redirectToDefaultLang(e)
              )
            if (
              location.pathname === this.base ||
              xf(location.pathname, "/", !0) === this.base
            ) {
              let t = mf(Sf([this.base, "/:lang"]))({ lang: this.browserLang.key })
              Bf("redirect: to browser language >", { newUrl: t }),
                this.reloadOrRefresh(t, e)
            }
          }
          redirectToDefaultLang(e = !0) {
            if (!Ef()) {
              if (!this.showDefaultLangInUrl)
                return void Bf(
                  "redirect: URLs have a lang param or language is valid, don't redirect."
                )
              if (this.langIsAvailable(this.getLangFromString()))
                return void Bf("redirect: lang from URL is valid, don't redirect")
              if (
                location.pathname === this.base ||
                xf(location.pathname, "/", !0) === this.base
              ) {
                let t = mf(Sf([this.base, "/:lang"]))({ lang: this.defaultLang.key })
                Bf("redirect to default lang >", { newUrl: t }),
                  this.reloadOrRefresh(t, e)
              }
            }
          }
          isDefaultLangKey(e = this.currentLang.key) {
            return e === this.defaultLang.key
          }
          showLangInUrl() {
            return (
              !!this.showDefaultLangInUrl || !this.isDefaultLangKey(this.currentLang.key)
            )
          }
          addLangParamToRoutes(e, t = this.showLangInUrl()) {
            if (e?.some((e) => !!e._langPath)) return e
            let n = (e, t) => xf(Sf([t && "/:lang", "/" !== e ? e : "/"]), "/"),
              r = (e, a = !1) =>
                e.map((e) => {
                  let o = this.getLangPathByLang(e),
                    l = e.children?.length > 0,
                    i = !a && t,
                    u = {}
                  return (
                    "object" == typeof e.path
                      ? Object.keys(e.path).forEach((t) => {
                          u[t] = n(e.path[t], i)
                        })
                      : "string" == typeof e.path &&
                        this.languages
                          .map((e) => e.key)
                          .forEach((t) => {
                            u[t] = n(e.path, i)
                          }),
                    {
                      ...e,
                      path: n(o, i),
                      _langPath: 0 !== Object.entries(u).length ? u : null,
                      ...(l ? { children: r(e.children, !0) } : {})
                    }
                  )
                })
            return r(e)
          }
          getLangPathByLang(
            e,
            t = this.getLangFromString(this.staticLocation || window.location.pathname)
              ?.key || this.defaultLang.key
          ) {
            let n
            return (
              "string" == typeof e.path
                ? (n = e.path)
                : "object" == typeof e.path &&
                  Object.keys(e.path).find((r) => {
                    r === t && (n = e.path?.[r])
                  }),
              n
            )
          }
          getDefaultLang(e) {
            return e.find((e) => e?.default) ?? e[0]
          }
          getBrowserLang(e) {
            if (typeof navigator > "u") return
            let t = navigator.language
            return (
              Bf("Browser language detected", t),
              e.find((e) =>
                e.key.includes("-")
                  ? e.key === t.toLowerCase()
                  : e.key === t.toLowerCase().split("-")[0]
              )
            )
          }
          getLangFromString(e = this.staticLocation || window.location.pathname) {
            let t = Sf([e.replace(this.base, "/")]).split("/")[1]
            return this.languages.find((e) => t === e.key)
          }
          langIsAvailable(e, t = this.languages) {
            return t.some((t) => t.key === e?.key)
          }
          reloadOrRefresh(e, t = !0) {
            Ef() || (t ? window?.open(e, "_self") : kf.history.push(e))
          }
        },
        $f = { exports: {} }
      !(function (e, t) {
        var n =
            ("undefined" != typeof globalThis && globalThis) ||
            ("undefined" != typeof self && self) ||
            (void 0 !== r && r),
          a = (function () {
            function e() {
              ;(this.fetch = !1), (this.DOMException = n.DOMException)
            }
            return (e.prototype = n), new e()
          })()
        !(function (e) {
          !(function (t) {
            var n =
                (void 0 !== e && e) ||
                ("undefined" != typeof self && self) ||
                (void 0 !== n && n),
              r = "URLSearchParams" in n,
              a = "Symbol" in n && "iterator" in Symbol,
              o =
                "FileReader" in n &&
                "Blob" in n &&
                (function () {
                  try {
                    return new Blob(), !0
                  } catch (df) {
                    return !1
                  }
                })(),
              l = "FormData" in n,
              i = "ArrayBuffer" in n
            if (i)
              var u = [
                  "[object Int8Array]",
                  "[object Uint8Array]",
                  "[object Uint8ClampedArray]",
                  "[object Int16Array]",
                  "[object Uint16Array]",
                  "[object Int32Array]",
                  "[object Uint32Array]",
                  "[object Float32Array]",
                  "[object Float64Array]"
                ],
                s =
                  ArrayBuffer.isView ||
                  function (e) {
                    return e && u.indexOf(Object.prototype.toString.call(e)) > -1
                  }
            function c(e) {
              if (
                ("string" != typeof e && (e = String(e)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
              )
                throw new TypeError('Invalid character in header field name: "' + e + '"')
              return e.toLowerCase()
            }
            function f(e) {
              return "string" != typeof e && (e = String(e)), e
            }
            function d(e) {
              var t = {
                next: function () {
                  var t = e.shift()
                  return { done: void 0 === t, value: t }
                }
              }
              return (
                a &&
                  (t[Symbol.iterator] = function () {
                    return t
                  }),
                t
              )
            }
            function p(e) {
              ;(this.map = {}),
                e instanceof p
                  ? e.forEach(function (e, t) {
                      this.append(t, e)
                    }, this)
                  : Array.isArray(e)
                    ? e.forEach(function (e) {
                        this.append(e[0], e[1])
                      }, this)
                    : e &&
                      Object.getOwnPropertyNames(e).forEach(function (t) {
                        this.append(t, e[t])
                      }, this)
            }
            function h(e) {
              if (e.bodyUsed) return Promise.reject(new TypeError("Already read"))
              e.bodyUsed = !0
            }
            function m(e) {
              return new Promise(function (t, n) {
                ;(e.onload = function () {
                  t(e.result)
                }),
                  (e.onerror = function () {
                    n(e.error)
                  })
              })
            }
            function g(e) {
              var t = new FileReader(),
                n = m(t)
              return t.readAsArrayBuffer(e), n
            }
            function y(e) {
              if (e.slice) return e.slice(0)
              var t = new Uint8Array(e.byteLength)
              return t.set(new Uint8Array(e)), t.buffer
            }
            function v() {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (e) {
                  var t
                  ;(this.bodyUsed = this.bodyUsed),
                    (this._bodyInit = e),
                    e
                      ? "string" == typeof e
                        ? (this._bodyText = e)
                        : o && Blob.prototype.isPrototypeOf(e)
                          ? (this._bodyBlob = e)
                          : l && FormData.prototype.isPrototypeOf(e)
                            ? (this._bodyFormData = e)
                            : r && URLSearchParams.prototype.isPrototypeOf(e)
                              ? (this._bodyText = e.toString())
                              : i && o && (t = e) && DataView.prototype.isPrototypeOf(t)
                                ? ((this._bodyArrayBuffer = y(e.buffer)),
                                  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                : i && (ArrayBuffer.prototype.isPrototypeOf(e) || s(e))
                                  ? (this._bodyArrayBuffer = y(e))
                                  : (this._bodyText = e =
                                      Object.prototype.toString.call(e))
                      : (this._bodyText = ""),
                    this.headers.get("content-type") ||
                      ("string" == typeof e
                        ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                        : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set("content-type", this._bodyBlob.type)
                          : r &&
                            URLSearchParams.prototype.isPrototypeOf(e) &&
                            this.headers.set(
                              "content-type",
                              "application/x-www-form-urlencoded;charset=UTF-8"
                            ))
                }),
                o &&
                  ((this.blob = function () {
                    var e = h(this)
                    if (e) return e
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob)
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(new Blob([this._bodyArrayBuffer]))
                    if (this._bodyFormData)
                      throw new Error("could not read FormData body as blob")
                    return Promise.resolve(new Blob([this._bodyText]))
                  }),
                  (this.arrayBuffer = function () {
                    if (this._bodyArrayBuffer) {
                      var e = h(this)
                      return (
                        e ||
                        (ArrayBuffer.isView(this._bodyArrayBuffer)
                          ? Promise.resolve(
                              this._bodyArrayBuffer.buffer.slice(
                                this._bodyArrayBuffer.byteOffset,
                                this._bodyArrayBuffer.byteOffset +
                                  this._bodyArrayBuffer.byteLength
                              )
                            )
                          : Promise.resolve(this._bodyArrayBuffer))
                      )
                    }
                    return this.blob().then(g)
                  })),
                (this.text = function () {
                  var e,
                    t,
                    n,
                    r = h(this)
                  if (r) return r
                  if (this._bodyBlob)
                    return (
                      (e = this._bodyBlob),
                      (t = new FileReader()),
                      (n = m(t)),
                      t.readAsText(e),
                      n
                    )
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(
                      (function (e) {
                        for (
                          var t = new Uint8Array(e), n = new Array(t.length), r = 0;
                          r < t.length;
                          r++
                        )
                          n[r] = String.fromCharCode(t[r])
                        return n.join("")
                      })(this._bodyArrayBuffer)
                    )
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as text")
                  return Promise.resolve(this._bodyText)
                }),
                l &&
                  (this.formData = function () {
                    return this.text().then(k)
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse)
                }),
                this
              )
            }
            ;(p.prototype.append = function (e, t) {
              ;(e = c(e)), (t = f(t))
              var n = this.map[e]
              this.map[e] = n ? n + ", " + t : t
            }),
              (p.prototype.delete = function (e) {
                delete this.map[c(e)]
              }),
              (p.prototype.get = function (e) {
                return (e = c(e)), this.has(e) ? this.map[e] : null
              }),
              (p.prototype.has = function (e) {
                return this.map.hasOwnProperty(c(e))
              }),
              (p.prototype.set = function (e, t) {
                this.map[c(e)] = f(t)
              }),
              (p.prototype.forEach = function (e, t) {
                for (var n in this.map)
                  this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
              }),
              (p.prototype.keys = function () {
                var e = []
                return (
                  this.forEach(function (t, n) {
                    e.push(n)
                  }),
                  d(e)
                )
              }),
              (p.prototype.values = function () {
                var e = []
                return (
                  this.forEach(function (t) {
                    e.push(t)
                  }),
                  d(e)
                )
              }),
              (p.prototype.entries = function () {
                var e = []
                return (
                  this.forEach(function (t, n) {
                    e.push([n, t])
                  }),
                  d(e)
                )
              }),
              a && (p.prototype[Symbol.iterator] = p.prototype.entries)
            var b = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]
            function w(e, t) {
              if (!(this instanceof w))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                )
              var n,
                r,
                a = (t = t || {}).body
              if (e instanceof w) {
                if (e.bodyUsed) throw new TypeError("Already read")
                ;(this.url = e.url),
                  (this.credentials = e.credentials),
                  t.headers || (this.headers = new p(e.headers)),
                  (this.method = e.method),
                  (this.mode = e.mode),
                  (this.signal = e.signal),
                  a || null == e._bodyInit || ((a = e._bodyInit), (e.bodyUsed = !0))
              } else this.url = String(e)
              if (
                ((this.credentials = t.credentials || this.credentials || "same-origin"),
                (!t.headers && this.headers) || (this.headers = new p(t.headers)),
                (this.method =
                  ((n = t.method || this.method || "GET"),
                  (r = n.toUpperCase()),
                  b.indexOf(r) > -1 ? r : n)),
                (this.mode = t.mode || this.mode || null),
                (this.signal = t.signal || this.signal),
                (this.referrer = null),
                ("GET" === this.method || "HEAD" === this.method) && a)
              )
                throw new TypeError("Body not allowed for GET or HEAD requests")
              if (
                (this._initBody(a),
                !(
                  ("GET" !== this.method && "HEAD" !== this.method) ||
                  ("no-store" !== t.cache && "no-cache" !== t.cache)
                ))
              ) {
                var o = /([?&])_=[^&]*/
                o.test(this.url)
                  ? (this.url = this.url.replace(o, "$1_=" + new Date().getTime()))
                  : (this.url +=
                      (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime())
              }
            }
            function k(e) {
              var t = new FormData()
              return (
                e
                  .trim()
                  .split("&")
                  .forEach(function (e) {
                    if (e) {
                      var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        a = n.join("=").replace(/\+/g, " ")
                      t.append(decodeURIComponent(r), decodeURIComponent(a))
                    }
                  }),
                t
              )
            }
            function S(e, t) {
              if (!(this instanceof S))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
                )
              t || (t = {}),
                (this.type = "default"),
                (this.status = void 0 === t.status ? 200 : t.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = void 0 === t.statusText ? "" : "" + t.statusText),
                (this.headers = new p(t.headers)),
                (this.url = t.url || ""),
                this._initBody(e)
            }
            ;(w.prototype.clone = function () {
              return new w(this, { body: this._bodyInit })
            }),
              v.call(w.prototype),
              v.call(S.prototype),
              (S.prototype.clone = function () {
                return new S(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new p(this.headers),
                  url: this.url
                })
              }),
              (S.error = function () {
                var e = new S(null, { status: 0, statusText: "" })
                return (e.type = "error"), e
              })
            var x = [301, 302, 303, 307, 308]
            ;(S.redirect = function (e, t) {
              if (-1 === x.indexOf(t)) throw new RangeError("Invalid status code")
              return new S(null, { status: t, headers: { location: e } })
            }),
              (t.DOMException = n.DOMException)
            try {
              new t.DOMException()
            } catch (_) {
              ;(t.DOMException = function (e, t) {
                ;(this.message = e), (this.name = t)
                var n = Error(e)
                this.stack = n.stack
              }),
                (t.DOMException.prototype = Object.create(Error.prototype)),
                (t.DOMException.prototype.constructor = t.DOMException)
            }
            function E(e, r) {
              return new Promise(function (a, l) {
                var u = new w(e, r)
                if (u.signal && u.signal.aborted)
                  return l(new t.DOMException("Aborted", "AbortError"))
                var s = new XMLHttpRequest()
                function c() {
                  s.abort()
                }
                ;(s.onload = function () {
                  var e,
                    t,
                    n = {
                      status: s.status,
                      statusText: s.statusText,
                      headers:
                        ((e = s.getAllResponseHeaders() || ""),
                        (t = new p()),
                        e
                          .replace(/\r?\n[\t ]+/g, " ")
                          .split("\r")
                          .map(function (e) {
                            return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                          })
                          .forEach(function (e) {
                            var n = e.split(":"),
                              r = n.shift().trim()
                            if (r) {
                              var a = n.join(":").trim()
                              t.append(r, a)
                            }
                          }),
                        t)
                    }
                  n.url =
                    "responseURL" in s ? s.responseURL : n.headers.get("X-Request-URL")
                  var r = "response" in s ? s.response : s.responseText
                  setTimeout(function () {
                    a(new S(r, n))
                  }, 0)
                }),
                  (s.onerror = function () {
                    setTimeout(function () {
                      l(new TypeError("Network request failed"))
                    }, 0)
                  }),
                  (s.ontimeout = function () {
                    setTimeout(function () {
                      l(new TypeError("Network request failed"))
                    }, 0)
                  }),
                  (s.onabort = function () {
                    setTimeout(function () {
                      l(new t.DOMException("Aborted", "AbortError"))
                    }, 0)
                  }),
                  s.open(
                    u.method,
                    (function (e) {
                      try {
                        return "" === e && n.location.href ? n.location.href : e
                      } catch (df) {
                        return e
                      }
                    })(u.url),
                    !0
                  ),
                  "include" === u.credentials
                    ? (s.withCredentials = !0)
                    : "omit" === u.credentials && (s.withCredentials = !1),
                  "responseType" in s &&
                    (o
                      ? (s.responseType = "blob")
                      : i &&
                        u.headers.get("Content-Type") &&
                        -1 !==
                          u.headers
                            .get("Content-Type")
                            .indexOf("application/octet-stream") &&
                        (s.responseType = "arraybuffer")),
                  !r || "object" != typeof r.headers || r.headers instanceof p
                    ? u.headers.forEach(function (e, t) {
                        s.setRequestHeader(t, e)
                      })
                    : Object.getOwnPropertyNames(r.headers).forEach(function (e) {
                        s.setRequestHeader(e, f(r.headers[e]))
                      }),
                  u.signal &&
                    (u.signal.addEventListener("abort", c),
                    (s.onreadystatechange = function () {
                      4 === s.readyState && u.signal.removeEventListener("abort", c)
                    })),
                  s.send(void 0 === u._bodyInit ? null : u._bodyInit)
              })
            }
            ;(E.polyfill = !0),
              n.fetch ||
                ((n.fetch = E), (n.Headers = p), (n.Request = w), (n.Response = S)),
              (t.Headers = p),
              (t.Request = w),
              (t.Response = S),
              (t.fetch = E)
          })({})
        })(a),
          (a.fetch.ponyfill = !0),
          delete a.fetch.polyfill
        var o = n.fetch ? n : a
        ;((t = o.fetch).default = o.fetch),
          (t.fetch = o.fetch),
          (t.Headers = o.Headers),
          (t.Request = o.Request),
          (t.Response = o.Response),
          (e.exports = t)
      })($f, $f.exports)
      const Hf = a($f.exports),
        Wf = "HomePage-module__root__z770C",
        Qf = "HomePage-module__fontSize__Xvj92"
      class qf {
        static AUTO_GENERATE_ATTR = "auto-generated"
        static DEFAULT_META_TAGS = {
          title: [
            { selectorAttr: "property", selectorValue: "og:title", attr: "content" },
            { selectorAttr: "name", selectorValue: "twitter:title", attr: "content" }
          ],
          description: [
            { selectorAttr: "name", selectorValue: "description", attr: "content" },
            {
              selectorAttr: "property",
              selectorValue: "og:description",
              attr: "content"
            },
            {
              selectorAttr: "name",
              selectorValue: "twitter:description",
              attr: "content"
            }
          ],
          imageUrl: [
            { selectorAttr: "property", selectorValue: "og:image", attr: "content" },
            { selectorAttr: "name", selectorValue: "twitter:image", attr: "content" },
            { selectorAttr: "rel", selectorValue: "image_src", attr: "href" }
          ],
          siteName: [
            { selectorAttr: "property", selectorValue: "og:site_name", attr: "content" },
            { selectorAttr: "name", selectorValue: "twitter:site", attr: "content" }
          ],
          pageUrl: [
            { selectorAttr: "property", selectorValue: "og:url", attr: "content" },
            { selectorAttr: "name", selectorValue: "twitter:url", attr: "content" },
            { selectorAttr: "rel", selectorValue: "canonical", attr: "href" }
          ],
          author: [{ selectorAttr: "name", selectorValue: "author", attr: "content" }],
          keywords: [
            { selectorAttr: "name", selectorValue: "keywords", attr: "content" }
          ],
          canonical: [{ selectorAttr: "rel", selectorValue: "canonical", attr: "href" }]
        }
        static checkValue(e) {
          return void 0 === e || ("object" == typeof e && null !== e) ? "" : e
        }
        static selectMetaValue(e, t) {
          return qf.checkValue(e?.[t]) || ""
        }
        static inject({
          values: e = null,
          tags: t = qf.DEFAULT_META_TAGS,
          autoCreateMetaTag: n = !0,
          autoRemoveMetaTag: r = !0
        }) {
          ;(document.title = qf.selectMetaValue(e, "title")),
            Object.keys(t).forEach((a) => {
              let o = qf.selectMetaValue(e, a)
              const l = t[a]
              for (let e of l) {
                const t = `[${e.selectorAttr}="${e.selectorValue}"]`
                if (null != document.head.querySelector(t))
                  r && "" === o
                    ? document.head.querySelector(t).remove()
                    : document.head.querySelector(t).setAttribute(e.attr, o)
                else {
                  if (!n) return
                  {
                    if (!o) return
                    const t = document.createElement("meta")
                    t.setAttribute(e.selectorAttr, e.selectorValue),
                      t.setAttribute(e.attr, o),
                      t.setAttribute(qf.AUTO_GENERATE_ATTR, "")
                    const n = document.head.querySelectorAll(
                      `*[${qf.AUTO_GENERATE_ATTR}]`
                    )
                    if (0 === n?.length) {
                      const e = document.getElementsByTagName("title")[0]
                      document.head.insertBefore(t, e.nextSibling)
                    } else {
                      const e = n[n.length - 1]
                      e.parentNode.insertBefore(t, e.nextSibling)
                    }
                  }
                }
              }
            })
        }
      }
      const Kf = $.lazy(() => {
          return (
            (e = () => t.import("./LazyTest-legacy-FRu5H81p.js")),
            Promise.resolve()
              .then(() => e())
              .catch((e) => {
                const t = new Event("vite:preloadError", { cancelable: !0 })
                if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
                  throw e
              })
          )
          var e
        }),
        Gf = "HomePage"
      function Yf(e, t) {
        const n = V.useRef(null),
          [r, a] = V.useState("0")
        return (
          V.useEffect(
            () => (
              a(window.getComputedStyle(document.body).getPropertyValue("font-size")),
              (function (e, t, n, r) {
                "string" == typeof t && (t = [t])
                for (let a of t) e.addEventListener(a, n, r)
                return () => {
                  for (let a of t) e.removeEventListener(a, n, r)
                }
              })(window, "resize", () =>
                a(window.getComputedStyle(document.body).getPropertyValue("font-size"))
              )
            ),
            []
          ),
          V.useEffect(() => {
            qf.inject({ values: e.meta })
          }, [e.meta]),
          jf({
            componentName: Gf,
            handleRef: t,
            rootRef: n,
            playIn: () => Promise.resolve(),
            playOut: () => Promise.resolve()
          }),
          X.jsxs("div", {
            className: Wf,
            ref: n,
            children: [
              X.jsx(V.Suspense, { fallback: "...", children: X.jsx(Kf, {}) }),
              Gf,
              X.jsx("div", { className: Qf, children: r }),
              X.jsx("br", {}),
              X.jsx("br", {}),
              X.jsx("div", { children: "data from getStaticProps: " }),
              X.jsx("em", { children: e.time?.utc_datetime })
            ]
          })
        )
      }
      Yf.displayName = Gf
      const Xf = V.forwardRef(Yf),
        Jf = {},
        Zf = "WorkPage"
      function ed(e, t) {
        const n = V.useRef(null)
        return (
          V.useEffect(() => {
            qf.inject({ values: e.meta })
          }, [e]),
          jf({
            componentName: Zf,
            handleRef: t,
            rootRef: n,
            playIn: () => Promise.resolve(),
            playOut: () => Promise.resolve()
          }),
          X.jsxs("div", {
            className: Jf.root,
            ref: n,
            children: [Zf, " with slug: ", X.jsx("em", { children: e.params?.slug })]
          })
        )
      }
      ed.displayName = Zf
      const td = V.forwardRef(ed),
        nd = {},
        rd = "NotFoundPage"
      function ad(e, t) {
        const n = V.useRef(null)
        return (
          V.useEffect(() => {
            qf.inject({ values: e.meta })
          }, [e.meta]),
          jf({
            componentName: rd,
            handleRef: t,
            rootRef: n,
            playIn: () => Promise.resolve(),
            playOut: () => Promise.resolve()
          }),
          X.jsx("div", { className: nd.root, ref: n, children: rd })
        )
      }
      ad.displayName = rd
      const od = V.forwardRef(ad)
      var ld = ((e) => (
        (e.HOME = "home"), (e.WORK = "work"), (e.NOT_FOUND = "not-found"), e
      ))(ld || {})
      const id = [
        {
          path: "/",
          component: Xf,
          name: "home",
          getStaticProps: async (e, t) => {
            const n = await Hf("https://worldtimeapi.org/api/ip")
            return {
              time: await n.json(),
              meta: { title: "Home", description: "Home description", imageUrl: "" }
            }
          }
        },
        {
          path: "/work/:slug?",
          name: "work",
          component: td,
          getStaticProps: async (e, t) => ({
            meta: {
              title: `Work - ${e.params.slug}`,
              description: "Work description",
              imageUrl: ""
            }
          })
        },
        {
          path: "/:rest",
          name: "not-found",
          component: od,
          getStaticProps: async (e, t) => ({
            meta: { title: "404", description: "Not found", imageUrl: "" }
          })
        }
      ]
      function ud() {
        const e = X.jsxs("nav", {
          children: [
            X.jsx("div", {
              children: X.jsx(Uf, { to: { name: ld.HOME }, children: "Home" })
            }),
            ["first", "second"].map((e) =>
              X.jsx(
                "div",
                {
                  children: X.jsxs(Uf, {
                    to: { name: ld.WORK, params: { slug: e } },
                    children: ["Work ", e]
                  })
                },
                e
              )
            )
          ]
        })
        return X.jsxs("div", {
          className: uf.root,
          children: [
            e,
            X.jsx(Ff, {
              className: uf.stack,
              manageTransitions: async ({
                previousPage: e,
                currentPage: t,
                unmountPreviousPage: n
              }) => {
                const r = t?.$element
                r && (r.style.visibility = "hidden"),
                  e && (await e.playOut(), n()),
                  await t?.isReadyPromise?.(),
                  t && (r && (r.style.visibility = "visible"), await t?.playIn())
              }
            })
          ]
        })
      }
      function sd() {
        return (
          (sd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          sd.apply(this, arguments)
        )
      }
      var cd, fd
      ;((fd = cd || (cd = {})).Pop = "POP"), (fd.Push = "PUSH"), (fd.Replace = "REPLACE")
      var dd = "beforeunload"
      function pd(e) {
        e.preventDefault(), (e.returnValue = "")
      }
      function hd() {
        var e = []
        return {
          get length() {
            return e.length
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t
                })
              }
            )
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t)
            })
          }
        }
      }
      const md = V.createContext(null),
        gd = pf("front:index")
      gd("version:", "0.1.0"),
        gd("public env:", {
          VITE_APP_BASE: "/",
          BASE_URL: "/",
          MODE: "production",
          DEV: !1,
          PROD: !0,
          SSR: !1,
          LEGACY: !0
        }),
        gd("Selected base", "/")
      const yd = (function (e) {
          void 0 === e && (e = {})
          var t = e.window,
            n = void 0 === t ? document.defaultView : t,
            r = n.history
          function a() {
            var e = n.location,
              t = e.pathname,
              a = e.search,
              o = e.hash,
              l = r.state || {}
            return [
              l.idx,
              {
                pathname: t,
                search: a,
                hash: o,
                state: l.usr || null,
                key: l.key || "default"
              }
            ]
          }
          var o = null
          n.addEventListener("popstate", function () {
            if (o) f.call(o), (o = null)
            else {
              var e = cd.Pop,
                t = a(),
                n = t[0],
                r = t[1]
              if (f.length) {
                if (null != n) {
                  var l = u - n
                  l &&
                    ((o = {
                      action: e,
                      location: r,
                      retry: function () {
                        y(-1 * l)
                      }
                    }),
                    y(l))
                }
              } else g(e)
            }
          })
          var l = cd.Pop,
            i = a(),
            u = i[0],
            s = i[1],
            c = hd(),
            f = hd()
          function d(e) {
            return "string" == typeof e
              ? e
              : ((n = (t = e).pathname),
                (r = void 0 === n ? "/" : n),
                (a = t.search),
                (o = void 0 === a ? "" : a),
                (l = t.hash),
                (i = void 0 === l ? "" : l),
                o && "?" !== o && (r += "?" === o.charAt(0) ? o : "?" + o),
                i && "#" !== i && (r += "#" === i.charAt(0) ? i : "#" + i),
                r)
            var t, n, r, a, o, l, i
          }
          function p(e, t) {
            return (
              void 0 === t && (t = null),
              sd(
                { pathname: s.pathname, hash: "", search: "" },
                "string" == typeof e
                  ? (function (e) {
                      var t = {}
                      if (e) {
                        var n = e.indexOf("#")
                        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
                        var r = e.indexOf("?")
                        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
                          e && (t.pathname = e)
                      }
                      return t
                    })(e)
                  : e,
                { state: t, key: Math.random().toString(36).substr(2, 8) }
              )
            )
          }
          function h(e, t) {
            return [{ usr: e.state, key: e.key, idx: t }, d(e)]
          }
          function m(e, t, n) {
            return !f.length || (f.call({ action: e, location: t, retry: n }), !1)
          }
          function g(e) {
            l = e
            var t = a()
            ;(u = t[0]), (s = t[1]), c.call({ action: l, location: s })
          }
          function y(e) {
            r.go(e)
          }
          null == u && ((u = 0), r.replaceState(sd({}, r.state, { idx: u }), ""))
          var v = {
            get action() {
              return l
            },
            get location() {
              return s
            },
            createHref: d,
            push: function e(t, a) {
              var o = cd.Push,
                l = p(t, a)
              if (
                m(o, l, function () {
                  e(t, a)
                })
              ) {
                var i = h(l, u + 1),
                  s = i[0],
                  c = i[1]
                try {
                  r.pushState(s, "", c)
                } catch (f) {
                  n.location.assign(c)
                }
                g(o)
              }
            },
            replace: function e(t, n) {
              var a = cd.Replace,
                o = p(t, n)
              if (
                m(a, o, function () {
                  e(t, n)
                })
              ) {
                var l = h(o, u),
                  i = l[0],
                  s = l[1]
                r.replaceState(i, "", s), g(a)
              }
            },
            go: y,
            back: function () {
              y(-1)
            },
            forward: function () {
              y(1)
            },
            listen: function (e) {
              return c.push(e)
            },
            block: function (e) {
              var t = f.push(e)
              return (
                1 === f.length && n.addEventListener(dd, pd),
                function () {
                  t(), f.length || n.removeEventListener(dd, pd)
                }
              )
            }
          }
          return v
        })(),
        vd = new Vf({
          showDefaultLangInUrl: !1,
          languages: [{ key: "fr", default: !0 }],
          base: "/"
        }),
        bd = document.getElementById("root"),
        wd = X.jsx(Mf, {
          routes: id,
          base: "/",
          history: yd,
          initialStaticProps: window.__SSR_STATIC_PROPS__,
          langService: vd,
          children: X.jsx(md.Provider, {
            value: window.__GLOBAL_DATA__,
            children: X.jsx(ud, {})
          })
        })
      "true" ===
      {
        VITE_APP_BASE: "/",
        BASE_URL: "/",
        MODE: "production",
        DEV: !1,
        PROD: !0,
        SSR: !1,
        LEGACY: !0
      }.VITE_SPA
        ? of(bd).render(wd)
        : af(bd, wd)
    }
  }
})
