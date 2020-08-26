<template>
    <button
        @click="handleClick"
        class="el-button"
        :disabled="loading"
        :type="nativeType"
        :autofocus="autofocus"
        :class="[
            type ? 'el-button--' + type : '',
            buttonSize ? 'el-button--' + buttonSize : '',
            {
                'is-round': round,
                'is-circle': circle,
                'is-loading':loading,
                'is-disabled': buttonDisabeld,
                'is-plain':plain
            }
        ]"
    >
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon"></i>
        <!-- <slot v-if="!icon"></slot> -->
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
// props 检查 结构
// vue 怎么做
export default {
    name: 'ElButton',
    data() {
        return {
            tit: 'hello',
            // loading: true
        }
    },
    computed: {
        buttonDisabled() {
            return this.disabled
        },
        // 按钮大小
        buttonSize() {
            return this.size    //外界传入
        }
    },
    props: {
        buttonSize: {
            type:String,
            default: ''
        },
        nativeType: {
            type:String,
            default: 'button'
        },
       type: {
           type: String,
           default: 'default'
       },
       round: Boolean,
       circle: Boolean,
       autofocus: Boolean,
       icon: {
           type: String,
           default: ''
       },
       loading: Boolean,
       plain: Boolean
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