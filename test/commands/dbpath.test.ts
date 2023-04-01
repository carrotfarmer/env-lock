 import { expect, test } from "@oclif/test";

describe("dbpath", () => {
  // TODO: Improve this test
  test
    .stdout()
    .command(["dbpath"])
    .it("runs dbpath", (ctx) => {
      expect(ctx.stdout).to.not.be.empty;
    });
});

