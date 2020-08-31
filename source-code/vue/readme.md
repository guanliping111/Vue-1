 diff算法  模板编译  Vnode
 http://hcysun.me/vue-design/zh/essence-of-comp.html
 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？

 1. 前端100问
    Issues
    了解基本的vue/react 源码

    

    1. js文件是一个静态资源 http 1.0  静态资源一定要启动cdn 来获取 => 分成两个域名：静态 动态
        text/js  
        img/png  
        text/html  
        text/css
        
        动态资源  database  服务器压力很大
        TCP 连接 ->  HTTP 请求、响应
        连接上限 多线程(ngnix 用户的服务器代理，有独立的进程) 启动进程  与线程的区别
    2. bootcdn.cn  动态 服务器找数据
        node 读mysql -> template 模板字符串
        用户量和访问量 大后
        ngnix 负责接待客户  ngnix接待的用户访问线程有限
            -> (1) 负载均衡：管理服务器 负载均衡算法 提供空闲服务器分配给你              
            -> (2) proxy 代理端口8080
        分布式 主从关系
        用户怎么会来？  ip地址 => url
        分流 靠cdn  去中央服务器获取静态资源然后 会被缓存在cdn
    动态ip -> computer 电脑 MAC地址
    3. 七层协议
        MAC地址