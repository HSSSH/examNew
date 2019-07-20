<style>
</style>
<template>
  <div>
  <ol class="breadcrumb">    
    <li><router-link to="/sock">测试1</router-link></li>
    <li><router-link to="/authox">测试2</router-link></li>
    <li><router-link to="/page">测试3</router-link></li>
  </ol>
  <router-view></router-view></div>
</template>

<script>
import router from '../router/index.js'
export default {
  name: 'App',
  router,
  components: {
  }
}
</script>
