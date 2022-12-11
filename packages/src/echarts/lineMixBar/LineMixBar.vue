<template>
  <div ref="ele" class="statistics-item"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'LineMixBar',
  mixins: [globalConfig, mixin],
  data() {
    return {}
  },
  methods: {
    setOptions(data) {
      const { xAxisOptions, yAxisOptions, seriesOptions, grid, textColor, rangeColor } =
        this.componentData.options
      const barY = yAxisOptions.bar
      const lineY = yAxisOptions.line

      const xAxis = []
      const counts = []
      const numbers = []

      data.forEach(d => {
        xAxis.push(d.title)
        counts.push(d.count)
        numbers.push(d.number)
      })

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
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
            fontSize: 16,
            color: textColor
          },
          axisPointer: {
            type: 'shadow'
          },
          ...xAxisOptions
        },
        yAxis: [
          {
            type: 'value',
            nameTextStyle: {
              fontSize: 16,
              color: textColor
            },
            axisLabel: {
              fontSize: 16,
              color: textColor,
              ...lineY.axisLabelOptions
            },
            ...lineY
          },
          {
            type: 'value',
            nameTextStyle: {
              fontSize: 16,
              color: textColor
            },
            axisLabel: {
              fontSize: 16,
              color: textColor,
              ...barY.axisLabelOptions
            },
            ...barY
          }
        ],
        series: [
          {
            type: 'line',
            data: numbers,
            ...seriesOptions.line
          },
          {
            type: 'bar',
            itemStyle: {
              color: new this.echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: rangeColor.start
                  },
                  {
                    offset: 1,
                    color: rangeColor.end
                  }
                ],
                false
              ),
              barBorderRadius: [2, 2, 0, 0]
            },
            data: counts,
            ...seriesOptions.bar
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
