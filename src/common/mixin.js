import { debounce } from "./utils"

export const ListenerMinx = {
  data () { //将data中定义的变量插入到引入组件的data对象里，当成组件定义的变量使用
    return {
      // ImgListener: null,
      getpositionY: null,
    }
  },
  created () { //将特定组件的DOM结构对应的offsetTop值传入数组中保存
    this.getpositionY = debounce(() => { 
      if(this.$refs.recommend) {
      // console.log(this.$refs.recommend.$el.offsetTop-44);
      // console.log(this.$refs.recommend.$el); //$el获取的是整个组件的DOM结构
      this.positionY.push(0)
      this.positionY.push(this.$refs.param.$el.offsetTop-44)
      this.positionY.push(this.$refs.comment.$el.offsetTop-44)
      this.positionY.push(this.$refs.recommend.$el.offsetTop-44)
      }
    }, 100)
  },
  mounted () { // mixin方法 ,可以将mounted函数的执行代码插入到引入组件的mounted生命周期函数中
    let newrefresh = debounce(this.$refs.Scroll.refresh, 100)
    this.ImgListener = () => {
      newrefresh()
      if (this.$route.path.indexOf('/detail') !== -1){
        this.getpositionY()
      }
      // console.log('itemImgLoad');
    }
    this.$bus.$on('itemImgLoad', this.ImgListener)
  }
}
import BackTop from 'components/content/Backtop/Back-top';
export const backTopMinx = {
  data () {
    return {
      isShow: false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    backClick () {
      this.$refs.Scroll.backTop(0, 0, 500)
    },
  }
}