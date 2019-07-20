import Vue from 'vue'
import App from './components/App.vue'
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
