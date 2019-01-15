var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  cache: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: ['babel-polyfill',path.resolve(__dirname, 'app/index.jsx')],
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8090,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  devtool: 'source-map',
  module: {
    loaders: [
     {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [node_modules_dir],
        query: {
          cacheDirectory: true,
          presets: ["es2015", "stage-0", "react"],
        }
      },
      {test: /\.js$/, exclude: [node_modules_dir], loader: "babel", query: {presets: ["es2015", "stage-0", "react"]}},
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: "url-loader?limit=1024&name=fonts/[name].[ext]" }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin()
  ]
};
