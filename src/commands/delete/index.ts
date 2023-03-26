import { Args, Command } from "@oclif/core";
import chalk from "chalk";
import { deleteEnv } from "../../utils/deleteEnv";

export default class Delete extends Command {
  static description = "Delete an env from the store";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    name: Args.string({ description: "env to delete" }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Delete);

    if (args.name) {
      deleteEnv(args.name)
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
