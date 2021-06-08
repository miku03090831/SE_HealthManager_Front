<template>
  <div class="food">
    <div class="search">
      <span>类别</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="food-list">
      <el-scrollbar>
        <div>
          <div v-for="(item, index) in 200" :key="index">
            <div class="item">
              <el-card class="food-card">
                <div class="content">
                  <div slot="header" class="clearfix">
                    <span>猪肉</span>
                  </div>
                  <div class="nutrition">
                    营养含量（每100g）：热量143千卡，钙6毫克，蛋白质20.3克
                  </div>
                  <div class="avoid">
                    食用禁忌：不宜同时大量饮茶，不宜多食煎炸咸肉
                  </div>
                </div>
                <div class="pic">
                  <img
                    src="../assets/pork.jpeg"
                    alt=""
                    width="100px"
                    height="100px"
                  />
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Food",
  data() {
    return {
      count: 0,
      options: [
        {
          value: "选项1",
          label: "蔬菜",
        },
        {
          value: "选项2",
          label: "水果",
        },
        {
          value: "选项3",
          label: "肉类",
        },
        {
          value: "选项4",
          label: "其他",
        },
      ],
      value: "",
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
.search {
  position: absolute;
  height: 15%;
  width: 70%;
  left: 10%;
  padding-top: 20px;
  padding-left: 150px;
}

.search .el-input {
  width: 300px;
  margin: 20px;
}
.search span {
  margin: 0 10px;
}

.food-list {
  position: absolute;
  height: 85%;
  top: 15%;
  width: 80%;
  left: 10%;
}

.el-scrollbar {
  position: absolute;
  height: 100%;
  width: 100%;
}
.item .content {
  float: left;
}
.content div {
  margin-bottom: 10px;
}
.item .pic {
  float: right;
}
</style>