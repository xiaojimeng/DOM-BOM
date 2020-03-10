window.addEventListener("load", function () {
    let preview = document.querySelector(".preview_img")
    let mask = document.querySelector(".mask")
    let big = document.querySelector(".big")
    // 1、鼠标经过小盒子，mask和大图片盒子显示，离开隐藏
    preview.addEventListener("mouseover", function () {
        mask.style.display = "block"
        big.style.display = "block"
    })
    preview.addEventListener("mouseleave", function () {
        mask.style.display = "none"
        big.style.display = "none"
    })
    // 2、mask跟随鼠标移动,把鼠标在preview里面的位置给mask
    preview.addEventListener("mousemove", function (e) {
        // 鼠标在盒子中的位置=鼠标在页面的位置-盒子相当于body的偏移量
        let x = e.pageX - this.offsetLeft
        let y = e.pageY - this.offsetTop
        // mask移动的距离
        maskX = x - mask.offsetWidth / 2
        maskY = y - mask.offsetHeight / 2
        // mask不能超出preview，如果小于0，把坐标设置为0
        let maxX = preview.offsetWidth - mask.offsetWidth
        let maxY = preview.offsetHeight - mask.offsetHeight
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= maxX) {
            maskX = maxx
        }
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= maxY) {
            maskY = maxY + "px"
        }
        mask.style.left = maskX + "px"
        mask.style.top = maskY + "px"
        // 3、移动mask,大图片跟随移动
        // mask的移动距离( maskX)/maks的最大移动距离(maxX)= 大图片的移动距离/大图片的最大移动距离
        // 大图片的移动距离=mask的移动距离*大图片最大移动距离/maks的最大移动距离
        let bigImg = document.querySelector(".bigImg")
        let bigMax = bigImg.offsetWidth - big.offsetWidth //大图片的移动距离
        // 大图片的移动距离
        let bigX = maskX * bigMax / maxX
        let bigY = maskY * bigMax / maxY
        bigImg.style.left = -bigX + "px"
        bigImg.style.top = -bigY + "px"

    }


    )

})