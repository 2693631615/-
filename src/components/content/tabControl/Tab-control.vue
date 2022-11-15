<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :key="index"
    @click="tabClick(index)" :class="{active: index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-control",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index)
    }
  }

}
</script>

<style>
.tab-control {
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
.tab-control-item span {
  padding: 5px;
  font-size: 16px;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>