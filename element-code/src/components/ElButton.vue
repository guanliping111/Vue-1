<template>
    <button
        @click="handleClick"
        class="el-button"
        :class="[
        type?'el-button--'+type:'',
        {
            'is-round': round,
            'is-circle': circle
        }
        ]"
    >
        <!-- {{type}} - {{tit}} -->
       <slot></slot>
    </button>
</template>
<script>
// props 检查 结构
// vue 怎么做
export default {
    data() {
        return {
            tit: 'hello'
        }
    },
   props: {
       type: {
           type: String,
           default: 'default'
       },
       round: Boolean,
       circle: Boolean,
   },
   created() {
       console.log(this.type, this.tit)
   },
   methods: {
       handleClick(evt) {
           this.$emit('click',evt);
       }
   }
}
</script>

<style>

</style>