module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: 'airbnb',
  extends: [
    "next",
    "next/core-web-vitals",
    "airbnb",
    "eslint:recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/extensions": "off",
    "object-curly-newline": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    camelcase: "off",
    "import/no-unresolved": "off",
    "react-hooks/rules-of-hooks": "warn",
    "no-console": "off",
    // "prettier/prettier": "off",
  },

  settings: {
    "import/resolver": {
      alias: {
        map: [
          // Define your module aliases here
          ["@components", "./src/components"],
          ["@utils", "./src/utils"],
          // Add more aliases as needed
        ],

        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
