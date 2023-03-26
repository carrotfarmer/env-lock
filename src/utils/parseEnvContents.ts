import * as fs from "fs";
import * as path from "path";

import type { EnvVar } from "../types/EnvVar";

export const parseEnvContents = (envPath: string): EnvVar[] => {
  const viewPath = path.join(process.cwd(), envPath).replace(/\\/g, "/");

  const envContents = fs.readFileSync(viewPath, "utf8");

  const envObj: EnvVar[] = [];

  envContents.split("\n").forEach((line: string) => {
    const [key, value] = line.split("=").map((str) => str.trim());
    if (key && value) {
      const parsedValue: string = value.replace(/"/g, "");
      envObj.push({ key, value: parsedValue });
    }
  });

  console.log(envObj)

  return envObj;
};
