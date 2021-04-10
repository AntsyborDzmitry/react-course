const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
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
        use: [
          {
            loader: ExtractCssChunksPlugin.loader,
            options: {
              hot: true,
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ExtractCssChunksPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css',
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
