<template>
  <div class="Product-item">
    <div class="Check-button">
    <check-btn :isCheck="Product.checked" @click.native="checkClick"></check-btn>
    <!-- native修饰符监听组件元素check-btn的原生事件 -->
    </div>
    <div class="Product-image">
      <img :src="Product.image" alt="">
    </div>
    <div class="Product-content">
      <div>
        <h4>{{Product.title}}</h4>
        <p>{{Product.desc}}</p>
      </div>
      <div class="Product-param">
        <span class="Product-price">￥{{Product.price}}</span>
        <span class="Product-count">&times;{{Product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from './Check-btn';
export default {
  name: 'cart-Productlist-item',
  props: {
    Product: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    CheckBtn,
  },
  methods: {
    checkClick() {
      this.$store.commit('checkClick', this.Product)
    }
  }

}
</script>

<style>
.Check-button {
  display: flex;
  align-items: center;
  padding-right: 5px;
}
.Product-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #666;
  padding: 8px;
}
.Product-image img{
  height: 120px;
  width: auto;
}
.Product-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
}
.Product-content p {
  display:-webkit-box;
  overflow: hidden; /*超出隐藏*/
  text-overflow: ellipsis;/*隐藏后添加省略号*/
  -webkit-box-orient:vertical; 
  -webkit-line-clamp:2; /*想显示多少行*/
  line-height: 20px;
}

.Product-content h4 {
  display:-webkit-box;
  overflow: hidden; 
  text-overflow: ellipsis;
  -webkit-box-orient:vertical; 
  -webkit-line-clamp: 1;
  font-size: 16px;
  line-height: 32px;
}
.Product-param {
  display: flex;
  justify-content: space-between;
}
.Product-price {
  color: var(--color-tint);
  font-size: 24px
}
.Product-count {
  font-size: 18px;
  font-weight: 700;
  color: #999;
}
</style>