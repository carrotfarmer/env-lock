import { checkIfFileExists } from "./checkIfFileExists";

export const checkEnvDb = (): boolean | undefined => {
  return checkIfFileExists("./envStore.sqlite");
};

