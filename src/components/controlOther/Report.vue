<style lang="scss" scoped>
div.report{
  .A4-size{
    width: 1000px;
    padding: 30px 0;
    page-break-after: always;
    margin: 0 auto;
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
        padding: 14px 50px;
        &:nth-child(1){
            span{
                padding: 5px;
                display: inline-block;
                border-right: solid 2px black; 
                border-bottom: solid 2px black; 
            }
        }
      }
      img{
          margin-left: 40px; 
      }
    }
  }
  .chapter-rate{
      padding-left: 100px;
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
      margin-bottom: 50px;
  }
  .chart2{
      height: 1000px;
      margin-bottom: 50px;
  }
  .chart3{
      height: 2000px;
      margin-bottom: 50px;
  }
  .table-common{
      width: 950px;
      font-size: 16px;
      margin: 0 auto;
      td{
        padding: 10px;
      }
  }
  .abiliy-card{
      width: 800px;
      margin: 20px auto 10px;
      &>p{
          font-size: 20px;
          font-weight: bold;
          text-align: center;
          margin: 10px;
      }
      &>div{
          border: solid 1px black;
          vertical-align: top;
          &:nth-child(2){
                display: inline-block;
                width: 340px;
                height: 400px;
          }
          &:nth-child(3){
                display: inline-block;
                width: 440px;
                height: 400px;
                margin-left: 20px; 
          }
          &:nth-child(4){
                display: inline-block;
                width: 800px;
                height: 300px;
                margin-top: 20px 
          }
      }
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
                <p>姓名:{{userInfo.name}}</p>
                <p>年级:六年级</p>
                <p>科目:{{userInfo.subject}}</p>
                <p>就诊时间:{{diagnosisTime}}</p>
                <p>诊断编号:{{userInfo.code}}</p>
                <img src="@/images/report/17.png">
            </div>
            <div>
                <p><span>诊断结果</span></p>
                <p>总分:{{globalResultInfo.score}}</p>
                <p>知识掌握率:</p>
                <p>计算能力:{{globalResultInfo.abilityScore['计算能力']}}</p>
                <p>归纳类比:{{globalResultInfo.abilityScore['归纳类比']}}</p>
                <p>语言理解:{{globalResultInfo.abilityScore['语言理解']}}</p>
                <p>空间想象:{{globalResultInfo.abilityScore['空间想象']}}</p>
                <p>逻辑推理:{{globalResultInfo.abilityScore['逻辑推理']}}</p>
                <p>转化迁移:{{globalResultInfo.abilityScore['转化迁移']}}</p>
            </div>
        </div>
        <div class="cell-part">
            <ul>
                <li v-for="(item,index1) in cellList" :key="index1">
                    <div v-for="(child,index2) in item" :key="index2" :style="{'background':child.background}"></div>
                </li>
            </ul>
        </div>
    </div>
    <div class="A4-size">
        <div class="chapter-rate">
            <div v-for="(item,index) in keyWordList" :key="index">
                <p v-if="globalResultInfo.chapterRate[item] || globalResultInfo.chapterRate[item] == 0">{{item}}掌握率：{{globalResultInfo.chapterRate[item]}}%</p>
            </div>
        </div>
    </div>
    <div class="A4-size">
        <table class="table table-common" border="1" cellspacing="0">
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td>内容</td>
                    <td>掌握情况</td>
                    <td>指向问题</td>
                </tr>
            </tbody>
            <tbody v-for="(item,index) in keyWordList" :key="index" v-show="globalResultInfo.knowledgeKeepStatus[item]">
                <tr v-for="(data,index) in globalResultInfo.knowledgeKeepStatus[item]" :key="index">
                    <td :rowspan="globalResultInfo.knowledgeKeepStatus[item].length" v-if="index == 0">{{data.chapter}}</td>
                    <td>{{index + 1}}</td>
                    <td>{{data.knowledgeName}}</td>
                    <td>{{data.keep | keepState}}</td>
                    <td>{{data.matter}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="A4-size">
        <div>
            <div class="chart1" v-echarts-render="{options: echartOp1}">

            </div>
        </div>
         <table class="table table-common" border="1" cellspacing="0">
            <thead>
                <tr>
                    <td></td>
                    <td>作答时间</td>
                    <td>所用时间</td>
                    <td>得分</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data,index) in globalResultInfo.sectionInfo" :key="index">
                    <td>{{data.section}}</td>
                    <td>{{data.info}}</td>
                    <td>{{data.useTime}}</td>
                    <td>{{data.score}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="A4-size">
        <div>
            <div class="chart2" v-echarts-render="{options: echartOp2}">

            </div>
        </div>
    </div>
    <div class="A4-size">
        <div v-for="item in abilityEvaluateList" :key="item.keyName" class="abiliy-card">
            <p>{{item.keyName}}</p>
            <div>
                <p>简评:</p>
                <p>编码:{{item.abilityCode}}</p>
                <p>得分:{{item.score}}</p>
                <p>{{item.evaluate}}</p>
            </div>
            <div>
                <p>知识点与能力对应图</p>
            </div>
            <div>
                <p>示例与解释</p>
                <p>{{item.explain}}</p>
            </div>
        </div>
    </div>
    <div class="A4-size">
        <div>
            <div class="chart3" v-echarts-render="{options: echartOp3}">

            </div>
        </div>
    </div>
</div>
</template>

<script>
import { getReportUserInfo,getGlobalResult,getReportUserTime } from '@/api/report';
export default {
  name: 'Report',
  components: {
  },
  data () {
        return {
            keyWordList:['预备知识','第一章','第二章','第三章','第四章','第五章','第六章','第七章','第八章','第九章','第十章','第十一章','第十二章','第十三章',
            '第十四章','第十五章','第十六章','第十七章','第十八章','第十九章','第二十章'],
            abilityKeyList:['计算能力','空间想象','语言理解','归纳类比','逻辑推理'],
            userInfo: {},
            globalResultInfo: {
                abilityScore:{},
                chapterRate:{},
                knowledgeKeepStatus:{}
            },
            cellList:[],
            abilityEvaluateList:[],
            echartOp1:{
                title: {
                    text: '模块一每题作答时间',
                    left : 'center'
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
                    data: []
                },
                yAxis: {
                    name: '单位(s)',
                    type: 'value'
                },
                series: [
                    {
                        name:'个人',
                        type:'line',
                        data:[]
                    },
                    {
                        name:'平均',
                        type:'line',
                        data:[]
                    }
                ]
            },
            echartOp2 : {
                series: {
                    type: 'sankey',
                    layout:'none',
                    focusNodeAdjacency: 'allEdges',
                    data: [],
                    links: []
                }
            },
            matterList:['粗心大意','注意力不集中','畏难情绪','基础不好','思维不活跃'],
            matterList2:['计算出错','审题不仔细','读不懂题','没有思路','知识记忆不牢','思考不严谨','情绪紧张','过分轻敌','学习动力问题','学习方法不合适','审题不仔细且知识记忆不牢'],
            echartOp3 : {
                series: {
                    type: 'sankey',
                    layout:'none',
                    focusNodeAdjacency: 'allEdges',
                    data: [],
                    links: []
                }
            }
        }
    },
    computed: {
        diagnosisTime(){
            return new Date(this.userInfo.diagnosisTime).toLocaleString()
        }
    },
    created() {
        getReportUserInfo(this.$route.params.pid,this.$route.params.uid).then((result) => {
            this.userInfo = result.t;
            getGlobalResult(this.userInfo.paperResultId).then((result) => {
                    this.globalResultInfo = result.t;
                    this.globalResultInfo.abilityScore = JSON.parse(this.globalResultInfo.abilityScore);
                    this.globalResultInfo.knowledgeAcceptanceLevel = JSON.parse(this.globalResultInfo.knowledgeAcceptanceLevel);
                    this.dealCellList();
                    this.globalResultInfo.chapterRate = JSON.parse(this.globalResultInfo.chapterRate);
                    this.globalResultInfo.knowledgeKeepStatus = JSON.parse(this.globalResultInfo.knowledgeKeepStatus);
                    this.globalResultInfo.useTime = JSON.parse(this.globalResultInfo.useTime);
                    for(let key = 0;key < 50; key++){
                        this.echartOp1.xAxis.data.push(key+1);
                        this.echartOp1.series[0].data.push(this.globalResultInfo.useTime[key+1]);
                    }
                    this.globalResultInfo.sectionInfo = JSON.parse(this.globalResultInfo.sectionInfo);
                    this.globalResultInfo.chapterAbility = JSON.parse(this.globalResultInfo.chapterAbility);
                    for(let chapter = 1;chapter < 20; chapter++){
                        if(!this.globalResultInfo.chapterAbility[chapter]) {continue;}
                        this.echartOp2.series.data.push({'name':String(chapter)});
                        this.globalResultInfo.chapterAbility[chapter].forEach(item => {
                            item.abilityCodes.split(',').forEach(ability => {
                                this.echartOp2.series.links.push({
                                    source: String(chapter),
                                    target: ability,
                                    value: 1
                                });
                            })
                        })
                    }
                    for (let index = 1; index < 7; index++) {
                        this.echartOp2.series.data.push({'name':('A' + index)});
                    }
                    // for(let chapter = 1;chapter < 20; chapter++){
                    //     if(!this.globalResultInfo.chapterAbility[chapter]) {continue;}
                    //     this.globalResultInfo.chapterAbility[chapter].forEach(item => {
                    //         this.echartOp2.series.data.push({'name':item.knowledgeCode});
                    //         item.abilityCodes.split(',').forEach(ability => {
                    //             this.echartOp2.series.links.push({
                    //                 source: item.knowledgeCode,
                    //                 target: ability,
                    //                 value: 1
                    //             });
                    //         })
                    //     })
                    // }
                    this.globalResultInfo.abilityEvaluate = JSON.parse(this.globalResultInfo.abilityEvaluate);
                    this.abilityKeyList.forEach(key => {
                        this.abilityEvaluateList.push(Object.assign({keyName:key}, this.globalResultInfo.abilityEvaluate[key]));
                    });
                    this.globalResultInfo.mistakeMatters = JSON.parse(this.globalResultInfo.mistakeMatters);
                    this.globalResultInfo.commonMatters = JSON.parse(this.globalResultInfo.commonMatters);
                    for (let index = 1; index < 70; index++) {
                        this.echartOp3.series.data.push({'name':index});
                    }
                    this.matterList.forEach(item => {
                        this.echartOp3.series.data.push({'name':item});
                        if(this.globalResultInfo.mistakeMatters[item]) {
                            this.globalResultInfo.mistakeMatters[item].wrongs.forEach(wrong => {
                                this.echartOp3.series.links.push({
                                    source: String(wrong),
                                    target: item,
                                    value: 1
                                });
                            })
                        }
                    })
                    this.matterList2.forEach(item => {
                        this.echartOp3.series.data.push({'name':item});
                        if(this.globalResultInfo.commonMatters[item]) {
                            this.echartOp3.series.links.push({
                                source: this.globalResultInfo.commonMatters[item].mistakeMatter,
                                target: item,
                                value: 1
                            });
                        }
                    })
            });
        });
        getReportUserTime(this.$route.params.pid,this.$route.params.uid).then((result) => {
            for(let key = 0;key < 50; key++){
                this.echartOp1.series[1].data.push(JSON.parse(result.t)[key+1]);
            }
        });
    },
    methods: {
        dealCellList(){
            this.globalResultInfo.knowledgeAcceptanceLevel.forEach(item => {
                let temp = [];
                item.forEach(child => {
                    let color = '#F7A29A';
                    if(child == 1){
                        color = '#FDD289'
                    }
                    if(child == 2){
                        color = '#9FEEC0'
                    }
                    temp.push({background: color})
                })
                while(temp.length < 16){
                    temp.push({
                        background:'#ffffff'
                    })
                }
                this.cellList.push(temp);
            })
        }
    },
    filters:{
        keepState(value){
            switch(value){
                case 0:
                    return '未掌握';
                case 1:
                    return '欠缺';
                case 2:
                    return '掌握';
            }
        }
    },
}
</script>
