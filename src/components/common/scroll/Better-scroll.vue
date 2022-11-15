<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BetterScroll',
  props: {
    Typenum: {
      type: Number,
      default: 0,
    },
    pullLoad: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // setTimeout(() => { },500)
      //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.Typenum,
      pullUpLoad: this.pullLoad
    })
    //2.监听滚动的坐标位置
    this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
    })
    //3.监听滚动到达底部事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUps')
    })
  },
  // updated () {
  //   this.scroll.refresh()
  // },
  methods: {
    backTop(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      // console.log('refresh');
      this.scroll.refresh()
      this.scroll.finishPullUp()
    }
  },
}
</script>

<style>

</style>