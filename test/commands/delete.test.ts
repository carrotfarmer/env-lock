import { expect, test } from "@oclif/test";

describe("delete", () => {
  test
    .stdout()
    .command(["init"])
    .command(["delete", "test"])
    .it("runs delete", (ctx) => {
      expect(ctx.stdout).to.contain("Successfully deleted test");
    });

  test
    .stdout()
    .command(["delete"])
    .it("runs delete with invalid input", (ctx) => {
      expect(ctx.stdout).to.contain("ERR: No env name provided!");
    });
});
