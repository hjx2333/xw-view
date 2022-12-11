<template>
  <div ref="ele" class="statistics-item"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'StackedBar',
  mixins: [globalConfig, mixin],
  data() {
    return {
    }
  },
  methods: {
    setOptions(data) {
      const { xAxisOptions, yAxisOptions, seriesOptions, labelOptions, grid, textColor } = this.componentData.options
      const legend = []
      const xAxis = []
      const series = []

      data.forEach(d => {
        legend.push(d.title)
        xAxis.push(d.date)
        series.push(
          {
            name: d.title,
            stack: true,
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            label: {
              color: textColor,
              ...labelOptions
            },
            data: d.count,
            ...seriesOptions
          }
        )
      })

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          textStyle: {
            color: textColor
          }
        },
        grid: {
          containLabel: true,
          ...grid
        },
        xAxis: {
          type: 'category',
          data: xAxis,
          axisLabel: {
            fontSize: 14,
            color: textColor
          },
          ...xAxisOptions
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 14,
            color: textColor
          },
          nameGap: 22,
          axisLabel: {
            fontSize: 14,
            color: textColor
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          minInterval: 1,
          ...yAxisOptions
        },
        series
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
