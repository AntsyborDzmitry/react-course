const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: `${paths.src}/index.js`,
  output: {
    filename: 'bundle.js',
    path: paths.build,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React training',
      template: `${paths.src}/templates/template.html`,
      favicon: `${paths.src}/images/favicon.png`,
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/images`,
          to: 'images',
        },
      ],
    }),
  ],
};
