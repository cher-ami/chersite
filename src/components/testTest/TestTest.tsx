import React from "react"
import css from "./TestTest.module.less"
import { mergeStrings as merge } from "@cher-ami/utils"
import debug from "@wbe/debug"

interface IProps {
  className?: string
}

const componentName = "TestTest"
const log = debug(`front:${componentName}`)

/**
 * @name TestTest
 */
function TestTest(props: IProps): JSX.Element {
  return <div className={merge([css.root, props.className])}>{componentName}</div>
}

export default TestTest
