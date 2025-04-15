
//防抖函数就是在单位时间内的多次请求只执行最后一次，能够有效节省资源和回流重绘

//关键是if判断是否存在定时器，如果存在定时器则清除定时器然后创建新的定时器，如果本身就没有则直接创建
function debounce(fn, wait) {
  let timer = 0
  return function () {
    if (timer != 0) {
      clearTimeout(timer)
      timer = setTimeout(fn
        , wait)
    } else {
      timer = setTimeout(fn
        , wait);
    }
  }
}
