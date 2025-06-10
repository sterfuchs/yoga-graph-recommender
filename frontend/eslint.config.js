import js from "@eslint/js";
import globals from "globals";
import * as tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: pluginReact,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[1].rules,
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": ["warn", { enforceDynamicLinks: "always" }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // JSON, JSONC, JSON5 support
  {
    files: ["**/*.json"],
    language: "json",
    plugins: { json },
    rules: {
      ...json.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.jsonc"],
    language: "jsonc",
    plugins: { json },
    rules: {
      ...json.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.json5"],
    language: "json5",
    plugins: { json },
    rules: {
      ...json.configs.recommended.rules,
    },
  },
]);