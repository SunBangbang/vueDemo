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
console.log(arr)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
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
