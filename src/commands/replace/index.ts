import { Args, Command, Flags } from "@oclif/core";
import chalk from "chalk";

import { checkEnvExists } from "../../utils/checkEnvExists";

export default class Replace extends Command {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    name: Args.string({ description: "name of the project" }),
    file: Args.string({ description: "file to read" }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Replace);

    if (args.file && args.name) {
      if (checkEnvExists(args.name)) {
        this.log("Replacing..");
        this.config.runCommand("delete", [args.name]);
        this.config.runCommand("save", [args.file, args.name]).then(() => {
          this.log(chalk.greenBright.bold(`Succcessfully replaced ${args.name}!`));
        });
      } else {
        console.log(chalk.redBright(`${chalk.redBright.bold(args.name)} does not exist.`));
      }
    }
  }
}
