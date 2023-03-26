import { Args, Command, Flags } from "@oclif/core";
import chalk from "chalk";
import { viewEnv } from "../../utils/viewEnv";

export default class View extends Command {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    hide: Flags.boolean({ char: "h" }),
  };

  static args = {
    name: Args.string({ description: "Name of env to be retreived." }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(View);

    if (args.name) {
      const envContents = viewEnv(args.name);

      if (!flags.hide) {
        envContents.map((envVar) => {
          this.log(`${chalk.blueBright.bold(envVar.key)}=${chalk.greenBright.bold(envVar.value)}`);
        });
      } else {
        envContents.map((envVar) => {
          this.log(
            `${chalk.blueBright.bold(envVar.key)}=${chalk.greenBright.bold(
              envVar.value.replace(/./g, "*")
            )}`
          );
        });
      }
    }
  }
}
