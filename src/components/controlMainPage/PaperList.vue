<style lang="scss" scoped>
.page-list{
}
</style>
<template>
<div class="page-list">
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" width="80">
            <template slot-scope="scope">
                {{scope.$index + 1}}
            </template>
        </el-table-column>
        <el-table-column prop="uid" label="用户ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="试卷">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="checkReport(scope.row.pid,scope.row.uid)">查看</el-button>
            </template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import { getCommitPaperList } from '@/api/ctrlPaper';

export default {
  name: 'PageList',
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
        getCommitPaperList().then((data) => {
          this.tableData = data;
        })
      },
      checkReport(pid,uid){
          this.$router.push({path: '/ctrlApp/report/' + pid + '/' + uid});
      }
  }
}
</script>
