<template>
  <div class="goodslist-item" @click="itemClick">
    <!-- <img :src="goodsItem.show.img" alt=""> -->
    <!-- <img :src="showImage()" alt="" @load="Imageload"> -->
    <img v-lazy="showImage()" alt="" :key="Math.random()"  @load="Imageload">
    <div class="goodslist-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodslist-item",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    } 
  },
  methods: {
    Imageload () {
      this.$bus.$emit('itemImgLoad')
      // if (this.$route.path.indexOf('/home') !== -1) { 
        //当route路由在主页时监听主页的图片加载
      //   this.$bus.$emit('HomeImageload')
      // } else if (this.$route.path.indexOf('/detail') !== -1) { 
        //当route路由在详情页时监听详
        //情页的图片加载
      //   this.$bus.$emit('detailImage')
      // }
    },
    itemClick () {
      this.$router.push('/detail/'+ this.goodsItem.iid)
    },
    showImage () {
      // console.log(this.goodsItem.image);
      // console.log(this.goodsItem.show.img);
      // return this.goodsItem.image || this.goodsItem.show.img
      return this.goodsItem.image ?  this.goodsItem.image : this.goodsItem.show.img
    },
  }
}
</script>

<style>
.goodslist-item {
  /* padding-bottom: 40px; */
  width: 48%;
}
.goodslist-item img {
  padding: 5px 0;
  width: 100%;
  height: 250px;
}
.goodslist-info {
  text-align: center;
  font-size: 14px;
}
.goodslist-info p {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.goodslist-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodslist-info .collect {
  position: relative;
}
.goodslist-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>