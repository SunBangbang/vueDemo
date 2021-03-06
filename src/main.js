// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import MyHttp from '@/plugins/MyHttp';
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.css'
//过滤器,格式化日期字符串
Vue.filter('fmtDate',(value,fmtStr) => {
  return moment(value).format(fmtStr);
});

Vue.config.productionTip = false
// 注册插件ElementUI
Vue.use(ElementUI);
// 注册MyHttp插件
Vue.use(MyHttp);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
