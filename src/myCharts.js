import * as echarts from 'echarts'
const install = function(Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    //画一条简单的线
                    line1: function(id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            xAxis: {
                                type: 'category',
                                data: ['5-1', '5-3', '5-5', '5-7', '5-9', '5-11', '5-13']
                            },
                            yAxis: {
                                type: 'value',
                                min: 65,
                                interval: 5,
                                max: 80
                            },
                            series: [{
                                data: [70, 72, 74, 73, 71, 69, 71],
                                type: 'line',
                                smooth: true
                            }]
                        };

                        this.chart.setOption(optionData);
                    },
                }
            }
        }
    })
}

export default {
    install
}