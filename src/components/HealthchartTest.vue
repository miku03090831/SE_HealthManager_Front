<template>
  <div class="healthchart">
    <h3>健康趋势图</h3>
    <div class="button-box">
      <el-button @click="changeFunc(1)">体重</el-button>
      <el-button @click="changeFunc(2)">身高</el-button>
      <el-button @click="changeFunc(3)">血压</el-button>
      <el-button @click="changeFunc(4)">血糖</el-button>
      <el-button class="fbutton" @click="fresh">刷新数据</el-button>
    </div>
    <div class="chart">
      <div class="dchart" id="weight" v-show="funcNum === 1">
        <h4>体重</h4>
        <div class="chart" width="500px" height="500px" id="weightchart"></div>
      </div>
      <div class="dchart" id="height" v-show="funcNum === 2">
        <h4>身高</h4>
        <div class="chart" width="500px" height="500px" id="heightchart"></div>
      </div>
      <div class="dchart" id="blood" v-show="funcNum === 3">
        <h4>血压</h4>
        <div class="chart" width="500px" height="500px" id="bloodchart"></div>
      </div>
      <div class="dchart" id="sugar" v-show="funcNum === 4">
        <h4>血糖</h4>
        <div class="chart" width="500px" height="500px" id="sugarchart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "HealthchartTest",
  components: {},
  data() {
    return {
      funcNum: 1, //为1代表体重，2代表身高，3代表血压，4代表血糖
      weightX: ["5-1", "5-3", "5-5", "5-7", "5-9"],
      weightY: [50, 72, 74, 73, 71],
      heightX: ["5-1", "5-3", "5-5", "5-7", "5-9"],
      heightY: [150, 172, 174, 173, 171],
      bloodX: ["5-1", "5-3", "5-5", "5-7", "5-9"],
      blood_d_Y: [80, 85, 77, 79, 82],
      blood_s_Y: [130, 125, 127, 133, 128],
      sugarX: ["5-1", "5-3", "5-5", "5-7", "5-9"],
      sugar_empty_Y: [5.5, 5.1, 4.6, 4.5, 5.2],
      sugar_full_Y: [7, 6.1, 6.2, 6.7, 6.5],
    };
  },
  methods: {
    changeFunc(num) {
      this.funcNum = num;
      // if(this.funcNum===1)
      //     this.weightInit();
      // else if(this.funcNum===2)
      //     this.heightInit();
    },
    getHeight() {
      console.log("获取身高数据");
    },
    getWeight() {
      console.log("发送请求，重新获得体重数据");
    },
    getBlood() {
      console.log("获取血压");
    },
    getSugar() {
      console.log("获取血糖");
    },
    weightInit() {
      let weightChart = echarts.init(document.getElementById("weightchart"));
      weightChart.clear();

      const optionData = {
        xAxis: {
          type: "category",
          data: this.weightX,
        },
        yAxis: {
          type: "value",
          interval: 5,
          min: function (value) {
            return Math.floor(value.min / 5) * 5 - 5;
          },
          max: function (value) {
            return Math.ceil(value.max / 5) * 5 + 5;
          },
        },
        series: [
          {
            data: this.weightY,
            type: "line",
            smooth: true,
            itemStyle: { normal: { label: { show: true } } },
          },
        ],
      };
      weightChart.setOption(optionData);
    },
    heightInit() {
      let heightChart = echarts.init(document.getElementById("heightchart"));
      heightChart.clear();

      const optionData = {
        xAxis: {
          type: "category",
          data: this.heightX,
        },
        yAxis: {
          type: "value",
          interval: 5,
          min: function (value) {
            return Math.floor(value.min / 5) * 5 - 5;
          },
          max: function (value) {
            return Math.ceil(value.max / 5) * 5 + 5;
          },
        },
        series: [
          {
            data: this.heightY,
            type: "line",
            smooth: true,
            itemStyle: { normal: { label: { show: true } } },
          },
        ],
      };
      heightChart.setOption(optionData);
    },
    bloodInit() {
      let bloodChart = echarts.init(document.getElementById("bloodchart"));
      bloodChart.clear();

      const optionData = {
        legend: {
          type: "plain",

          orient: "vertical",
          x: "right",
          y2: 400,
          data: [
            { name: "收缩压", textStyle: { color: "red" } },
            { name: "舒张压", textStyle: { color: "green" } },
          ],
        },
        xAxis: {
          type: "category",
          data: this.bloodX,
        },
        yAxis: {
          type: "value",
          interval: 10,
          min: function (value) {
            return Math.floor(value.min / 5) * 5 - 5;
          },
          max: function (value) {
            return Math.ceil(value.max / 5) * 5 + 5;
          },
        },
        series: [
          {
            name: "舒张压",
            data: this.blood_d_Y,
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                label: { show: true },
                color: "green", //图例的颜色
                lineStyle: {
                  color: "green", //线的颜色
                },
              },
            },
          },
          {
            name: "收缩压",
            data: this.blood_s_Y,
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                label: { show: true },
                color: "red", //图例的颜色
                lineStyle: {
                  color: "red", //线的颜色
                },
              },
            },
          },
        ],
      };
      bloodChart.setOption(optionData);
    },
    sugarInit() {
      let sugarChart = echarts.init(document.getElementById("sugarchart"));
      sugarChart.clear();

      const optionData = {
        legend: {
          type: "plain",

          orient: "vertical",
          x: "right",
          y2: 400,
          data: [
            { name: "餐后血糖", textStyle: { color: "red" } },
            { name: "空腹血糖", textStyle: { color: "green" } },
          ],
        },
        xAxis: {
          type: "category",
          data: this.sugarX,
        },
        yAxis: {
          type: "value",
          interval: 0.5,
          min: function (value) {
            return Math.floor(value.min) - 0.5;
          },
          max: function (value) {
            return Math.ceil(value.max) + 0.5;
          },
        },
        series: [
          {
            name: "空腹血糖",
            data: this.sugar_empty_Y,
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                label: { show: true },
                color: "green", //图例的颜色
                lineStyle: {
                  color: "green", //线的颜色
                },
              },
            },
          },
          {
            name: "餐后血糖",
            data: this.sugar_full_Y,
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                label: { show: true },
                color: "red", //图例的颜色
                lineStyle: {
                  color: "red", //线的颜色
                },
              },
            },
          },
        ],
      };
      sugarChart.setOption(optionData);
    },
    fresh() {
      this.getWeight();
      this.getHeight();
      this.getBlood();
      this.getSugar();
      this.weightInit();
      this.heightInit();
      this.bloodInit();
      this.sugarInit();
    },
  },
  mounted() {
    this.fresh();
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.button-box{
    width: 90%;
    margin: 20px 20px 20px 0px;
}

.button-box .el-button{
    margin-left: 10px;
}

.button-box .fbutton{
    margin: 0 80px;
}

.chart {
  position: absolute;
  height: 80%;
  width: 100%;
}

.dchart {
  height: 530px;
  width: 530px;
  margin: 0 auto;
}

#weightchart,
#heightchart,
#bloodchart,
#sugarchart {
  position: absolute;
  width: 530px;
  height: 500px;
  margin: 0 auto;
}
</style>
