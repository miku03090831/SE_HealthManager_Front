<template>
  <div class="stat-of-record">
    <div class="two-month">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最近两个月就诊统计</span>
        </div>
        <div class="item" id="times">
            就诊次数：3次
        </div>
        <div class="item" id=reasons>
            主要原因：肠胃不适
        </div>
        <div class="item" id=when>
            最频繁时间段：傍晚
        </div>
        <div class="item" id=cost>
            累计花费：500元
        </div>
      </el-card>
    </div>
    <div class="all">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>历史就诊统计</span>
        </div>
        <div class="item" id="times">
            就诊次数：15次
        </div>
        <div class="item" id=reasons>
            主要原因：发烧
        </div>
        <div class="item" id=when>
            最频繁时间段：傍晚
        </div>
        <div class="item" id=cost>
            累计花费：5000元
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatOfRecord",
};
</script>
<style scoped>
.stat-of-record {
  position: absolute;
  width: 50%;
  height: 100%;
  border-right: 2px solid #52b7f5;
}
.two-month {
  position: absolute;
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