<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"
    @tabClick="tabClick" v-show="isShowTab"
    ref="tabFixed"></tab-control>
    <scroll class="content" ref="Scroll" :Typenum="3" 
    @scroll="Homearrow" :pullLoad="true" @pullingUps="loadMore">
    <home-swiper :banners="banners" 
    @Swiperload="Swiperload"></home-swiper>
    <recommend-view :recommend="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']"
    @tabClick="tabClick" ref="tabControl"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    <!-- .native修饰符监听组件元素的原生事件 -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/nav-bar';
import TabControl from 'components/content/tabControl/Tab-control';
import GoodsList from 'components/content/goods/Goods-list';
import Scroll from 'components/common/scroll/Better-scroll';
// import BackTop from 'components/content/Backtop/Back-top'; 已放入到mixin混入文件中

import HomeSwiper from './childCpns/Home-swiper';
import RecommendView from './childCpns/RecommendView';
import FeatureView from './childCpns/FeatureView';

import { Homedata, Homegoodsdata } from 'network/home';
// import { debounce } from 'common/utils';
import { ListenerMinx, backTopMinx} from 'common/mixin';

export default {
  name: 'Home-page',
  data(){
    return{
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: "pop",
      // isShow: false,
      offSetTop: 0,
      isShowTab: false,
      saveY: 0,
      ImgListener: null,
    }
  },
  mixins: [ListenerMinx, backTopMinx],
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    // BackTop,
  },
  activated () { //组件页面处在活跃或选中状态
    // this.$refs.Scroll.refresh()
    this.$refs.Scroll.scroll.scrollTo(0, this.saveY, 1)
  },
  deactivated () { //组件页面处在不活跃或未选中状态
    this.saveY = this.$refs.Scroll.scroll.y
    this.$bus.$off('itemImgLoad', this.ImgListener)
  },
  created () {
  // 请求主页轮播数据
    this.Homedata()
  // 请求商品数据
    this.Homegoodsdata('pop')
    this.Homegoodsdata('new')
    this.Homegoodsdata('sell')
  },
  mounted () {
  },
  // mounted() {
  //   //封装refresh函数
  //   const refresh = debounce(this.$refs.Scroll.refresh, 100)
  //   //监听Goodslist-item组件中图片加载情况
  //   //使用scroll.refresh()方法重新计算可滚动区域高度
  //   this.$bus.$on('HomeImageload', () => {
  //     // this.$refs.Scroll && this.$refs.Scroll.refresh()
  //     // this.$refs.Scroll.scroll.finishPullUp()
  //     refresh()
  //   })
  // },
  // updated () {
  //   this.$refs.Scroll.refresh()
  // },
  methods: {
    //事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabFixed.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
    // backClick () { 已放到mixin文件中混入
    //   this.$refs.Scroll.backTop(0, 0, 500)
    // },
    Homearrow (position) {
      // console.log(position);
      this.isShow = (-position.y) > 1000
      this.isShowTab = (-position.y) > this.offSetTop
    },
    loadMore () {
      // console.log(this.currentType);
      this.Homegoodsdata(this.currentType)
    },
    Swiperload () {
      this.offSetTop = this.$refs.tabControl.$el.offsetTop
    },
    //网络请求的方法
    Homedata() {
      Homedata().then(res => {
        // console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      })
    },
    Homegoodsdata (type) {
      const page = this.goods[type].page + 1
      Homegoodsdata(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // this.$refs.Scroll.scroll.finishPullUp()
      })
    },
  }
}
</script>

<style scoped> 
/* scoped相对于样式的作用域，设置scoped属性时，style标签的样式设置只对本组件的DOM元素生效 */
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    /* 在浏览器使用原生滚动时，为了避免nav组件跟随页面一起滚动，所以使用fixed固定定位
    在使用better-scorll局部滚动后，nav不会再跟随页面滚动，可以不用固定定位 */
    /* position: fixed; 
    top: 0;
    left: 0;
    right: 0; */
    background-color: var(--color-tint);
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    z-index: 9;
  }
  .tab-control {
    position: relative;
    top: -1px;
    z-index: 9;
  }
  /* .tab-control { better-scroll插件的滚动会导致sticky粘性定位失效
    position: sticky;
    top: 43px;
    z-index: 9;
  } */
  /*局部滚动区域高度设置方式一： */
  /* .content {
    height: calc(100% - 49px);
    overflow: hidden;
  } */
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>