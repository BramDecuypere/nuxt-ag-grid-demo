module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
    },
    extends: ["@nuxtjs/eslint-config-typescript"],
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  };
  