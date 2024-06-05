/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@app/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
