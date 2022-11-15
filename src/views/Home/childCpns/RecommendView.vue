<template>
  <div class="recommend">
    <div v-for="(item, index ) in recommend" :key="index" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
  </div>
</template>

<script>
export default {
  name: "recommend-view",
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  },
}
</script>

<style>
.recommend {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-bottom: 8px solid #eee ;
}
.recommend-item img{
  height: 80px;
}
.recommend-item div {
  text-align: center;
  margin-top: 10px
}
</style>