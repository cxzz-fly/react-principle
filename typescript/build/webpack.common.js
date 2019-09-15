const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: ['ts-loader'],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ]
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
        loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    }]
  },
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true
    })
  ],
  devServer: {
    host: 'localhost',
    port: 3003,
    historyApiFallback: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true
    },
    inline: true,
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  }
}