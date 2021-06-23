<template>
  <div class="healthdata">
    <h2 class="name">{{ user.name }}({{ user.gender }}) 健康档案</h2>
    <div class="datafile">
      <el-button @click="edit" ref="editButton">编辑</el-button>
      <el-button @click="submit" :disabled="!editing">提交修改</el-button>
      <el-button @click="openMensesForm">生理期记录（仅女性用户可用）</el-button>
      <el-scrollbar>
      <div>
        <el-form :inline=true :model="userdata" :disabled="!editing" id="healthform">
          <el-form-item label="体重(kg)" label-width="70px">
            <el-input v-model="userdata.weight"></el-input>
          </el-form-item>
          <el-form-item label="身高(cm)" label-width="70px">
            <el-input v-model="userdata.height"></el-input>
          </el-form-item>
          <el-form-item label="血型" label-width="70px">
            <el-input v-model="userdata.bloodtype"></el-input>
          </el-form-item>
          <el-form-item label="BMI" label-width="70px">
            <el-input v-model="bmi" disabled></el-input>
          </el-form-item>
          <el-form-item label="舒张压(mmHg)" label-width="70px" class="mult-line">
            <el-input v-model="userdata.diastolic_pressure"></el-input>
          </el-form-item>
          <el-form-item label="收缩压(mmHg)" label-width="70px" class="mult-line">
            <el-input v-model="userdata.systolic_pressure"></el-input>
          </el-form-item>
          <el-form-item label="空腹血糖(mmoL/L)" label-width="70px" class="mult-line">
            <el-input v-model="userdata.blood_sugar_empty"></el-input>
          </el-form-item>
          <el-form-item label="餐后血糖(mmol/L)" label-width="70px" class="mult-line"> 
            <el-input v-model="userdata.blood_sugar_full"></el-input>
          </el-form-item>
          <el-form-item label="静息心率(次/分钟)" label-width="70px" class="mult-line">
            <el-input v-model="userdata.rest_heart_rate"></el-input>
          </el-form-item>
          <el-form-item label="（血脂）总胆固醇(mmol/L)">
            <el-input v-model="userdata.blood_fat_TC"></el-input>
          </el-form-item>
          <el-form-item label="（血脂）甘油三酯(mmol/L)">
            <el-input v-model="userdata.blood_fat_TG"></el-input>
          </el-form-item>
          <el-form-item label="（血脂）低密度脂蛋白胆固醇(mmol/L)">
            <el-input v-model="userdata.blood_fat_LDL_C"></el-input>
          </el-form-item>
          <el-form-item label="（血脂）高密度脂蛋白胆固醇(mmol/L)">
            <el-input v-model="userdata.blood_fat_HDL_C"></el-input>
          </el-form-item>
          <el-form-item label="裸眼视力（左）">
            <el-input v-model="userdata.vison_left"></el-input>
          </el-form-item>
          <el-form-item label="裸眼视力（右）">
            <el-input v-model="userdata.vison_right"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-scrollbar>
    </div>
    <el-dialog 
    title="生理期记录" 
    :visible.sync="mensesFormVisible"
    @open="openDialog">
      <div class="set-period">
        <span class="setprompt">请设置默认生理周期</span>
        <el-input v-model="user_menses_data.set_period"></el-input>
        <el-button @click="setPeriod">确认</el-button>
      </div>
      <div class="last-come">
        <div class="lastprompt">上一次月经时间：{{user_menses_data.last_come}}</div>
        <div class="days-after">距离上次月经开始已经{{this.days_after}}天了</div>
        <div class="next-days" v-if="next_days>=0">预计下次月经到来在{{this.next_days}}天后</div>
        <div class="next-days" v-if="next_days<0">月经已经比预计日期晚了{{-this.next_days}}天</div>
      </div>
      <div class="record">
        <span class="set-record">经期开始日</span>
        <el-input ref="setDate" v-model="menses_new_date" type="date" :max="this.now_formal" :min="this.user_menses_data.last_come"></el-input>
        <el-button @click="mensesRecord">记录月经</el-button>
      </div>
    </el-dialog>
    <!-- <ul class="basicdata">
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
    </ul> -->
    <!-- 以上是要修改的 -->
    <!-- 以下是完全舍弃的 -->
    <!-- <hr />  废弃
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Healthdata",
  components: {},
  methods:{
    edit(){
      if(!this.editing){
        this.editing=true;
        this.$refs.editButton.$el.innerText="取消编辑";
      }
      else{
        this.editing=false;
        this.$refs.editButton.$el.innerText="编辑";
        console.log("本次编辑取消，重新获取原本数据")
        this.getData();
      }
    },
    submit(){
      this.editing=false;
      // console.log(this.userdata)
    },
    openDialog(){
      //用来初始化对话框的内容
      //获取生理期相关表的数据在进入这个页面时完成
      //计算相关数据
      var now = new Date(),
      month = ''+(now.getMonth()+1),
      day = ''+ now.getDate(),
      year = now.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      this.now_formal = [year, month, day].join('-')
      var date1 = new Date(Date.parse(this.user_menses_data.last_come.replace(/-/g, "/")));
      var date2 = new Date(Date.parse(this.now_formal.replace(/-/g, "/")));
      var start = date1.getTime(),end = date2.getTime();
      this.days_after = parseInt((end-start)/1000/3600/24); //结束日期减去开始日期后转换成天数 

      this.next_days = this.user_menses_data.set_period - this.days_after;

    },
    openMensesForm(){
      if(this.user.gender!="女")
        this.$alert("您可能不需要此项功能")
      else
        this.mensesFormVisible=true;
    },
    mensesRecord(){
      // var date = new Date(),
      // month = ''+(date.getMonth()+1),
      // day = ''+date.getDate(),
      // year = date.getFullYear();
      // if (month.length < 2) month = '0' + month;
      // if (day.length < 2) day = '0' + day;
      
      var date1 = new Date(Date.parse(this.user_menses_data.last_come.replace(/-/g, "/")));
      var date2 = new Date(Date.parse(this.menses_new_date.replace(/-/g, "/")));
      var start = date1.getTime(),end = date2.getTime();
      var new_period = parseInt((end-start)/1000/3600/24); //结束日期减去开始日期后转换成天数    
      if(Math.abs(new_period - this.user_menses_data.set_period) > 5)
        this.$alert(`您本次实际生理周期是${new_period},和设置的生理周期相差较多，请考虑重新设置`)

      console.log(`这一次的日期是${this.menses_new_date}`)//提交打卡记录，弹出提示消息
      //this.$axios.post()
      this.user_menses_data.last_come=this.menses_new_date;
      this.$message({
        message:"打卡成功，已记录本次月经日期",
        type:"success"
      });
      this.fresh();
    },
    fresh(){
      //需要重新从数据库拉取提交后的信息
      this.getMensesData();
      //然后再调用下面的渲染的函数
      this.openDialog()
    },
    setPeriod(){
      this.fresh()
      console.log(this.user_menses_data.set_period)
    },
    getData(){
      console.log("获取用户健康数据");
    },
    getMensesData(){
      console.log("获取用户生理期数据");
    }
  },
  computed:{
    bmi(){
      let b = this.userdata.weight/(this.userdata.height/100)/(this.userdata.height/100);
      return Math.floor(b * 100) / 100;
    }
  },
  beforeMount(){
    this.getData();
    this.getMensesData();
  },
  data() {
    return {
      editing:false,
      dataform:false,
      mensesFormVisible:false,
      userdata: {
        weight: 73, //单位:kg
        height: 178, //单位:cm
        //bmi设为computed属性，根据身高体重自动计算
        bloodtype: "B",
        diastolic_pressure: "80", //舒张压 单位:mmHg
        systolic_pressure: "130", //收缩压 单位:mmHg
        rest_heart_rate: "65", //安静时心率 单位:次/分钟
        blood_sugar_empty: "5", //血糖（空腹） 单位:mmol/L (毫摩尔每升)
        blood_sugar_full: "7", //血糖（餐后）单位:mmol/L (毫摩尔每升)
        blood_fat_TC: "3", //血脂 总胆固醇
        blood_fat_TG: "1", //血脂 甘油三酯
        blood_fat_LDL_C: "1", //血脂 低密度脂蛋白胆固醇
        blood_fat_HDL_C: "1", //血脂 高密度脂蛋白胆固醇
        vison_left: "5.0", //左眼裸眼视力
        vison_right: "5.0", //右眼裸眼视力
      },
      user_menses_data: {
        //专门用来记录女性月经周期的表
        //知识盲区
        firsttime:true,
        set_period:30,
        period:30,
        last_come:"2021-01-01",
      },
      menses_new_date:"",//最新记录的月经日期
      days_after:"",//距离上次月经开始的时间
      next_days:0,//距离下一次月经还有多久
      now_formal:"",//当前日期格式化字符串，全局统一，避免存在同样内容的字符串
    };
  },
  props: ["user"],
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.datafile{
  position: absolute;
  height: 83%;
  top: 10%;
  width: 50%;
}
.el-scrollbar{
  position: absolute;
  height: 100%;
  width: 100%;
}

.el-form {
  padding: 20px;
}

 #healthform >>> .el-input.is-disabled .el-input__inner{
  color:#000;
}

#healthform > .mult-line >>> .el-form-item__label {
  line-height: 20px;
  vertical-align: middle;
}

.el-dialog{
  width: 600px;
}

.el-dialog  .set-period,.last-come,.record{
  margin: 5px auto;
  width: 550px;
  
}

.last-come > div{
  margin-top: 10px;
  margin-bottom: 10px;
}

.el-dialog .el-input{
  display: inline-block;
  width: 200px;
  margin: 0 20px;
}



/* ul {
  list-style: none;
  display: block;
  margin-top: 30px;
}
ul li {
  display: inline;
  float: left;
  margin-left: 70px;
} */
/* .data {
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

.gender {
  display: inline;
  margin-left: 40px;
} */
/* .record {
  position: relative;
  top: 70px;
}

h3 {
  font-weight: normal;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
} */
</style>
