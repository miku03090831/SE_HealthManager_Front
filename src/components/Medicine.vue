<template>
  <div class="medicine">
    <div class="search">
      <span>根据</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>搜索</span>
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
                    <span>氨咖黄敏</span>
                  </div>
                  <div class="common-name">
                    常用名：氨咖黄敏胶囊，速效感冒胶囊
                  </div>
                  <div class="effect">
                    药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。
                  </div>
                </div>
                <div class="pic">
                  <img
                    src="../assets/氨咖黄敏.jpeg"
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
  name: "Medicine",
  data() {
    return {
      count: 0,
      options: [
        {
          value: "选项1",
          label: "药品功效",
        },
        {
          value: "选项2",
          label: "药品名称",
        }
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
  margin: 0 20px;
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