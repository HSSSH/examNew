import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import store from './store';
import router from './router/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/utils/smc-directives';

Vue.use(ElementUI);

// import { debug } from '@/services/constant';
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
  // 对响应数据做些事
  return response;
}, function (error) {
  // 请求错误时做些事
  if (error.response.status == '401') { // 未登录重定向值登录页面
      router.replace({path: '/login'});
  } else if (error.response.status == '403') {
      router.replace({path: '/login'});
  } 
  return Promise.reject(error);
});

router.onError((err) => {
    console.log(err);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
