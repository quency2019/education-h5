// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import './util/rem';
import http from "axios"
Vue.config.productionTip = false
Vue.use(Vant);
// Vue.use(Vant)
/* eslint-disable no-new */

// router.beforeEach((to, from, next) => {

//   console.log('to', to.path)
//   if (to.meta.requireLogin) {    // 需要登录
//     if(window.localStorage.token){
//       next()
//     }else if (to.path !== '/login'&&to.path !== '/guide'&&to.path !== '/') {
//       let token = window.localStorage.token;
//       if (token === 'null' || token === '' || token === undefined){
//           next({path: '/login',query:{ redirect: from.fullPath }})
//           Vue.$toast({ message: '请先登录', duration: 1500 })
//       }
//     }  else {
//       next()
//     }
//   } else {   // 不需要登录
//     next()
//   }
// })

Vue.prototype.$http=http

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
