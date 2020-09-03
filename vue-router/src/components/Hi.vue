<template>
   <div class="hello">
        <h1>{{ msg }}</h1>
        <!-- 添加子页面 -->
        <router-view class="aaa"></router-view>
  </div>
</template>

<script>
    export default {
         name: 'hi',
        data () {
            return {
                msg: 'Hi, I am guan'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>