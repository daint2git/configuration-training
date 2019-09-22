module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3,
        // https://github.com/mui-org/material-ui/blob/master/.browserslistrc
        targets: 'ie 11, edge >= 14, firefox >= 52, chrome >= 49, safari >= 10, node 8.0',
      },
    ],
  ],
}
