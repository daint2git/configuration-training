module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3,
        // https://github.com/twbs/bootstrap/blob/master/.browserslistrc
        targets:
          '>= 1%, last 1 major version, not dead, Chrome >= 60, Firefox >= 60, Edge >= 15.15063, Explorer 11, iOS >= 10, Safari >= 10, Android >= 6, not ExplorerMobile <= 11',
      },
    ],
  ],
}
