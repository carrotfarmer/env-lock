import Database from "better-sqlite3";
import * as path from "path";

export const listEnvs = (): string[] => {
  const db = new Database(path.resolve(__dirname, "envStore.sqlite"));

  const query = db.prepare(`SELECT * FROM sqlite_master where type='table'`);

  const envs: string[] = [];

  for (const env of query.iterate()) {
    envs.push(env.name);
  }

  return envs.filter(env => env !== "secretKey")
};

