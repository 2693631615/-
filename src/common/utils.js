 // 封装防抖函数
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
export function formatDate (date, fmt) {
    const opt = {
      'y+': date.getFullYear().toString(), // 年
      'M+': (date.getMonth() + 1).toString(), // 月
      'd+': date.getDate().toString(), // 日
      'h+': date.getHours().toString(), // 时
      'm+': date.getMinutes().toString(), // 分
      's+': date.getSeconds().toString() // 秒
    }
    for (const k in opt) {
      const ret = new RegExp('(' + k + ')').exec(fmt)
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) 
        : (opt[k].padStart(ret[1].length, '0')))
      }
    }
    return fmt
  }

// export function formatDate(date, fmt) {
//   //获取年份
//   // y+ 获取1个或者多个y  y*获取0个或者多个y  y?获取0个或者1个y
//   if(/(y+)/.test(fmt)) {
//     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').slice(4- RegExp.$1.length));
//   }
//   //获取月份 天数 时 分 
//   let o = {
//     'M+': date.getMonth() + 1,
//     'd+': date.getDate(),
//     'h+': date.getHours(),
//     'm+': date.getMinutes(),
//     's+': date.getSeconds(),
//   };
//   for (let k in o) {
//     if(new RegExp(`(${k})`).test(fmt)) {
//       let str = o[k] + '';
//       fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
//     }
//   }
//   return fmt;
// }
// function padLeftZero (str) {
//   return ('00' + str).slice(str.length);
// }