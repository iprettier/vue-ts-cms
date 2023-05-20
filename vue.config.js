const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 配置方式1: cli 的属性
  transpileDependencies: true,
  lintOnSave: false,
  // 配置方式2：和 webpack 属性完全一样，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
  }
})
