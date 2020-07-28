module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  extends: [
    'stylelint-config-standard'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules:
        ['function', 'if', 'else', 'for', 'each', 'include', 'mixin', 'return']
    }],
    'order/order': [
      'dollar-variables',
      'custom-properties',
      'declarations',
      'rules'
    ]
  },
  ignoreFiles: ['assets/css/vendor/**/*.scss']
}
