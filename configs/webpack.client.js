const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      '...', new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
