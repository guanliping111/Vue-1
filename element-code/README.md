1. cnpm install -g @vue/cli    安装vue
2. vue create element-code     创建项目
3. yarn add element-ui -S      引入element-ui

- vue-cli 4. vue3.0 变化太大 拥抱了react
- vue create project-name  创建项目
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
    2. <slot>  插槽
        - vue里提供了一种将父组件的内容和子组件的模板整合的方法：内容分发，通过slot插槽来实现。
        - 插槽用于决定将所携带的内容，插入到指定的某个位置，从而使模板分块
        - 插槽显不显示、怎样显示是由父组件来控制的，而插槽在哪里显示就由子组件来进行控制
    3. :class 动态类名 动态绑定属性
    4. @click
    5. type
    6. export default
        props  data 传值 外界传入
        computed 计算属性 设置阈值
        created() 生命周期
        inject

## react和vue的区别
vue比react多了一个 计算属性的API computed，react没有
vue API特别友好 好入门 渐进式
react组件化 没必要计算属性
研究vue的源码分析： Badge 标记属性
