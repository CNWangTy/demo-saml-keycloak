import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Logout from '@/views/logout/index'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})

router.beforeEach((to,from,next)=>{
  debugger
  // 不是登录界面
  next()
})

export default router

