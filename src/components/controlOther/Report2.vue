<style lang="scss" scoped>
.chart1{
    width: 400px;
    height: 250px;
}
</style>
<template>
<div class="report2" id="rr" style="width: 795px">
    <div class="chart1" v-echarts-render="{options: echartOp1}" style="width: 400px;height: 250px;">

    </div>
    <div class="chart1" v-echarts-render="{options: echartOp1}" style="width: 400px;height: 250px;">

    </div>
    <button @click="down">PDF</button>
</div>
</template>

<script>
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  name: 'Report2',
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
            PDF: new JsPDF('', 'pt', 'a4')
        }
    },
    computed: {
    },
    created() {
    },
    methods: {
        down(){
            this.convertCanvasToImage();
        },
        convertCanvasToImage() {
            html2Canvas(document.getElementById('rr'), {
                allowTaint: true
            })
            .then(canvas => {
                let contentWidth = canvas.width;
                let contentHeight = canvas.height;
                let pageData = canvas.toDataURL('image/jpeg', 1.0);
                this.PDF.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight);
                this.PDF.addPage();
                this.PDF.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight);
                // let pageHeight = contentWidth / 592.28 * 841.89;
                // let imgWidth = 595.28;
                // let imgHeight = imgWidth / contentWidth * contentHeight;
                // let leftHeight = contentHeight;
                // let position = 0;
                // let pageData = canvas.toDataURL('image/jpeg', 1.0);
                // let PDF = new JsPDF('', 'pt', 'a4');
                // if (leftHeight < pageHeight) {
                //     PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                // } else {
                //     while (leftHeight > 0) {
                //         PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                //         leftHeight -= pageHeight;
                //         position -= 841.89;
                //         if (leftHeight > 0) {
                //             PDF.addPage();
                //         }
                //     }
                // }
                
                this.PDF.save('title' + '.pdf');
            });
        }
    }
}
</script>