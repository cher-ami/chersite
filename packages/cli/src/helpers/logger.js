import chalk from "chalk"
const blue = chalk.rgb(0, 180, 180)
const grey = chalk.rgb(121, 121, 121)
const green = chalk.rgb(57, 180, 0)
const red = chalk.rgb(244, 34, 34)

export default {
  start: (message = "") => console.log(`\n  ${blue(message)}`),
  note: (message = "") => console.log(`  ${grey(message)}`),
  done: (message = "Done.") => console.log(`  ${green(message)}`),
  error: (message = "") => console.log(`  ${red(message)}`),
}
