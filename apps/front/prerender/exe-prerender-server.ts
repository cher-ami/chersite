import chalk from "chalk"
import Fastify, { FastifyRequest } from "fastify"
import * as process from "process"
import { loadEnv } from "vite"
import { prerender } from "./prerender"
import { fetchAvailableUrls } from "./urls"

const envs = loadEnv("", process.cwd(), "")
const port = envs.PRERENDER_SERVER_NODE_PORT || process.env.PRERENDER_SERVER_NODE_PORT

const fastify = Fastify({
  logger: false
})

fastify.get("/generate", async (request: FastifyRequest, reply) => {
  console.log(chalk.grey("request.query"), request.query)

  let urlsArray
  if ((request?.query as any)?.url) {
    urlsArray = [(request?.query as any)?.url]
  } else {
    try {
      urlsArray = await fetchAvailableUrls()
    } catch (e) {
      console.log(e)
    }
  }

  await prerender(urlsArray)
  return `Generated static pages: ${urlsArray.join(", ")}`
})

const start = async () => {
  try {
    await fastify.listen({ port: parseInt(port), host: "0.0.0.0" })
    console.log(`> Generate all pages ${chalk.cyan(`http://localhost:${port}/generate`)}`)
    console.log(
      `> Generate specific page  ${chalk.cyan(`http://localhost:${port}/generate?url=/my-page-url`)}`
    )
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
