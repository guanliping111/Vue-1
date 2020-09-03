<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
   <p>导航 ：
     
      <router-link  to="/qiao">qiao</router-link>
      <router-link to="/">首页</router-link> | 
      <router-link to="/hi">Hi页面</router-link> |
      <router-link :to="{name:'hi1',params:{username:'qiao'}}">Hi页面1</router-link>
      <router-link to="/hi/hi2">-Hi页面2</router-link> |
      <router-link to="/params/2020/title">params</router-link> |
      <router-link to="/bbbbbb">我是瞎写的</router-link> |
    </p>
    <!-- 过渡动画 -->
    <transition name="fade">
      <router-view/>
    </transition>
    
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
