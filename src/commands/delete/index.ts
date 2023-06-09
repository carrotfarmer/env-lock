import { Args, Command } from "@oclif/core";
import chalk from "chalk";

import { checkEnvDb } from "../../utils/checkEnvDb";
import { checkEnvExists } from "../../utils/checkEnvExists";
import { deleteEnv } from "../../utils/deleteEnv";

export default class Delete extends Command {
  static description = "Delete an env from the store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    name: Args.string({ description: "env to delete" }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Delete);

    const dbExists = await checkEnvDb();

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

    if (args.name) {
      if (checkEnvExists(args.name)) {
        deleteEnv(args.name);
      } else {
        console.log(chalk.redBright(`${chalk.redBright.bold(args.name)} does not exist.`));
        this.exit();
      }
    } else {
      this.log(chalk.redBright.bold("ERR: No env name provided!"));
      this.log(
        chalk.yellow.bold(
          `You can run ${chalk.blue.bold("env-lock --help")} to learn the usage of this CLI.`
        )
      );
    }
  }
}
