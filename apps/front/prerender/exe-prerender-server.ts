import chalk from "chalk"
import Fastify, { FastifyRequest } from "fastify"
import * as process from "process"
import { loadEnv } from "vite"
import { prerender } from "./prerender"
import { deleteHtml } from "./helpers/filesManipulation.js"
import { fetchAvailableUrls } from "./urls"

const envs = loadEnv("", process.cwd(), "")
const port = envs.PRERENDER_SERVER_NODE_PORT || process.env.PRERENDER_SERVER_NODE_PORT
const serverKey = envs.PRERENDER_SERVER_KEY || process.env.PRERENDER_SERVER_KEY


const fastify = Fastify({
  logger: false
})

const validateServerKey = (request: FastifyRequest, reply: any) => {
  const requestKey = request.headers['x-server-key'] || (request.query as any)?.key;

  if (!requestKey || requestKey !== serverKey) {
    reply.code(401).send({ error: "Unauthorized: Invalid or missing server key" });
    return false;
  }
  return true;
}

fastify.get("/generate", async (request: FastifyRequest, reply) => {
  if (!validateServerKey(request, reply)) return;

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

fastify.get("/delete", async (request: FastifyRequest, reply) => {
  if (!validateServerKey(request, reply)) return;

  let url:string = (request?.query as any)?.url || null

  if(!url) return `Pass an url : /delete?url=$url`
  
  await deleteHtml(url)
  return `Delete html page for ${url}`
})


const start = async () => {
  try {
    // Register rate limite
    await fastify.register(import('@fastify/rate-limit'), {
      max: 1,
      timeWindow: ((1000 * 60) * 10) // 10 min max
    })
    await fastify.listen({ port: parseInt(port), host: "0.0.0.0" })
    console.log(`> Generate all pages ${chalk.cyan(`http://localhost:${port}/generate`)}`)
    console.log(
      `> Generate specific page  ${chalk.cyan(`http://localhost:${port}/generate?url=/my-page-url`)}`
    )
    console.log(
      `> Delete specific page  ${chalk.cyan(`http://localhost:${port}/delete?url=/my-page-url`)}`
    )
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
