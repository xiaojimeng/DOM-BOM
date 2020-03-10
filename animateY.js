function animate(obj, target,callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    let step = (target - window.pageYOffset) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if (window.pageYOffset == target) {
      clearInterval(obj.timer)
      // 在定时器结束后，如果有回调函数 就调用函数
      callback&& callback()
    } else {
      // obj.style.top = window.pageYOffset + step + "px"//缓速动画
      window.scroll(0,window.pageYOffset + step)
    }
  }, 10)
}