<style lang="scss">
</style>
<template>
<div>
  <ul v-for="item in paperList" :key="item.id">
      <li><a style="cursor: pointer" @click="startTest(item)">{{item.name}}</a><button style="float: right" @click="clearStorage(item)">XXX</button></li>
  </ul>
</div>
</template>

<script>
import { getPaperList } from '@/api/exam';
export default {
  name: 'ExamTable',
  components: {
  },
  data () {
    return {
        paperList:[]
	  }
  },
  created() {
    getPaperList('aleady').then(data => {
      this.paperList = data;
    });
  },
  methods: {
    startTest(item){
      this.$router.push({path: '/app/doTest/'+item.id})
    },
    clearStorage(item){
      localStorage.removeItem('testPaper' + item.id);
    }
  }
}
</script>
