import type { Options } from "prettier";

/**
 * Eslint configuration object extending the most performant and
 * commonly used configurations, it alo has some overrides to prevent conflicts with prettier
 */

// {
//   "printWidth": 100,
//   "tabWidth": 2,
//   "useTabs": false,
//   "semi": true,
//   "singleQuote": false,
//   "jsxSingleQuote": false,
//   "quoteProps": "consistent",
//   "trailingComma": "es5",
//   "bracketSpacing": true,
//   "bracketSameLine": false,
//   "arrowParens": "always",
//   "endOfLine": "lf"
// }

const config: Options = {
  quoteProps: "consistent",
  bracketSameLine: true,
  // Sync with linters, formatters and editor configs
  printWidth: 100,
};

export default config;

module.exports = config;
