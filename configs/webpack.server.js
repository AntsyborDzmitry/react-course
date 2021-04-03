const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
   target:"node",
   entry:"./src/serverRenderer.js",
  output : {
    filename:"js/serverRenderer.js",
    libraryTarget:"commonjs2",
  },
  optimization: {
    minimize: true,
    minimizer: [
      '...', new CssMinimizerPlugin(),
    ],
  },
});
