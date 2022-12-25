<template>
  <div ref="ele" class="statistics-item barChart"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'Bar',
  mixins: [globalConfig, mixin],
  data() {
    return {}
  },
  methods: {
    setOptions(data) {
      const {
        xAxisOptions,
        yAxisOptions,
        seriesOptions,
        titleOptions,
        grid,
        rangeColor,
        textColor,
        labelOptions
      } = this.componentData.options
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
        title: {
          textStyle: {
            fontSize: 24,
            color: textColor
          },
          subtextStyle: {
            fontSize: 18,
            color: textColor
          },
          ...titleOptions
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
            label: {
              textStyle: {
                color: textColor
              },
              ...labelOptions
            },
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
