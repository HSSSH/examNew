<style lang="scss">
</style>
<template>
<div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" width="80">
            <template slot-scope="scope">
                {{scope.$index + 1}}
            </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="checkReport(scope.row.name)">查看</el-button>
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
          tableData: [{
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
  },
  created() {
  },
  methods: {
      checkReport(id){
          console.log(id);
          this.$router.replace({name: 'Report'});
      }
  }
}
</script>
