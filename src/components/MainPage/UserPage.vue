<style lang="scss" scoped>
.user-page{
  .tool-card{
    text-align: center;
    &>div{
      border-radius: 5px;
      width: 230px;
      height: 120px;
      color: white;
      display: inline-block;
      margin: 10px;
      padding-top: 35px; 
      &:nth-child(1){
        background: #FF6666;
      }
      &:nth-child(2){
        background: #33CBCC;
      }
      &:nth-child(3){
        background: #0299FC;
      }
      &:nth-child(4){
        background: #99CC67;
      }
      &:nth-child(5){
        background: #669ACC;
      }
      p{
        &:nth-child(1){
          font-size: 17px;
        }
        &:nth-child(2){
        }
      }
    }
  }
  .chart-part{
    width: 1220px;
    height: 300px;
    margin: 20px auto;
    &>div{
      display: inline-block;
      width: 50%;
      height: 100%;
      vertical-align: top;
      p{
        width: calc(100% - 10px);
        padding: 10px;
        border-bottom: solid 2px #DCDCDC; 
      }
    }
    .chart1{
        width: 100%;
        height: 250px;
    }
  }
  .last-part{
    width: 1220px;
    margin: 20px auto;
    &>div{
      display: inline-block;
      vertical-align: top;
      &:nth-child(1){
        width: 20%;
      }
      &:nth-child(2){
        width: 50%;
      }
      &:nth-child(3){
        width: 30%;
      }
      p{
        width: calc(100% - 10px);
        padding: 10px;
        border-bottom: solid 2px #DCDCDC; 
      }
      ul{
        color: #999999;
        font-size: 16px;
        margin: 10px;
        li{
          margin: 8px;
        }
      }
      table{
        width: 100%;
        color: #999999;
        font-size: 16px;
        th{
          text-align: center;
          border-bottom:  solid 1px #DCDCDC;
          padding: 10px;
        }
        td{
          border-bottom:  solid 1px #DCDCDC;
          padding: 10px;
        }
      }
    }
  }
}
</style>
<template>
<div class="user-page">
  <div class="tool-card">
    <div>
      <p>我的账户</p>
      <p>My account</p>
    </div>
    <div>
      <p>个人资料</p>
      <p>Personal information</p>
    </div>
    <div>
      <p>测试报告</p>
      <p>Test report</p>
    </div>
    <div>
      <p>学习提高</p>
      <p>Learning improvement</p>
    </div>
    <div>
      <p>系统设置</p>
      <p>System settings</p>
    </div>
  </div>
  <div class="chart-part">
    <div>
      <p>登录频率</p>
      <div class="chart1" v-echarts-render="{options: echartOp1}">

      </div>  
    </div>
    <div>
      <p>练习题数量</p>
      <div class="chart1" v-echarts-render="{options: echartOp2}">

      </div>  
    </div>
  </div>
  <div class="last-part">
    <div>
      <p>站内热门测试</p>
      <ul>
        <li>能力测试
          <ul>
            <li>五年级数学测试 HOT</li>
            <li>六年级数学测试 HOT</li>
            <li>初一数学测试 HOT</li>
          </ul>
        </li>
        <li>学习习惯诊断
        </li>
        <li>自主探究能力
        </li>
      </ul>
    </div>
    <div>
      <p>系统消息</p>
      <table class="table table-common">
          <thead>
            <tr>
                <th>内容</th>
                <th>日期</th>
                <th>已/未读</th>
                <th>操作</th>
            </tr>
          </thead>
            <tbody>
                <tr>
                    <td>报告已签收，请确认</td>
                    <td>2019-01-01</td>
                    <td>未读</td>
                    <td>删除</td>
                </tr>
                <tr>
                    <td>恭喜你，完成《六年级数学测试》</td>
                    <td>2019-01-02</td>
                    <td>已读</td>
                    <td>删除</td>
                </tr>
                <tr>
                    <td>报告已签收，请确认</td>
                    <td>2019-01-02</td>
                    <td>已读</td>
                    <td>删除</td>
                </tr>
                <tr>
                    <td>恭喜你，完成《六年级数学测试》</td>
                    <td>2019-01-02</td>
                    <td>已读</td>
                    <td>删除</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
      <p>站内通告</p>
      <ul>
        <li>网站建设推进</li>
        <li>官网设计稿出台</li>
        <li>测试出题标准遭泄露</li>
        <li>白爷新作《议爻象》发售</li>
        <li>爻象测评首次会议记录</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserPage',
  components: {
  },
  data () {
      return {
        echartOp1:{
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          
          series: [{
              data: [3, 3, 4, 5, 2, 1, 1],
              type: 'line',
              areaStyle: {}
          }]
        },
        echartOp2:{
          color: ['#3398DB'],
          tooltip : {
              trigger: 'axis',
              axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis : [
              {
                  type : 'category',
                  data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis : [
              {
                  type : 'value'
              }
          ],
          series : [
              {
                  name:'直接访问',
                  type:'bar',
                  barWidth: '60%',
                  data:[10, 52, 200, 334, 390, 330, 220]
              }
          ]
        }
	  }
  },
  methods: {
  }
}
</script>
