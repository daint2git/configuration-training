module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
        targets: 'last 1 version',
      },
    ],
  ],
}
