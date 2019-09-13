module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: 'chrome 72',
      },
    ],
    '@babel/react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
}
