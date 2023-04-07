import { Command, ux } from "@oclif/core";
import chalk from "chalk";

import { checkEnvDb } from "../../utils/checkEnvDb";
import { deleteDbStore } from "../../utils/deleteDbStore";

export default class DeleteDb extends Command {
  static description = "Delete the database store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const dbExists = await checkEnvDb();

    const confirmation = await ux.confirm(
      "This action is irreversible. Are you sure you want to continue?"
    );

    if (!dbExists) {
      this.log(
        chalk.yellowBright(
          `No database store found! Please create one by running ${chalk.yellowBright.bold(
            "env-lock init"
          )}`
        )
      );
    } else {
      if (confirmation) {
        try {
          deleteDbStore();
          this.log(chalk.blueBright.bold("Successfully deleted database store."));
        } catch (err) {
          this.log(chalk.redBright.bold("An error occurred. Please try again."));
        }
      } else {
        this.log(chalk.greenBright.bold("Aborting operation.."));
        this.exit();
      }
    }
  }
}
