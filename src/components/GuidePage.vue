<style lang="scss" scoped>
.guide-page{
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../images/doTest/restBack.jpg") no-repeat center;
  background-size:cover;
  text-align: center;
  .top-part {
    width: 100%;
    height: 80px;
    background: url("../images/doTest/top-back.png") no-repeat center;
    background-size:cover;
    position: relative;
    &>div{
      display: inline-block;
      padding-top: 5px; 
      vertical-align: middle;
      margin: 0 15px;
      color: #BFBFBF;
      p:nth-child(1){
        font-size: 30px; 
      }
      p:nth-child(2){
        font-size: 18px; 
      }
      &.white{
        color: white;
      }
    }
  }
  .guide{
    width: 800px;
    height: 450px;
    margin: auto;
    margin-top: 80px;
    position: relative;
    &.guide-1{
      background: white;
      border: solid 3px #3895CE;
      text-align: left;
      padding: 50px 30px;
      &>img{
        position: absolute;
        top: -60px;
        left: 175px;
      }
    }
    &.guide-2{
      background: url("../images/doTest/testBack.jpg") no-repeat center;
      background-size:cover;
      position: relative;
      color: white;
      &>div{
        height: 100%;
        cursor: pointer;
        p{
          text-align: left;
          font-size: 18px; 
        }
        &.book1{
          p{
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%,-75%);
          }
        }
        &.book2{
          img{
            position: absolute;
            &:nth-child(1){
              top:0;
              left: 100px;
            }
            &:nth-child(2){
              top: 80px;
              left: 180px;
              transform:rotate(65deg);
              -ms-transform:rotate(65deg); /* Internet Explorer */
              -moz-transform:rotate(65deg); /* Firefox */
              -webkit-transform:rotate(65deg); /* Safari 和 Chrome */
              -o-transform:rotate(65deg);
            }
          }
          p{
            padding: 107px 255px;
          }
        }
        &.book3{
          img{
            position: absolute;
            &:nth-child(1){
              top:0;
              left: 300px;
            }
            &:nth-child(2){
              top: 80px;
              left: 330px;
              transform:rotate(65deg);
              -ms-transform:rotate(65deg); /* Internet Explorer */
              -moz-transform:rotate(65deg); /* Firefox */
              -webkit-transform:rotate(65deg); /* Safari 和 Chrome */
              -o-transform:rotate(65deg);
            }
          }
          p{
            padding-top: 105px;
            padding-left: 405px;
          }
        }
        &.book4{
          img{
            position: absolute;
            &:nth-child(1){
              top:0;
              left: 415px;
            }
            &:nth-child(2){
              top: 80px;
              left: 455px;
              transform:rotate(65deg);
              -ms-transform:rotate(65deg); /* Internet Explorer */
              -moz-transform:rotate(65deg); /* Firefox */
              -webkit-transform:rotate(65deg); /* Safari 和 Chrome */
              -o-transform:rotate(65deg);
            }
          }
          p{
            padding-top: 133px;
            padding-left: 340px;
          }
        }
        &.book5{
          img{
            position: absolute;
            &:nth-child(1){
              top:0;
              right: 60px;
            }
            &:nth-child(2){
              top: 85px;
              right: 92px;
              transform:rotate(110deg);
              -ms-transform:rotate(110deg); /* Internet Explorer */
              -moz-transform:rotate(110deg); /* Firefox */
              -webkit-transform:rotate(110deg); /* Safari 和 Chrome */
              -o-transform:rotate(110deg);
            }
          }
          p{
            padding-top: 120px;
            padding-left: 452px;
          }
        }
        &.book6{
          img{
            position: absolute;
            &:nth-child(1){
              top: 51px;
              left: 208px;
            }
            &:nth-child(2){
              top: 120px;
              left: 360px;
              transform:rotate(110deg);
              -ms-transform:rotate(110deg); /* Internet Explorer */
              -moz-transform:rotate(110deg); /* Firefox */
              -webkit-transform:rotate(110deg); /* Safari 和 Chrome */
              -o-transform:rotate(110deg);
            }
          }
          p{
            padding-top: 150px;
            padding-left: 230px;
          }
        }
        &.book7{
          img{
            position: absolute;
            &:nth-child(1){
              top: 58px;
              left: 83px;
            }
            &:nth-child(2){
              top: 200px;
              right: 50px;
            }
          }
          p{
            position: absolute;
            top:240px;
            right: 20px;
          }
        }
      }
    }
  }
  .bottom-part{
    button{
      width: 200px;
      margin: 15px 20px;
      font-size: 16px;
      padding: 15px;
      font-weight: bold; 
      &:nth-child(1){
        background: #56A6D7;
      }
      &:nth-child(2){
        background: #037DCE;
      }
      &:hover{
        opacity: 0.8;
      }
    }
  }
  .circle{
    display: block;
    width: 140px;
    height: 140px;
    border-radius: 70px; 
    border: solid 13px white;
    background: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .triangle{
    display: block;
    width: 0;
    height: 0;
    border-top: 25px solid transparent;
    border-left: 40px solid white;
    border-bottom: 25px solid transparent;
    position: absolute;
    top: 50%;
    left: 51%;
    transform: translate(-50%,-50%);
  }
}
</style>
<template>
<div class="guide-page">
  <div class="top-part">
    <div :class="{'white':step == 1}">
      <p><label>0 1</label></p>
      <p><label>阅读诊断说明</label></p>
    </div>
    <div>
      <img src="@/images/doTest/arrowTwo.png" v-if="step != 1">
      <img src="@/images/doTest/arrowTwoWhite.png" v-if="step == 1">
    </div>
    <div :class="{'white':step == 2}">
      <p><label>0 2</label></p>
      <p><label>诊断操作说明</label></p>
    </div>
    <div>
      <img src="@/images/doTest/arrowTwo.png" v-if="step != 2">
      <img src="@/images/doTest/arrowTwoWhite.png" v-if="step == 2">
    </div>
    <div>
      <p><label>0 3</label></p>
      <p><label>开始诊断</label></p>
    </div>
  </div>
  <div class="middle-part">
    <div class="guide guide-1" v-if="step == 1">
      <img src="@/images/doTest/TestTitle.png">
      <div v-html="remarkStr">
      </div>
    </div>
    <div class="guide guide-2" v-if="step == 2">
      <div v-if="testPageStep == 1" @click="testPageStep = 2" class="book1">
        <i class="circle"></i>
        <i class="triangle"></i>
        <p>马上了解</p>
      </div>
      <div v-if="testPageStep == 2" @click="testPageStep = 3" class="book2">
        <img src="@/images/doTest/guide2.png">
        <img src="@/images/doTest/pointGuide.png">
        <p>题型<br/>测试过程中有单选也有多选哦！</p>
      </div>
      <div v-if="testPageStep == 3" @click="testPageStep = 4" class="book3">
        <img src="@/images/doTest/guide3.png">
        <img src="@/images/doTest/pointGuide.png">
        <p>考试时间<br/>要注意合理分配答题时间哦！</p>
      </div>
      <div v-if="testPageStep == 4" @click="testPageStep = 5" class="book4">
        <img src="@/images/doTest/guide4.png">
        <img src="@/images/doTest/pointGuide.png">
        <p>答题工具<br/>计算器：答题神器，可惜大多数时候用不了。<br/>记号笔：留给同学们划重点用的，请不要用来涂鸦。<br/>标记：用来标记暂时不会做的题目，回头再思考，<br/>合理利用能节省很多时间哦。</p>
      </div>
      <div v-if="testPageStep == 5" @click="testPageStep = 6" class="book5">
        <img src="@/images/doTest/guide5.png">
        <img src="@/images/doTest/pointGuide2.png">
        <p>答题卡<br/>记录着同学们的答题情况，可以快速<br/>找到自己标记的题目哦！</p>
      </div>
      <div v-if="testPageStep == 6" @click="testPageStep = 7" class="book6">
        <img src="@/images/doTest/guide6.png">
        <img src="@/images/doTest/pointGuide2.png">
        <p>进度条<br/>看清答题情况，答题不再心慌！</p>
      </div>
      <div v-if="testPageStep == 7" class="book7">
        <img src="@/images/doTest/guide7.png">
        <img src="@/images/doTest/pointGuide2.png">
        <p>答题区</p>
      </div>
    </div>
  </div>
  <div class="bottom-part">
    <el-button type="primary" @click="step = step == 1?1:step - 1">上一步</el-button>
    <el-button type="primary" @click="addStep()">{{step==1?'我已了解':'准备诊断'}}</el-button>
  </div>
</div>
</template>

<script>
import { getPaperList } from '@/api/exam';
export default {
  name: 'GuidePage',
  components: {
  },
  data () {
      return {
        remarkStr:'',
        step:1,
        testPageStep:1
	    }
  },
  created() {
    getPaperList('aleady').then(data => {
      let chooseList = data.filter(item => {
        return item.id == this.$route.params.examId;
      });
      this.remarkStr = chooseList[0].remark;
    });
  },
  methods: {
    addStep(){
      if(this.step + 1 < 3){
        this.step++;
        this.testPageStep = 1;
      }
      else{
        this.$router.replace({path: '/app/doTest/' + this.$route.params.examId})
      }
    }
  }
}
</script>