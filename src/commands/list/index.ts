import { Command } from "@oclif/core";
import chalk from "chalk";

import { checkEnvDb } from "../../utils/checkEnvDb";
import { listEnvs } from "../../utils/listEnvs";

export default class List extends Command {
  static description = "List all the saved envs";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const dbExists = await checkEnvDb();

    if (dbExists) {
      const envs = listEnvs();

      envs.length > 0
        ? envs.map((env: string) => this.log(chalk.yellowBright.bold(env)))
        : this.log(chalk.yellowBright.bold("Nothing here yet!"));
    } else {
      this.log(
        chalk.redBright(
          `No database store found! Please create one by running ${chalk.redBright.bold(
            "env-lock init"
          )}`
        )
      );
    }
  }
}
