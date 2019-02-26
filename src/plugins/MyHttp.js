import axios from 'axios';
// import { Loading, Message } from 'element-ui';

const MyHttp = {};
// vue的插件  必须有一个公共的install方法
MyHttp.install = function (Vue) {
  // 设置baseURL
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

  Vue.prototype.$http = axios;

}

export default MyHttp;
