import { expect, test } from "@oclif/test";

describe("secretkey", () => {
  test
    .stdout()
    .command(["secretkey"])
    .it("runs secretkey", (ctx) => {
      expect(ctx.stdout).lengthOf(257);
    });
});
