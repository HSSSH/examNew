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
            sections: [{}],
            currentQuestion: 0,
            currentSection: 1,
            indexRange: [{min: 0,max: 1}],
            leftTimeSec: 3600
        },
        largestHeight: 60,
        dialogVisible1: false,
        dialogVisible2: false,
        loading:false
      }
    },
    created() {
        const oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = 'mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
        document.body.appendChild(oScript);
        if (this.$route.params.examId) {
            this.loadPaper(this.$route.params.examId);
        }
    },
    mounted() {
        document.addEventListener("click",() => {this.data.cardOpen = false;});
    },
    computed: {
        completePercent(){
            return Math.floor(100*(this.paper.currentQuestion - this.paper.indexRange[this.paper.currentSection - 1].min + 1)/(this.paper.indexRange[this.paper.currentSection - 1].max - this.paper.indexRange[this.paper.currentSection - 1].min + 1));
        },
        leftTimeShow(){
            let hour = Math.floor(this.leftTimeSec / 3600);
            let minute = Math.floor((this.leftTimeSec - hour * 3600) / 60);
            let sec = this.leftTimeSec - hour * 3600 - minute * 60;
            return (hour < 10?('0'+hour):hour) + ':' + (minute < 10?('0'+minute):minute) + ':' + (sec < 10?('0'+sec):sec);
        }
    },
    methods: {
        loadPaper(paperId) {
            if(localStorage.getItem('testPaper%' + this.$store.state.loginUser.id + '%' + paperId)){
                this.paper = JSON.parse(localStorage.getItem('testPaper%' + this.$store.state.loginUser.id + '%' + paperId));
                //设置时间
                this.leftTimeSec = this.paper.leftTimeSec;
                //开始倒计时
                this.interval = setInterval(()=>{
                    this.leftTimeSec -= 1;
                    this.paper.leftTimeSec -= 1;
                }, 1000);
                let ansList = this.paper.questions[this.paper.currentQuestion].ans?this.paper.questions[this.paper.currentQuestion].ans.split(','):[];
                this.paper.questions[this.paper.currentQuestion].options.forEach(item => {
                    item.choose = ansList.indexOf(String(item.id)) != -1;
                })
                //设置当前题目页
                this.changePage(this.paper.currentQuestion,'first');
                this.data.cardOpen = false;
            }
            else {
                getPaperById(paperId).then((result) => {
                    Object.assign(this.paper,result)
                    this.paper.currentSection = 1;
                    this.paper.currentQuestion = 0;
                    //设置题号范围
                    this.setIndexRange();
                    //设置时间
                    this.leftTimeSec = 60 * parseInt(this.paper.sectionDurations.split(',')[this.paper.currentSection - 1]);
                    this.paper.leftTimeSec = this.leftTimeSec;              //paper里面也存一份用来缓存
                    //开始倒计时
                    this.interval = setInterval(() => {
                        this.leftTimeSec -= 1;
                        this.paper.leftTimeSec -= 1;
                    }, 1000);
                    //设置当前题目页
                    this.changePage(0,'first');
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
                if(flag != 'first') {
                    clearInterval(this.singleInterval);
                }
                this.paper.currentQuestion = page;
                this.singleInterval = setInterval(() => {
                    if(!this.paper.questions[this.paper.currentQuestion].usetime){
                        this.paper.questions[this.paper.currentQuestion].usetime = 1;
                    }
                    else this.paper.questions[this.paper.currentQuestion].usetime++;
                }, 1000);
                setTimeout(() => {
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                },100);
                // setTimeout(() => {
                    // this.judgeLagestHeight((height) => {
                        // console.log(height);
                        // this.largestHeight = height > 60?height:60;
                        // MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
                    // })
                // },0);
            }
        },
        quitTest(){
            this.$confirm('确认放弃?', '提示', {confirmButtonText: '确定',cancelButtonText: '取消',type: 'warning'}).then(() => {
                clearInterval(this.interval);
                clearInterval(this.singleInterval);
                localStorage.removeItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.$route.params.examId);
                this.$router.push({path: '/app/mainPage/abilityTest'})
            }).catch(() => {})
        },
        submitMyAnswer() {   //提交答案，停止计时，跳转下一模块
            clearInterval(this.interval);
            clearInterval(this.singleInterval);
            if(this.paper.currentSection < this.paper.indexRange.length){
                this.dialogVisible1 = true;
            }
            else {
                localStorage.setItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.paper.id, JSON.stringify(this.paper));
                this.dialogVisible2 = true;
            }
        },
        setIndexRange() {
            this.paper.indexRange = []; 
            let list = this.paper.sectionNums.split(',').map(Number);
            list.forEach((item,index) => {
                if(index != 0) {list[index] = item + list[index - 1];}
                this.paper.indexRange.push({
                    min: index == 0?0:list[index - 1],
                    max: list[index] - 1
                })
            })
        },
        //遍历选项高度都设置成一样高
        // judgeLagestHeight(callback){
        //     let timer = setInterval(() => {
        //         let stopLoop = true;
        //         this.$refs.htmlContent.forEach((item) => {
        //             if(item.getElementsByTagName("img").length && item.getElementsByTagName("img")[0].clientHeight == 0){
        //                 stopLoop = false;
        //             }
        //         })
        //         if(stopLoop){
        //             let maxHeight = Math.max(...this.$refs.htmlContent.map((item) => {
        //                 return item.clientHeight;
        //             }));
        //             callback(maxHeight);
        //             clearInterval(timer);
        //             return;
        //         }
        //     }, 100)
        // },
        handleClose1(){
            this.paper.currentSection++;
            this.leftTimeSec = 60 * parseInt(this.paper.sectionDurations.split(',')[this.paper.currentSection - 1]);
            this.paper.leftTimeSec = this.leftTimeSec;
            this.paper.currentQuestion = this.paper.indexRange[this.paper.currentSection - 1].min;
            localStorage.setItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.paper.id, JSON.stringify(this.paper));
            this.$router.push({path: '/app/restPage/'+this.paper.id})
        },
        handleClose2(){
            if(this.loading) return;
            this.loading = true;
            let commitData = {
                "name": this.paper.name,
                "pid": this.paper.id,
                "uid": this.$store.state.loginUser.id,
                "answers": []
            }
            for (let indexs = 0;indexs < this.paper.questions.length; indexs++){
                let obj = {
                    "number": this.paper.questions[indexs].number,
                    "options": '',
                    "qid": this.paper.questions[indexs].id,
                    "useTime": this.paper.questions[indexs].usetime
                }
                if(!this.paper.questions[indexs].ans){this.paper.questions[indexs].ans = '';}
                let ansList = this.paper.questions[indexs].ans.split(',').map(Number);
                this.paper.questions[indexs].options.forEach(item => {
                    if(ansList.indexOf(item.id) != -1){
                        obj.options += this.allOptionList[item.oindex];
                    }
                })
                commitData.answers.push(obj)
            }
            console.log(commitData);
            commitPaper(commitData).then((res) => {
                if(res.result == true){
                    this.loading = false;
                    localStorage.removeItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.$route.params.examId);
                    this.$router.push({path: '/app/testResult/' + res.t.score + '/' + 100})
                }
                else {
                    this.loading = false;
                    this.dialogVisible2 = false;
                    alert('提交失败！');
                }
            }).catch((res) => {
                this.loading = false;
                this.dialogVisible2 = false;
                alert('提交失败！');
            });
        }
    },
    watch: {
        leftTimeSec(val) {
            if (val == 0) {
                this.submitMyAnswer();
            }
            else if(this.paper.id) {
                localStorage.setItem('testPaper%' + this.$store.state.loginUser.id + '%' + this.paper.id, JSON.stringify(this.paper));
                //还剩10分钟或5分钟时闪烁一下计时器
                if(val == 10*60 || val == 5*60){
                    let count = 0;
                    let blinkInterval = setInterval(() => {
                        count++;
                        if(count === 10){    
                            clearInterval(blinkInterval);    
                        }
                        this.data.noBlink = !this.data.noBlink;
                    }, 500);
                }
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.interval);
        clearInterval(this.singleInterval);
        document.removeEventListener('click',() => {this.data.cardOpen = false;});
    },
  }