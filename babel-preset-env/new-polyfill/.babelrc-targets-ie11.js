module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        targets: {
          ie: '11',
        },
      },
    ],
  ],
}
