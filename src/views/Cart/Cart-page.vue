<template>
  <div class="cart-page">
    <nav-bar class="cart-nav">
      <!-- <div slot="center" >购物车({{$store.state.cartList.length}})</div> -->
      <!-- <div slot="center" class="cart-nav">购物车({{goodscount}})</div> -->
      <div slot="center" class="cart-nav">购物车({{count}})</div>
      <!-- 商品的列表 -->
    </nav-bar>
    <scroll class="cart-content" ref="scroll" :Typenum="3" :pullLoad="true">
      <cart-goodslist ></cart-goodslist>
    </scroll>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/nav-bar';
import CartGoodslist from './childCpns/Cart-goodslist';
import CartBottomBar from './childCpns/Cart-bottom-bar';

import { mapGetters } from 'vuex'; // vuex插件的辅助函数
import Scroll from 'components/common/scroll/Better-scroll'

export default {
name: "Cart-bar",
components: {
  navBar,
  CartGoodslist,
  Scroll,
  CartBottomBar,
},
computed: {
  //直接引用Vuex的store对象的getters上的方法
  // ...mapGetters (['goodscount', 'goodsList'])
  //方法二:
  ...mapGetters ({
    count: 'goodscount',
    // goods: 'goodsList',
  })
},
activated() {
  this.$refs.scroll.refresh()
}

}
</script>

<style scoped>
.cart-page {
  height: 100vh;
}
.cart-content {
  height: calc(100% - 44px - 49px - 36px);
  overflow: hidden;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
</style>