<template>
  <div class="detail">
  <detailNav class="detail-nav" @titleClick="titleClick" ref="navIndex"></detailNav>
  <scroll class="detail-content" :TypeNum = "3" @scroll="getCoordY"
  :pullLoad = "true" ref="Scroll">
    <detailSwiper ref="Swiper" :goodsImage="goodsImage"></detailSwiper>
    <detailMessage :goodsmess="goodsmess"></detailMessage>
    <detail-shop :shopInfo="shopInfo"></detail-shop>
    <detailInfo :detailInfo="detailInfo" :goods-desc="goodsmess.desc"></detailInfo>
    <detail-param ref="param" :paramInfo="paramInfo"></detail-param>
    <detail-comment ref="comment" :commentInfo="commentInfo"></detail-comment>
    <goods-list ref="recommend" class="recommends" :goods="recommendImage"></goods-list>
  </scroll>
  <back-top @click.native="backClick" v-show="isShow"></back-top>
  <detail-bottom-bar @addgoods="addgoods" ></detail-bottom-bar>
  </div>
</template>

<script>
import detailNav from './childCpns/detail-nav';
import detailSwiper from './childCpns/detailSwiper';
import detailMessage from './childCpns/datail-message'
import detailShop from './childCpns/detail-shop';
import Scroll from 'components/common/scroll/Better-scroll';
import detailInfo from './childCpns/detail-info'
import DetailParam from './childCpns/detail-param';
import DetailComment from './childCpns/detail-comment';
import GoodsList from 'components/content/goods/Goods-list';
import DetailBottomBar from './childCpns/detail-bottom-bar';

import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail';
// import { debounce } from 'common/utils';
import { ListenerMinx, backTopMinx} from 'common/mixin';
import { mapActions } from 'vuex';

export default {
  name: 'detail-page',
  data () {
    return{
      goodsId: null,
      goodsImage: [],
      goodsmess: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendImage: [],
      ImgListener: null,
      positionY: [],
      coordinateY: null,
      currentIndex: 0,
    }
  },
  mixins: [ListenerMinx, backTopMinx],
  components: {
    detailNav,
    detailSwiper,
    detailMessage,
    detailShop,
    Scroll,
    detailInfo,
    DetailParam,
    DetailComment,
    GoodsList,
    DetailBottomBar,
  },
  methods: {
    ...mapActions({add:'addgoods',}),
    titleClick(index) {
      const y = this.positionY[index]
      this.$refs.Scroll.backTop(0, -y, 100)
    },
    getCoordY (position) {
      // console.log(position); // 获取整个坐标对象的值
      // console.log(position.y); //获取position坐标对象的y值
      this.isShow = (-position.y) > 1000 //判断返回顶部按钮是否隐藏
      
      this.coordinateY = -position.y //监听scroll滑动区域的位置，让顶部栏对应元素在滑动区域到达
      //特定区域时显示为红色
      for(let i = 0; i < this.positionY.length; i++) {
          // console.log(this.positionY[i]);
        if(this.currentIndex !== i && this.coordinateY >= this.positionY[i]-40) {
          // console.log(i);
          this.currentIndex = i
          this.$refs.navIndex.titleIndex = this.currentIndex
        }
      }
    },
    // ...mapActions({add:'addgoods',}),
    addgoods () {
      // console.log('添加商品');
      //获取购物车需要展示的信息
      const product = {}
      product.image = this.goodsImage[0]
      product.title = this.goodsmess.title
      product.desc = this.goodsmess.desc
      product.price = this.goodsmess.realPrice
      product.id = this.goodsId
      //将商品数据传到Vuex共用变量中
      // this.$store.commit('addgoods', product) //把事件发送到Vuex的mutations对象中
      // 把事件发送到Vuex的actions对象中
      // this.$store.dispatch('addgoods', product).then(res => {
      //   console.log(res)
      // })
      //利用map方法映射调用vuex的Actions对象上的方法
      this.add(product).then(res => { //不能使用组件上已有的方法名
        // console.log(res);
        console.log(this.$toast);
        this.$toast.showtoast(res, 2000)
      })
    },
  },
  created () {
    //保存商品的iid
    this.goodsId = this.$route.params.id
    //2.根据goodsId请求商品详细数据
    getDetail(this.goodsId).then(res => {
      // console.log(res);
      const data = res.result;
      this.goodsImage = data.itemInfo.topImages

      //获取商品信息
      this.goodsmess = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // console.log(this.goodsmess);
      //获取店铺的信息
      this.shopInfo = new Shop(data.shopInfo) 
      //保存商品详情数据
      this.detailInfo = data.detailInfo
      //获取商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //获取评论信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })
    getRecommend(this.recommendImage).then(res => {
      //获取推荐商品数据
      // console.log(res);
      this.recommendImage = res.data.list
    })
  },
  mounted () {
    //封装refresh函数 监听详情的
    // const refresh = debounce(this.$refs.Scroll.refresh, 100)
    // this.$bus.$on('Imageinfo', () => {
    //   refresh()
    // })
    this.$bus.$on('Imageinfo', this.ImgListener)
  },
  // updated () { //在数据加载并且图片渲染完成后监听组件的offsetTop的y轴坐标值
  //   // console.log(this.$refs.Swiper.$el.offsetTop);
  //   this.positionY.push(0)
  //   this.positionY.push(this.$refs.param.$el.offsetTop-44)
  //   this.positionY.push(this.$refs.comment.$el.offsetTop-44)
  //   this.positionY.push(this.$refs.recommend.$el.offsetTop-44)
  // },
  destroyed () {
    this.$bus.$off('itemImgLoad',this.ImgListener)
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
.recommends {
  margin-top: 20px;
}
</style>