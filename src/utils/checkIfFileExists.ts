import * as fs from "fs";

export const checkIfFileExists = (filePath: string): boolean | undefined => {
  try {
    if (fs.existsSync(filePath)) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
