module.exports = {
  // plugins: [
  //   'stylelint-scss',
  //   'stylelint-order'
  // ],
  processors: [
    [ "@mapbox/stylelint-processor-arbitrary-tags", {
        "startTag": "\\s*<style jsx>{`",
        "endTag": "\\s*`}<\/style>"
      }
    ]
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules'
  ],
  rules: {
    'no-empty-source': null
  //   'at-rule-no-unknown': [true, {
  //     'ignoreAtRules':
  //       ['function', 'if', 'else', 'for', 'each', 'include', 'mixin', 'return']
  //   }],
  //   'order/order': [
  //     'dollar-variables',
  //     'custom-properties',
  //     'declarations',
  //     'rules'
  //   ]
  },
  // ignoreFiles: ['styles/vendor/**/*.scss']
}
