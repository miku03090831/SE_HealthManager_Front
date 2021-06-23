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
    <div class="resultnum">搜索共得到 {{ len }} 条结果</div>
    <div class="medicine-list">
      <el-scrollbar>
        <div>
          <div v-for="(item, index) in len" :key="index">
            <div class="item">
              <el-card class="medicine-card">
                <div class="content">
                  <div slot="header" class="clearfix">
                    <span>{{searchResult[index].name}}</span>
                  </div>
                  <div class="common-name">
                    {{searchResult[index].commonName}}
                  </div>
                  <div class="effect">
                    {{searchResult[index].effect}}。
                  </div>
                </div>
                <!-- <div class="pic">
                  <img
                    src="../assets/氨咖黄敏.jpeg"
                    alt=""
                    width="100px"
                    height="100px"
                  />
                </div> -->
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
      input:"",
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
      searchResult:[{
        name:"氨咖黄敏1",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏2",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏3",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏4",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏5",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏6",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏7",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏8",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },{
        name:"氨咖黄敏9",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏10",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏11",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏12",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏13",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏14",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏15",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏16",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      },
      {
        name:"氨咖黄敏17",
        commonName:"氨咖黄敏胶囊",
        effect:"药物功效：用于感冒引起的鼻塞、头痛、咽喉痛、发热等。"
      }]
    };
  },
  computed:{
    len(){
      return this.searchResult.length;
    }
  },
  methods: {
    // load() {
    //   this.count += 2;
    // },
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

.resultnum{
  position: absolute;
  top: 15%;
  left: 10%;
}

.medicine-list {
  position: absolute;
  height: 80%;
  top: 20%;
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