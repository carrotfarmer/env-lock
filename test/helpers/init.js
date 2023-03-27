const path = require("path");
const fs = require("fs");

process.env.TS_NODE_PROJECT = path.resolve("test/tsconfig.json");
process.env.NODE_ENV = "development";

global.oclif = global.oclif || {};
global.oclif.columns = 80;

fs.open(`.env.development`, "w", (err, file) => {
  if (err) throw err;
});

// for the view command
fs.open(`.env.local`, "w", (err, file) => {
  if (err) throw err;
});

fs.writeFileSync(".env.local", "hello = hello");

