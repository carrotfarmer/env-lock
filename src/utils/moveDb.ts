import * as fs from "fs";
import * as pathLib from "path";

import chalk from "chalk";

export const moveDb = (path: string) => {
  fs.access(path, (err) => {
    if (err) fs.mkdirSync(path);

    copyFile(pathLib.resolve(__dirname, "envStore.sqlite"), pathLib.join(path, "envStore.sqlite"));
  });

  const copyFile = (src: string, dest: string) => {
    let readStream = fs.createReadStream(src);

    readStream.once("error", (err) => {
      console.log(err);
    });

    readStream.once("end", () => {
      console.log(chalk.greenBright(`Backed up database store to ${chalk.greenBright.bold(path)}`));
    });

    readStream.pipe(fs.createWriteStream(dest));
  };
};
