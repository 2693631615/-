// const { resolve } = require("core-js/fn/promise");

module.exports = {
  transpileDependencies: true,
  // lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'assetsimg': '@/assets/img/tabbar'
      }
    }
  }
}
