<template>
  <div class="hello">
    <Id-badge :value="12" class="item" :max=9 :hidden="isHidden">
      <el-button size="small">评论</el-button>
    </Id-badge>
    <!-- <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge is-dot class="item">数据查询</el-badge> -->
  </div>
</template>

<script>
import IdBadge from '@/components/IdBadge.vue';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = true
    },3000)
  },
  components: {
    "Id-badge":IdBadge
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>