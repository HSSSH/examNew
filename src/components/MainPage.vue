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
    &>ul{
      display: inline-block;
      text-align: center;
      width: auto;
      margin-top: 45px;
      li{
        display: inline-block;
        cursor: pointer;
        &>a{
          display: inline-block;
          font-size: 17px;
          padding: 15px 10px;
          color: #0A7AA8;
          text-decoration: none;
          &.router-link-exact-active{
            background: #E8E8E8;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
        }
      }
    }
    &>div{
      display: inline-block;
      position: absolute;
      width: auto;
      color: #0A7AA8;
      font-size: 17px;
      right: 0;
      bottom: 0;
      padding: 16px 0;
      cursor: pointer;
      ul{
        display: none;
      }
      &:hover{
        ul{
          cursor: pointer;
          display: block;
          position: absolute;
          width: 90px;
          right: calc(50% - 45px);
          top: 54px;
          li{
            background: white;
            padding: 5px 0 ;
            border-bottom: solid 1px gray;
            &:last-child{
              border-bottom: none;
              border-bottom-left-radius: 4px;
              border-bottom-right-radius: 4px;
            }
          }
        }
      }
    }
  }
  .content-part{
    width: 100%;
  }
}
</style>
<template>
<div class="main-page">
    <div class="top-part">
        <img src="@/images/index/LOGO.png">
        <ul>
            <li v-for="(item,index) in menuList" :key="index">
              <router-link :to="item.link">
                  {{item.name}}
              </router-link>
            </li>
        </ul>
        <div>
            {{currentUser.name}},欢迎你
            <ul>
                <li @click="goSinglePage">个人主页</li>
                <li><a @click="logout">退出</a></li>
            </ul>
        </div>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import { logout } from '@/api/login';
export default {
  name: 'MainPage',
  components: {
  },
  data () {
      return {
        currentUser: this.$store.state.loginUser,
        menuList:[
          {
              name: '首页',
              link: '/app/mainPage/home',
          }, {
              name: '能力测评',
              link: '/app/mainPage/abilityTest',
          }, {
              name: '最新动态',
              link: '/app/mainPage/news',
          }, {
              name: '关于我们',
              link: '/app/mainPage/aboutUs',
          }, {
              name: '联系我们',
              link: '/app/mainPage/contactUs',
          }
        ]
	    }
  },
  created() {
  },
  methods: {
    goSinglePage(){
      this.$router.push({name: 'UserPage'});
    },
    logout(){
      logout().then((res) => {
          if (res && res.ok == '1') {
              this.$router.replace({name: 'Index'});
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
