'use strict'
// check-versions：调用检查版本的文件。加（）代表直接调用该函数
require('./check-versions')()
// 设置当前是生产环境
process.env.NODE_ENV = 'production'
// 加载动画
const ora = require('ora')
// 删除文件
const rm = require('rimraf')
const path = require('path')
// 对文案输出的一个彩色设置
const chalk = require('chalk')
const webpack = require('webpack')
// 默认读取下面的index.js文件
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
// 调用start的方法实现加载动画，优化用户体验
const spinner = ora('building for production...')
// 开启loading动画
spinner.start()
// 先删除dist文件再生成新文件，因为有时候会使用hash来命名，删除整个文件可避免冗余
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // webpack编译
  webpack(webpackConfig, (err, stats) => {
    // 停止loading动画
    spinner.stop()
    if (err) throw err
    // 没有出错则输出相关信息
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
