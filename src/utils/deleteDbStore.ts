import * as fs from "fs";
import * as path from "path";

export const deleteDbStore = () => {
  fs.rmSync(path.resolve(__dirname, "envStore.sqlite"));
};
