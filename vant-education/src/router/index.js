import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout/Layout.vue'
// import Header from '@/components/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect:"index",
      children: [{
        path: 'index',
        name: 'index',

        meta: {
          requireLogin: true,
          title: "首页",
        },
        component: () => import('@/pages/index')

      },
      {
        path: 'my',
        name: 'my',

        meta: {
          requireLogin: true,
          title: "我的",
        },
        component: () => import('@/pages/my')

      }]
    },
    {
      path: '/login',
      name: 'login',

      meta: {
        requireLogin: false,
        title: "登录页",
      },
      component: () => import('@/pages/login')


    },
    {
      path: '/guide',
      name: 'guide',

      meta: {
        requireLogin: false,
        title: "引导页",
      },
      component: () => import('@/pages/guide')


    },
    {
      path: '*',
      redirect: '/guide',
    },
  ]
})
