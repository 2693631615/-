<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="service-btn">
        <i></i>
        <span>客服</span>
      </div>
      <div class="shop-btn">
        <i></i>
        <span>店铺</span>
      </div>
      <div class="collect-btn">
        <i></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="cart-btn" @click="addgoods">加入购物车</div>
      <div class="buy-btn">购买</div>
    </div>
    <!-- <sport-ball ref="ball" class="sport-ball"></sport-ball> -->
  </div>
</template>

<script>
export default {
  name: 'bottom-bar',
  methods: {
    addgoods () {
      this.$emit('addgoods')
    }
  }

}
</script>

<style>
/* .bottom-bar {
  display: flex;
  text-align: center;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
} */
.bottom-bar {
  display: flex;
  text-align: center;
  height: 49px;
  background-color: #fff;
  position: relative;
  /* bottom: 48px; */
}
.bar-left {
  display: flex;
  flex: 1;
  /* justify-content: space-around; */
}
.bar-left div {
  flex: 1;
}
.bar-left i {
  display: block;
  width: 22px;
  height: 22px;
  margin: 10px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.shop-btn i {
  background-position: 0 -54px;
}
.collect-btn i {
  background-position: 0 -98px;
}
.bar-right {
  display: flex;
  font-size: 16px;
  color: #fff;
  line-height: 49px;
}

.cart-btn {
  width: 100px;
  background-color: #ffe817;
}
.buy-btn {
  width: 80px;
  background-color: #f69;
}
/* .sport-ball {
  position: absolute;
  left: 225px;
  bottom: 20px;
} */
</style>