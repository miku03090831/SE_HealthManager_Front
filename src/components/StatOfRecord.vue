<template>
  <div class="stat-of-record">
    <el-button @click="getStat">更新数据</el-button>
    <div class="two-month">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最近两个月就诊统计</span>
        </div>
        <div class="item" id="times">
            就诊次数：{{twoMonthData.times}}次
        </div>
        <div class="item" id=reasons>
            主要原因：{{twoMonthData.mostReason}}
        </div>
        <!-- <div class="item" id=when>
            最频繁时间段：傍晚
        </div> -->
        <div class="item" id=cost>
            累计花费：{{twoMonthData.cost}}元
        </div>
      </el-card>
    </div>
    <div class="all">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>历史就诊统计</span>
        </div>
        <div class="item" id="times">
            就诊次数：{{allData.times}}次
        </div>
        <div class="item" id=reasons>
            主要原因：{{allData.mostReason}}
        </div>
        <!-- <div class="item" id=when>
            最频繁时间段：傍晚
        </div> -->
        <div class="item" id=cost>
            累计花费：{{allData.cost}}元
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatOfRecord",
  data(){
    return {
      twoMonthData:{
        times:5,//次数
        mostReason:"发烧",//最频繁时间段可能先不考虑
        cost:500
      },
      allData:{
        times:15,
        mostReason:"头疼",
        cost:5000
      }
    }
  },
  methods:{
    getStat(){
      console.log("重新统计数据")
    }
  }
};
</script>
<style scoped>
.stat-of-record {
  position: absolute;
  width: 50%;
  height: 100%;
  border-right: 2px solid #52b7f5;
}

.el-button{
  position: absolute;
  right: 10%;
  top:5%;
  width: 100px;
}

.two-month {
  position: absolute;
  top:10%;
  width: 100%;
  height: 50%;
}
.all {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 50%;
}
.el-card{
    width: 80%;
    margin: 30px auto;
}
.el-card .item{
    margin-top: 10px;
}
</style>