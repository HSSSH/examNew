<style lang="scss" scoped>
.report3{
    &>p{
        text-align: center;
        font-size: 25px;
        padding: 30px 10px;
    }
}
.table-common{
    width: 900px;
    font-size: 16px;
    margin: 15px auto;
    th,td{
        padding: 10px;
    }
}
</style>
<template>
<div class="report3">
    <p>{{user.name}}作答情况</p>
    <table class="table-common" border="1" cellspacing="0">
        <thead>
            <tr>
                <th>模块</th>
                <th>题目</th>
                <th>答案</th>
                <th>选择</th>
                <!-- <th>用时</th> -->
                <th>结果</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in paper.questions" :key="index">
                <td :rowspan="item.countNum" v-if="item.countNum">{{item.section}}</td>
                <td>{{item.number}}</td>
                <td>{{item.answer}}</td>
                <td>{{item.wrongAnswer?item.wrongAnswer:item.answer}}</td>
                <!-- <td></td> -->
                <td :style="{'color':item.wrongAnswer?'red':'black'}">{{item.wrongAnswer?'错误':'正确'}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { getPaperById } from '@/api/exam';
import { getCommitPaperListSimple } from '@/api/ctrlPaper';

export default {
    name: 'Report3',
    components: {
    },
    data () {
        return {
            paper:{
                questions:[]
            },
            user:{
                name:''
            }
        }
    },
    computed: {
    },
    created() {
        getPaperById(this.$route.params.pid).then((result) => {
            this.paper = result;
            this.setIndexStart(result.sectionNums).forEach((item) => {
                this.paper.questions[item.index].countNum = item.num
            })
            getCommitPaperListSimple(this.$route.params.uid,this.$route.params.pid).then((result2) => {
                this.user.name = result2.t[0].uname;
                let wrongList = JSON.parse(result2.t[0].wrongAnswerContrast);
                wrongList.forEach((item) => {
                    this.paper.questions[item.number - 1].wrongAnswer = item.options;
                    this.paper.questions[item.number - 1].useTime = item.useTime;
                })
            })
        })
    },
    methods: {
        setIndexStart(sectionNum) {
            let result = [];
            let list = sectionNum.split(',').map(Number);
            list.forEach((item,index) => {
                let num = list[index];
                if(index != 0) {list[index] = item + list[index - 1];}
                result.push({
                    index: index == 0?0:list[index - 1],
                    num: num
                })
            })
            return result;
        },
    }
}
</script>