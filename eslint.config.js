import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  { files: ["**/*.js", "**/*.mjs"] },
  { ignores: ["node_modules/**", "webpack.config.js"] },
  {
    rules: {
      "max-len": [
        "error",
        {
          code: 80,
          comments: 80,
          ignoreTemplateLiterals: true,
        },
      ],
      semi: ["error", "always"],
      "semi-style": ["error", "last"],
      "space-before-function-paren": 0,
      "no-var": "error",
      "prefer-const": "error",
      "comma-dangle": ["error", "always-multiline"],
      curly: ["error", "all"],
      "no-shadow": ["error", { builtinGlobals: true, hoist: "all", allow: [] }],
      "no-redeclare": ["error", { builtinGlobals: true }],
      "no-param-reassign": "error",
      "operator-linebreak": 0,
      "no-console": "error",
      "standard/no-callback-literal": 0,
      "import/prefer-default-export": 0,
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "always",
          prev: "*",
          next: ["return", "block-like", "multiline-expression"],
        },
        { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
      "brace-style": ["error", "1tbs"],
      "object-curly-newline": [
        2,
        {
          ObjectExpression: {
            consistent: true,
            minProperties: 4,
          },
        },
      ],
      "no-prototype-builtins": 0,
    },
  },
];
