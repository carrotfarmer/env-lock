import { expect, test } from "@oclif/test";

describe("view", () => {
  test
    .stdout()
    .command(["save", ".env.local", "test2"])
    .command(["view", "test2"])
    .it("runs view", (ctx) => {
      expect(ctx.stdout).to.contain("hello=hello");
    });

  test
    .stdout()
    .command(["view", "test2", "-h"])
    .it("runs view with the hide flag", (ctx) => {
      expect(ctx.stdout).to.contain("hello=*****")
    })

  test
    .stdout()
    .command(["view"])
    .it("runs view with invalid input", (ctx) => {
      expect(ctx.stdout).to.contain("ERR: No env name provided!")
    })
});
