import * as fs from "fs";
// import * as path from "path";

export const checkEnvDb = (): boolean | undefined => {
  try {
    if (fs.existsSync("./envStore.sqlite")) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
