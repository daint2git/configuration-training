module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3,
        targets: {
          node: true,
        },
      },
    ],
  ],
}
