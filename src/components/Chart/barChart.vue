<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '600px'
    },
    height: {
      type: String,
      default: '600px'
    },
    xData: {
      type: Array
    },
    sData: {
      type: Array
    }
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
    this.chart = null
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption({
        title: {
          text: '柱状图',
          x: '20',
          top: '20',
          textStyle: {
            color: '#000',
            fontSize: '22'
          },
          subtextStyle: {
            color: '#90979c',
            fontSize: '16'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            textStyle: {
              color: '#000'
            }
          }
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: '#fff'
          }
        },
        calculable: true,
        xAxis: {
          type: 'category',
          data: this.xData
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.sData,
          type: 'bar'
        }]
      })
    }
  }
}
</script>
