<template>
  <div class="detail-param">
    <table class="info-size" v-for="(table, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramInfo.sets" :key="index">
        <td class="param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image">
      <img src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-param',
  props: {
    paramInfo:{
      type: Object,
      default () {
        return {}
      }
    }
  }

}
</script>

<style scoped>
tr {
  display: inline-block;
  width: 100%;
  border-bottom: 3px solid #eee;
}
td {
  padding: 16px 24px 8px 16px;
  color: #333;
}
.info-size td {
  width: 68px;
  text-align: center;
  white-space: nowrap;
  padding: 16px 16px 8px;
}
.param-key {
  white-space: nowrap;
}
.param-value {
  color: var(--color-high-text)
}
</style>