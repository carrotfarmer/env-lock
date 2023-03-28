import * as fs from "fs";
import * as path from "path";

import type { EnvVar } from "../types";

export const parseEnvContents = (envPath: string): EnvVar[] => {
  const viewPath = envPath.replace(/\\/g, "/");

  const envContents = fs.readFileSync(viewPath, "utf8");

  const envObj: EnvVar[] = [];

  envContents.split("\n").forEach((line: string) => {
    const [key, value] = line.split("=").map((str) => str.trim());
    if (key && value) {
      const parsedValue: string = value.replace(/"/g, "");
      envObj.push({ key, value: parsedValue });
    }
  });

  return envObj;
};

