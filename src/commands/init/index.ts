import { Command } from "@oclif/core";
import chalk from "chalk";

import { checkEnvDb } from "../../utils/checkEnvDb";
import { createEnvDb } from "../../utils/createEnvDb";

export default class Init extends Command {
  static description = "Create a database store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const dbExists = checkEnvDb();

    if (!dbExists) {
      createEnvDb("envStore.sqlite");
    } else {
      this.log(chalk.yellowBright.bold("Database store already exists! Skipping operation"));
    }
  }
}

