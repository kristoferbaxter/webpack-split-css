const path = require('path');
const CommonOptions = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ExtractCSSPlugin = new ExtractTextPlugin({
  filename: 'bundle.[name].[chunkhash].css'
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[name].[chunkhash].js',
    path: path.resolve(__dirname, '..', 'dist', 'default'),
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
    CommonOptions.CleanupPlugin,
    ExtractCSSPlugin
  ]
};