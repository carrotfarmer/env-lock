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

  test
    .stdout()
    .command(["save", ".env.local", "viewtest1"])
    .it("saves viewtest1", (ctx) => {
      expect(ctx.stdout).to.contain("The env for viewtest1 has been successfully");
    });
});
