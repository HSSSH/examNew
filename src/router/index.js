import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import Sock from '@/components/Sock'
import Myauthox from '@/components/Authox'
import Page from '@/components/Page'

Vue.use(Router);
Vue.use(iview);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/sock',
      name: 'Sock',
      component: Sock
    },
    {
      path: '/authox',
      name: 'Myauthox',
      component: Myauthox,
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    }
  ]
})
