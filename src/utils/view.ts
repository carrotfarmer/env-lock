import Database from "better-sqlite3";
import chalk from "chalk";

import * as path from "path";

import type { EnvVar } from "../types";
import { decryptString } from "./encryptString";

const db = new Database(path.resolve(__dirname, "envStore.sqlite"));

export const viewSecretKey = () => {
  try {
    const query = db.prepare("SELECT * FROM secretKey");
    let keyObj: { secretKey: string } = { secretKey: "" };

    for (const key of query.iterate()) {
      keyObj = key;
    }

    return keyObj.secretKey;
  } catch (err) {
    console.log(chalk.redBright.bold("There was an error while retrieving the secret key."));
    console.log(
      chalk.blue(
        `Make sure you run ${chalk.blue.bold("env-lock init")} before running this command!`
      )
    );
  }
};

export const viewEnv = (envName: string): EnvVar[] | undefined => {
  try {
    const query = db.prepare(`SELECT * FROM ${envName}`);

    const envVars: EnvVar[] = [];

    for (const envVar of query.iterate()) {
      envVars.push({ key: envVar.key, value: decryptString(envVar.value) });
    }

    return envVars;
  } catch (err) {
    if (err instanceof Error) {
      if (err.message.includes("no such table")) {
        console.log(chalk.redBright(`${chalk.redBright.bold(envName)} does not exist.`));
      }

      process.exit();
    }
  }
};
