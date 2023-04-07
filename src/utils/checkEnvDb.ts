import path from "path";

import { checkIfFileExists } from "./checkIfFileExists";

export const checkEnvDb = async (): Promise<boolean> => {
  return await checkIfFileExists(path.resolve(__dirname, "envStore.sqlite"));
};
