<template>
  <div class="Echarts">
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Echarts',
  methods:{
	  myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));
		  // 指定图表的配置项和数据
		  var option = {
    series: [{
        type: 'gauge',
        progress: {
            show: true,
            width: 18
        },
        axisLine: {
            lineStyle: {
                width: 18
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            length: 15,
            lineStyle: {
                width: 2,
                color: '#999'
            }
        },
        axisLabel: {
            distance: 25,
            color: '#999',
            fontSize: 20
        },
        anchor: {
            show: true,
            showAbove: true,
            size: 25,
            itemStyle: {
                borderWidth: 10
            }
        },
        title: {
            show: false
        },
        detail: {
            valueAnimation: true,
            fontSize: 80,
            offsetCenter: [0, '70%']
        },
        data: [{
            value: 70
        }]
    }]
		  };
		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
	  }
  },
  mounted() {
  	this.myEcharts();
  }
}
</script>

<style>

</style>