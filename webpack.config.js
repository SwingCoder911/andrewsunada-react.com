var HtmlWebpackPlugin = require('html-webpack-plugin');
var pages = [
  {
    title: "Andrew Sunada's Batcave",
    key: 'main',
    entry: './pages/home.js',
    htmlfile: 'index.html'
  },
  {
    title: "Todo App",
    key: 'todo',
    entry: './pages/todo.js',
    htmlfile: 'todo.html'
  }
];
module.exports = {
  context: __dirname + "/app",

  entry: {},
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
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      {
        test: /\.scss$/,
        loaders: 'style-loader!css-loader!sass-loader'
      },
      {
         test: /\.(jpe?g|png)$/,
         loader: "file-loader?name=[path][name].[ext]"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  output: {
    filename: "[name].app.js",
    path: __dirname + "/public",
    publicPath: "/",
    sourceMapFilename: '[name].map'
  },
  plugins: [],
  watch: true
};
for(var i = 0, len = pages.length; i < len; i++){
  var currentPage = pages[i];
  module.exports.entry[currentPage.key] = currentPage.entry;
  module.exports.plugins.push(new HtmlWebpackPlugin({
    template: 'page.template.ejs',
    title: currentPage.title,
    inject: 'body',
    chunks: [currentPage.key],
    filename: currentPage.htmlfile
  }));
}
