const path = require('path');
module.exports = {
  context: __dirname + "/app",

  entry: {
    main: "./js/app.js",
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
          loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    publicPath: "/"
  }
};
