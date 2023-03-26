import { expect, test } from "@oclif/test";

describe("save", () => {
  test
    .stdout()
    .command(["save", ".env.development", "test"])
    .it("runs the save command", (ctx) => {
      expect(ctx.stdout).to.contain("The env for test has been successfully");
    });

  test
    .stdout()
    .command(["save", "test"])
    .it("run the save command with incomplete input", (ctx) => {
      expect(ctx.stdout).to.contain("ERR: No env name provided!");
    });
});
