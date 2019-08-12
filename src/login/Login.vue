<style src="@/sass/global.scss" lang="scss"></style>
<style lang="scss" scoped>
.login-body{
  width: 100%;
  height: 100%;
  .top-part{
    width: 80%;
    height: 120px;
    margin: 0 auto;
    img{
      position: relative;
      top:50%;
      transform:translateY(-50%);
    }
    label{
      font-weight: normal;
      display: inline-block;
      margin-left: 30px;
      font-size: 27px;
      color: #268AB2;
      position: relative;
      top: 30px;
    }
  }
  .middle-part{
    width: 100%;
    height: calc(100% - 120px);
    background: url(../images/login/loginBack.jpg)no-repeat center;
    background-size: cover;
    position: relative;
    &>img:nth-child(1),img:nth-child(2){
      position: relative;
      top:50%;
      left: 13%;
      transform:translateY(-50%);
    }
    &>img:nth-child(2){
      margin-left: -260px;
      margin-top: -180px;
    }
    .input-form{
      width: 463px;
      height: 540px;
      background: url(../images/login/3.png)no-repeat center;
      position: absolute;
      top: calc(50% - 270px);
      left: calc(80% - 300px);
      padding: 18px 40px 25px;
      &>div:nth-child(1){
        height: 65px;
        margin-bottom: 5px;
        color: white;
        p{
          display: inline-block;
          width: 50%;
          height: 100%;
          float: left;
          text-align: center;
          margin-bottom: 0;
          &:nth-child(1){
            border-right: solid 1px white;
          }
        }
        span{
          font-size: 29px;
          display: inline-block;
          padding: 8px;
          border-bottom: solid 3px #9E9E9E;
          cursor: pointer;
          &.choose{
            border-bottom: solid 3px #097AB5;
          }
        }
      }
      .login-form{
        width: 100%;
        height: calc(100% - 70px);
        background: white;
        padding: 40px;
        &>p{
          margin-top: 10px;
          a{
            cursor: pointer;
            color: #6A6A6A;
          }
        }
        &.register{
          .input-log{
            margin-bottom: 15px;
          }
          .agree-doc{
            margin-top: 10px;
            input{
              width: 20px;
              height: 15px;
              position: relative;
              top: 3px;
              cursor: pointer;
            }
            a{
              cursor: pointer;
            }
          }
        }
      }
    }
    &>p{
      position: absolute;
      top: calc(50% + 270px);
      left: calc(80% - 200px);
      font-size: 15px;
      color: white;
    }
  }
}
div.input-log{
  height: 42px;
  border: solid 1px #898989;
  margin-bottom: 35px;
  position: relative;
  img{
    position: absolute;
    top: 4px;
    left: 6px;
  }
  input{
    position: absolute;
    left: 40px;
    right: 0;
    width: calc(100% - 40px);
    height: 100%;
    padding: 5px;
    border: none;
    color: #736A6B;
  }
  i{
    position: absolute;
    left: 40px;
    bottom: -20px;
  }
  &.check-code{
    width: 175px;
    input{
      width: 130px;
    }
    canvas{
      position: absolute;
      right: -129px;
      top: -1px;
      border: solid 1px #898989;
    }
  }
}
div.login-submit{
  height: 64px;
  border: solid 2px #898989;
  text-align: center;
  input,button{
    width: 100%;
    height: 100%;
    background: #0C78C3;
    opacity: 0.9;
    font-size: 35px;
    color: white;
    border: none;
    &:hover{
      opacity: 1;
    }
    &.noAllow{
      cursor: not-allowed;
      &:hover{
        opacity: 0.9;
      }
    }
  }
}
</style>
<template>
    <div class="login-body">
        <div class="top-part">
            <a href="/"><img src="@/images/index/LOGO.png"></a>
            <label>登录 | 开启发现之旅</label>
        </div>
        <div class="middle-part">
            <img src="@/images/login/elephant.png">
            <img src="@/images/login/words.png">
            <div class="input-form">
                <div>
                    <p><span @click="state.indexType = 0;firstGetCode();" :class="{'choose':state.indexType == 0}">登录</span></p>
                    <p><span @click="state.indexType = 1" :class="{'choose':state.indexType == 1}">注册</span></p>
                </div>
                <form class="login-form" th:action="@{/login}" method="post" ng-if="state.indexType == 0">
                    <div class="input-log">
                        <img src="@/images/login/iconUser.png"/>
                        <input type="text" name="username" placeholder="请输入手机号" required/>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconPass.png"/>
                        <input type="password" name="password" placeholder="请输入密码" required/>
                    </div>
                    <div class="input-log check-code">
                        <img src="@/images/login/iconPass.png"/>
                        <input type="text" name="checkCode" placeholder="请输入验证码" ng-model="check.inputCode" ng-change="checkCodeValue()" required/>
                        <canvas width="100" height="40" id="randomCode" title="看不清，换一张" @click="getRandomCode()"></canvas>
                        <i ng-if="check.showWrong" class="error">验证码错误</i>
                    </div>
                    <div class="login-submit">
                        <input id="loginBt1" type="submit" value="登录" ng-disabled="check.inputCode.toLowerCase() !== check.generateCode" :class="{'noAllow':check.inputCode.toLowerCase() !== check.generateCode}"/>
                    </div>
                    <i th:if="${param.error}" class="error">登录账号或密码错误</i>
                    <p><a>忘记密码?</a></p>
                </form>
                <form class="login-form register" name="registerForm" ng-if="state.indexType == 1">
                    <div class="input-log">
                        <img src="@/images/login/iconUser.png"/>
                        <input type="text" ng-model="reg.region" name="region" placeholder="请输入校区" required/>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconUser.png"/>
                        <input type="text" ng-model="reg.name" name="name" placeholder="请输入考生姓名" required/>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconUser.png"/>
                        <input type="text" ng-model="reg.username" name="regName" placeholder="请输入手机号" ng-change="checkUser()" required/>
                        <i ng-if="check.userAlready" class="error">该号码已使用</i>
                    </div>
                    <!--<div class="input-log">-->
                        <!--<img src="@/images/login/iconUser.png"/>-->
                        <!--<input type="text" ng-model="reg.phone" name="regPhone" placeholder="请输入手机号" ng-change="checkPhone()" required/>-->
                        <!--<i ng-if="check.phoneAlready" class="error">该号码已使用</i>-->
                    <!--</div>-->
                    <div class="input-log">
                        <img src="@/images/login/iconPass.png"/>
                        <input type="password" ng-model="reg.password" name="regPass" placeholder="请设置密码(6-16位)" required/>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconPass.png"/>
                        <input type="password" ng-model="reg.passwordConfirm" name="regPassConfirm" placeholder="确认密码" required ng-change="checkConfirm()"/>
                        <i ng-if="check.checkPassWrong" class="error">确认密码不相同</i>
                    </div>
                    <div class="login-submit">
                        <button id="regButton" ng-disabled="registerForm.$invalid || reg.password != reg.passwordConfirm || check.userAlready"
                                :class="{'noAllow':registerForm.$invalid || reg.password != reg.passwordConfirm || check.userAlready}" @click="registerNew()">
                            注册
                        </button>
                    </div>
                    <!--<div class="agree-doc"><input type="checkbox" ng-model="reg.agreeReg"/>已阅读并同意<a>《网站注册及用户协议》</a></div>-->
                </form>
            </div>
            <p>Copyright ©爻象教育 版权所有2018</p>
        </div>
    </div>
</template>

<script>
    import { login } from '@/api/login';
    export default {
        name: "Login",
        data: function () {
            return {
                error: false,
                loading: false,
                single:false,
                username:"",
                pwd:""
            }
        },
        watch: {
        },
        mounted () {
            // this.getlocalStorage()          
        },
        methods: {            
            submit () {
                if (!this.$refs.loginUsername.value || !this.$refs.loginPassword.value) {
                    this.error = true;
                    return;
                }
                this.loading = true;
                 
                login({
                    username:this.$refs.loginUsername.value,
                    password:this.$refs.loginPassword.value
                })
                .then(res => {
                    if (res && res.ok == '1')  {
                        this.$router.replace({name: 'SiteManage'});
                    } else {
                        this.error = true;
                        this.loading = false;
                    }
                }, () => {
                    this.error = true;
                    this.loading = false;
                });
                if(this.single == true){
                    this.setlocalStorage(this.$refs.loginUsername.value,this.$refs.loginPassword.value,this.single);
                }else{
                    this.clearlocalStorage()
                }
            },
            /*goRegister(){
                this.$router.push({name:'Register'})
            },*/
            setlocalStorage(name,pwd,status){
                localStorage.setItem("name",name);
                localStorage.setItem("pwd",pwd);
                localStorage.setItem("status",status);
            },
            getlocalStorage(){
              this.username =  localStorage.getItem("name");
              this.pwd =  localStorage.getItem("pwd");
              if(localStorage.getItem("status")){this.single = true }
               
            },
           clearlocalStorage(){
               this.single = false;
               localStorage.clear() ;
           }
        }
    };
</script>