import { Command } from "@oclif/core";
import { checkEnvDb } from "../../utils/checkEnvDb";

import { createEnvDb } from "../../utils/createEnvDb";

export default class Init extends Command {
  static description = "Create a database store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    const dbExists = await checkEnvDb();
    if (dbExists) {
      this.log("Database store already exists!");
    } else {
      createEnvDb();
    }
  }
}
