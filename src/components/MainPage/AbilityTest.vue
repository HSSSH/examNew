<style lang="scss">
.ability-test {
  .title-part {
    height: 215px;
    background: #5e97f1;
    position: relative;
    img {
      position: absolute;
      &:nth-child(1) {
        left: 19%;
        bottom: 50px;
      }
      &:nth-child(2) {
        left: calc(19% + 240px);
        bottom: 55px;
      }
      &:nth-child(3) {
        left: calc(19% + 430px);
        bottom: 0;
      }
    }
    .card-list {
      position: absolute;
      top: 160px;
      left: calc(50% - 453px);
      z-index: 2;
      button {
        border: none;
        height: 280px;
        float: left;
        margin-top: 10px;
        position: relative;
        label {
          display: block;
          font-weight: normal;
          font-size: 23px;
          text-align: center;
          position: absolute;
          span {
            font-size: 14px;
            padding: 0 10px;
          }
          i {
            display: block;
            width: 100%;
            height: 1px;
            margin: 5px 0;
          }
        }
        img {
          position: absolute;
          bottom: 20px;
          z-index: 3;
        }
        &:hover {
          margin-top: 0;
          height: 286px;
        }
        &:nth-child(1) {
          background: url("../../images/mainPage/card1.png") no-repeat center;
          background-size: 100% 100%;
          width: 280px;
          margin-right: -55px;
          filter:grayscale(1);
          label {
            top: 30px;
            left: 105px;
            // color: #ea7677;
            color: #E8E8E8;
            i {
              background: #ea7677;
            }
          }
          img {
            left: 65px;
          }
          &:hover {
            width: 286px;
          }
        }
        &:nth-child(2) {
          background: url("../../images/mainPage/card2.png") no-repeat center;
          background-size: 100% 100%;
          width: 228px;
          margin-right: -5px;
          filter:grayscale(1);
          label {
            top: 30px;
            left: 65px;
            // color: #f6bb6d;
            color: #E8E8E8;
            i {
              background: #f6bb6d;
            }
          }
          img {
            left: 60px;
          }
          &:hover {
            width: 234px;
          }
        }
        &:nth-child(3) {
          background: url("../../images/mainPage/card3.png") no-repeat center;
          background-size: 100% 100%;
          width: 232px;
          margin-right: -55px;
          label {
            top: 20px;
            left: 30px;
            color: #39acc1;
            i {
              background: #39acc1;
            }
          }
          img {
            left: 50px;
          }
          &:hover {
            width: 238px;
          }
        }
        &:nth-child(4) {
          background: url("../../images/mainPage/card4.png") no-repeat center;
          background-size: 100% 100%;
          width: 280px;
          filter:grayscale(1);
          label {
            top: 30px;
            left: 60px;
            // color: #aa8fd2;
            color: #E8E8E8;
            i {
              background: #aa8fd2;
            }
          }
          img {
            left: 85px;
          }
          &:hover {
            width: 286px;
          }
        }
      }
    }
  }
  .test-content-part {
    width: 910px;
    margin: 270px auto 30px;
    .project-ability {
      text-align: center;
      & > div.title {
        text-align: left;
        label {
          display: inline-block;
          padding: 10px 18px;
          font-size: 16px;
          font-weight: normal;
          color: white;
          background: #39acc1;
        }
      }
      .paper-card {
        width: 400px;
        height: 194px;
        display: inline-block;
        margin: 20px;
        padding: 24px 15px 10px;
        background: url("../../images/mainPage/gradeBack.png") no-repeat center;
        color: white;
        p {
          font-size: 34px;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }
        button {
          font-size: 15px;
          padding: 5px 25px;
          border: solid 2px white;
          color: white;
          background: -webkit-linear-gradient(
            #45b5cb,
            #5ac9dd,
            #45b5cb
          ); /* Safari 5.1 - 6.0 */
          background: -o-linear-gradient(
            #45b5cb,
            #5ac9dd,
            #45b5cb
          ); /* Opera 11.1 - 12.0 */
          background: -moz-linear-gradient(
            #45b5cb,
            #5ac9dd,
            #45b5cb
          ); /* Firefox 3.6 - 15 */
          background: linear-gradient(
            #45b5cb,
            #5ac9dd,
            #45b5cb
          ); /* 标准的语法 */
          &:hover {
            background: -webkit-linear-gradient(
              #5ac9dd,
              #45b5cb,
              #5ac9dd
            ); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(
              #5ac9dd,
              #45b5cb,
              #5ac9dd
            ); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(
              #5ac9dd,
              #45b5cb,
              #5ac9dd
            ); /* Firefox 3.6 - 15 */
            background: linear-gradient(
              #5ac9dd,
              #45b5cb,
              #5ac9dd
            ); /* 标准的语法 */
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="ability-test">
    <div class="title-part">
      <img src="@/images/mainPage/pic2.png" />
      <img src="@/images/mainPage/title.png" />
      <img src="@/images/mainPage/pic1.png" />
      <div class="card-list">
        <button @click="testState.type = 1">
          <label>
            学习习惯诊断
            <br />正在开发
          </label>
          <img src="@/images/mainPage/icon1.png" />
        </button>
        <button @click="testState.type = 2">
          <label>
            自主探究能力
            <br />正在开发
          </label>
          <img src="@/images/mainPage/icon1.png" />
        </button>
        <button @click="testState.type = 3">
          <label>
            学科能力
            <i></i>
            <span>全面检测学习问题</span>
            <br />
            <span style="position: relative;top:-10px;">准确标注学习漏洞</span>
          </label>
          <img src="@/images/mainPage/pic3.png" />
        </button>
        <button @click="testState.type = 4">
          <label>
            其他测试
            <br />正在开发
          </label>
          <img src="@/images/mainPage/icon1.png" />
        </button>
      </div>
    </div>
    <div class="test-content-part">
      <div v-if="testState.type == 3" class="project-ability">
        <div class="title">
          <label>学科能力</label>
        </div>
        <div>
          <div class="paper-card" v-for="item in paperList" :key="item.id">
            <p>
              {{item.name}}
            </p>
            <br/>
            <button @click="startTest(item)">马上进入</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPaperList, checkFirstTest } from "@/api/exam";
export default {
  name: "AbilityTest",
  components: {},
  data() {
    return {
      testState: {
        type: 3
      },
      paperList: []
    };
  },
  created() {
    getPaperList("1", "").then(data => {
      this.paperList = data;
    });
  },
  methods: {
    startTest(item) {
      checkFirstTest(item.id, this.$store.state.loginUser.id).then(res => {
        if (res.result) {
          this.$alert("该试题您已完成，不需要重复测试！", "提示", {
            confirmButtonText: "确定"
          });
        } else {
          this.$router.push({ path: "/app/guidePage/" + item.id });
        }
      });
    }
  }
};
</script>
