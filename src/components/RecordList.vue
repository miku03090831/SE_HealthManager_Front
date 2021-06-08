<template>
  <div class="record-list">
    <h3>历史就诊记录</h3>
    <div class="list">
      <el-table :data="tableData" max-height="600" border >
        <el-table-column prop="date" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="time" label="时间" width="90">
        </el-table-column>
        <el-table-column prop="reason" label="病因" width="180"> </el-table-column>
        <el-table-column prop="cost" label="花销" width="120"> </el-table-column>
        <el-table-column
          label="详情">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecordList",
  data() {
    return {
      count: 0,
      tableData: [
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost:"100元"
        }
      ],
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
  },
};
</script>

<style scoped>

h3{
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
}
.record-list {
  position: absolute;
  width: 50%;
  height: 100%;
  left: 50%;
}

.list {
  height: 80%;
  margin-left: 20px;
}
.el-table{
    text-align: center;
}
</style>