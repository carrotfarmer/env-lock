import { Command } from "@oclif/core";
import chalk from "chalk";

import { checkEnvDb } from "../../utils/checkEnvDb";
import { viewSecretKey } from "../../utils/viewEnv";

export default class SecretKey extends Command {
  static description = "Create a database store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const dbExists = checkEnvDb();

    if (!dbExists) {
      this.log(
        chalk.yellowBright(
          `No database store found! Please create one by running ${chalk.yellowBright.bold(
            "env-lock init"
          )}`
        )
      );
    } else {
      const sk = viewSecretKey();
      this.log(chalk.blueBright.bold(sk));
    }
  }
}
