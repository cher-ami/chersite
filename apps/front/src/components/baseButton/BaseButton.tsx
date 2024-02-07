import React, { MutableRefObject } from "react"
import css from "./BaseButton.module.less"
import { Link, openRoute, TOpenRouteParams } from "@cher-ami/router"
import { cls } from "@cher-ami/utils"
import debug from "@cher-ami/debug"
import { browserOnly } from "@cher-ami/utils"

type TInternalLinkButton = {
  type: "internal"
  to: TOpenRouteParams
}

type TExternalLinkButton = {
  type: "external"
  href: string
  target?: string
}

type IProps = {
  className?: string
  label: string | JSX.Element
  ariaLabel: string
  onClick?: () => void
  tag: "button" | "a"
} & (TInternalLinkButton | TExternalLinkButton)

const componentName = "BaseButton"
const log = debug(`front:${componentName}`)

/**
 * @name BaseButton
 *
 * A button can be:
 *
 *  type 'internal'
 *    - tag <a>        <Link to={...} />
 *    - tag <button>   <button onClick={openRoute} />
 *
 *    OR
 *
 *  type 'external'
 *    - tag <a>         <a href={...} />
 *    - tag <button>    <button onClick={window.open...} />
 *
 *
 *
 *
 */
function BaseButton(props: IProps, ref: MutableRefObject<any>) {
  const commonContent = (
    <div className={cls(css.wrapper)}>
      <div className={css.content}>{props.label}</div>
    </div>
  )

  const rootClassName: string = cls(
    css.root,
    props.className,
    css[`root_${props.type}`],
    css[`root_${props.tag}`],
  )

  /**
   * Internal
   */
  if (props.type === "internal") {
    if (props.tag === "a") {
      return (
        <Link ref={ref} to={props.to} className={rootClassName} onClick={props.onClick}>
          {commonContent}
        </Link>
      )
    }
    if (props.tag === "button") {
      return (
        <button
          ref={ref}
          className={rootClassName}
          onClick={() => {
            props.onClick?.()
            openRoute(props.to)
          }}
          aria-label={props.ariaLabel}
          children={commonContent}
        />
      )
    }
  }

  /**
   * External
   */
  if (props.type === "external") {
    if (props.tag === "a") {
      return (
        <a
          ref={ref}
          href={props.href}
          className={rootClassName}
          onClick={props.onClick}
          target={props.target ?? "_blank"}
          aria-label={props.ariaLabel}
          children={commonContent}
        />
      )
    }
    if (props.tag === "button") {
      return (
        <button
          ref={ref}
          className={rootClassName}
          onClick={() => {
            props.onClick?.()
            browserOnly(() => {
              window.open(props.href, props.target ?? "_blank")
            })
          }}
          aria-label={props.ariaLabel}
          children={commonContent}
        />
      )
    }
  }
}

export default React.forwardRef(BaseButton)
