module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order'
  ],
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': [true, {
      'ignoreAtRules':
        ['function', 'if', 'else', 'for', 'each', 'include', 'mixin', 'return']
    }],
    'order/order': [
      'dollar-variables',
      'custom-properties',
      'declarations',
      'rules'
    ]
  },
  ignoreFiles: ['styles/vendor/**/*.scss']
}
