'use strict';
//var webpack = require('webpack');

// var debug = process.env.NODE_ENV !== "production";
// var webpack = require('src/node_modules/webpack');
// var path = require('path');


module.exports = {
  //devtool: debug ? "inline-sourcemap" : null,
  context: __dirname + "/src/",
  entry: __dirname + "/src/main.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },

  output: {
      path: __dirname + "/prod/js/",
      filename: "main.js"
  },
  //devtool: "source-map",
  devServer: {
      proxy: {
          '/dump*': {
              target: 'http://127.0.0.1:8081/dump',
              ignorePath: true,
              changeOrigin: true,
              secure: false
          }
      },
    
      contentBase: '/home/dev/my_dev/TestTask/react_study/prod/' 

  }



  // plugins: debug ? [] : [
  //   //new webpack.optimize.DedupePlugin(),
  //   //new webpack.optimize.OccurenceOrderPlugin(),
  //   //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  // ],

  //library: 'my_project'
};
