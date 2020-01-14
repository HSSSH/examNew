<style lang="scss" scoped>
.main-page{
    height: 100%;
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
        &>p{
            cursor: pointer;
            position: absolute;
            right: 0;
            bottom: 5px;
            a{
                margin-left: 20px; 
            }
        }
    }
    .aside{
        width: 200px;
        height: calc(100% - 100px);
        display: inline-block;
        vertical-align: top;
        .el-menu{
            height: 100%;
        }
    }
    .main-content{
        display: inline-block;
        vertical-align: top;
        width: calc(100% - 200px);
        height: calc(100% - 100px);
    }
}
</style>
<template>
<div class="main-page">
    <div class="top-part">
        <img src="@/images/index/LOGO.png">
        <p><label>管理员</label><a @click="logout">退出</a></p>
    </div>
    <div class="aside">
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>已测试</span>
                </template>
                <!-- <el-menu-item index="1-1" @click="jumpState('/ctrlApp/ctrlMainPage/paperList')">测试报告</el-menu-item> -->
                <el-menu-item index="1-2" @click="jumpState('/ctrlApp/ctrlMainPage/paperListSimple')">简单报告</el-menu-item>
            </el-submenu>
            <el-menu-item index="2" @click="jumpState('/ctrlApp/ctrlMainPage/docList')">
                <i class="el-icon-setting"></i>
                <span slot="title">试卷</span>
            </el-menu-item>
            <el-menu-item index="3" @click="jumpState('/ctrlApp/ctrlMainPage/userList')">
                <i class="el-icon-setting"></i>
                <span slot="title">用户</span>
            </el-menu-item>
        </el-menu>
    </div>
    <router-view class="main-content"></router-view>
</div>
</template>

<script>
import { logout } from '@/api/login';
export default {
  name: 'ControlMainPage',
  components: {
  },
  data () {
      return {

      }
  },
  created() {
    
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    jumpState(path){
        if(path != this.$route.path) {
            this.$router.push({path: path})
        }
    },
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
