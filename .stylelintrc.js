module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-property-sort-order-smacss",
    "stylelint-config-css-modules",
    "stylelint-config-prettier",
  ],
  ignoreFiles: ["styles/vendor/**/*.scss"],
};
