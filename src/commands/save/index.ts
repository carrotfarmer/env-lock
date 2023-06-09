import { Args, Command } from "@oclif/core";
import chalk from "chalk";

import type { Env } from "../../types";

import { checkEnvDb } from "../../utils/checkEnvDb";
import { checkIfFileExists } from "../../utils/checkIfFileExists";
import { getFileExtension } from "../../utils/getFileExtension";
import { parseEnvContents } from "../../utils/parseEnvContents";
import { saveEnv } from "../../utils/saveEnv";

export default class Save extends Command {
  static description = "Save an env file";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static args = {
    file: Args.string({ description: "file to read" }),
    name: Args.string({ description: "name of the project" }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Save);
    const dbExists = await checkEnvDb();

    if (args.file && args.name) {
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

      if (!checkIfFileExists(args.file)) {
        this.log(chalk.redBright(`The file you input does not exist.`));
        this.exit();
      }

      // file extension
      const ext = getFileExtension(args.file);

      if (
        ext !== "env" &&
        ext !== "local" &&
        ext !== "development" &&
        ext !== "production" &&
        ext !== "example"
      ) {
        this.log(
          chalk.redBright(`The file you input is not an ${chalk.redBright.bold("env file.")}`)
        );
        this.exit();
      }

      const envObj = parseEnvContents(args.file);

      const env: Env = {
        name: args.name,
        envVars: envObj,
      };

      saveEnv(env);
    } else {
      if (!args.file) {
        this.log(chalk.redBright.bold("ERR: No env file provided!"));
      }

      if (!args.name) {
        this.log(chalk.redBright.bold("ERR: No env name provided!"));
      }

      this.log(
        chalk.yellow.bold(
          `You can run ${chalk.blueBright.bold("env-lock --help")} to learn the usage of this CLI.`
        )
      );
    }
  }
}
