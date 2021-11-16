import { PluginOption } from "vite"
import buildDotenv from "../tasks/build-dotenv/build-dotenv"

export default function buildDotenvPlugin({
  envVars = process.env,
  dotenvOutDir,
  additionalVarKeys,
}: {
  envVars: { [x: string]: string }
  dotenvOutDir: string[]
  additionalVarKeys: string[]
}): PluginOption {
  return {
    name: "vite-plugin-dotenv",
    buildStart: () => {
      buildDotenv({ envVars, dotenvOutDir, additionalVarKeys })
    },
  }
}
