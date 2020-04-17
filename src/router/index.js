import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
// import Users from '@/views/users/List';
Vue.use(Router)

var r = require.context("../views", true, /\.routes\.js/)
var arr = [];
r.keys().forEach((key) => {
  arr = arr.concat(r(key).default);
})

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      // redirect: '/home',
      name: 'Home',
      component: Home,
      children: [
        // {
        // path: '/users',
        // name: 'users',
        // component: Users,
        // }
        ...arr
      ]
    }
  ]
})



// const routerOptions = [
//   { path: '/', redirect: '/index' },
//   { name: 'index',
//     path: '/index',
//     component: 'Index',
//     children: [
//       { name: 'about', path: '/index/about', component: 'About' },
//       { name: '/', path: '/', component: 'HelloWorld' }
//     ]
//   },
//   { name: 'login', path: '/login', component: 'Login' },
//   { name: 'notFound', path: '*', component: 'NotFound' }
// ]
// const routes = routerOptions.map(route => {
//   return {
//     ...route,
//     component: () => import(`@/components/${route.component}.vue`),
//     children: route.children ? route.children.map(item => {
//       return {
//         ...item,
//         component: () => import(`@/components/${item.component}.vue`)
//       }
//     }) : []
//   }
// })
// const router = new Router({
//   routes,
//   mode: 'history'
// })
// 路由的前置守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to, from)
//   // 判断当前访问的路由是否是login，如果是login直接next
//   if (to.name === 'login') {
//     next()
//   } else {
//     // 判断有没有token
//     const token = sessionStorage.getItem('token')
//     if (!token) {
//       // 跳转到登录页面
//       router.push({ path: '/login' })
//       // 提示
//       Vue.prototype.$message({
//         message: '请先登陆!',
//         type: 'warning'
//       })
//       return
//     }
//     next()
//   }
// })
// export default router