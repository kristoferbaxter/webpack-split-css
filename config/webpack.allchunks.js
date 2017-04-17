const path = require('path');
const CommonOptions = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractCSSPlugin = new ExtractTextPlugin({
  filename: 'bundle.[name].[chunkhash].css',
  // This is not ideal. 
  // Using allChunks: true will allow you to output all the extrated text, but...
  // will put their contents in a single bundle.

  // Instead, it would be nice to be able to generate the css files per chunk. 
  allChunks: true
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[name].[chunkhash].js',
    path: path.resolve(__dirname, '..', 'dist', 'allchunks'),
    publicPath: '/dist/default',
    chunkFilename: 'bundle.[name].[chunkhash].js'
  },
  module: {
    rules: [
      CommonOptions.BabelLoaderRule,
      CommonOptions.CSSLoaderRule(ExtractCSSPlugin)
    ]
  },
  plugins: [
    ExtractCSSPlugin
  ]
};