import Database from "better-sqlite3";
import Cryptr from "cryptr";
import * as path from "path";

export const encryptString = (value: string) => {
  const db = new Database(path.resolve(__dirname, "envStore.sqlite"))

  const secretKeyQuery = db.prepare("SELECT * FROM secretKey") 

  let secretKey: string = "";

  for (const key of secretKeyQuery.iterate()) {
    secretKey += key;
  }
  
  const cryptr = new Cryptr(secretKey);

  return cryptr.encrypt(value);
};

export const decryptString = (value: string) => {
  const db = new Database(path.resolve(__dirname, "envStore.sqlite"))

  const secretKeyQuery = db.prepare("SELECT * FROM secretKey") 

  let secretKey: string = "";

  for (const key of secretKeyQuery.iterate()) {
    secretKey += key;
  }
  
  const cryptr = new Cryptr(secretKey);

  return cryptr.decrypt(value);
};
