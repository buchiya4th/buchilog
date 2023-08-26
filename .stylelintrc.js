module.exports = {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-property-sort-order-smacss",
    "stylelint-config-css-modules",
    "stylelint-config-prettier",
  ],
  ignoreFiles: ["styles/vendor/**/*.scss"],
  rules: {
    "selector-class-pattern":
      "^[a-z]+[0-9a-z]+(?:-[a-z]+[0-9a-z]+)*((?:__[a-z]+(?:-[a-z]+[0-9a-z]+)*)|(?:--[a-z]+(?:-[a-z]+[0-9a-z]+)*))*$",
  },
};
