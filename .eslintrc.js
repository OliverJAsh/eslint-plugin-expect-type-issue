const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.join(__dirname, "./tsconfig.json"),
  },
  plugins: ["eslint-plugin-expect-type"],
  rules: {
    "expect-type/expect": "error",
  },
};
