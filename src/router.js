import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const login = (r) => require(['@/views/login'], r)
const homeIndex = (r) => require(['@/components/homePage/index'], r)

Vue.use(Router)

export default new Router({
  // mode: 'history', //此标识路由地址是否存在井号，设置则无 特别提醒：开启mode="history"模式，需要服务端的支持，因为出现“刷新页面报错404”的问题；
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      // name: 'Home', //警告无需命名  有默认名称
      component: Home,
      children: [
        {
          path: '/',
          name: 'homeIndex',
          component: homeIndex
        },
        {
          path: 'about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
          path: 'testpage01',
          name: 'testpage01',
          component: (r) => require(['@/components/testPage/testpage01'], r)
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
