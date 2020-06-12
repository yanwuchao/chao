import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@views/login')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@views/home/index.vue')
    },
  ]
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to将要访问
  //from从哪里来
  //next去哪儿 是个函数，表示放行
  //next()放行，强制跳转
  if (to.path === '/login')
    return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr)
    return next('/login')
    next()
})
export default router