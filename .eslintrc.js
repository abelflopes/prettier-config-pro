/** @type import("eslint").Linter.Config */
const config = {
  extends: "@abelflopes/eslint-config-tsr-pro",
  rules: {
    "unicorn/prefer-module": 0,
  },
};

module.exports = config;
