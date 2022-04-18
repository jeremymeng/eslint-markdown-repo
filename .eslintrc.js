// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    extraFileExtensions: [".json", ".javascript"],
  },
  plugins: [
    "@typescript-eslint",
    "markdown",
  ],
  extends: ["eslint:recommended",],
  env: {
    mocha: true,
  },
  ignorePatterns: ["**/generated/**", "**/*.md/*.ts"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.json"],
      parserOptions: {
        project: [
          "./tsconfig.json",
        ],
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
      ],
      rules: {

        "@typescript-eslint/no-explicit-any": "error",
      },
    },
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      files: ["**/*.md/*.{js,javascript}"],
      extends: ["plugin:markdown/recommended"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: [
              {
                group: ["*"],
                message: "Please use require instead of import.",
              },
            ],
          },
        ],
      },
    },
  ],
};