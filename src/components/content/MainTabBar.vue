<template>
  <tabbar-home>
    <tabbar-item Path="/home">
      <!-- ~assetsImg是在webpack.base.conf.js文件配置的路径别名，是路径地址的语法糖 -->
      <img slot="item-icon" src="~assetsimg/home.svg" alt="">
      <img slot="item-icon-active" src="~assetsimg/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item Path="/category">
      <img slot="item-icon" src="~assetsimg/category.svg" alt="">
      <img slot="item-icon-active" src="~assetsimg/category-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item Path="/cart">
      <img slot="item-icon" src="~assetsimg/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assetsimg/shopcart-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item Path="/profile">
      <img slot="item-icon" src="~assetsimg/profile.svg" alt="">
      <img slot="item-icon-active" src="~assetsimg/profile-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tabbar-home>
</template>

<script>
import TabbarHome from '../common/tabbar/tabbar-home';
import tabbarItem from '../common/tabbar/tabbar-item';
export default {
  name: 'MainTabBar',
  components: {
    TabbarHome,
    tabbarItem,
  }
}
</script>

<style>

</style>