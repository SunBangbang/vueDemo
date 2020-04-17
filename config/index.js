'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  // 开发环境下面的配置
  dev: {

    // 静态文件夹
    assetsSubDirectory: 'static',
    // webpack编译输出的发布路径
    assetsPublicPath: '/',
    // 代理配置表,在这里可以配置特定的请求代理到对应的 API 接口
    // 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
    proxyTable: {
      // '/api': {
      //   target: 'http://localhost:5000',
      //   secure: false, // 如果是 https 接口 ,需要配置这个参数
      //   // 如果接口跨域,需要进行这个参数配置
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    // 端口号设置,端口号占用出现问题可在此处修改
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    // 是否在编译（输入命令行npm run dev）后打开http://localhost:8080/页面，以前配置为true，近些版本改为false，个人偏向习惯自动打开页面
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */
    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,
    // 代码压缩后进行调bug定位将非常困难，于是引入sourcemap记录压缩前后的位置信息记录，当产生错误时直接定位到未压缩前的位置，将大大的方便我们调试
    cssSourceMap: true
  },
  // 生产环境下的配置
  build: {
    // index编译后生成的位置和名字,根据需要改变后缀
    index: path.resolve(__dirname, '../dist/index.html'),

    // 编译后存放生成环境代码的位置
    assetsRoot: path.resolve(__dirname, '../dist'),
    // 静态资源文件夹
    assetsSubDirectory: 'static',
    // 发布的根目录，通常本地打包dist后打开文件会报错，此处修改为./。如果是上线的文件，可根据文件存放位置进行更改路径
    assetsPublicPath: '/',

    /**
     * Source Maps
     */
    // 使用SourceMap    打包后关闭源码显示
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 默认不打开开启gzip模式
    productionGzip: false,
    // unit的gzip命令用来压缩文件,gzip模式下需要压缩的文件的扩展名有js和css
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
