import { expect, test } from "@oclif/test";
import * as path from "path";

describe("backup", () => {
  // TODO: Update this test, this is really stupid 
  test
    .stdout()
    .command(["init"])
    .command(["backup", path.resolve(__dirname)])
    .it("runs backup", (ctx) => {
      expect(ctx.stdout).to.not.be.empty;
    });
});
