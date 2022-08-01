const path = require("path");
const {merge} = require("webpack-merge");
const baseConf = require("./webpack.config.base");


module.exports = merge(baseConf, {
  mode: process.env.NODE_ENV,
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    compress: true,
    port: 3000
  }
})
