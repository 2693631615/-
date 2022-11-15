export default {
  addgoods (context, payload) {
    // console.log(context);
    return new Promise((resolve) => {
      //1.判断商品列表中是否有重复的商品
      let repeatgoods = context.state.cartList.find(item => item.id === payload.id)
      //2.判断repeatProduct
      if (repeatgoods) {
        // repeatProduct.count += 1
        context.commit('addCount', repeatgoods)
        resolve('加入购物车成功，商品数量+1！')
      } else {
        context.commit('addToCart', payload)
        resolve('新商品已成功加入购物车！');
        // payload.count = 1
        // state.cartList.push(payload)
      }
    })
  }
}