<style lang="scss" scoped>
.xx{
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: solid 1px black;
    position: relative;
    .ww{
        min-height: 100px;
        display: flex;
        align-items: stretch;
        border: solid 1px black;
        position: relative;
        .aa{
            width: 100%;
            min-height: 100px;
            border: solid 1px black;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    .yy{
        width: 300px;
        height: 300px;
        background: black; 
        position: relative;
        margin-top: 150px;
        margin-left: -300px;
    }
    .zz{
        width: 100px;
        height: 100px;
        background: black; 
        position: relative;
        margin-top: 10px;
    }
}
</style>
<template>
<div class="test">
    <div class="xx">
        <div class="ww">
            <div class="aa" style="width: 100px">
                <div class="zz"></div>
            </div>
            <div class="aa" style="width: calc(50% - 50px)">
                <div class="yy"></div>
                <div class="zz"></div>
            </div>
            <div class="aa" style="width: calc(50% - 50px)">
            </div>
        </div>
        <div class="ww">
            
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        watch: {
        },
        created() {
        },
        mounted () {
        },
        methods: {
        }
    };
</script>