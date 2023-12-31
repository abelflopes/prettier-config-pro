import type { Options } from "prettier";

/**
 * Eslint configuration object extending the most performant and
 * commonly used configurations, it alo has some overrides to prevent conflicts with prettier
 */

const config: Options = {
  quoteProps: "consistent",
  bracketSameLine: true,
  // Sync with linters, formatters and editor configs
  printWidth: 100,
};

export default config;

module.exports = config;
