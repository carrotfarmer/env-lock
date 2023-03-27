import Database from "better-sqlite3";
import * as path from "path";

export const checkEnvExists = (name: string) => {
  const db = new Database(path.resolve(__dirname, "envStore.sqlite"));

  try {
    // HACK: I should probably not do this.
    const query = db.exec(`SELECT * FROM ${name}`);
    return true;
  } catch {
    return false;
  }
};
