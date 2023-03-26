import Database from "better-sqlite3";
import { EnvVar } from "../types/EnvVar";

export const viewEnv = (envName: string): EnvVar[] => {
  const db = new Database("envStore.sqlite");
  const query = db.prepare(`SELECT * FROM ${envName}`);

  const envVars: EnvVar[] = [];

  for (const envVar of query.iterate()) {
    envVars.push(envVar);
  }

  return envVars;
};
