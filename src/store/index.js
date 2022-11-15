import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
//1.安装插件
Vue.use(Vuex)

const state = {
  cartList: [],
}

//创建Store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
//导出store对象
export default store