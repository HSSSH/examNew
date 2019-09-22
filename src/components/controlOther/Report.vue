<style lang="scss" scoped>
div.report{
  .A4-size{
    position: absolute;
    left:50%;
    margin-left: -500px;
    width: 1000px;
    padding: 30px 0;
  }
  .title{
    font-size: 35px;
    text-align: center;
    margin-top: 60px;
  }
  .base{
    font-size: 22px;
    text-align: center;
    &.comment{
      margin-top: 100px;
    }
    &.advertise{
      margin-top: 100px;
    }
  }
  .mark-part{
    &>div{
      display: inline-block;
      vertical-align: top;
      border-radius: 50px;
      margin-top: 30px;
      width: 50%;
      height: 580px;
      p{
        font-size: 24px;
        padding: 14px 25px;
        &:nth-child(1){
            span{
                padding: 5px;
                display: inline-block;
                border-right: solid 2px black; 
                border-bottom: solid 2px black; 
            }
        }
      }
    }
  }
  .cell-part{
      ul{
          width: 900px;
          border: solid 2px black;
          margin: auto;
          li{
              height: 50px;
              border-bottom: solid 2px black; 
              &:last-child{
                  border-bottom: none; 
              }
              div{
                  display: inline-block;
                  vertical-align: top;
                  width: 6.25%;
                  height: 100%;
                  border-right: solid 2px black; 
                   &:last-child{
                    border-right: none; 
                }
              }
          }
      }
  }
  .chart1{
      width: 100%;
      height: 300px;
  }
}
</style>
<template>
<div class="report">
    <div class="A4-size">
        <p class="title">数学能力诊断报告</p>
        <p class="base">(based on V1.0)</p>
        <div class="mark-part">
            <div>
                <p><span>个人信息</span></p>
                <p>姓名:蔡若欣</p>
                <p>年级:六年级</p>
                <p>科目:数学</p>
                <p>就诊时间:</p>
                <p>诊断编号:</p>
                <img src="@/images/report/17.png">
            </div>
            <div>
                <p><span>诊断结果</span></p>
                <p>总分:54</p>
                <p>知识掌握率:</p>
                <p>计算能力:4.4</p>
                <p>归纳类比:4.4</p>
                <p>语言能力:4.4</p>
                <p>空间想象:4.4</p>
                <p>逻辑猜想:4.4</p>
                <p>转化能力:4.4</p>
            </div>
        </div>
        <div class="cell-part">
            <ul>
                <li v-for="(item,index1) in cellList" :key="index1">
                    <div v-for="(child,index2) in item.children" :key="index2" :style="{'background':child.background}"></div>
                </li>
            </ul>
        </div>
        <div class="mark-part">
            <div>
                <p>预备知识掌握率：</p>
                <p>第一章掌握率：</p>
                <p>第二章掌握率：</p>
                <p>第三章掌握率：</p>
                <p>第四章掌握率：</p>
            </div>
        </div>
        <div>
            <div class="chart1" v-echarts-render="{options: echartOp1}">

            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Report',
  components: {
  },
  data () {
      return {
          cellList:[
              {
                  children:[{background:'#FDD289'},{background:'#FDD289'},{background:'#FDD289'}]
              },
              {
                  children:[{background:'#9FEEC0'},{background:'#9FEEC0'},{background:'#9FEEC0'},{background:'#FDD289'},{background:'#FDD289'},{background:'#FDD289'},{background:'#F7A29A'}]
              },
               {
                  children:[{background:'#9FEEC0'},{background:'#9FEEC0'},{background:'#F7A29A'},{background:'#FDD289'},{background:'#F7A29A'},{background:'#9FEEC0'},{background:'#FDD289'},{background:'#FDD289'},{background:'#F7A29A'}]
              },
               {
                  children:[{background:'#9FEEC0'},{background:'#FDD289'},{background:'#F7A29A'}]
              },
              {
                  children:[{background:'#9FEEC0'},{background:'#9FEEC0'},{background:'#FDD289'},{background:'#FDD289'},{background:'#9FEEC0'},{background:'#9FEEC0'},{background:'#FDD289'},{background:'#FDD289'},{background:'#9FEEC0'},{background:'#FDD289'},{background:'#FDD289'},{background:'#9FEEC0'}]
              },
          ],
          echartOp1:{
                title: {
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: false,
                    // data:['个人','平均']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['1','2','3','4','5','6','7']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'个人',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 260, 210]
                    },
                    {
                        name:'平均',
                        type:'line',
                        data:[110, 182, 191, 143, 290, 230, 310]
                    }
                ]
            }
      }
  },
  created() {
      this.cellList.forEach(item => {
          while(item.children.length < 16){
            item.children.push({
                background:'#ffffff'
            })
          }
      })
  },
  methods: {
  }
}
</script>
