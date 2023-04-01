import { expect, test } from "@oclif/test";
import * as path from "path";

describe("restore", () => {
  test
    .stdout()
    .command(["restore", `${path.resolve(__dirname)}`])
    .it("runs restore", (ctx) => {
      expect(ctx.stdout).to.not.be.empty;
    });

  test
    .stdout()
    .command(["restore"])
    .exit()
    .it("runs restore with invalid input");
});
