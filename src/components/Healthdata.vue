<template>
  <div class="healthdata">
    <h2>xxx健康档案</h2>
    <ul class="basicdata">
      <li>
        <div class="data" id="weight">
          <i class="iconfont icon-tizhong-01"></i>
          <div>体重</div>
          <div>73kg</div>
        </div>
      </li>
      <li>
        <div class="data" id="height">
          <i class="iconfont icon-iconsg"></i>
          <div>身高</div>
          <div>179cm</div>
        </div>
      </li>
      <li>
        <div class="data" id="bmi">
          <i class="iconfont icon-BMI"></i>
          <div>bmi</div>
          <div>22.8</div>
        </div>
      </li>
      <li>
        <div class="data" id="blood">
          <i class="iconfont icon-xiexing"></i>
          <div>血型</div>
          <div>B型</div>
        </div>
      </li>
    </ul>
    <hr />
    <div class="record">
      <h3>最近两次就诊记录</h3>
      <el-card class="record-card">
        <div slot="header" class="card-head">
          <span>2021-5-15</span>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quibusdam exceptu
          <el-button type="text">更多</el-button>
        </div>
      </el-card>
      <el-card class="record-card">
        <div slot="header" class="card-head">
          <span>2021-5-12</span>
        </div>
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          quibusdam excepturi
          <el-button type="text">更多</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Healthdata",
  components: {},
};
</script>

<style scoped>
h2 {
  text-align: center;
}
ul {
  list-style: none;
  display: block;
  margin-top: 30px;
}
ul li {
  display: inline;
  float: left;
  margin-left: 70px;
}
.data {
  width: 70px;
  height: 90px;
  border: 2px solid #52b7f5;
  border-radius: 5px;
  text-align: center;
  display: table inline;
}
.data i::before {
  vertical-align: middle;
  display: table-cell;
  margin-top: 30px;
}
.data div {
  margin: 6px auto 0;
}
hr {
  position: relative;
  top: 60px;
  width: 100%;
  margin-top: 7px;
  *margin: 0;
  border: 0;
  color: #52b7f5;
  background-color: #52b7f5;
  height: 1.5px;
}

.record {
  position: relative;
  top: 70px;
}

h3 {
  font-weight: normal;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
