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
.dialog-style{
  /deep/.el-dialog__title{
    color: #5F8CDE;
    font-size: 25px;
  }
  /deep/.el-dialog__body{
    text-align: center;
    color: #5F8CDE;
    font-size: 22px;
  }
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
    <el-dialog
        class="dialog-style"
        title="提示"
        :visible.sync="dialogVisible"
        width="300px"
        :before-close="handleClose">
        <!-- <span>模块{{paper.currentSection}}开始!</span> -->
        <span>{{tempModeName[paper.currentSection]}}开始!</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handleClose">确 定</el-button>
        </span>
    </el-dialog>
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
      paper: {},
      dialogVisible: false,
      tempModeName:{'1':"A卷",'2':"B卷",'3':"C卷"}
    }
  },
  created() {
    if (this.$route.params.examId) {
      if(localStorage.getItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.$route.params.examId)) {
          this.paper = JSON.parse(localStorage.getItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.$route.params.examId));
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
        localStorage.setItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.paper.id, JSON.stringify(this.paper));
        this.dialogVisible = true;
    },
    jump() {
        this.$confirm('确认跳过休息?', '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
          this.jumpOver();
        }).catch(() => {})
    },
    handleClose(){
        this.$router.push({path: '/app/doTest/' + this.paper.id})
    }
  },
  watch: {
      breakTimeSec(val) {
          if (val == 0) {
              this.jumpOver();
          }
          else if(this.paper.id) {
              localStorage.setItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.paper.id, JSON.stringify(this.paper));
          }
      }
  },
  beforeDestroy() {
      clearInterval(this.interval);
  },
}
</script>
