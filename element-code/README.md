1. cnpm install -g @vue/cli    安装vue
2. vue create element-code     创建项目
3. yarn add element-ui -S      引入element-ui

- vue-cli 4. vue3.0 变化太大 拥抱了react
- vue create project-name
    vue 2.0 vue init webpack project-name 传统 现在流行
    vue 3.0 vue create project-name
    - ts
    - PWA 渐进式网页应用
    - Router Vuex 全家桶
    - CSS Pre-processors stylus vw autoprefixer
        编译 sass/stylue 插件 autoprefixer 前缀
        px-vw-   cssnext
    - liner 代码风格确保文件 ; '' "" tab
        eslint 保证大家代码风格都一样
        不用的变量不要定义，要删除干净
        对齐代码
        '' ""
        js的结尾不加;

    - unit Testing  E2E 测试

## 阅读element-ui源码 解析
https://github.com/ElemeFE/element/blob/dev/packages/button/src/button.vue
- Button组件源码分析
    1. 定义组件
    2. <slot></slot>
    3. :class 动态类名 动态绑定属性
    4. @click
    5. type
    6. export default
        props  data 传值 外界传入
        computed 计算属性
        created() 生命周期
        inject