<template>
  <div class="healthchart">
    <h3>健康趋势图</h3>
    <ul class="chart">
        <li>
            <div class="dchart" id="weight">
                <h5>体重</h5>
                <div class="chart" width="500px" height="125px" id="weightchart">

                </div>
            </div>
            
        </li>
        <li>
            <div class="dchart" id="blood-pressure">
                <h5>血压</h5>
                <div class="chart"  id="bloodchart">

                </div>
            </div>
        </li>
        <li>
            <div class="dchart" id="heart-rate">
                <h5>心率</h5>
                <div class="chart"  id="heartchart">

                </div>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    
  name: 'Healthchart',
  components: {

  },
  
    mounted() {
    this.$chart.line1('weightchart');
    this.$chart.line1('bloodchart');
    this.$chart.line1('heartchart');
  }
}
</script>

<style scoped>
h3{
    text-align: center;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}

ul h5{
    font-weight: normal;
    text-align: center;
}
ul li img{
    margin-left: 40px;
}
#weightchart,
#bloodchart,
#heartchart{
    width: 500px;
    height: 180px;
    margin: 0 auto;
}
</style>
