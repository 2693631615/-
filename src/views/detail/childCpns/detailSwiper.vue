<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in goodsImage" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'detailSwiper',
  props: {
    goodsImage: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,

  },
}
</script>

<style>
.detail-swiper {
  /* height: 360px; */
  overflow: hidden;
}
.detail-swiper img {
  height: 360px;
  width: 100%;
}
</style>