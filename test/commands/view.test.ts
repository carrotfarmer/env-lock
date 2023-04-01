import { expect, test } from "@oclif/test";

describe("view", () => {
  test
    .stdout()
    .command(["view", "viewtest1"])
    .it("runs view", (ctx) => {
      expect(ctx.stdout).to.contain("hello=hello");
    });

  test
    .stdout()
    .command(["view", "viewtest1", "-h"])
    .it("runs view with the hide flag", (ctx) => {
      console.log(ctx.stdout);
      expect(ctx.stdout).to.contain("hello=*****");
    });

  test
    .stdout()
    .command(["view"])
    .it("runs view with invalid input", (ctx) => {
      expect(ctx.stdout).to.contain("ERR: No env name provided!");
    });

  test
    .stdout()
    .command(["view", "randomval"])
    .exit()
    .it("runs view with an env that doesn\'nt exist")
});
