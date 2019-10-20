<style src="@/sass/global.scss" lang="scss"></style>
<style lang="scss" scoped>
.test{
    height: 100%;
}
.aside,.main{
    width: 200px;
    display: inline-block;
    vertical-align: top;
}
.main{
    width: calc(100% - 200px);
    height: 100%;
    &>div{
        height: 100%;
        &.c1{
            background: url('background.png') no-repeat;
            div {
                border: 10px solid hsla(0,0%,100%,.5);
                background: white;
                background-clip: padding-box;
                /* styling */
                max-width: 20em;
                padding: 2em;
                margin: 2em auto 0;
                font: 100%/1.5 sans-serif;
            }
        }
        &.c2{
            div {
                width: 100px;
                height: 60px;
                margin: 25px;
                background: yellowgreen;
                box-shadow: 0 0 0 10px #655,
                        0 0 0 15px deeppink,
                        0 2px 5px 15px rgba(0,0,0,.6);
            }
        }
        &.c3{
            div {
                background: url(http://csssecrets.io/images/code-pirate.svg)
                            no-repeat bottom right #58a;
                background-position: right 20px bottom 10px;
                
                /* Styling */
                max-width: 10em;
                min-height: 5em;
                padding: 10px;
                color: white;
                font: 100%/1 sans-serif;
            }
        }
        &.c4{
            div {
                background: url(http://csssecrets.io/images/code-pirate.svg)
                            no-repeat bottom right #58a;
                background-origin: content-box;
                
                /* Styling */
                max-width: 10em;
                min-height: 5em;
                padding: 10px;
                color: white;
                font: 100%/1 sans-serif;
            }
        }
        &.c5{
            div {
                background: url(http://csssecrets.io/images/code-pirate.svg)
                            no-repeat bottom right #58a;
                background-position: calc(100% - 20px) calc(100% - 10px);
                
                /* Styling */
                max-width: 10em;
                min-height: 5em;
                padding: 10px;
                color: white;
                font: 100%/1 sans-serif;
            }
        }
        &.c6{
            div {
                outline: .6em solid #655;
                box-shadow: 0 0 0 .4em #655; /* todo calculate max of this */
                
                max-width: 10em;
                border-radius: .8em;
                padding: 1em;
                margin: 1em;
                background: tan;
                font: 100%/1.5 sans-serif;
            }
        }
        &.c7{
            background: linear-gradient(#fb3 50%, #58a 0);
            background-size: 100% 30px;
        }
        &.c8{
            background: linear-gradient(to right, #fb3 50%, #58a 0);
            background-size: 30px 100%;
        }
        &.c9{
            background: linear-gradient(45deg, 
              #fb3 25%, #58a 0, #58a 50%,
              #fb3 0, #fb3 75%, #58a 0);
            background-size: 42.4px 42.4px;
        }
        &.c10{
            background: repeating-linear-gradient(60deg, 
              #fb3, #fb3 15px,
              #58a 0, #58a 30px);
            height: 100%;
        }
        &.c11{
            background: #58a;
            background-image: repeating-linear-gradient(30deg, 
                        hsla(0,0%,100%,.1), hsla(0,0%,100%,.1) 15px,
                        transparent 0, transparent 30px);

            height: 100vh;
        }
        &.c12{
            background: #58a;
            background-image: linear-gradient(white 2px, transparent 0),
                  linear-gradient(90deg, white 2px, transparent 0),
                  linear-gradient(hsla(0,0%,100%,.3) 1px, transparent 0),
                  linear-gradient(90deg, hsla(0,0%,100%,.3) 1px, transparent 0);
            background-size: 50px 50px, 50px 50px,
                 10px 10px, 10px 10px;
        }
        &.c13{
            background: #655;
            background-image: radial-gradient(tan 20%, transparent 0),
                  radial-gradient(tan 20%, transparent 0);
            background-size: 30px 30px;
            background-position: 0 0, 15px 15px;
        }
        &.c14{
            background: #eee;
            background-image: 
                linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0),
                linear-gradient(45deg, rgba(0,0,0,.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,.25) 0);
            background-position: 0 0, 15px 15px;
            background-size: 30px 30px;

            min-height: 100%;
        }
        &.c15{
            background: #eee url('data:image/svg+xml,\
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25" >\
            <rect x="50" width="50" height="50" />\
            <rect y="50" width="50" height="50" />\
            </svg>');
            background-size: 30px 30px;
        }
        &.c16{
            background: red;
            background: repeating-linear-gradient(-45deg, limegreen 0 20px, green 20px 60px);
            min-height: 100%;
        }
        &.c17{
            background: red;
            background: conic-gradient(limegreen, green, limegreen);
            min-height: 100%;
        }
        &.c18{
            margin: 0;
            display: flex;
            min-height: 100vh;
            text-align: center;
            background: #655;
            color: white;
            @keyframes spin { to { transform: rotate(1turn); } }
            @keyframes radius { 50% { border-radius: 50%; } }
            @keyframes color { 33% { color: orange; } 66% { color: deeppink } }
            @keyframes width { 50% { border-width: .3em; } }
            .loading:before {
                content: '';
                display: block;
                width: 4em;
                height: 4em;
                margin: 0 auto 1em;
                border: 1.5em solid;
                color: yellowgreen;
                box-sizing: border-box;
                animation: 1s spin, .7s radius, 1.1s color, 1.3s width;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
            .loading {
                margin: auto;
            }
        }
        &.c19{
            background: hsl(20, 40%, 90%);
            background-image: 
                linear-gradient(90deg, #fb3 11px, transparent 0),
                linear-gradient(90deg, #ab4 23px, transparent 0),
                linear-gradient(90deg, #655 23px, transparent 0);
            background-size: 83px 100%, 61px 100%, 41px 100%;
        }
        &.c20{
            div {
                border: 40px solid transparent;
                border-image: 33.334% url('data:image/svg+xml,<svg xmlns="http:%2F%2Fwww.w3.org%2F2000%2Fsvg" width="30" height="30"> \
                                    <circle cx="5" cy="5" r="5" fill="%23ab4"%2F><circle cx="15" cy="5" r="5" fill=" %23655"%2F> \
                                    <circle cx="25" cy="5" r="5" fill="%23e07"%2F><circle cx="5" cy="15" r="5" fill=" %23655"%2F> \
                                    <circle cx="15" cy="15" r="5" fill="hsl(15, 25%, 75%)"%2F> \
                                    <circle cx="25" cy="15" r="5" fill=" %23655"%2F><circle cx="5" cy="25" r="5" fill="%23fb3"%2F> \
                                    <circle cx="15" cy="25" r="5" fill=" %23655"%2F><circle cx="25" cy="25" r="5" fill="%2358a"%2F><%2Fsvg>');
                padding: 1em;
                max-width: 20em;
                font: 130%/1.6 Baskerville, Palatino, serif;
            }

            div:nth-child(2) {
                margin-top: 1em;
                border-image-repeat: round;
            }
        }
        &.c21{
        }
    }
}
</style>
<template>
<div class="test">
    <div class="aside">
        <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
            <el-submenu index="0">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>菜单</span>
                </template>
                <el-menu-item v-for="item in titleList" :key="item" @click="current = item">{{item}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
    <div class="main">
        <div v-if="current == 1" class="c1">
            <div>
            Can I haz semi-transparent borders?
            Pretty please?
            </div>
        </div>
        <div v-if="current == 2" class="c2">
            <div></div>
        </div>
        <div v-if="current == 3" class="c3">
            <div>Code Pirate</div>
        </div>
        <div v-if="current == 4" class="c4">
            <div>Code Pirate</div>
        </div>
        <div v-if="current == 5" class="c5">
            <div>Code Pirate</div>
        </div>
        <div v-if="current == 6" class="c6">
            <div>I have a nice subtle inner rounding, don’t I look pretty?</div>
        </div>
        <div v-if="current == 7" class="c7">
        </div>
        <div v-if="current == 8" class="c8">
        </div>
        <div v-if="current == 9" class="c9">
        </div>
        <div v-if="current == 10" class="c10">
        </div>
        <div v-if="current == 11" class="c11">
        </div>
        <div v-if="current == 12" class="c12">
        </div>
        <div v-if="current == 13" class="c13">
        </div>
        <div v-if="current == 14" class="c14">
        </div>
        <div v-if="current == 15" class="c15">
        </div>
        <div v-if="current == 16" class="c16">
        </div>
        <div v-if="current == 17" class="c17">
        </div>
        <div v-if="current == 18" class="c18">
            <p class="loading">Loading…</p>
        </div>
        <div v-if="current == 19" class="c19">
        </div>
        <div v-if="current == 20" class="c20">
            <div>Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip t-bone mollit. Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris bresaola ribeye biltong landjaeger. Chuck pork belly sed sausage.</div>
            <div>Bacon ipsum dolor amet eu adipisicing elit tongue ground round ex fatback proident kielbasa ham hock. Sausage beef beef ribs aliquip t-bone mollit. Quis beef tri-tip sunt, cupim ut magna salami t-bone. Ut laboris bresaola ribeye biltong landjaeger. Chuck pork belly sed sausage.</div>
        </div>
        <div v-if="current == 21" class="c21">
        </div>
        <div v-if="current == 22" class="c22">
        </div>
        <div v-if="current == 23" class="c23">
        </div>
        <div v-if="current == 24" class="c24">
        </div>
        <div v-if="current == 25" class="c25">
        </div>
        <div v-if="current == 26" class="c26">
        </div>
        <div v-if="current == 27" class="c27">
        </div>
        <div v-if="current == 28" class="c28">
        </div>
        <div v-if="current == 29" class="c29">
        </div>
        <div v-if="current == 30" class="c30">
        </div>
        <div v-if="current == 31" class="c31">
        </div>
        <div v-if="current == 32" class="c32">
        </div>
        <div v-if="current == 33" class="c33">
        </div>
        <div v-if="current == 34" class="c34">
        </div>
        <div v-if="current == 35" class="c35">
        </div>
        <div v-if="current == 36" class="c36">
        </div>
        <div v-if="current == 37" class="c37">
        </div>
        <div v-if="current == 38" class="c38">
        </div>
        <div v-if="current == 39" class="c39">
        </div>
        <div v-if="current == 40" class="c40">
        </div>
        <div v-if="current == 41" class="c41">
        </div>
        <div v-if="current == 42" class="c42">
        </div>
        <div v-if="current == 43" class="c43">
        </div>
        <div v-if="current == 44" class="c44">
        </div>
        <div v-if="current == 45" class="c45">
        </div>
        <div v-if="current == 46" class="c46">
        </div>
        <div v-if="current == 47" class="c47">
        </div>
        <div v-if="current == 48" class="c48">
        </div>
        <div v-if="current == 49" class="c49">
        </div>
        <div v-if="current == 50" class="c50">
        </div>
        <div v-if="current == 51" class="c51">
        </div>
        <div v-if="current == 52" class="c52">
        </div>
        <div v-if="current == 53" class="c53">
        </div>
        <div v-if="current == 54" class="c54">
        </div>
        <div v-if="current == 55" class="c55">
        </div>
        <div v-if="current == 56" class="c56">
        </div>
        <div v-if="current == 57" class="c57">
        </div>
        <div v-if="current == 58" class="c58">
        </div>
        <div v-if="current == 59" class="c59">
        </div>
        <div v-if="current == 60" class="c60">
        </div>
        <div v-if="current == 61" class="c61">
        </div>
        <div v-if="current == 62" class="c62">
        </div>
        <div v-if="current == 63" class="c63">
        </div>
        <div v-if="current == 64" class="c64">
        </div>
        <div v-if="current == 65" class="c65">
        </div>
        <div v-if="current == 66" class="c66">
        </div>
        <div v-if="current == 67" class="c67">
        </div>
        <div v-if="current == 68" class="c68">
        </div>
        <div v-if="current == 69" class="c69">
        </div>
        <div v-if="current == 70" class="c70">
        </div>
        <div v-if="current == 71" class="c71">
        </div>
        <div v-if="current == 72" class="c72">
        </div>
        <div v-if="current == 73" class="c73">
        </div>
        <div v-if="current == 74" class="c74">
        </div>
        <div v-if="current == 75" class="c75">
        </div>
        <div v-if="current == 76" class="c76">
        </div>
        <div v-if="current == 77" class="c77">
        </div>
        <div v-if="current == 78" class="c78">
        </div>
        <div v-if="current == 79" class="c79">
        </div>
        <div v-if="current == 80" class="c80">
        </div>
        <div v-if="current == 81" class="c81">
        </div>
        <div v-if="current == 82" class="c82">
        </div>
        <div v-if="current == 83" class="c83">
        </div>
        <div v-if="current == 84" class="c84">
        </div>
        <div v-if="current == 85" class="c85">
        </div>
        <div v-if="current == 86" class="c86">
        </div>
        <div v-if="current == 87" class="c87">
        </div>
        <div v-if="current == 88" class="c88">
        </div>
        <div v-if="current == 89" class="c89">
        </div>
        <div v-if="current == 90" class="c90">
        </div>
        <div v-if="current == 91" class="c91">
        </div>
        <div v-if="current == 92" class="c92">
        </div>
        <div v-if="current == 93" class="c93">
        </div>
        <div v-if="current == 94" class="c94">
        </div>
        <div v-if="current == 95" class="c95">
        </div>
        <div v-if="current == 96" class="c96">
        </div>
        <div v-if="current == 97" class="c97">
        </div>
        <div v-if="current == 98" class="c98">
        </div>
        <div v-if="current == 99" class="c99">
        </div>
        <div v-if="current == 100" class="c100">
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                current:'1',
                titleList:['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29']
            }
        },
        watch: {
        },
        created() {
        },
        mounted () {
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    };
</script>