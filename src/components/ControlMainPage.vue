<style lang="scss" scoped>
.main-page{
    .top-part{
        width: 70%;
        height: 100px;
        margin: 0 auto;
        position: relative;
        text-align: center;
        z-index: 4;
        &>img{
            width: 180px;
            height: 70px;
            position: absolute;
            left: 0;
            top: 25px;
        }
        &>a{
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 15px;
        }
    }
}
</style>
<template>
<div class="main-page">
    <div class="top-part">
        <img src="@/images/index/LOGO.png">
        <a @click="logout">退出</a>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import { logout } from '@/api/login';
export default {
  name: 'ControlMainPage',
  components: {
  },
  data () {
      return {}
  },
  created() {
    
  },
  methods: {
    logout(){
      logout().then((res) => {
          if (res && res.ok == '1') {
              this.$router.replace({name: 'ControlLogin'});
          } else {
            this.$alert((res&&res.msg) || '登出失败！', '提示', {
                confirmButtonText: '确定',
                callback: () => {
                }
            })
          }
      }).catch(() => {
          this.$alert((res&&res.msg) || '登出失败！', '提示', {
              confirmButtonText: '确定',
              callback: () => {
              }
          })
      })
    }
  }
}
</script>
