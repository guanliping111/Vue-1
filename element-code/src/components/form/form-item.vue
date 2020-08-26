<template>
    <div class="el-form-item" :class="[{
        'el-form-item--feedback' :elForm && elForm.statusIcon,
    }]">

    </div>
</template>

<script>
    export default {
        name: 'ElFormItem',
        data() {
            return {

            }
        },
        inject: ['elForm'],
        props: {

        },
        conputed: {

        },
        created() {

        }
    }
</script>

<style scoped>

</style>