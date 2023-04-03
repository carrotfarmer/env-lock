import { Command } from "@oclif/core";
import chalk from "chalk";

import { checkEnvDb } from "../../utils/checkEnvDb";
import { viewSecretKey } from "../../utils/view";

export default class SecretKey extends Command {
  static description = "view the encryption key for the stored envs";

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
