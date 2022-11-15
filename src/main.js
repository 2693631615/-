import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import Lazyload from 'vue-lazyload'

import toast from 'components/common/Tocast' //引入tocast自定义插件
//安装使用tocast插件
Vue.use(toast)
//使用fastclick插件解决移动端的点击延迟
FastClick.attach(document.body)
//使用第三方图片懒加载插件
Vue.use(Lazyload, { //loading属性用于引入懒加载图片在没有加载完成时显示的背景图
  loading: require('./assets/img/common/placeholder.png')
})

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
