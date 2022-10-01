const { i18n } = require("./next-i18next.config");
const { exportPathMap } = require("./src/common/utils/build-helpers");

module.exports = {
  reactStrictMode: true,
  i18n,
  exportPathMap,
};
