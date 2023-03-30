import * as path from "path";

export const getDbPath = (): string => {
  return path.resolve(__dirname, 'envStore.sqlite') 
}
