<template>
  <div class="home">
    <div id="nav">
      <Header :user=user></Header>
    </div>
    <div class="left">
      <LeftMenu @functionChanged="change_func"></LeftMenu>
    </div>
    <div class="right">
      <Healthfile v-if="func_num==='1-1'" :user=user></Healthfile>
      <Record v-if="func_num==='1-2'"></Record>
      <Food v-if="func_num==='2-1'"></Food>
      <Medicine v-if="func_num==='2-2'"></Medicine>
    </div>
  </div>
</template>

<script>
import Record from "../components/Record";
import LeftMenu from "../components/LeftMenu";
import Healthfile from "../components/Healthfile";
import Food from "../components/Food";
import Medicine from "../components/Medicine";
import Header from "../components/Header";

export default {
  name: 'Home',
  components: {
    LeftMenu,
    Healthfile,
    Record,
    Food,
    Medicine,
    Header
  },
  data(){
    return {
      user:{//这一个user应该是从login.vue传过来的，后续会挪动到props里面。这里是为了测试，传给子组件用的
        name:"testuser",
        gender:"女"
      },
      func_num: '1-1'
    }
  },
  methods:{
    change_func(flag){
      this.func_num=flag
    }
  }
}
</script>

<style scoped>
.home {
  position: absolute;
  width:100%;
  height:100%;
}
#nav {
  position: absolute;
  width: 100%;
  height: 10%;
  /* 003a8d */
  background-color: rgba(0,58,141,0.8);
}
.left {
  position: absolute;
  top: 10%;
  width: 15%;
  height: 90%;
}
.menu {
  height: 100%;
  /* 06b799 */
  background-color: rgba(82,183,245,1);
  font-weight: bold;
}

.right{
  position: absolute;
  left: 15%;
  top: 10%;
  width: 85%;
  height: 90%;
}




</style>
