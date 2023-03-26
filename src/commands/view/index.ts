import { Args, Command, Flags } from "@oclif/core";

export default class View extends Command {
  static description = "describe the command here";

  static examples = ["<%= config.bin %> <%= command.id %>"];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: "f" }),
  };

  static args = {
    file: Args.string({ description: "Env to view." }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(View);

    const name = flags.name ?? "world";
    this.log(`hello ${name} from /Users/dhruvasrinivas/Documents/env-lock/src/commands/view.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
