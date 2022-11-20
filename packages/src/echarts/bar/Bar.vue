<template>
  <div ref="echart" class="statistics-item barChart"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'Bar',
  mixins: [globalConfig, mixin],
  data() {
    return {
      selector: 'bar'
    }
  },
  methods: {
    setOptions(data) {
      const { xAxisOptions, yAxisOptions, seriesOptions, grid, rangeColor } = this.componentData.options
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
          data: xAxis,
          axisLabel: {
            rotate: 30,
            margin: 14,
            formatter(value) {
              return value.replace(/(?!$)(?<=^(.{6})+)/g, '\n')
            },
            fontSize: 14,
            color: '#fff'
          },
          ...xAxisOptions
        },
        yAxis: {
          nameTextStyle: {
            fontSize: 14,
            color: '#fff'
          },
          nameGap: 22,
          axisLabel: {
            fontSize: 14,
            color: '#fff'
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
        series: [
          {
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
