import axios from 'axios';
// import { Loading, Message } from 'element-ui';

const MyHttp = {};
// vue的插件  必须有一个公共的install方法
MyHttp.install = function (Vue) {
  // 设置baseURL
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

  // // 创建自定义的axios实例
  // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  // const instance = axios.create({
  //   baseURL: '/api'
  // })

  // // Add a request interceptor
  // // 添加请求的拦截器
  // instance.interceptors.request.use(function (config) {
  //   // 请求被发送之前要做的处理
  //   // Do something before request is sent
  //   // console.log('拦截器', config);
  //   // console.log(config.headers);
  //   // console.log(config.url);
  //   // 判断当前请求的地址是否是login
  //   if (config.url.toLowerCase() !== 'login') {
  //     const token = sessionStorage.getItem('token')
  //     // 如果请求的地址不是login，设置token
  //     config.headers.Authorization = token
  //   }
  //   return config
  // }, function (error) {
  //   // Do something with request error
  //   return Promise.reject(error)
  // })

  // // Add a response interceptor
  // // 添加响应的拦截器
  // instance.interceptors.response.use(function (response) {
  //   // Do something with response data
  //   response = response.data
  //   return response
  // }, function (error) {
  //   // Do something with response error
  //   if (error.response) {
  //     switch (error.response.status) {
  //       case 401:
  //         // 这里写清除token的代码
  //         router.replace({
  //           path: 'login',
  //            // 登录成功后跳入浏览的当前页面
  //           query: { redirect: router.currentRoute.fullPath }
  //         })
  //     }
  //   }
  //   return Promise.reject(error)
  // })
  // Vue.prototype.$http = instance

  Vue.prototype.$http = axios;

}

export default MyHttp;
