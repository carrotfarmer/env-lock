import { Command } from "@oclif/core";

import { createEnvDb } from "../../utils/createEnvDb";

export default class Init extends Command {
  static description = "Create a database store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    createEnvDb();
  }
}
