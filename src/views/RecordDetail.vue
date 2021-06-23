<template>
  <div class="redetail">
    <div id='nav'>
      <Header></Header>
    </div>
    <div id='infotable'>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="uid" label="用户id" width="120">
        </el-table-column>
        <el-table-column prop="data" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="time" label="时刻" width="120">
        </el-table-column>
        <el-table-column prop="cause" label="问诊原因" width="180">
        </el-table-column>
        <el-table-column prop="hospital" label="问诊医院" width="360">
        </el-table-column>
        <el-table-column prop="cost" label="花销" width="120">
        </el-table-column>
        <el-table-column prop="result" label="问诊结果" width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'RecordDetail',
  components: {
    Header,
  },
  data() {
    return {
      tableData: [
        {
          uid: '10000000',
          data: '2021-05-03',
          time: '15:20',
          cause: '发烧',
          cost: '100元',
          hospital: '浙江大学医学院附属第二医院',
          result: '病毒性流感',
        },
      ],
    }
  },
}
</script>