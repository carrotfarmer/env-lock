import { Args, Command } from "@oclif/core";
import chalk from "chalk";

import * as path from "path";

import { checkIfFileExists } from "../../utils/checkIfFileExists";
import { moveBackup } from "../../utils/move";

export default class Restore extends Command {
  static description = "Use a backup as the new database store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    backupPath: Args.string({ description: "backup path" }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Restore);

    if (!args.backupPath) {
      this.log(chalk.redBright.bold("ERR: No backup path provided!"));
      this.log(
        chalk.yellow.bold(
          `You can run ${chalk.blue.bold("env-lock --help")} to learn the usage of this CLI.`
        )
      );
      this.exit();
    }

    const backupExists = checkIfFileExists(path.resolve(args.backupPath as string));

    if (!backupExists) {
      this.log(chalk.redBright.bold(`File not found`));

      this.exit();
    } else {
      moveBackup(args.backupPath as string);
    }
  }
}
