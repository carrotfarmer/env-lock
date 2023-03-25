import { Args, Command, Flags } from "@oclif/core";

import { readEnvContents } from "../../utils/readEnvContents";

export default class Save extends Command {
  static description = "Save .env file";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    // name: Flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    // force: Flags.boolean({ char: "f" }),
  };

  static args = {
    file: Args.string({ description: "file to read" }),
  };

  public async run(): Promise<void> {
    const { args } = await this.parse(Save);

    if (args.file) {
      this.log(`${readEnvContents(args.file)}`);
    }
  }
}
