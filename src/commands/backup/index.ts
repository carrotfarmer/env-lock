import { Args, Command } from "@oclif/core";
import chalk from "chalk";
import { checkEnvDb } from "../../utils/checkEnvDb";
import { moveDb } from "../../utils/moveDb";

export default class Backup extends Command {
  static description = "Backup the database store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    path: Args.string({ description: "backup path" }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Backup);

    const dbExists = checkEnvDb();

    if (!dbExists) {
      this.log(
        chalk.yellowBright(
          `No database store found! Please create one by running ${chalk.yellowBright.bold(
            "env-lock init"
          )}`
        )
      );

      this.exit();
    }

    if (args.path) {
      moveDb(args.path);
    } else {
      this.log(chalk.redBright.bold("ERR: No backup path provided!"));
      this.log(
        chalk.yellow.bold(
          `You can run ${chalk.blue.bold("env-lock --help")} to learn the usage of this CLI.`
        )
      );
    }
  }
}

