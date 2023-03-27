import { expect, test } from "@oclif/test";

describe("list", () => {
  test
    .stdout()
    .command(["list"])
    .it("runs the list command", (ctx) => {
      expect(ctx.stdout).to.contain("viewtest1\n")
    });
});
