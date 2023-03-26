import { Args, Command, Flags } from "@oclif/core";
import chalk from "chalk";
import { viewEnv } from "../../utils/viewEnv";

export default class View extends Command {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    // name: Flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    // force: Flags.boolean({ char: "f" }),
  };

  static args = {
    name: Args.string({ description: "Name of env to be retreived." }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(View);

    if (args.name) {
      const envContents = viewEnv(args.name)

      envContents.map((envVar) => {
        this.log(`${chalk.blueBright.bold(envVar.key)}=${chalk.greenBright.bold(envVar.value)}`)
      })
    }
  }
}

