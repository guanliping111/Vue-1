https://jspang.com/detailed?id=25#toc26
## vue-router路由
- vue-router 配置子路由
- vue-router 如何传递参数
    1. 用name传递参数
    2. 通过<router-link> 标签中的to传参

    利用url传参
    1. 在配置文件里以冒号的形式设置参数

- redirect基本重定向
**redirect和alias的区别**

redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。
alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。

- 路由有过渡动画
**css过渡类名:** 组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：

1. fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
2. fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
3. fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
4. fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
  - 过渡模式mode：
   in-out:新元素先进入过渡，完成之后当前元素过渡离开。
   out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。

- mode和404
**mode的两个值**
1. histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/，也好看！

2. hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。
**404页面的设置**


### keepAlive 性能优化
    组件加载时先不卸载 以免重复渲染

