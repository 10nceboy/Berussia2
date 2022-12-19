const path = require('path');
const webpackBaseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',

  entry: {
    index: path.join(__dirname, 'src/js', 'index.js')
  },

  output: {
    filename: '[name].js'
  },

  devtool: 'eval-cheap-source-map',

  optimization: {
    minimize: false
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/html', 'index.html')
    })
  ],

  devServer: {
    historyApiFallback: true,
    port: 3000,
    static: {
      directory: path.join(__dirname, 'public')
    }
  }
});
