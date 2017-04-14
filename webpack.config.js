var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/app.js",
    html: "./index.html"
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module:{
    loaders: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    chunkFilename: '[id].[chunkhash].js'
  },
  plugins: [HTMLWebpackPluginConfig]
};
