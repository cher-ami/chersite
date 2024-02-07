import css from "./CookiesBanner.module.less"
import { cls } from "@cher-ami/utils"
import React, { useEffect, useRef } from "react"
import debug from "@cher-ami/debug"
import CookiesBannerService from "./CookiesBannerService"

// class component name
const componentName: string = `CookiesBanner`
const log = debug(`front:${componentName}`)

// ----------------------------------------------------------------------------- STRUCT

export enum ETrackingType {
  GOOGLE_ANALYTICS,
  GOOGLE_TAG_MANAGER,
}

export interface ITracking {
  id: string
  type: ETrackingType
}

interface IProps {
  /**
   tracking props:
   Accept multi tracking
   [
   { id: "G-XXXXXXXX-X", type: ETrackingType.GOOGLE_ANALYTICS },
   { id: "GTM-XXXXXXXXXX", type: ETrackingType.GOOGLE_TAG_MANAGER },
   ]
   */

  tracking: ITracking[]
  className?: string
  text?: string
  showPolicyText?: string
  showPolicyLink?: string
  labelButtonAccept?: string
  labelButtonRefuse?: string
}

CookiesBanner.defaultProps = {
  show: false,
  text: "Accept cookies?",
  showPolicyText: "Show our policy",
  showPolicyLink: "https://cher-ami.tv",
  labelButtonAccept: "yes",
  labelButtonRefuse: "no",
}

/**
 * Cookies Banner
 * This component allow to users to enable or disable google analytics tracking.
 * This component is build in order to be customized as much as possible.
 *
 * 1. Change default texts entries
 * 2. Set tracking ID of your Google Analytics
 * 3. Modifie CSS (Less) properties in "CookiesBanner.less" file.
 */
export function CookiesBanner(props: IProps) {
  // target root
  const rootRef = useRef(null)

  // ------------------------------------------------------------------------- INJECT ANALYTICS OR TAG_MANAGER

  /**
   * Inject or remove google tag manager script in dom
   * https://developers.google.com/tag-manager/quickstart
   */
  const googleTagManagerInjection = (injectScriptTags: boolean, trackingID: string) => {
    //1. GTA main script
    const gTagManagerScript = document.createElement("script")
    gTagManagerScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${trackingID}');
    `
    gTagManagerScript.setAttribute("id", "__gaTagManagerScript")

    //2. GTA data layer script
    const gTagManagerDataLayerScript = document.createElement("script")
    gTagManagerDataLayerScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)};
      gtag('js', new Date());
      gtag('config', ${trackingID});
    `
    gTagManagerDataLayerScript.setAttribute("id", "__gTagManagerDataLayerScript")

    //3. GTA no script
    const gTagManagerNoScript = document.createElement("noscript")
    const gTagManagerNoScriptIFrame = document.createElement("iframe")
    gTagManagerNoScriptIFrame.src = `https://www.googletagmanager.com/ns.html?id=${trackingID}`
    gTagManagerNoScriptIFrame.style.height = "0"
    gTagManagerNoScriptIFrame.style.width = "0"
    gTagManagerNoScriptIFrame.style.display = "none"
    gTagManagerNoScriptIFrame.style.visibility = "hidden"
    gTagManagerNoScript.append(gTagManagerNoScriptIFrame)
    gTagManagerNoScript.setAttribute("id", "__gaTagManagerNoScript")

    // targets script DOM by ids
    const $gTagManagerScript = document.getElementById("__gaTagManagerScript")
    const $gTagManagerDataLayerScript = document.getElementById(
      "__gTagManagerDataLayerScript",
    )
    const $gTagManagerNoScript = document.getElementById("__gaTagManagerNoScript")

    // if injection script tags is enable
    if (injectScriptTags) {
      if ($gTagManagerScript || $gTagManagerDataLayerScript || $gTagManagerNoScript) {
        log(
          "$gTagManagerNoScript or $gTagManagerNoScript already exist in DOM, NOT create new scripts. return. "
        )
        return
      }
      log("Add google Tag Manager script tags to DOM.")
      document.head.append(gTagManagerScript)
      document.head.append(gTagManagerDataLayerScript)
      document.body.prepend(gTagManagerNoScript)
      disableGATracking(trackingID, false)

      // remove script tag if exist
    } else {
      const scriptsToRemove: HTMLElement[] = [
        $gTagManagerScript,
        $gTagManagerDataLayerScript,
        $gTagManagerNoScript,
        // auto generated when script is injected in DOM, we remove it too.
        document.querySelector(
          `script[src="https://www.googletagmanager.com/gtm.js?id=${trackingID}"]`
        ),
      ]

      log("remove script tags from DOM.")
      scriptsToRemove?.forEach((el) => el?.remove())
      disableGATracking(trackingID, true)
    }
  }

  /**
   * inject or not google analytics scripts tags in DOM
   * @param injectScriptTags: Inject or Remove scriptTags in DOM
   * @param trackingID: ID needed for google analytics
   */
  const googleAnalyticsInjection = (
    injectScriptTags: boolean,
    trackingID: string
  ): void => {
    if (!trackingID) return

    // create New google manager script
    const gaScript = document.createElement("script")
    // keep it async
    gaScript.async = true
    // set it an URL
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`
    // add ID
    gaScript.setAttribute("id", "__ga")

    // create new tracking script
    const trackingScript = document.createElement("script")

    // inject code in tracking script tag.
    trackingScript.innerHTML = [
      `window.dataLayer = window.dataLayer || [];`,
      `function gtag(){dataLayer.push(arguments);}`,
      `gtag('js', new Date());`,
      `gtag('config', '${trackingID}');`,
    ].join("\n")
    // add ID
    trackingScript.setAttribute("id", "__ga_tracking")

    // get dom script tags
    const $ga = document.getElementById("__ga")
    const $tracking = document.getElementById("__ga_tracking")

    // if injection script tags is enable
    if (injectScriptTags) {
      if ($ga || $tracking) {
        log("$ga or $tracking already exist in DOM, NOT create new scripts. return. ")
        return
      }
      log("Add google Analytics script tags to DOM.")
      // add scripts at the body tag end.
      document.body.append(gaScript)
      document.body.append(trackingScript)
      disableGATracking(trackingID, false)

      // remove script tag if exist
    } else {
      const scriptsToRemove: HTMLElement[] = [
        $ga,
        $tracking,
        // auto generated when script is injected in DOM, we remove it too.
        document.querySelector(
          'script[src$="https://www.google-analytics.com/analytics.js"]'
        ),
      ]

      log("remove script tags from DOM.")
      scriptsToRemove?.forEach((el) => el?.remove())
      disableGATracking(trackingID, true)
    }
  }

  /**
   * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-opt-out
   * @param trackingID
   * @param disableTracking
   */
  const disableGATracking = (trackingID: string, disableTracking: boolean): void => {
    window[`ga-disable-${trackingID}`] = disableTracking
  }

  /**
   * Final script injection depend of props type choice
   * @param injectScriptTags
   */
  const scriptsInjection = (injectScriptTags: boolean = true) => {
    props.tracking.forEach((trackingObj) => {
      if (trackingObj.type === ETrackingType.GOOGLE_ANALYTICS) {
        googleAnalyticsInjection(injectScriptTags, trackingObj.id)
      }
      if (trackingObj.type === ETrackingType.GOOGLE_TAG_MANAGER) {
        googleTagManagerInjection(injectScriptTags, trackingObj.id)
      }
    })
  }

  // --------------------------------------------------------------------------- LOCAL STORAGE

  // This is the key value who store the choice
  const localStorageKey = "enable-tracking"

  /**
   * Check if a choice as been already made
   */
  const localStorageChoiceExist = (): boolean =>
    localStorage?.getItem(localStorageKey) !== null

  /**
   * Get value in local storage
   */
  const getLocalStorageValue = (): string => localStorage?.getItem(localStorageKey)

  /**
   * Set value in local storage
   * @param pEnableTracking
   */
  const setLocalStorageValue = (pEnableTracking: boolean): void =>
    localStorage.setItem(localStorageKey, `${pEnableTracking}`)

  // ------------------------------------------------------------------------- CLICK

  /**
   * buttons click handler
   * @param {boolean} pEnableTracking, no tracking by default
   */
  const buttonsClickHandler = (pEnableTracking: boolean = false) => {
    log("buttonsClickHandler > pEnableTracking", pEnableTracking)
    // set variable in window object
    scriptsInjection(pEnableTracking)
    // store choice in localStorage
    setLocalStorageValue(pEnableTracking)
    // hide component
    CookiesBannerService.hide()
  }

  // ------------------------------------------------------------------------- MANAGE TRANSITION

  /**
   * Add transition class to root component
   */
  const componentAnim = (
    show: boolean = true,
    el = rootRef?.current as HTMLElement,
    modifier = css.root_show,
    modifierHide = css.root_hide
  ): void => {
    if (show) {
      el?.classList?.add(modifier)
      el?.classList?.remove(modifierHide)
    } else {
      el?.classList?.remove(modifier)
      el?.classList?.add(modifierHide)
    }
  }

  /**
   * Listen signal
   */
  useEffect(() => {
    return CookiesBannerService.displaySignal.on((show: boolean) => {
      componentAnim(show)
    })
  }, [])

  /**
   * Init
   * Check if a value exist in local storage
   * Start tracking choice on mount
   */
  useEffect(() => {
    // if choice exist in local storage
    if (localStorageChoiceExist()) {
      log("init > localStorageChoiceExist() ", localStorageChoiceExist())
      log("init > getLocalStorageValue() ", getLocalStorageValue())

      // localstorage value is a string, we need to check it
      const localStorageValueIsTrue = getLocalStorageValue() === "true"
      log("init > localStorageValueIsTrue", localStorageValueIsTrue)
      // inject or remove Google Analytics from DOM
      scriptsInjection(localStorageValueIsTrue)
    } else {
      log(
        "init > localStorageChoiceExist() doesnt exist, anim show component",
        localStorageChoiceExist()
      )
      // add show class
      CookiesBannerService.show()
    }
  }, [])

  // ------------------------------------------------------------------------- RENDERING

  return (
    <div className={cls(css.root, props.className)} ref={rootRef}>
      <div className={css.wrapper}>
        <div className={css.text} dangerouslySetInnerHTML={{ __html: props.text }} />
        <div className={css.buttons}>
          <button
            aria-label="accept"
            className={cls(css.button, css.button_accept)}
            onClick={() => buttonsClickHandler(true)}
            children={props?.labelButtonAccept}
          />
          <button
            aria-label="refuse"
            className={cls(css.button, css.button_refuse)}
            onClick={() => buttonsClickHandler(false)}
            children={props?.labelButtonRefuse}
          />
        </div>
      </div>
    </div>
  )
}
