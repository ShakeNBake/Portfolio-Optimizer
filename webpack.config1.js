const webpack = require('webpack');
const env = process.env.NODE_ENV;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const extractSass = new ExtractTextPlugin({
 filename: 'css/[name].css',// 'css/application.css',
 allChunks: false
});

let output = {
 path: __dirname + '/build/static/',
 filename: 'javascript/[name].js'
};

if (env === 'debug' || env === 'nondev') {
 output = {
   path: __dirname + 'build/static/',
   filename: 'javascript/[name].js'
 };
}

let config = {
 context: __dirname + '/src',
 entry: {
   bundle: './index.jsx',
   application: './static/scss/application.scss',
 },
 output: output,
 devtool: 'cheap-module-source-map',
 module: {
   rules: [
     {
       test: /.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query: {presets: ['es2015', 'react', 'stage-1']}
     },
     {
       test: /\.(woff|woff2|eot|ttf|svg|png|jpg|gif)$/,
       loader: 'file-loader?limit=1024&name=images/[name].[ext]'
     },
     {
       test: /\.(scss|css)$/,
       include: [path.resolve(__dirname, 'app/js/src/static/scss')],
       use: ExtractTextPlugin.extract({
         publicPath: '../',
         use: [
           {
             loader: 'css-loader',
             options: {
               minimize: true,
               sourceMap: false
             }
           },
           {loader: 'sass-loader'}
         ],
         fallback: 'style-loader'
       })
     }
   ]
 },
 plugins: [extractSass]
};

if (env === 'production' || env === 'nondev') {
 config.devtool = 'nosources-source-map';

 config.plugins.push(
   new webpack.DefinePlugin({
     'process.env': {NODE_ENV: '"production"'}
   })
 );

 config.plugins.push(new webpack.optimize.UglifyJsPlugin({
   compress: {warnings: false},
   comments: false,
   sourceMap: false,
   minimize: false
 }));
}

module.exports = config;