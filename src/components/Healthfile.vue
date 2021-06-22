<template>
  <div class="healthfile">
      <div class="hdata">
          <Healthdata :user=user></Healthdata>
      </div>
      <div class="hchart">
          <HealthchartTest></HealthchartTest>
      </div>
  </div>
</template>

<script>
import HealthchartTest from "./HealthchartTest";
import Healthdata from "./Healthdata";
export default {
  name: 'Healthfile',
  components: {
      HealthchartTest,
      Healthdata
  },
  props:["user"]
}
</script>

<style scoped>
    .healthfile{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .hdata{
        float: left;
        width: 50%;
        height: 100%;
        border-right: 2px solid #52b7f5;
        
    }
    .hchart{
        position: absolute;
        margin-left: 50%;
        width: 50%;
        height: 100%;
    }
</style>
