var webpack = require('webpack');
var path = require('path');
var pathProject = require('./project-path');
var configFile = require('config');
const HtmlWebPackPlugin = require('html-webpack-plugin');

var config = {
  entry: path.resolve(pathProject.appDir + '/views/js/index.js'),
  output: {
    path: path.resolve(pathProject.appDir + '/public'),
    publicPath: configFile.get('host')['baseUrl'],
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?/,
      exclude: /node_modules/,
      loader: 'babel-loader?' + JSON.stringify({
        cacheDirectory: true,
        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        env: {
          production: {
            presets: ['react-optimize']
          }
        }
      })
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(pathProject.appDir + '/views/index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};

module.exports = config;
