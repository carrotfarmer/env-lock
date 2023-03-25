import * as fs from "fs";
import * as path from "path";

export const readEnvContents = (envPath: string): string => {
  const viewPath = (path.join(process.cwd(), envPath)).replace(/\\/g, '/')

  const envContents = fs.readFileSync(viewPath, "utf8");
  return envContents;
};
