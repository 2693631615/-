<template>
  <!-- <div class="Check-btn" @click="btnClick" :class="{goodsCheck: isCheck}"> -->
  <div class="Check-btn" :class="{goodsCheck: isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Check-btn',
 props: {
  isCheck: {
    type: Boolean,
    default: false
  },
}
  // methods: {
  //   btnClick () {
  //     this.isCheck = ! this.isCheck
  //   }
  // }

}
</script>

<style scoped>
.Check-btn img {
  width: 20px;
  border-radius: 100%;
  border: 1px solid #999;
}
.goodsCheck img {
  border: 1px solid var(--color-tint);
  background-color: var(--color-tint);
}
</style>