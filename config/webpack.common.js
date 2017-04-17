const autoprefixer = require('autoprefixer');

const BabelLoaderRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: 'babel-loader'
};
const CSSLoaderRule = (UsableExtractCSSPlugin, browsers=["last 2 versions"]) => {
  return {
    test: /\.css$/,
    exclude: /node_modules/,
    use: UsableExtractCSSPlugin.extract({
      fallback: 'style-loader',
      use: [
        { 
          loader: 'css-loader', 
          options: {
            modules: true,
            localIdentName: '[hash:base64:8]',
            minimize: true,
            camelCase: false,
            importLoaders: 1
          }
        },
        { 
          loader: 'postcss-loader', 
          options: {
            plugins: function() {
              return [
                autoprefixer({
                  browsers: browsers
                })
              ];
            }
          }
        }
      ]
    })
  };
};

module.exports = {
  BabelLoaderRule,
  CSSLoaderRule
};