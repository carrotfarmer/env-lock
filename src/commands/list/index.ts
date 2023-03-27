import { Command } from "@oclif/core";
import chalk from "chalk";
import { checkEnvDb } from "../../utils/checkEnvDb";
import { listEnvs } from "../../utils/listEnvs";

export default class List extends Command {
  static description = "List all the saved envs";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    if (checkEnvDb()) {
      const envs = listEnvs();

      envs.map((env: string) => this.log(chalk.yellowBright.bold(env)));
    } else {
      console.log(
        this.log(
          chalk.redBright(
            `No database store found! Please create one by running ${chalk.redBright.bold(
              "env-lock init"
            )}`
          )
        )
      );
    }
  }
}
