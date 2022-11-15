<template>
  <div class="detail-mess" v-if="Object.keys(goodsmess).length !== 0">
    <div class="goods-des">{{goodsmess.title}}</div>
    <div class="goods-price">
      <span class="new-price">{{goodsmess.newPrice}}</span>
      <span class="old-price">{{goodsmess.oldPrice}}</span>
      <span v-if="goodsmess.discount" class="discount">{{goodsmess.discount}}</span>
    </div>
    <div class="goods-salenum">
      <span>{{goodsmess.columns[0]}}</span>
      <span>{{goodsmess.columns[1]}}</span>
      <span>{{goodsmess.services[goodsmess.services.length-1].name}}</span>
    </div>
    <div class="goods-express">
      <span v-for="index in goodsmess.services.length-1"
      :key="index">
      <img :src="goodsmess.services[index-1].icon" alt="">
      <span class="express-mess">{{goodsmess.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-message',
  props: {
    goodsmess: {
      type: Object,
      default () {
        return {}
      }
    }
  }

}
</script>

<style>
.goods-des {
  font-size: 18px;
  line-height: 24px;
  color: #333;
  padding: 12px 8px;
}
.new-price {
  font-size: 30px;
  color: var(--color-high-text);
  padding: 5px;
}
.old-price {
  color: #666;
  text-decoration: line-through
}
.discount {
  padding: 8px;
  margin-left: 5px;
  background-color: var(--color-high-text) ;
  color: #fff;
  border-radius: 16px;
}
.goods-salenum {
  display: flex;
  justify-content: space-between;
  padding: 3px;
  border-bottom: 2px solid #ccc;
}
.goods-salenum span {
  color: #666;
  line-height: 36px;
}
.goods-express {
  display: flex;
  justify-content: space-between;
  padding: 12px 4px;
  border-bottom: 2px solid #ccc;
}
.goods-express img {
  height: 18px;
  vertical-align: middle;
}
.goods-express .express-mess {
  color: #333;
  font-size: 13px;
  padding: 3px;
}
</style>