let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

console.log(__dirname)
let config={
  entry: "./src/view/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
       // .css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: "style!css" },
       // .scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}  

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page/index.html' //new 一个这个插件的实例，并传入相关的参数
    })
  ]
}

module.exports= config;