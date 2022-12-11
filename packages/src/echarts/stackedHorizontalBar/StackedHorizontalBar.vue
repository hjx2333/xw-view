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
      const yAxis = []
      const series = []

      data.forEach(d => {
        yAxis.push(d.date)
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
          type: 'value',
          axisLabel: {
            fontSize: 14,
            color: textColor
          },
          ...xAxisOptions
        },
        yAxis: {
          type: 'category',
          data: yAxis,
          nameTextStyle: {
            fontSize: 14,
            color: textColor
          },
          nameGap: 22,
          axisLabel: {
            fontSize: 14,
            color: textColor
          },
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
