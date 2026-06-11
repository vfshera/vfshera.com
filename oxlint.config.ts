import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "import", "node", "promise"],
  categories: {
    correctness: "error",
  },
  env: {
    builtin: true,
  },
  jsPlugins: ["@stylistic/eslint-plugin", "eslint-plugin-qwik"],
  rules: {
    curly: "warn",
    eqeqeq: ["error", "smart"],
    "capitalized-comments": "warn",
    "no-unused-vars": ["warn"],
    "typescript/ban-ts-comment": [
      "error",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
      },
    ],
    "typescript/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        fixStyle: "separate-type-imports",
      },
    ],
    "@stylistic/padding-line-between-statements": [
      "warn",

      // Imports
      {
        blankLine: "always",
        prev: "import",
        next: "*",
      },
      {
        blankLine: "any",
        prev: "import",
        next: "import",
      },

      // Blank line before exports
      {
        blankLine: "always",
        prev: "*",
        next: "export",
      },

      // Blank line after exports
      {
        blankLine: "always",
        prev: "export",
        next: "*",
      },

      // Types/interfaces
      {
        blankLine: "always",
        prev: ["type", "interface"],
        next: "*",
      },
      {
        blankLine: "any",
        prev: ["type", "interface"],
        next: ["type", "interface"],
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["type", "interface"],
      },

      // Functions
      {
        blankLine: "always",
        prev: "function",
        next: "function",
      },

      // After block-like statements
      {
        blankLine: "always",
        prev: "block-like",
        next: "*",
      },
      {
        blankLine: "any",
        prev: "block-like",
        next: "block-like",
      },

      // Before return
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },

      // Before throw
      {
        blankLine: "always",
        prev: "*",
        next: "throw",
      },
    ],
  },
});
