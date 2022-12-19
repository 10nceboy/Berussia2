const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist')
  },

  stats: {
    modules: false
  },

  performance: {
    hints: false
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [new CleanWebpackPlugin()]
};
