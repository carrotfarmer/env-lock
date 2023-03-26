import Database from "better-sqlite3";
import type { EnvVar } from "../types/EnvVar";
import { decryptString } from "./encryptString";

export const viewEnv = (envName: string): EnvVar[] => {
  const db = new Database("envStore.sqlite");
  const query = db.prepare(`SELECT * FROM ${envName}`);

  const envVars: EnvVar[] = [];

  for (const envVar of query.iterate()) {
    envVars.push({ key: envVar.key, value: decryptString(envVar.value) });
  }

  return envVars;
};

