<template>
  <div class="detail-shop">
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-manage">
      <div class="goods-sale">
        <span>
          <div class="amount">{{shopInfo.sells | sellCountFilter}}</div>
          <div>总销量</div>
        </span>
        <span>
          <div class="amount">{{shopInfo.fans}}</div>
          <div>全部宝贝</div>
        </span>
      </div>
      <div class="goods-evaluate">
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td :class="{'score-better': item.isBetter}">{{item.score | scoreFilter}}</td>
            <td><span :class="{'better-more': item.isBetter}">
                {{item.isBetter ? '高':'低'}}</span></td>
          </tr>
      </div>
    </div>
    <div class="shop-button">
      <span>进店看看</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-shop',
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: { //这个方法自己需要深入研究一下过滤器filters
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    },
    scoreFilter:  function (value) {
      return value.toFixed(2)
    }
  }

}
</script>

<style>
.detail-shop {
  border-bottom: 3px solid #ccc;
}
.shop-logo {
  margin: 20px 0 10px 0;
}
.shop-logo img {
  height: 50px;
  width: auto;
  margin: 8px;
  vertical-align: middle;
  border-radius: 100%;
}
.shop-logo span {
  font-size: 24px;
  vertical-align: middle;
  color: #666;
}
.shop-manage {
  display: flex;
  justify-content: space-around;
}
.goods-sale {
  display: flex;
  margin: 24px 0;
  border-right: 2px solid #eee;
}
.goods-sale span {
  padding-right: 18px;
  font-size: 16px;
  color: #333;
  text-align: center;
}
.amount {
  padding-bottom: 8px;
  font-size: 24px;
}
.goods-evaluate td {
  color: #333;
  padding-right: 8px;
  line-height: 32px;
}
.goods-evaluate .score-better {
  color: var(--color-high-text);
}
.goods-evaluate span {
  color: #fff;
  padding: 3px;
  border-radius: 5px ;
  background-color: rgb(77, 244, 77);
}
.goods-evaluate .better-more {
  /* color: #fff;
  padding: 3px;
  border-radius: 5px ; */
  background-color: rgb(232, 67, 67);
}
.shop-button {
  padding: 16px 0 30px 0;
  text-align: center;
}
.shop-button span {
  padding: 6px 40px;
  color: #888;
  background-color: #eee;
  border-radius: 10px;
}
</style>