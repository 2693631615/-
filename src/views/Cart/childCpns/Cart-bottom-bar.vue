<template>
  <div class="cart-bottom-bar">
    <div class="checkAll-btn">
      <check-btn :isCheck="!isSelectAll" @click.native="checkAllClick"></check-btn>
      <span>全选</span>
      <div class="goods-price" @click="click">合计 {{Totalcount}}</div>
    </div>
    <div class="goods-settle" @click="settleClick">去结算({{goodstotal}})</div>
  </div>
</template>

<script>
import CheckBtn from './Check-btn.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'bottom-bar',
  components: {
    CheckBtn,
  },
  computed: {
    ...mapGetters(['goodsList']),
    Totalcount () { //计算属性的函数中要有遍历值
      return this.goodsList.filter(item => {
        return item.checked
      }).reduce((prevalue, item) => {
        return prevalue + item.price * item.count
      }, 0).toFixed(2)
      // prevalue初始化值0
    },
    goodstotal () {
      return this.goodsList.reduce((prevalue, item) => {
        return prevalue + item.count
      }, 0)
    },
    isSelectAll () {
      if(this.goodsList.length === 0) return true
      //filter函数没有找到符合条件的遍历值或者数组为空时，返回的是[],[]取反为flase
      // return (this.goodsList.filter(item => !item.checked).length)
      //find函数没有找到符合条件的遍历值或者数组为空时，返回的是undefined, undefined取反为true
      // return (this.goodsList.find(item => !item.checked))
      //some函数,没有找到符合条件的遍历值或者数组为空时，返回false
      return this.goodsList.some(item => !item.checked)
      //every函数,在找到不符合条件的遍历值时返回false，在没有找到不符合条件的遍历值时返回true
      // return !this.goodsList.every(item => item.checked)

    }
  },
  methods: {
    click () { //无关项目内容，只是为了查看某些输出内容
      console.log((this.goodsList.filter(item => !item.checked)))
      console.log((this.goodsList.find(item => !item.checked)))
      console.log(this.goodsList.some(item => !item.checked));
      console.log(this.goodsList.every(item => item.checked));
    },
    checkAllClick () {
      if(!this.isSelectAll) {
      this.goodsList.forEach(element => element.checked = false)
      } else {
        this.goodsList.forEach(element => element.checked = true)
      }
      //以下为错误做法，无法实现全选的点击事件
        // this.goodsList.forEach(element => element.checked = !this.isSelectAll);
    },
    settleClick () {
      console.log('123');
      if(this.isSelectAll) {
      this.$toast.showtoast('购物车为空,请先添加商品!', 2000)
      }
    }
  }

}
</script>

<style>
.cart-bottom-bar {
  display: flex;
  align-items: center;
  position: relative;
  height: 36px;
  font-size: 18px;
  padding-left: 15px;
  justify-content: space-between;
}
.checkAll-btn {
  display: flex;
}
.checkAll-btn span {
  padding-left: 8px;
}
.goods-price {
  padding-left: 20px;
}
.goods-settle {
  width: 100px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  background-color: var(--color-tint);
}
</style>