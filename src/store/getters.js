export default {
  goodscount (state) {
    return state.cartList.length
  },
  goodsList (state) {
    return state.cartList
  }
}