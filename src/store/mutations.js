export default  {
  // addgoods (state, payload) { //已将addgoods方法先发送给actions对象处理，再把
  //处理结果传到mutations让vue-devtool插件监听
  //   // state.cartList.push(payload)
  //   // console.log(payload);
  //   //在cartList数组中保存商品的数据对象方式一：
  //   // let repeatProduct = null
  //   // for(let item of state.cartList) {
  //   //   if (item.id === payload.id){
  //   //     repeatProduct = item;
  //   //   }  
  //   // }
  //   // if(repeatProduct) {
  //   //   repeatProduct.count += 1
  //   // } else {
  //   //   payload.count = 1
  //   //   state.cartList.push(payload)
  //   // }
  //   //在cartList数组中保存商品的数据对象方式二：
  //   //find方法查找数组中是否有重复的商品
  //   let repeatProduct = state.cartList.find(item => item.id === payload.id)
  //   //2.判断repeatProduct
  //   if (repeatProduct) {
  //     repeatProduct.count += 1
  //   } else {
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }
  // }
  addCount (state, payload1) {
    payload1.count += 1
  },
  addToCart(state, payload2) {
    payload2.count = 1
    payload2.checked = true,
    state.cartList.push(payload2)
  },
  checkClick(state, payload) {
    let commodity = state.cartList.find(item => item === payload)
    commodity.checked = !commodity.checked
  }
}