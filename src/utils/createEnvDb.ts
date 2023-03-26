import * as fs from "fs";
import * as path from "path";
import chalk from "chalk";

import Database from "better-sqlite3";
import { nanoid } from "nanoid";

export const createEnvDb = () => {
  fs.open(`${path.resolve(__dirname, "envStore.sqlite")}`, "w", (err, file) => {
    if (err) throw err;
    console.log(chalk.yellow.bold("No env store database found, created database."));
  });

  const db = new Database(path.resolve(__dirname, "envStore.sqlite"));

  const secretKeyTable = `CREATE TABLE IF NOT EXISTS secretKey('secretKey' varchar)`;
  db.exec(secretKeyTable);

  const sk = nanoid(256);

  const addSecretKeyMutation = `INSERT INTO secretKey (secretKey) VALUES ('${sk}')`;
  db.exec(addSecretKeyMutation)
};

