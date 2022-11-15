<template>
  <swiper>
    <swiper-item v-for="(item, index ) in banners" :key="index">
      <a :href="item.link" alt="">
        <img :src="item.image" alt="" @load="Swiperload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "home-swiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {
        isload: true,
      }
    },
    components: {
      Swiper,
      SwiperItem,
    },
    methods: {
      Swiperload () {
        if(this.isload){
        this.$emit('Swiperload')
        this.isload = false
        }
      }
    }
  }
</script>

<style>

</style>