import * as fs from "fs"
import chalk from "chalk"

export const createEnvDb = () => {
  fs.open("envStore.sqlite", "w", (err, file) => {
    if (err) throw err;
    console.log(chalk.yellow.bold("No env store database found, created database."))
  })
}
