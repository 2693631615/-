<template>
  <div class="goods-list">
    <goodslist-item v-for="(item, index) in goods" :goodsItem="item"
    :key="index"></goodslist-item>
  </div>
</template>

<script>
import GoodslistItem from './Goodslist-item';
export default {
  name: "goods-list",
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodslistItem,
  }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>