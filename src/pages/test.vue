<template>
  <div>
      <!-- 1.水平垂直居中 -->
      <div style="with:100px;height:100px;margin-left:50px;margin-top:50px;transform:translate(-50%. -50%);">111</div>
      <!-- 2.echarts -->
      <div id="main" style="width: 600px;height:400px;"></div>
      <!-- 排序 -->
        <ul>
            <li v-for="student in sortStudent">
                {{student.name}} - {{student.age}}
            </li>
        </ul>
  </div>
</template>

<script>

export default {
  name: 'Echarts',
  data() {
    return {
        students:[
            {name:'jspang',age:32},
            {name:'Panda',age:30},
            {name:'PanPaN',age:21},
            {name:'King',age:45}
        ]
    }
  },
  computed:{
    sortStudent:function(){
        return this.sortByKey(this.students,'age');
    }
  },
  methods:{
        //数组对象方法排序:
        sortByKey(array,key){
            return array.sort(function(a,b){
                var x=a[key];
                var y=b[key];
                return ((x<y)?-1:((x>y)?1:0));
            });
        },
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