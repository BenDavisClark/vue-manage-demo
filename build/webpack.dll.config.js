const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['vue/dist/vue.common.js','vue-router', 'babel-polyfill','axios','vuex']
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    library: '[name]_library'    // vendor.dll.js中暴露出的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    // 压缩打包的文件，与该文章主线无关
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
