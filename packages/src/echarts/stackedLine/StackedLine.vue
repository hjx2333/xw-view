<template>
  <div ref="ele" class="statistics-item lineChart"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'StackedLine',
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
      const legend = []
      data.forEach(d => {
        xAxis.push(d.xAxis)
        legend.push(d.title)
        series.push({
          name: d.title,
          type: 'line',
          data: d.count,
          label: {
            color: textColor,
            ...labelOptions
          },
          ...seriesOptions
        },)
      })

      this.chart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: legend,
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
        series
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
