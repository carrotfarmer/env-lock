import { Args, Command, Flags } from "@oclif/core";
import chalk from "chalk";
import { Env } from "../../types/Env";
import { checkEnvDb } from "../../utils/checkEnvDb";
import { createEnvDb } from "../../utils/createEnvDb";

import { parseEnvContents } from "../../utils/parseEnvContents";
import { saveEnv } from "../../utils/saveEnv";

export default class Save extends Command {
  static description = "Save an env file";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    // name: Flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    // force: Flags.boolean({ char: "f" }),
  };

  static args = {
    file: Args.string({ description: "file to read" }),
    name: Args.string({ description: "name of the project" }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Save);
    const dbExists = checkEnvDb();

    if (args.file && args.name) {
      const envObj = parseEnvContents(args.file);

      const env: Env = {
        name: args.name,
        envVars: envObj,
      };

      if (!dbExists) {
        createEnvDb();
      }

      this.log(`${saveEnv(env)}`);
    } else {
      if (!args.file) {
        this.log(chalk.red.bold("ERR: No env file provided!"));
      }

      if (!args.name) {
        this.log(chalk.red.bold("ERR: No env name provided!"));
      }

      this.log(
        chalk.yellow.bold(
          `You can run ${chalk.blue.bold("env-lock --help")} to learn the usage of this CLI.`
        )
      );
    }
  }
}
