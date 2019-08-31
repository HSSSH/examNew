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
    .random-code{
      position: absolute;
      right: -129px;
      top: -1px;
      border: solid 1px #898989;
    }
  }
}
div.login-submit{
  height: 64px;
  text-align: center;
  input,button{
    width: 100%;
    height: 100%;
    background: #0C78C3;
    font-size: 35px;
    color: white;
    border: none;
    &:hover{
      opacity: 0.8;
    }
    &.noAllow{
      cursor: not-allowed;
      &:hover{
        opacity: 0.9;
      }
    }
  }
}
input:-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
  -webkit-text-fill-color: #736A6B !important;
  transition: background-color 5000s ease-in-out 5000s;
}
.error{
  color: red;
}
</style>
<template>
    <div class="login-body">
        <div class="top-part">
            <a @click="goIndex"><img src="@/images/index/LOGO.png"></a>
            <label>登录 | 开启发现之旅</label>
        </div>
        <div class="middle-part">
            <img src="@/images/login/elephant.png">
            <img src="@/images/login/words.png">
            <div class="input-form">
                <div>
                    <p><span @click="state.indexType = 0" :class="{'choose':state.indexType == 0}">登录</span></p>
                    <p><span @click="state.indexType = 1" :class="{'choose':state.indexType == 1}">注册</span></p>
                </div>
                <div class="login-form" v-if="state.indexType == 0">
                    <div class="input-log">
                        <img src="@/images/login/iconUser.png"/>
                        <input type="text" name="username" ref="loginUsername" placeholder="请输入手机号" required/>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconPass.png"/>
                        <input type="password" name="password" ref="loginPassword" placeholder="请输入密码" required/>
                    </div>
                    <div class="input-log check-code">
                        <img src="@/images/login/iconPass.png"/>
                        <input type="text" name="checkCode" placeholder="请输入验证码" v-model="check.inputCode" required/>
                        <RandomCode :randomType="3" @getCode="getCode($event)" class="random-code"></RandomCode>
                        <i v-if="check.codeError" class="error">验证码错误</i>
                    </div>
                    <div class="login-submit">
                        <el-button type="primary" :loading="loading" id="loginBt1" @click.prevent="submit" :disabled="check.inputCode.toLowerCase() !== check.generateCode" :class="{'noAllow':check.inputCode.toLowerCase() !== check.generateCode}">{{loading?'请稍等':'登录'}}</el-button>
                    </div>
                    <i v-if="error" class="error">登录账号或密码错误</i>
                    <p><a>忘记密码?</a></p>
                </div>
                <div class="login-form register" name="registerForm" v-if="state.indexType == 1">
                    <div class="input-log">
                        <img src="@/images/login/iconUser.png"/>
                        <input type="text" v-model="reg.region" name="region" placeholder="请输入校区" required/>
                        <i v-if="check.schoolError && reg.region==''" class="error">校区不能为空</i>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconUser.png"/>
                        <input type="text" v-model="reg.name" name="name" placeholder="请输入考生姓名" required/>
                        <i v-if="check.nameError && reg.name==''" class="error">考生姓名不能为空</i>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconUser.png"/>
                        <input type="text" v-model="reg.username" name="regName" placeholder="请输入手机号" required/>
                        <i v-if="check.userAlready" class="error">该号码已使用</i>
                        <i v-if="check.phoneError && reg.username==''" class="error">手机号不能为空</i>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconPass.png"/>
                        <input type="password" v-model="reg.password" name="regPass" placeholder="请设置密码(6-16位)" required/>
                        <i v-if="check.passwordError && reg.password==''" class="error">密码不能为空</i>
                    </div>
                    <div class="input-log">
                        <img src="@/images/login/iconPass.png"/>
                        <input type="password" v-model="reg.passwordConfirm" name="regPassConfirm" placeholder="确认密码" required/>
                        <i v-if="check.checkPassWrong" class="error">确认密码不相同</i>
                    </div>
                    <div class="login-submit">
                       <el-button type="primary" :loading="loading" id="regButton" :disabled="(reg.password !== reg.passwordConfirm) || check.userAlready" @click.prevent="registerNew">
                         {{loading?'请稍等':'注册'}}
                      </el-button>
                    </div>
                    <!--<div class="agree-doc"><input type="checkbox" v-model="reg.agreeReg"/>已阅读并同意<a>《网站注册及用户协议》</a></div>-->
                </div>
            </div>
            <p>Copyright ©爻象教育 版权所有2018</p>
        </div>
    </div>
</template>

<script>
    import RandomCode from '@/tools/RandomCode';
    import { login , checkOnly ,register} from '@/api/login';
    export default {
        name: "Login",
        components:{
            RandomCode
        },
        data: function () {
            return {
                state: {
                    indexType: 0
                },
                check: {
                    inputCode:'',
                    generateCode:'',
                    codeError:false,
                    schoolError:false,
                    nameError:false,
                    phoneError:false,
                    passwordError:false,
                    checkPassWrong:false,
                    userAlready:false,
                },
                reg:{
                    region:'',
                    name:'',
                    username:'',
                    password:'',
                },
                error: false,
                loading: false,
            }
        },
        created() {
            this.state.indexType = this.$route.query.reg == 'register' ? 1:0;
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
                    if(vm.state.indexType == 1 && vm.reg.password == vm.reg.passwordConfirm && !vm.check.userAlready){
                      vm.registerNew();
                    }
                    else if(vm.check.inputCode.toLowerCase() == vm.check.generateCode){
                      vm.submit();
                    }
                }
            }
        },
        watch: {
          'check.inputCode'(val){
            this.checkCodeValue();
          },
          'reg.username'(){
            this.checkUser();
          },
          'reg.passwordConfirm'(){
            this.checkConfirm()
          }
        },
        mounted () {
            
        },
        methods: {
            checkCodeValue() {
                if (this.check.inputCode && this.check.inputCode.length >= this.check.generateCode.length) {
                    this.check.codeError = (this.check.inputCode.toLowerCase() !== this.check.generateCode);
                    return;
                }
                this.check.codeError = false;
            },            
            getCode(code){
                if (code) {
                    this.check.generateCode = code;
                }
            },
            checkConfirm() {
                if(this.reg.password && this.reg.passwordConfirm && this.reg.passwordConfirm.length >= this.reg.password.length){
                    this.check.checkPassWrong = (this.reg.passwordConfirm !== this.reg.password);
                    return;
                }
                this.check.checkPassWrong = false;
            },
            checkUser () {
                checkOnly(this.reg.username).then(
                    result => {
                        this.check.userAlready = result?false:true;
                    }
                )
            },
            submit () {
                if (!this.$refs.loginUsername.value || !this.$refs.loginPassword.value) {
                    this.error = true;
                    return;
                }
                this.loading = true;
                login({
                    username:this.$refs.loginUsername.value.trim(),
                    password:this.$refs.loginPassword.value,
                    loginFrom: 'student'
                })
                .then(res => {
                    if (res && res.ok == '1')  {
                        this.$router.replace({name: 'App'});
                    } else {
                        this.error = true;
                    }
                    this.loading = false;
                }, () => {
                    this.error = true;
                    this.loading = false;
                });
            },
            registerNew() {
                if (!this.reg.region) {
                    this.check.schoolError = true;
                    return;
                }
                if (!this.reg.name) {
                    this.check.nameError = true;
                    return;
                }
                if (!this.reg.username) {
                    this.check.phoneError = true;
                    return;
                }
                if (!this.reg.password) {
                    this.check.passwordError = true;
                    return;
                }
                this.loading = true;
                register(this.reg).then(result => {
                    console.log(result);
                    if(result){
                      this.$alert('注册成功', '提示', {confirmButtonText: '确定'})
                      this.state.indexType = 0;
                      this.loading = false;
                    }
                }, () => {
                    this.$alert('注册失败', '提示', {confirmButtonText: '确定'})
                    this.loading = false;
                });
            },
            goIndex(type){
              this.$router.push({path: '/index'})
            }
        }
    };
</script>