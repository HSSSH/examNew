<style src="@/sass/global.scss" lang="scss"></style>
<style lang="scss" scoped>
.start-index{
  height: 100%;
  .top-part{
    width: 80%;
    height: 15%;
    margin: 0 auto;
    img{
      position: relative;
      top:50%;
      transform:translateY(-50%);
    }
    ul{
      display: inline-block;
      width: calc(100% - 230px);
      text-align: right;
      position: relative;
      top:50%;
      transform:translateY(-50%);
      li{
        display: inline-block;
        color: #0A7AA8;
        font-size: 17px;
        cursor: pointer;
        //font-weight: bold;
        margin-left: 40px;
        &:nth-child(5){
          margin-left: 150px;
        }
      }
    }
  }
  .middle-part{
    height: 60%;
    position: relative;
    overflow: hidden;
    .el-carousel--horizontal{
      height: 100%;
      .el-carousel__item{
        &:nth-child(3){
          background: url("../images/index/BANNER.jpg") no-repeat center #66B0D5;
          background-size:auto 100%;
        }
        &:nth-child(4){
          background: url("../images/index/BANNER.jpg") no-repeat center #66B0D5;
          background-size:auto 100%;
        }
        &:nth-child(5){
          background: url("../images/index/BANNER.jpg") no-repeat center #66B0D5;
          background-size:auto 100%;
        }
      }
    }
  }
  .bottom-part{
    height: 25%;
    text-align: center;
    img{
      position: relative;
      top:30%;
    }
    button{
      position: relative;
      top:30%;
      width: 240px;
      height: 60px;
      background: #21A3D5;
      border: none;
      margin: 0 15px;
      font-size: 26px;
      letter-spacing:2px;
      a{
        text-decoration: none;
        color: white;
      }
      &:hover{
        background: #66B0D5;
      }
    }
  }
}
</style>
<template>
<div class="start-index">
    <div class="top-part">
    <img src="@/images/index/LOGO.png">
    <ul>
        <li>首页</li>
        <li>最新动态</li>
        <li>关于我们</li>
        <li>联系我们</li>
        <li><a @click="goLogin">登录</a></li>
        <li><a @click="goLogin('reg')">注册</a></li>
    </ul>
</div>
<div class="middle-part">
  <el-carousel height="100%">
      <el-carousel-item v-for="item in 1" :key=item>
      </el-carousel-item>
    </el-carousel>
</div>
<div class="bottom-part">
    <img src="@/images/index/arrowRight.png">
    <button><a href="/login">马上登录体验</a></button>
    <img src="@/images/index/arrowLeft.png">
</div>
</div>
</template>

<script>
export default {
  components: {
  },
  data () {
      return {
	    }
  },
  created() {
  },
  methods: {
    goLogin(type){

    }
  },
  beforeDestroy() {
  },
}
</script>
