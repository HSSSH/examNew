import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// import { debug } from '@/services/constant';
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;

router.onError((err) => {
    console.log(err);
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
