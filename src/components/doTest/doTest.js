import { getPaperById,commitPaper } from '@/api/exam';
export default {
    name: 'DoTest',
    components: {
    },
    data () {
      return {
        leftTimeSec: 3600,  //初始默认3600s
        data: {
            showCalculator: false,  //显示计算器
            cardOpen:false,         //显示答题卡
            noBlink: true           //时间闪烁
        },
        interval: {},       //总计时器
        singleInterval: {}, //每题计时器
        allOptionList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        paper: {            //整张试卷数据
            questions: [{}],
            currentQuestion: 0,
            currentSection: 1,
            indexRange: [{min: 0,max: 1}],
            leftTimeSec: 3600
        },          
        completePercent: 0, //答题进度
      }
    },
    created() {
        if (this.$route.params.examId) {
            this.loadPaper(this.$route.params.examId);
        }
    },
    mounted() {
        document.addEventListener("click", this.closeCard);
    },
    computed: {
    },
    methods: {
        loadPaper(paperId) {
            if(localStorage.getItem('testPaper' + paperId)){
                this.paper = JSON.parse(localStorage.getItem('testPaper' + paperId));
                setTimeout(() => {MathJax.Hub.Queue(["Typeset",MathJax.Hub]);},0);
                this.leftTimeSec = this.paper.leftTimeSec;
                let ansList = this.paper.questions[this.paper.currentQuestion].ans?this.paper.questions[this.paper.currentQuestion].ans.split(','):[];
                this.paper.questions[this.paper.currentQuestion].options.forEach(item => {
                    item.choose = ansList.indexOf(item.id) != -1;
                })
                this.completePercent = Math.floor(100*(this.paper.currentQuestion - this.paper.indexRange[this.paper.currentSection - 1].min + 1)/(this.paper.indexRange[this.paper.currentSection - 1].max - this.paper.indexRange[this.paper.currentSection - 1].min + 1));
                this.closeCard();
                this.interval = setInterval(()=>{
                    this.paper.leftTimeSec -= 1;
                    this.leftTimeSec -= 1;
                }, 1000);
                this.singleInterval = setInterval(() => {
                    if(!this.paper.questions[this.paper.currentQuestion].usetime){
                        this.paper.questions[this.paper.currentQuestion].usetime = 1;
                    }
                    else this.paper.questions[this.paper.currentQuestion].usetime++;
                }, 1000);
            }
            else {
                getPaperById(paperId).then((result) => {
                    Object.assign(this.paper,result)
                    setTimeout(() => {MathJax.Hub.Queue(["Typeset",MathJax.Hub]);},0);
                    this.paper.currentSection = 1;
                    this.paper.currentQuestion = 0;
                    //设置题号范围
                    this.setIndexRange();
                    //设置时间
                    this.leftTimeSec = 60 * parseInt(this.paper.sectionDurations.split(',')[this.paper.currentSection - 1]);
                    this.paper.leftTimeSec = this.leftTimeSec;              //paper里面也存一份用来缓存
                    this.changePage(0,'first');
                    //开始倒计时
                    this.interval = setInterval(() => {
                        this.paper.leftTimeSec -= 1;
                        this.leftTimeSec -= 1;
                    }, 1000);
                });
            }
        },
        chooseCorrect(answer, list) {
            this.paper.questions[this.paper.currentQuestion].ans = '';
            if (this.paper.questions[this.paper.currentQuestion].correctNum > 1) {
                answer.choose = !answer.choose;
            }
            else {
                list.forEach(item => {
                    item.choose = false;
                })
                answer.choose = true;
            }
            list.forEach(item => {
                if(item.choose){
                    this.paper.questions[this.paper.currentQuestion].ans += this.paper.questions[this.paper.currentQuestion].ans === ''?item.id:',' + item.id;
                }
            })
        },
        submitAnswer() {
            this.paper.questions.filter((item,index) => {
                return index >= this.paper.indexRange[this.paper.currentSection - 1].min &&
                        index <= this.paper.indexRange[this.paper.currentSection - 1].max &&
                        !item.ans;
            }).length > 0 ?
            this.$confirm('未全部作答，确认提交?', '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
                this.submitMyAnswer();
              }).catch(() => {})
            :this.$confirm('确认提交?', '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
                this.submitMyAnswer();
              }).catch(() => {})
        },
        changePage(page,flag,$event) {
            if($event && this.paper.currentQuestion == this.paper.indexRange[this.paper.currentSection - 1].max){
                this.data.cardOpen = true;
                $event.stopPropagation();
            }
            if(page >= this.paper.indexRange[this.paper.currentSection - 1].min && page <= this.paper.indexRange[this.paper.currentSection - 1].max){
                if(this.paper.currentQuestion != page){
                    if(flag != 'first') {
                        clearInterval(this.singleInterval);
                    }
                    this.singleInterval = setInterval(() => {
                        if(!this.paper.questions[this.paper.currentQuestion].usetime){
                            this.paper.questions[this.paper.currentQuestion].usetime = 1;
                        }
                        else this.paper.questions[this.paper.currentQuestion].usetime++;
                    }, 1000);
                }
                this.paper.currentQuestion = page;
                setTimeout(() => {MathJax.Hub.Queue(["Typeset",MathJax.Hub]);},0);
                this.completePercent = Math.floor(100*(this.paper.currentQuestion - this.paper.indexRange[this.paper.currentSection - 1].min + 1)/(this.paper.indexRange[this.paper.currentSection - 1].max - this.paper.indexRange[this.paper.currentSection - 1].min + 1));
            }
        },
        quitTest(){
            this.$confirm('确认放弃?', '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
                clearInterval(this.interval);
                clearInterval(this.singleInterval);
                localStorage.removeItem('testPaper' + this.$route.params.examId);
                this.$router.push({path: '/app/mainPage/abilityTest'})
            }).catch(() => {})
        },
        submitMyAnswer() {   //提交答案，停止计时，跳转下一模块
            clearInterval(this.interval);
            clearInterval(this.singleInterval);
            if(this.paper.currentSection < this.paper.indexRange.length){
                this.$confirm('模块'+ (this.paper.currentSection) + '结束!', '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
                    this.paper.currentSection++;
                    this.leftTimeSec = 60 * parseInt(this.paper.sectionDurations.split(',')[this.paper.currentSection - 1]);
                    this.paper.leftTimeSec = this.leftTimeSec;
                    this.paper.currentQuestion = this.paper.indexRange[this.paper.currentSection - 1].min;
                    localStorage.setItem('testPaper' + this.paper.id, JSON.stringify(this.paper));
                    this.$router.push({path: '/app/restPage/'+this.paper.id})
                }).catch(() => {})
            }
            else {
                localStorage.setItem('testPaper' + this.paper.id, JSON.stringify(this.paper));
                this.$alert('您已完成此次测试，请耐心等待我们的专业老师与您沟通测试结果，助您进步！', '提示', {
                    confirmButtonText: '确定',
                    callback: () => {
                        this.deleteContentWord();
                        // console.log(this.paper);
                        commitPaper(this.paper).then((result) => {
                            if(result.code == 200){
                                this.$router.push({path: '/app/testResult/'+result.message+'/'+this.paper.totalScore})
                            }
                            else {
                                // console.log("error");
                            }
                        });
                    }
                })
            }
        },
        setIndexRange() {
            this.paper.indexRange = []; 
            let list = this.paper.sectionNums.split(',');
            list.forEach((item,index) => {
                item = index == 0?parseInt(item):parseInt(item) + list[index - 1];
                this.paper.indexRange.push({
                    min: index == 0?0:list[index - 1],
                    max: item - 1
                })
            })
        },
        deleteContentWord(){
            delete this.paper.createtime;
            delete this.paper.updatetime;
            delete this.paper.remark;
            delete this.paper.sections;
            for (var indexs = 0;indexs < this.paper.questions.length; indexs++){
                delete this.paper.questions[indexs].options;
                delete this.paper.questions[indexs].content;
                delete this.paper.questions[indexs].updatetime;
                delete this.paper.questions[indexs].createtime;
                delete this.paper.questions[indexs].wrongDesc;
            }
        },
        closeCard(){
            this.data.cardOpen = false;
        }
    },
    watch: {
        leftTimeSec(val) {
            if (val == 0) {
                this.submitMyAnswer();
            }
            else if(this.paper.id) {
                localStorage.setItem('testPaper' + this.paper.id, JSON.stringify(this.paper));
                //10分钟时闪烁一下计时器
                if(val == 10*60){
                    setInterval(() => {this.data.noBlink = !this.data.noBlink;}, 500, 10);
                }
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.interval);
        clearInterval(this.singleInterval);
        document.removeEventListener('click',this.closeCard);
    },
  }