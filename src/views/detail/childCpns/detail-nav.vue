<template>
  <!-- <div> -->
    <nav-bar class="detail-nav">
      <img slot="left" class="back-arrow" src="~assets/img/common/back.svg" 
      alt="" @click="backClick">
      <div slot="center" class="detail-title"  v-for="(item, index) in titles" 
      :key="item" @click="titleClick(index)" :class="{active: titleIndex === index}"
      >{{item}}</div>
    </nav-bar>
</template>

<script>
import navBar from 'components/common/navbar/nav-bar';
export default {
  name: 'detail-nav',
  data() {
    return{
      titles: ['商品', '参数', '评论', '推荐'],
      titleIndex: 0,
    }
  },
  components: {
    navBar,
  },
  methods: {
    backClick() {
      this.$router.go(-1)
    },
    titleClick (index) {
      this.titleIndex = index
      this.$emit('titleClick', index)
    },
  }
}
</script>

<style>
.detail-nav .center {
  display: flex;
}
.back-arrow {
  margin-top: 10px
}
.detail-title{
  font-size: 18px;
  margin-right: 16px;
}
.active {
  color: var(--color-tint);
}

</style>