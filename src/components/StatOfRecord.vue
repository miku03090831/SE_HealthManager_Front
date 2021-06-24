<template>
  <div class="stat-of-record">
    <el-button @click="getStat">更新数据</el-button>
    <div class="two-month">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最近两个月就诊统计</span>
        </div>
        <div class="item" id="times" ref="_30times">就诊次数：? 次</div>
        <div class="item" id="reasons">
          主要原因：{{ twoMonthData.mostReason }}
        </div>
        <!-- <div class="item" id=when>
            最频繁时间段：傍晚
        </div> -->
        <div class="item" id="cost" ref="_30cost">累计花费：? 元</div>
      </el-card>
    </div>
    <div class="all">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>历史就诊统计</span>
        </div>
        <div class="item" id="times" ref="alltimes">就诊次数：? 次</div>
        <div class="item" id="reasons">主要原因：{{ allData.mostReason }}</div>
        <!-- <div class="item" id=when>
            最频繁时间段：傍晚
        </div> -->
        <div class="item" id="cost" ref="allcost">累计花费：? 元</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatOfRecord",
  props: ["user"],
  data() {
    return {
      oneMonth: "",
      twoMonthData: {
        mostReason: "发烧", //最频繁时间段可能先不考虑
      },
      allData: {
        times: 15,
        mostReason: "头疼",
        cost: 5000,
      },
    };
  },
  methods: {
    getStat() {
      console.log("重新统计数据");
      this.get2();
      this.getAll();
    },
    get2() {
      var now = new Date();
      var days = 30;
      var value = now.getTime();
      value -= days * (24 * 3600 * 1000);
      var end = new Date(value);
      var month = "" + (end.getMonth() + 1);
      var day = "" + end.getDate();
      var year = end.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      this.oneMonth = [year, month, day].join("-")
      console.log(this.oneMonth)
      this.$axios
        .post("/personalrecord/count2", {
          uid: this.user.uid,
          searchtime: this.oneMonth,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("获取2月统计数据成功");
            console.log(res.data);
            this.twoMonthData.times = res.data.number;
            this.twoMonthData.cost = res.data.allcost;
            this.$refs._30times.innerText=`就诊次数：${this.twoMonthData.times} 次`
            this.$refs._30cost.innerText=`累计花费：${this.twoMonthData.cost} 元`
          }
        })
        .catch(() => {
          this.$alert("删除失败");
        });
    },
    getAll() {
       this.$axios
        .post("/personalrecord/countAll", {
          uid: this.user.uid
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("获取所有统计数据成功");
            console.log(res.data);
            this.allData.times = res.data.number;
            this.allData.cost = res.data.allcost;
            this.$refs.alltimes.innerText=`就诊次数：${this.allData.times} 次`
            this.$refs.allcost.innerText=`累计花费：${this.allData.cost} 元`
          }
        })
        .catch(() => {
          this.$alert("删除失败");
        });
    },
  },
};
</script>
<style scoped>
.stat-of-record {
  position: absolute;
  width: 50%;
  height: 100%;
  border-right: 2px solid #52b7f5;
}

.el-button {
  position: absolute;
  right: 10%;
  top: 5%;
  width: 100px;
}

.two-month {
  position: absolute;
  top: 10%;
  width: 100%;
  height: 50%;
}
.all {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 50%;
}
.el-card {
  width: 80%;
  margin: 30px auto;
}
.el-card .item {
  margin-top: 10px;
}
</style>