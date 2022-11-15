import { request } from "./request";
export function Homedata () {
  return request({
    url: './home/multidata'
  })
}
export function Homegoodsdata (type, page) {
  return request({
    url: './home/data',
    params: {
      type,
      page,
    }
  })
}