const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: paths.src + '/index.js',
   output: {
     filename: 'bundle.js',
     path: paths.build,
   },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'webpack Boilerplate',
       template: paths.src + '/templates/template.html',
       filename: 'index.html',
     }),
     new CleanWebpackPlugin()
   ],
 };