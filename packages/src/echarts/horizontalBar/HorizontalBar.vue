<template>
  <div ref="ele" class="statistics-item barChart"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'HorizontalBar',
  mixins: [globalConfig, mixin],
  methods: {
    setOptions(data) {
      const { xAxisOptions, yAxisOptions, seriesOptions, grid, rangeColor, textColor } = this.componentData.options
      const yAxis = []
      const series = []
      data.forEach(d => {
        yAxis.push(d.title)
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
          type: 'value',
          axisLabel: {
            fontSize: 16,
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
        series: [
          {
            itemStyle: {
              color: new this.echarts.graphic.LinearGradient(
                0,
                0,
                1,
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
            type: 'bar',
            data: series,
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
