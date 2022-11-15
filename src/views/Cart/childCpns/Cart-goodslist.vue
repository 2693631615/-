<template>
  <div class="goodslist">
    <div class="goodsmess" v-for="(item, index) in goodsList" :key="index"> 
      <cart-goodslist-item :Product="item"></cart-goodslist-item>
    </div>
  </div>
</template>

<script>
import CartGoodslistItem from './Cart-goodslist-item';

import { mapGetters } from 'vuex';
export default {
  name: 'cart-goodslist',
  components: { 
    CartGoodslistItem, 
  },
  computed : {
    ...mapGetters (['goodsList'])
  }
}
</script>

<style>

</style>