import Database from "better-sqlite3";
import chalk from "chalk";
import * as path from "path";

export const deleteEnv = (name: string) => {
  const db = new Database(path.resolve(__dirname, "envStore.sqlite"));

  const deleteMutation = db.prepare(`DROP TABLE IF EXISTS ${name}`);

  try {
    deleteMutation.run();
    console.log(chalk.greenBright(`Successfully deleted ${chalk.greenBright.bold(name)}`));
  } catch {
    console.log(chalk.redBright.bold("ERR: Env not found!"));
  }
};
