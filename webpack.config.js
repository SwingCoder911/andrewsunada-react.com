var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  context: __dirname + "/app",

  entry: {
    main: "./app.js",
    html: "./index.html"
  },
  resolve: {
    //root: path.resolve(__dirname, './app/js'),
    extensions: ['.js', '.jsx', '.json']
  },
  module:{
    loaders: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]",
      },
      {
          test: /\.scss$/,
          loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
};
