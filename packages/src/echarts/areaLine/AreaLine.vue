<template>
  <div ref="ele" class="statistics-item areaLineChart"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'AreaLine',
  mixins: [globalConfig, mixin],
  data() {
    return {
    }
  },
  methods: {
    setOptions(data) {
      const { xAxisOptions, yAxisOptions, seriesOptions, grid, textColor } = this.componentData.options
      const xAxis = []
      const series = []
      data.forEach(d => {
        xAxis.push(d.title)
        series.push(d.count)
      })

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          containLabel: true,
          ...grid
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxis,
          axisLabel: {
            fontSize: 16,
            color: textColor
          },
          ...xAxisOptions
        },
        yAxis: {
          type: 'value',
          nameTextStyle: {
            fontSize: 16,
            color: textColor
          },
          axisLabel: {
            fontSize: 16,
            color: textColor
          },
          ...yAxisOptions
        },
        series: [
          {
            type: 'line',
            data: series,
            areaStyle: {},
            ...seriesOptions
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
