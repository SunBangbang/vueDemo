'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  // 拼接出绝对路径
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  // 配置入口，默认为单页面所以只有app一个入口
  entry: {
    app: './src/main.js'
  },
  // 配置出口，默认是/dist作为目标文件夹的路径
  output: {
    // webpack输出的目标文件夹路径（例如：/dist）
    path: config.build.assetsRoot,
    // webpack输出bundle文件命名格式
    filename: '[name].js',
    // webpack编译输出的发布路径
    // processs为node的一个全局对象获取当前程序的环境变量，即host
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 配置模块resolve的规则
  resolve: {
    // 自动的扩展后缀，比如一个js文件，则引用时书写可不要写.js
    extensions: ['.js', '.vue', '.json'],
    // 创建路径的别名，比如增加'components': resolve('src/components')等
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  // 使用插件配置相应文件的处理方法
  module: {
    rules: [
      // {
      //   // 对src和test文件夹下的.js和.vue文件使用eslint-loader
      //   test: /\.(js|vue)$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [resolve('src'), resolve('test')],
      //   options: {
      //     formatter: require('eslint-friendly-formatter')
      //   }
      // },
      // 使用vue-loader将vue文件转化成js的模块
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // js文件需要通过babel-loader进行编译成es5文件以及压缩等操作
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      // // vue项目配置less
      // {

      //   test: /\.less$/,
      //   loader: 'style-loader!css-loader!less-loader'
      // },
      // 图片、音像、字体都使用 url-loader 进行处理,超过 10000 会编译成 base64 , options.name 指明了输出的命名规则
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
