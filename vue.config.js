const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: './',
  devServer: {
    port: 7002,
    headers: {
      'Access-Control-Allow-Origin': '*', // 允许跨域，允许所有域名的脚本访问该资源
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src'
      }
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    }
  }
})
