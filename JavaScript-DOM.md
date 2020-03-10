# JavaScript
# 获取元素
  document.getElementById("id名")
  document.getElementsByTagName("标签名") 伪数组形式存储,没有返回[]
  document.getElementsByClassName("class名") 伪数组形式存储，没有返回[]
  document.querySelector("选择器") 返回的是第一个,没有返回null
  document.querySelectorAll("选择器") 返回的是所有选择器,伪数组形式存储，没有返回[]
  获取body元素：document.body
  获取html元素：document.documentElement
# 事件  
    1、事件三要素：
      事件源，事件类型，事件处理程序
    2、常见鼠标事件
      onclick
      onmouseover
      onmouseout
      onmousemove
      onmouseup
      onmousedown
      onfoucs 获取鼠标焦点
      onblur 失去鼠标焦点  
 # 改变元素内容
  element.innerText=xxx 从起始位置到终止位置的内容（去除html标签，同时空格和换行也会去掉）
  element.innerHTML=xxx 从起始位置到终止位置的内容（包括HTML标签，同时保留空格和换行）
  2、src,href
  3、id，alt,title      
# 修改表单属性：
      表单属性：type,value,checked,selected,disabled
      element.value="新的值"
      注意this指向的是事件函数的调用者

# 样式属性操作
    element.style.属性="值"   (属性采用驼峰命名法) 改的是行内样式
    element.className="class名"  会覆盖掉原来的类名
    如果想保留原来的
    element.calssName="原来的类名 添加的类名"   

# 自定义属性
        1、获取元素属性
            element.属性   只能获取内置属性
            element.getAttribute("属性") 可以获取内置和自定义的属性
        2、设置元素的属性值
            element.属性="值"
            element.setAttribute("属性","值") 当值是数字时可以直接写
        3、移除属性
             element.removeAttribute("属性")
        4、设置自定义属性：data-自定义属性=""  
            下面的自定义属性必须是 data-属性  格式的
            element.dataset.自定义属性 (i-11才支持)
            element.dataset["自定义属性"]  (i-11才支持)
            获取时属性采用驼峰命名法    

# 三种动态创建元素的区别
    1、document.write("标签及内容")  当文档流执行完毕，才执行它 它会导致页面重绘
    2、element.innerHTML() 利用for创建多个效率高（不要拼接字符串,采用数组格式）
    3、document.createElement("标签名") 用for创建多个效率稍低 

# 节点操作
    作用：利用节点层级来获取元素............
    1、节点组成：nodeType,nodeName,nodeValue
    元素节点：nodeType为1
    属性节点：nodeType为2
    文本节点:nodeType为3（包括文字，空格，换行等）
    2、父级节点: node.parentNode 亲父亲，找不到返回null
    3、子节点：
      node.childNodes  所有的子节点包括元素节点文本节点
      node.children 所有的子元素节点
      node.firstChild 第一个子节点 不管是元素节点还是文本节点
      node.lastChild  最后一个子节点 不管是元素节点还是文本节点
      node.firstElementChild 第一个子元素节点 ie9
      node.lastElementChild 最后一个子元素节点 ie9
      实际常用：node.children[i] 第i-1个子元素节点
      node.children[node.children.length-1] 最后一个子元素节点
    4、兄弟节点 （找不到返回null）
      node.nextSibling 下一个兄弟节点
      node.previousSibling 前一个兄弟节点
      node.nextElementSibling 下一个兄弟元素节点
      node.previousElementSibling 前一个兄弟元素节点
    5、创建节点：document.createElement("标签名")
    6、添加节点
      node.appendChild(添加的节点) 添加在node最后
      node.insertBefore(添加的节点,指定元素) 添加在node中指定元素前面
    7、删除节点
      node.removeChild(要移除的节点)
    8、阻止链接跳转:href='javascript:;' 或 href='javascript:void(0)'
    9、复制节点:
     node.cloneNode() 或 node.cloneNode(false) 克隆节点本身，不克隆里面的节点
     node.cloneNode(true)复制全部

# JavaScript事件
    1、注册事件
        传统：element.onclick=function() {} 只能添加一个事件
        方法监听：elemenet.addEventListener("事件",function() { }) 可以添加多个事件（事件处理程序）
        事件监听方式（很很很少用） element.attachEvent("onclick",function() {}) ie9以前的版本
    2、删除事件
        传统 : element.onclick=null
        element.removeEventListener('事件',绑定事件里面的回调函数)
        element.detachEvenet("onclick",绑定事件里面的回调函数)
    3、DOM事件流
        捕获阶段过程：document ->html ->body ->targetElement
        冒泡阶段过程：targetElement ->body ->html ->document
        注意：传统和attachEvent只能得到冒泡阶段
        捕获阶段: elemenet.addEventListener("事件",function() { },true)
        冒泡阶段:elemenet.addEventListener("事件",function() { },false)
        !!!!! onblur,onfocus.onmouseenter,onmouseleave 这些事件是没有冒泡的
    4、事件对象
       1、 elemenet.addEventListener("事件", function (e) {console.log(e); e就是事件对象}
          (ie678 window.event 来获取事件对象 )
       2、事件对象常见方法和属性：
            e.target 触发事件对象 （  e.srcElement ie678用）
            e.type 事件类型
            e.preventDefault()阻止默认行为  （ e.returnValue ie678用）  （ 传统注册还能用 return false 阻止默认行为)
            e.stopPropagation() 阻止冒泡 （e.cancelBubble=true ie678用）
    5、阻止事件冒泡
        e.stopPropagation() 阻止冒泡 （e.cancelBubble=true ie678用）
    6、事件委托(事件代理)
     作用：只操作了一次DOM ,提高程序的性能
    7、常用鼠标事件
      contextmenu 禁止鼠标右键菜单
      selectstart 禁止鼠标选中
    8、常用键盘事件
      keyup,keydown,keypress //keypress不能识别功能键 如ctrl,shift
    9、鼠标事件对象
      e.clientX 鼠标相当于可视窗口的x坐标
      e.pageX 鼠标相当于文档页面的x坐标
      e.screenX 鼠标相当于电脑屏幕的x坐标
    10、键盘事件对象  
        e.keyCode 键盘对应ASCII吗 (keyup事件中；大小写字母一样，keypress区分大小写)
        获取焦点element.focus()

# BOM（浏览器对象模型）
  window包括：document,location,navigation,screen,history
  1、窗口加载事件
    window.onload=function() {} 
    window.addEventListener("load",function() {})
    window.addEventListener("DOMContentLoaded",function() {}) 仅当DOM文档加载完成，不包括样式，图片，flash
  2、调整窗口大小事件
    window.onresize=function() {} 
    window.addEventListener("resize",function() {})
  3、两种定时器
    1、setTimeout(function() {},延迟的毫秒数) 或 setTimeout(fn ,延迟的毫秒数)  只执行一次
    停止定时器：clearTimeout(定时器的名字)
    2、 setInterval(function() {},延迟的毫秒数) 执行多次，到间隔时间就去执行
    停止定时器：clearInterval(定时器的名字)
  4、this指向
    0、一般this指向调用它的对象
    1、全局作用域或者普通函数里面的this 指向window (定时器里面的this指向window)
    2、方法调用中谁调用this，this指向谁
    4、构造函数中的this指向构造函数的实例
  5、JS执行机制
    * js是单线程的 效率低
    * 解决：同步，异步
    * 常见异步任务：
        1、普通事件，如click，rezise
        2、资源加载，如load,error
        3、定时器，setTimeout,setInterval
    * 先执行同步任务，把异步任务放入任务队列，所有同步任务执行完毕，，在去依次读取任务队列中的异步任务    
  6、location对象
      1、location的属性：
          location.href 整个url
          location.host
          location.port
          location.pathname 路径
          location.search 参数
          location.hash 返回片段 #之后的内容
      2、location的方法
        location.assing() 重向页面 （记录历史）
        location.replace() 替换当前页面，不记录历史
        location.reload() 重新加载页面，相当于刷新或f5;(如果参数为true,强制刷新；ctrl+f5)
  7、navigator对象
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location.href = ""; //手机
        }else{
            window.location.href = ""; //电脑
        }
  8、history对象
      history对象的方法
          history.back()
          history.forward()
          history.go()   
# 网页特效
    1、offset 元素偏移量
      offsetTop,
      offsetLeft 元素相当于带有定位父级的偏移量,没有定位或父亲，以body为准
      offsetWidth,  padding + border + height，
      offsetHeight  padding + border + widht，
      offsetParent  返回带有定位的父亲，否则返回的是body
      ** 获取元素大小用offset，改变元素大小用style style只能读行内样式,改变盒子的位置style.left ,style.top
      鼠标在页面中的坐标：e.pageX,e.pageY
      鼠标在box中的坐标=e.pageX-box.offsetLeft
  2、client 可视区域
      clientTop     元素上边框的大小
      clientLeft    元素左边框的大小
      clientWidth   width + padding
      clientHeight  height + padding
  3、scroll 
      scroll.Top    元素被卷去的上侧距离
      scroll.Left   元素被卷去的左侧距离
      scroll.Width  width+padding(里面内容超出也算入)
      scroll.Height height+padding(里面内容超出也算入)
  4、页面被卷
      window.pageYOffset 页面被卷去的头部
      window.pageXOffset 页面被卷去的左侧  
    页面被卷去的头部：window.pageYOffset|| document.documentElement.scrollTop||document.body.scrollTop||0   
  5、mouseenter 和mouseover 的区别
      mouseenter 只有经过自身盒子才会触发
      mouseover 鼠标经过自身和子元素都会触发
# 移动端动画
  1、touch触摸事件
      touchstart 手指触摸到时触发
      touchmove 手指上滑时触发
      touchend 手指离开时触发
  2、触发事件对象
      e.touches
      e.targetTouches （常用）
      如果监听的是一个DOM元素   e.touches和e.targetTouches结果一样
      e.changedTouches
      手指离开时：没有 e.touches和e.targetTouches
      e.targetTouches[0]  当前触摸的DOM 元素的一个手指的相关信息
  3、移动端拖动元素
    移动端拖拽原理： 手指移动的位置+盒子原来的位置=盒子现在的位置
    手指移动的距离=手指滑动中的位置-手指刚开始触摸的位置
    注意：手指移动会触发滚到屏幕，所以要阻止默认的屏幕滚到 e.preventDefault();  
    4、移动端解决click延迟300ms
     （1）<meta name="viewport" content="suer-scalable=no"> 
     （2） 利用touch事件（手指离开屏幕的时间-手指触摸屏幕的时间；如果小于150ms,并且没有滑动屏幕，就定义为点击）
     （3） 使用插件，fastclick    
            if ('addEventListener' in document) {
                  document.addEventListener('DOMContentLoaded', function() {
                      FastClick.attach(document.body);
                  }, false);
              }
              // 引入fastclick.js,同时复制上面的代码，下面正常注册click事件不会有延迟问题      
# 本地存储
    1、特性:只能存储字符串,页面刷新数据不丢失,
    2、window.sessionStorage (生命周期为关闭浏览器窗口，键值对形式存储,当前页面都可以使用数据)
      (1) sessionStorage.setItem("key", value) 存储数据
      (2)  sessionStorage.getItem("key")       获取数据
      (3) sessionStorage.removeItem("key")     删除数据
      (4)   sessionStorage.clear()             清空所有数据
    3、、window.localStorage (关闭浏览器数据也在，键值对形式存储,多个窗口都可以使用数据)
    (1) localStorage.setItem("key",value) 存储数据
     (2)localStorage.getItem("key")       获取数据
     (3)localStorage.removeItem("key")    删除数据
     (4)localStorage.clear()             清空所有数据     