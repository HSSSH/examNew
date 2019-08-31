<style src="@/sass/global.scss" lang="scss"></style>
<style lang="scss" scoped>
.notfound {
    margin: 0;
    height: 100%;
    overflow: hidden;
    font-family: "Libre Franklin", sans-serif;
    font-size: 62.5%;
    background-image: linear-gradient(0deg, #e8f4f8, lightblue);
    .sun {
        position: absolute;
        top: 4em;
        left: 4em;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-image: radial-gradient(circle at 50%, #ffffff 50%, #f5de19);
        box-shadow: 0px 0px 40px #f5de19, inset 0px 0px 100px #f5de19;
        animation: sun 5s linear infinite;
    }
    form{
      width: 500px;
      height: 450px;
      background: white;
      box-shadow: 0px 5px 10px 1px #E0E0E0;
      border-radius: 5px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      padding: 50px 20px;
      &>div:first-child{
        height: 74px;
        background: url(../images/login/loginTitle.png) no-repeat center;
        border-bottom: solid 1px #e8e7ef;
        margin-bottom: 15px;
      }
      &>div:nth-child(2),&>div:nth-child(3),&>div:nth-child(4){
        margin: 35px 70px;
      }
      button{
        width: 100%;
        margin-top: 20px; 
      }
    }
    .error{
      color: red;
    }
}
</style>
<template>
<div class="notfound">
	<div class="sun"></div>
  <form role="form">
      <div></div>
      <div>
        <el-input name="username" v-model="username" placeholder="请输入用户名" required="required"></el-input>
      </div>
      <div>
        <el-input placeholder="请输入密码" v-model="password" show-password required="required"></el-input>
      </div>
      <div>
          <el-button type="primary" :loading="loading" @click.prevent="submit">{{loading?'请稍等':'登录'}}</el-button>
          <p class="error" v-if="error">登录账号或密码错误</p>
      </div>
  </form>
</div>
</template>

<script>
    import { login } from '@/api/login';
    export default {
        name: "ControlLogin",
        data: function () {
            return {
                error: false,
                loading:false,
                username:"",
                password:""
            }
        },
        watch: {
        },
        created() {
            let vm = this;
            document.onkeypress = function(e) {
                let code;
                if (!e) {
                    let e = window.event;
                }
                if (e.keyCode) {
                    code = e.keyCode;
                } else if (e.which) {
                    code = e.which;
                }
                if (code == 13) {
                    vm.submit();
                }
            }
        },
        mounted () {
        },
        methods: {
            submit () {
                if (!this.username || !this.password) {
                    this.error = true;
                    return;
                }
                this.loading = true;
                login({
                    username:this.username,
                    password:this.password,
                    loginFrom: 'admin'
                })
                .then(res => {
                    if (res && res.ok == '1')  {
                        this.$router.replace({name: 'ControlApp'});
                    } else {
                        this.error = true;
                    }
                    this.loading = false;
                }, () => {
                    this.error = true;
                    this.loading = false;
                });
            }
        }
    };
</script>