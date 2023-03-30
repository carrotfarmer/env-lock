import path from "path";

import { checkIfFileExists } from "./checkIfFileExists";

export const checkEnvDb = (): boolean | undefined => {
  return checkIfFileExists(path.resolve(__dirname, "./envStore.sqlite"));
};

