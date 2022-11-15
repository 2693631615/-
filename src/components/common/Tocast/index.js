import Toast from './Toast-page'
const obj = {}
obj.install = (Vue) => {
  console.log('执行obj函数');
  //1.创建组件的构造器
  const toastContrustor = Vue.extend(Toast)
  //2.用new方式，根据组件构造器，创建一个组件对象
  const toastobj = new toastContrustor()
  //3.将组件对象挂载到某一个元素上
  toastobj.$mount(document.createElement('div'))
  //将toast组件的DOM结构插入渲染到Vue实例创建的DOM结构中,toast.$el对应的就是组件挂载的div
  document.body.appendChild(toastobj.$el)
  //将创建的组件对象实例挂载到Vue实例的原型上
  Vue.prototype.$toast = toastobj;
}
export default obj