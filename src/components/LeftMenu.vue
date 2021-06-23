<template>
    <div class="menu">
        <el-menu
          default-active="1-1"
          unique-opened
          class="el-menu-vertical-demo"
          @select="printfunc"
          background-color="#52b7f5"
          text-color="#fff"
          active-text-color="#664f17">
          <el-submenu index="1">
            <span slot="title">个人健康</span>
            <el-menu-item-group>
              <el-menu-item class="subitem" index="1-1">健康档案</el-menu-item>
              <el-menu-item class="subitem" index="1-2">就诊记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <span slot="title">健康百科</span>
            <el-menu-item-group>
              <el-menu-item class="subitem" index="2-1">食物百科</el-menu-item>
              <el-menu-item class="subitem" index="2-2">药物百科</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
      printfunc(key,keyPath){
          console.log(key,keyPath);
          this.func_num = key;
          this.$emit("functionChanged",key)
      }
    }
}
</script>