// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
  "@app/eslint-config/library.js",
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { 
        'argsIgnorePattern': '^_', 
        'varsIgnorePattern': '^_' 
      }
    ],
  },
};
