<template>
  <div class="record-list">
    <h3>历史就诊记录</h3>
    <div class="operation">
      <el-button @click="openAddDialog">添加</el-button>
      <el-button @click="fresh">刷新</el-button>
    </div>
    <div class="list">
      <el-table :data="tableData" max-height="530" border>
        <el-table-column prop="date" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="time" label="时间" width="90"> </el-table-column>
        <el-table-column prop="reason" label="病因" width="120">
        </el-table-column>
        <el-table-column prop="cost" label="花销" width="120">
        </el-table-column>
        <el-table-column  label="删除" width="60">
          <template slot-scope="scope">
            <el-button @click="deleteRec(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column label="详情" type="expand" width="80">
           <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="日期">
            <span>{{ props.row.date }}</span>
          </el-form-item>
          <el-form-item label="时间">
            <span>{{ props.row.time }}</span>
          </el-form-item>
          <el-form-item label="病因">
            <span>{{ props.row.reason }}</span>
          </el-form-item>
          <el-form-item label="花销">
            <span>{{ props.row.cost }}</span>
          </el-form-item>
          <el-form-item label="就诊地点">
            <span>{{ props.row.place }}</span>
          </el-form-item>
          <el-form-item label="诊断结果">
            <span>{{ props.row.diagnosis }}</span>
          </el-form-item>
        </el-form>
        </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加就诊记录" :visible.sync="addVisible">
      <el-card class="add-record">
        <div class="date">
          <div class="prompt">
            日期
          </div>
          <el-input v-model="record_item.date" type="date" :max="this.now_formal"></el-input>
        </div>
        <div class="time">
          <div class="prompt">
            时间
          </div>
          <el-input v-model="record_item.time" type="time"></el-input>
        </div>
        <div class="reason">
          <div class="prompt">
            病因
          </div>
          <el-input v-model="record_item.reason"></el-input>
        </div>
        <div class="cost">
          <div class="prompt">
            花销
          </div>
          <el-input v-model="record_item.cost"></el-input>  
        </div> 
        <div class="place">
          <div class="prompt">
            就诊地点
          </div>
          <el-input v-model="record_item.place"></el-input>
        </div>
        <div class="diagnosis">
          <div class="prompt">
            诊断结果
          </div>
          <el-input v-model="record_item.diagnosis" type="textarea"></el-input>
        </div>
        <div class="submit-button">
          <el-button @click="submit" :disabled="!valid">添加</el-button>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "RecordList",
  props:['user'],
  computed: {
    valid() {
      var v = true;
      Object.values(this.record_item).forEach((item) => {
        v = v && item !== "";
      }); //有任何一项是空的就不合法
      return v;
    },
  },
  data() {
    return {
      now_formal: "",
      count: 0,
      addVisible: false,
      record_item: {
        date: "",
        time: "",
        reason: "",
        cost: "",
        place: "",
        diagnosis: "",
        rid:"",
        uid:this.user.id
      },
      tableData: [
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"1",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"2",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"3",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"5",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"8",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"4",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"6",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"7",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"9",
          uid:this.user.id
        },
        {
          date: "2021-05-03",
          time: "19:30",
          reason: "发烧",
          cost: "100元",
          place:"浙江大学校医院玉泉校区",
          diagnosis:"避免剧烈运动，注意静养休息",
          rid:"12",
          uid:this.user.id
        },
        
      ],
    };
  },
  methods: {
    deleteRec(row){
      console.log(row.rid)
    },
    submit() {
      var priceReg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
      if (priceReg.test(this.record_item.cost) === false) {
        this.$alert('"花销"格式错误，请输入整数或至多两位小数');
        return;
      }
      console.log(this.record_item);
      this.tableData.unshift(this.record_item)
      //需要提交成功后把表单清空，但是目前不是从服务器获得的数据
      //在本地修改的数据是向tabledata中头插一个浅拷贝
      //清空后会导致数据失效
      //待实现了后端接口之后,需要将下面的代码解除注释
      // Object.keys(this.record_item).forEach(key=>{
      //   this.record_item[key]=""
      // })
      this.$message("添加成功");
    },
    openAddDialog() {
      this.addVisible = true;
      var now = new Date(),
        month = "" + (now.getMonth() + 1),
        day = "" + now.getDate(),
        year = now.getFullYear();
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      this.now_formal = [year, month, day].join("-");
    },
    fresh() {
      console.log("重新从后端获取数据");
    },
  },
};
</script>

<style scoped>
h3 {
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

.operation {
  margin: 15px;
  width: 300px;
}

.list {
  height: 80%;
  margin-left: 20px;
}
.el-table {
  text-align: center;
}

.el-dialog {
  width: 500px;
}

.el-dialog .el-card {
  width: 100%;
}

.submit-button {
  width: 100px;
  margin: 10px auto;
}

.el-dialog .el-input {
  display: inline-block;
  width: 400px;
  margin: 0 20px;
}

.prompt {
  display: inline-block;
  width: 70px;
}

.date,
.time,
.reason,
.cost,
.place,
.diagnosis {
  margin-bottom: 10px;
}

 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
</style>