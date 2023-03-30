import { Args, Command, Flags } from "@oclif/core";
import chalk from "chalk";

import { checkEnvDb } from "../../utils/checkEnvDb";
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

    const dbExists = checkEnvDb();

    if (!dbExists) {
      this.log(
        chalk.yellowBright(
          `No database store found! Please create one by running ${chalk.yellowBright.bold(
            "env-lock init"
          )}`
        )
      );

      this.exit();
    }

    if (args.name) {
      const envContents = viewEnv(args.name);

      if (typeof envContents === "undefined") {
        this.exit();
      }

      if (!flags.hide) {
        envContents!.map((envVar) => {
          this.log(`${chalk.blueBright.bold(envVar.key)}=${chalk.greenBright.bold(envVar.value)}`);
        });
      } else {
        envContents!.map((envVar) => {
          this.log(
            `${chalk.blueBright.bold(envVar.key)}=${chalk.greenBright.bold(
              envVar.value.replace(/./g, "*")
            )}`
          );
        });
      }
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
