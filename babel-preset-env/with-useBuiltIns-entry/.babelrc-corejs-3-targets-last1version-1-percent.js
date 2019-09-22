module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: 3,
        targets: '> 1%, last 1 version, not dead',
      },
    ],
  ],
}
