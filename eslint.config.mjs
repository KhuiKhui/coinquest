import globals from "globals";
// import tsParser from "@typescript-eslint/parser";
// import ts from "@typescript-eslint/eslint-plugin";
import tailwindcss from "eslint-plugin-tailwindcss";
// import eslintConfigPrettier from "eslint-config-prettier";
// import next from "@next/eslint-plugin-next";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    rules: {
      "for-direction": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-duplicate-imports": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-irregular-whitespace": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "warn",
      "no-unsafe-negation": "warn",
      "no-unused-vars": "warn",
      "no-use-before-define": "error",
      "no-useless-assignment": "warn",
      curly: "error",
      "default-param-last": "error",
      eqeqeq: "error",
      "id-denylist": ["error", "callback", "data"],
      "logical-assignment-operators": "warn",
      "max-depth": ["warn", 4],
      "max-lines-per-function": ["warn", 50],
      "max-params": ["warn", 5],
      "no-array-constructor": "warn",
      "no-else-return": "warn",
      "no-extra-boolean-cast": "error",
      "no-param-reassign": "error",
      "no-redeclare": "error",
      "no-useless-escape": "error",
      "no-var": "warn",
      "prefer-exponentiation-operator": "warn",
      "prefer-template": "warn",
      "sort-imports": "warn",
      "tailwindcss/classnames-order": "warn",
    },
  },

  {
    ignores: ["node_modules", "dist"],
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tailwindcss.configs["flat/recommended"],
];
