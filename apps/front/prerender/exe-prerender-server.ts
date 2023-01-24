import express from "express"
import { prerender } from "./prerender"
import { palette } from "@chersite/cli"
import { fetchAvailableUrls } from "./urls"

const port = "1234"
const app = express()

app.get("/generate", async (req, res) => {
  console.log(palette.grey("req.query"), req.query)

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
  await prerender(urlsArray, "./static")
  res?.send("Generated static pages: " + urlsArray.join(", "))
})

app.listen(port, () => {
  console.log("")
  console.log(
    `> Generate all pages      ${palette.blue(`http://localhost:${port}/generate`)}`
  )
  console.log(
    `> Generate specific page  ${palette.blue(
      `http://localhost:${port}/generate?url=/my-page/url`
    )}`
  )
})
