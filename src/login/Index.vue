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
    ul{
      height: 100%;
      li{
        width: 100%;
        height: 100%;
        &:nth-child(1){
          background: url("../images/index/BANNER.jpg")no-repeat center #66B0D5;
          background-size: auto 100%;
        }
      }
    }
    .page-pre,.page-next{
      position: absolute;
      top:calc(50% - 30px);
      width: 60px;
      height: 60px;
      border: none;
      opacity: 0.7;
      &:hover{
        opacity: 1;
      }
    }
    .page-pre{
      background: url("../images/index/pagePre.png")no-repeat center;
      left: 10%;
    }
    .page-next{
      background: url("../images/index/pageNext.png")no-repeat center;
      right: 10%;
    }
    .left-animation{
      position: absolute;
      top: 0;
      width: 100%;
      overflow: hidden;
      &.ng-hide-add{
        animation: left-hide 1s;
      }
      &.ng-hide-remove{
        animation: left-show 1s;
      }
    }
    .right-animation{
      width: 100%;
      position: absolute;
      top: 0;
      overflow: hidden;
      &.ng-hide-add{
        animation: right-hide 1s;
      }
      &.ng-hide-remove{
        animation: right-show 1s;
      }
    }
    &>div{
      width: 100%;
      position: absolute;
      bottom:5%;
      text-align: center;
      i{
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background: none;
        border: solid 2px white;
        margin: 0 10px;
        //cursor: pointer;
        &.indexChoose{
          background: white;
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
    <img src="images/index/LOGO.png">
    <ul>
        <li>首页</li>
        <li>最新动态</li>
        <li>关于我们</li>
        <li>联系我们</li>
        <li><a href="/login">登录</a></li>
        <li><a href="/login#register">注册</a></li>
    </ul>
</div>
<div class="middle-part">
    <ul>
        <li ng-show="pageState.currentIndex == 0" ng-class="{'fadeLeft':'left-animation','fadeRight':'right-animation'}[pageState.fadeList[0]]">

        </li>
        <li ng-show="pageState.currentIndex == 1" ng-class="{'fadeLeft':'left-animation','fadeRight':'right-animation'}[pageState.fadeList[1]]">
            2
        </li>
        <li ng-show="pageState.currentIndex == 2" ng-class="{'fadeLeft':'left-animation','fadeRight':'right-animation'}[pageState.fadeList[2]]">
            3
        </li>
        <li ng-show="pageState.currentIndex == 3" ng-class="{'fadeLeft':'left-animation','fadeRight':'right-animation'}[pageState.fadeList[3]]">
            4
        </li>
        <li ng-show="pageState.currentIndex == 4" ng-class="{'fadeLeft':'left-animation','fadeRight':'right-animation'}[pageState.fadeList[4]]">
            5
        </li>
    </ul>
    <button class="page-pre" ng-click="prevClick()"></button>
    <button class="page-next" ng-click="nextClick()"></button>
    <div>
        <i ng-repeat="item in pageState.chooseList" ng-class="{'indexChoose':$index == pageState.currentIndex}"></i>
    </div>
</div>
<div class="bottom-part">
    <img src="images/index/arrowRight.png">
    <button><a href="/login">马上登录体验</a></button>
    <img src="images/index/arrowLeft.png">
</div>
</div>
</template>

<script>
export default {
  name: 'MainPage',
  components: {
  },
  data () {
      return {
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
          }, {
              name: '新页面测试',
              link: '/app/mainPage/examTable',
          }
        ]
	    }
  },
  created() {
    
  },
  methods: {
  }
}
</script>
