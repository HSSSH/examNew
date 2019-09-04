<style lang="scss" scoped>
.result{
  width: 100%;
  height: 100%;
  position: relative;
  .top-part {
    width: 80%;
    height: 80px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    z-index: 4;
     &>img {
      width: 180px;
      height: 70px;
      position: absolute;
      left: 0;
      top: 10px;
    }
  }
  .result-page{
    width: 100%;
    height: calc(100% - 80px);
    background: url("../images/doTest/restBack.jpg")no-repeat center;
    background-size: cover;
    padding: 20px;
    text-align: center;
    img,.result-show{
      display: inline-block;
      position: relative;
      top:50%;
      transform: translateY(-50%);
    }
    .result-show{
      width: 600px;
      height: 400px;
      border: solid 5px rgba(205,220,242,0.5);
      background: none;
      padding: 15px;
      margin-left: 20px;
      transform: translateY(-200px);
      div{
        background: rgba(205,220,242,0.5);
        height: 100%;
        padding: 30px;
        p{
          color: #5F8CDE;
          margin-bottom: 30px;
          &:nth-child(1){
            font-size: 35px;
          }
          &:nth-child(2){
            font-size: 25px;
          }
          &:nth-child(3){
            font-size: 50px;
            span{
              font-size: 25px;
            }
          }
        }
      }
    }
  }
  .bt-type3{
    border: solid 1px #27A4D4;
    background: none;
    padding: 10px;
    color: #27A4D4;
    border-radius: 8px;
    position: absolute;
    top:20px;
    left: 20px;
  }
}
</style>
<template>
<div class="result">
    <div class="top-part">
        <img src="@/images/index/LOGO.png">
    </div>
    <div class="result-page">
        <img src="@/images/doTest/resultPageLeft.png">
        <div class="result-show">
            <div>
                <p><label>答题结束，感谢您的参与!</label></p>
                <p><label>您的得分:</label></p>
                <p><label>{{data.result}}分</label><span>({{data.totalScore}})</span></p>
            </div>
        </div>
        <button @click="goBack" class="bt-type3">返回主页</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'TestResult',
  components: {
  },
  data () {
      return {
        data: {
          result: 0,
          totalScore: 100
        }
	    }
  },
  created() {
    this.data.result = this.$route.params.result;
    this.data.totalScore = this.$route.params.totalScore;
  },
  methods: {
    goBack(){
      this.$router.push({path: '/app/mainPage/abilityTest'})
    }
  }
}
</script>