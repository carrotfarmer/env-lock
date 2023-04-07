import * as fs from "fs";
import * as pathLib from "path";

import chalk from "chalk";

const copyFile = (src: string, dest: string): void => {
  let readStream = fs.createReadStream(src);

  readStream.once("error", (err) => {
    console.log(err);
  });

  readStream.once("end", () => {
    console.log(
      chalk.greenBright(
        `Backed up database store to ${chalk.greenBright.bold(pathLib.resolve(dest))}`
      )
    );
  });

  readStream.pipe(fs.createWriteStream(dest));
};

export const moveDb = (path: string) => {
  fs.access(path, (err) => {
    if (err) fs.mkdirSync(path);

    copyFile(
      pathLib.resolve(__dirname, "envStore.sqlite"),
      pathLib.resolve(path, "envStore.sqlite")
    );
  });
};

export const moveBackup = (path: string) => {
  fs.access(path, (err) => {
    if (err) fs.mkdirSync(path);

    copyFile(
      pathLib.resolve(path, "envStore.sqlite"),
      pathLib.resolve(__dirname, "envStore.sqlite")
    );
  });
};
