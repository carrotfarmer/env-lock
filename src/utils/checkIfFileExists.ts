import * as fs from "fs";

export const checkIfFileExists = async (path: string): Promise<boolean> =>
  !!(await fs.promises.stat(path).catch((e) => false));
