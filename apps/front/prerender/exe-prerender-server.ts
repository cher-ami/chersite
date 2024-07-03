import chalk from "chalk"
import express from "express"
import * as process from "process"
import { loadEnv } from "vite"
import { prerender } from "./prerender"
import { fetchAvailableUrls } from "./urls"

const envs = loadEnv("", process.cwd(), "")
const port = envs.PRERENDER_SERVER_NODE_PORT || process.env.PRERENDER_SERVER_NODE_PORT
const app = express()

app.get("/generate", async (req, res) => {
  console.log(chalk.grey("req.query"), req.query)

  let urlsArray
  if (req.query?.url) {
    urlsArray = [req.query.url]
  } else {
    try {
      urlsArray = await fetchAvailableUrls()
    } catch (e) {
      console.log(e)
    }
  }

  // second arg "./static" is matching cher-ami deploy conf
  // need to be edited if we want to start this server locally
  await prerender(urlsArray)
  res?.send("Generated static pages: " + urlsArray.join(", "))
})

app.listen(port, () => {
  console.log("")
  console.log(
    `> Generate all pages      ${chalk.cyan(`http://localhost:${port}/generate`)}`
  )
  console.log(
    `> Generate specific page  ${chalk.cyan(
      `http://localhost:${port}/generate?url=/my-page-url`
    )}`
  )
})
