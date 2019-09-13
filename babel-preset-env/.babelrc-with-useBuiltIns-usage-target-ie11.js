module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: 'ie 11',
      },
    ],
    '@babel/react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
}
