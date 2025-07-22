/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/config/eslint"],
  rules: {
    "react/prop-types": "off",
  },
};