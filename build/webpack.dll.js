// dll 优化配置
const path = require("path");

const webpack = require("webpack");

const config =  require("../config");

module.exports = {
  entry: {
    vendor: ["vue/dist/vue.esm.js", "vue-router", "axios"]
  },
  output: {
    path: path.join(__filename, "../static/js"),
    filename: "[name].dll.js",
    library: "[name]_library"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname,".","[name]-manifest.json"),
      name: "[name]_library"
    })
  ]
}