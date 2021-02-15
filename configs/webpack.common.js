const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: paths.src + '/index.js',
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
          use: ["babel-loader","eslint-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'webpack Boilerplate',
       template: paths.src + '/templates/template.html',
       favicon: paths.src + '/images/favicon.png',
       filename: 'index.html'
     }),
   ],
 };
