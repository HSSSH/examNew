<style lang="scss" scoped>
.rest{
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
  .rest-page{
    width: 100%;
    height: calc(100% - 80px);
    background: url("../images/doTest/restBack.jpg")no-repeat center;
    background-size: cover;
    padding: 20px;
    text-align: center;
    img{
      padding: 20px;
    }
    p{
      color: #27A4D4;
      font-size: 25px;
      &:nth-child(3){
        font-size: 30px;
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
}
</style>
<template>
<div class="rest">
    <div class="top-part">
        <img src="@/images/index/LOGO.png">
    </div>
    <div class="rest-page">
        <img src="@/images/doTest/boatman.png">
        <p>下一模块很快就要开始，先休息一下吧</p>
        <p>{{breakTimeSec}}</p>
        <button class="bt-type3" @click="jump()">跳过休息</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'RestPage',
  components: {
  },
  data () {
    return {
      interval: {},
      breakTimeSec: 60,  //初始默认60s
      paper: {}
    }
  },
  created() {
    if (this.$route.params.examId) {
      if(localStorage.getItem('testPaper' + this.$route.params.examId)) {
          this.paper = JSON.parse(localStorage.getItem('testPaper' + this.$route.params.examId));
          if(!this.paper.breakTimeSec){
              this.breakTimeSec = 60 * parseInt(this.paper.sectionRests.split(',')[this.paper.currentSection - 2]);
              Object.assign(this.paper,{breakTimeSec:this.breakTimeSec})
          }
          else {
              this.breakTimeSec = this.paper.breakTimeSec;
          }
          this.interval = setInterval(() => {
              this.paper.breakTimeSec -= 1;
              this.breakTimeSec -= 1;
          }, 1000);
      }
    }
  },
  methods: {
    jumpOver(){
        clearInterval(this.interval);
        delete this.paper.breakTimeSec;
        localStorage.setItem('testPaper' + this.paper.id, JSON.stringify(this.paper));
        this.$alert('模块'+ (this.paper.currentSection) + '开始', '提示', {
            confirmButtonText: '确定',
            callback: () => {
              this.$router.push({path: '/app/doTest/' + this.paper.id})
            }
        })
    },
    jump() {
        this.$confirm('确认跳过休息?', '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
          this.jumpOver();
        }).catch(() => {})
    }
  },
  watch: {
      breakTimeSec(val) {
          if (val == 0) {
              this.jumpOver();
          }
          else if(this.paper.id) {
              localStorage.setItem('testPaper' + this.paper.id, JSON.stringify(this.paper));
          }
      }
  },
  beforeDestroy() {
      clearInterval(this.interval);
  },
}
</script>
