import axios from "axios";
export function request(config) {
  //1.创建axios的实例
const instance = axios.create({
  baseURL: 'http://152.136.185.210:7878/api/hy66',
  timeout: 5000
})
// 2.axios的拦截器 interceptors(拦截机)
instance.interceptors.request.use(config => {
  return config  //把处理完的请求信息返回外部，继续向服务器发送请求信息
}, err => { //请求失败信息拦截
  console.log(err)
})
//响应拦截器
instance.interceptors.response.use(res => { // 服务器响应成功返回请求数据拦截
  return res.data //将服务器响应的返回信息的data数据返回外部进行展示
}, err => { //服务器响应失败信息拦截
  console.log(err);
})

// 3.发送网络请求
return instance(config)
}