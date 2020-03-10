function animate(obj, target,callback) {
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    let step = (target - obj.offsetLeft) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer)
      // 在定时器结束后，如果有回调函数 就调用函数
      // if(callback){
      //   callback()
      // }
      callback&& callback()
    } else {
      obj.style.left = obj.offsetLeft + step + "px"//缓速动画
    }
  }, 10)
}