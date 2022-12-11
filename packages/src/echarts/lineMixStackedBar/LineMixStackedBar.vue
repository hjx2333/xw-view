<template>
  <div ref="ele" class="statistics-item"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  mixins: [globalConfig, mixin],
  data() {
    return {
    }
  },
  methods: {
    setOptions(data) {
      const { xAxisOptions, yAxisOptions, seriesOptions, labelOptions, grid, textColor } = this.componentData.options
      const xAxis = []
      const series = []
      const lineData = []
      const barY = yAxisOptions.bar
      const lineY = yAxisOptions.line

      data.forEach(d => {
        xAxis.push(d.date)
        lineData.push(d.number)
        series.push(
          {
            name: d.title,
            type: 'bar',
            stack: true,
            emphasis: {
              focus: 'series'
            },
            data: d.count,
            label: {
              color: textColor,
              ...labelOptions
            },
            ...seriesOptions.bar
          }
        )
      })

      series.push({
        type: 'line',
        data: lineData,
        label: {
          color: textColor,
          ...labelOptions
        },
        ...seriesOptions.line
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
        yAxis: [{
          nameTextStyle: {
            fontSize: 14,
            color: textColor
          },
          nameGap: 22,
          axisLabel: {
            fontSize: 14,
            color: textColor,
            ...lineY.axisLabelOptions
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          minInterval: 1,
          ...lineY
        }, {
          nameTextStyle: {
            fontSize: 14,
            color: textColor
          },
          nameGap: 22,
          axisLabel: {
            fontSize: 14,
            color: textColor,
            ...barY.axisLabelOptions
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          minInterval: 1,
          ...barY
        }],
        series
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
