/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@app/eslint-config/react-internal.js"],
  plugins: ["react-hooks"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/react-in-jsx-scope": "off",
  },
};
