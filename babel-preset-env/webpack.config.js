const path = require('path')
const rootDir = path.resolve(process.cwd())

module.exports = (env, argv) => ({
  entry: `${rootDir}/input.js`,
  output: {
    path: rootDir,
    filename:
      argv.mode == 'development'
        ? 'output-with-webpack-development.js'
        : 'output-with-webpack-production.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
})
