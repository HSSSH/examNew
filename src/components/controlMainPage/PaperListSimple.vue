<style lang="scss" scoped>
</style>
<template>
<div class="page-list">
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" width="80">
            <template slot-scope="scope">
                {{scope.$index + 1}}
            </template>
        </el-table-column>
        <el-table-column prop="uname" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="region" label="校区">
        </el-table-column>
        <el-table-column prop="name" label="试卷">
        </el-table-column>
        <el-table-column prop="score" label="得分">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="checkReport(scope.row)">查看</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import { getCommitPaperListSimple } from '@/api/ctrlPaper';

export default {
  name: 'PageListSimple',
  components: {
  },
  data () {
      return {
          tableData: []
      }
  },
  created() {
    this.getCommitPaperResult();
  },
  methods: {
      getCommitPaperResult(){
        getCommitPaperListSimple().then((data) => {
          this.tableData = data.t;
        })
      },
      checkReport(item){
          this.$router.push({path: '/ctrlApp/report3/' + item.pid + '/' + item.uid});
      }
  }
}
</script>
