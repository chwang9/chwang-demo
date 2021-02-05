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
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 220, 150, 80, 70, 110, 130],
                type: 'bar',
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