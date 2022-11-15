<template>
  <!-- 当组件的tab-bar-item处于活跃状态时，标签的图片和文字都变成红色 -->
      <div class="tab-bar-item" @click="tabClick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else name="item-icon-active"></slot>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>
export default {
  props: {
    Path: String,
    activeColor: {
      type: String,
      default: 'red',
    }
  },
  data() {
    return {
      // isActive: false,
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.Path
    },
    //根据需求动态改变组件的文字颜色
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    tabClick () {
    this.$router.replace(this.Path, ()=>{})
    }
  },
}
</script>

<style>
.tab-bar-item {
  font-size: 14px;
}
.tab-bar-item img {
  width: 100%;
  height: 24px;
  margin: 2px 0;
  vertical-align: middle; 
  /* vertical-align将图片默认的外边距去除掉 */
}
</style>