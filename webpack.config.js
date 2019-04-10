const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    target: 'web',
    mode: 'development',
    entry: {
      index: './index.js'
    },
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        HOST: JSON.stringify(env.HOST)
      }),
      new HtmlWebpackPlugin()
    ]
  }
}
