/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/config/eslint"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};