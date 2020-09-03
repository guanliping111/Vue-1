import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)  //Vue全局使用Router

export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接_都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    },
    {
      path: '/hi',
      name:'hi',
      component: Hi,
      alias: '/qiao',
      children:[
        {path:'/',component:Hi},
        {path:'hi1',component:Hi1},
        {path:'hi2',component:Hi2},
      ]
    },
    {
      path:'/hi1',
      name:'hi1',
      component:Hi1
    },
    {
      path:'*',
      component:Error
   }
  ]
})

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       components: {
//         default:Hello,
//         left:Hi1,
//         right:Hi2
//       }
//     },{
//       path: '/Hi',
//       components: {
//         default:Hello,
//         left:Hi2,
//         right:Hi1
//       }
//     },
//     {
//       path:'/params/:newsId(\\d+)/:newsTitle',
//         component:Params
//     },{
//       path:'/goParams/:newsId(\\d+)/:newsTitle',
//       redirect:'/params/:newsId(\\d+)/:newsTitle'
//     }
//   ]
// })