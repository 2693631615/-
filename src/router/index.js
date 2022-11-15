import Vue from 'vue'
import VueRouter from 'vue-router'
//1.安装插件
Vue.use(VueRouter)
//创建路由映射关系
// 导入路由配置url地址映射的组件
const Home = () => import('views/Home/Home-page')
const Cart = () => import('views/Cart/Cart-page')
const Category = () => import('views/Category/Category-page')
const Profile = () => import('views/Profile/Profile-page')
const Detail = () => import('views/detail/detail-page')


//创建路由对象
const routes = [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/detail/:id',
      component: Detail,
    },
    
]
//2.创建路由
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router