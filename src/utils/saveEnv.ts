import Database from "better-sqlite3";

import chalk from "chalk";

import { Env } from "../types/Env";
import { EnvVar } from "../types/EnvVar";

export const saveEnv = (env: Env): void => {
  const db = new Database("envStore.sqlite", { verbose: console.log });

  // https://github.com/WiseLibs/better-sqlite3#usage
  db.pragma("journal_mode = WAL");

  console.log(env.name)

  const createTable = `CREATE TABLE IF NOT EXISTS ${env.name}('key' varchar, 'value' varchar)`
  db.exec(createTable);

  const insert = db.prepare(`INSERT INTO ${env.name} (key, value) VALUES (@key, @value)`);

  const insertMany = db.transaction((envVars: EnvVar[]) => {
    for (const envVar of envVars) insert.run(envVar);
  });

  try {
    insertMany(env.envVars);
    console.log(chalk.green.bold(`The env for ${env.name} has been successfully added to the database!`));
  } catch (err) {
    console.log(chalk.red.bold("ERR: There was an error while saving your env to the database."));
    if (!db.inTransaction) throw err; // (transaction was forcefully rolled back)
  }
};

