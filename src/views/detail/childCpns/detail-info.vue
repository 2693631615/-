<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goods-desc">
      <div class="left-line"><div class="left-dot"></div></div>
      <div class="content-desc">{{goodsDesc}}</div>
      <div class="right-line"><div class="right-dot"></div></div>
    </div>
    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <div class="info-title">{{item.key}}</div>
      <div class="info-list" v-for="(Image, index) in item.list" :key="index">
        <img :src="Image" alt="" @load="Imageinfo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-info",
  props: {
    detailInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    goodsDesc: {
      type: String,
      default: ' ',
    }
  },
  methods: {
    Imageinfo () {
      this.$bus.$emit('Imageinfo')
    }
  }

}
</script>

<style scoped>
.goods-desc {
  padding: 20px 12px;
}
.left-dot, .right-dot{
  position: relative;
  top: -2px;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #333;
}
.left-line, .right-line {
  width: 80px;
  height: 1px;
  background-color: #666;
}
.right-dot {
  position: relative;
  right: -80px;
}
.right-line {
  position: relative;
  right: -270px;
}
.content-desc {
  font-size: 20px;
  line-height: 24px;
  padding: 12px 0;
  color: #333;
}
.info-title {
  color:#333;
  font-size: 18px;
  padding: 8px 12px;
  font-weight: 800;
}
.info-list img {
  width: 100%;
  height: auto;
}
</style>