import css from "./App.module.less"
import React from "react"
import { Link, Stack } from "@cher-ami/router"


export interface IProps {}

function App(props: IProps) {
  return (
    <div className={css.root}>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/work/first-work"}>Work - id: "first-work"</Link>
          </li>
        </ul>
      </nav>
      <Stack className={css.stack} />
    </div>
  )
}

export default App
