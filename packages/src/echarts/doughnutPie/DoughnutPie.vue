<template>
    <div ref="ele" class="statistics-item pieChart"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'DoughnutPie',
  mixins: [globalConfig, mixin],
  data() {
    return {
    }
  },
  methods: {
    setOptions(data) {
      const { titleOptions, legendOptions, seriesOptions, textColor, labelOptions } = this.componentData.options
      this.chart.setOption({
        tooltip: {
          trigger: 'item'
        },
        title: {
          textStyle: {
            color: textColor,
            fontSize: 30
          },
          subtextStyle: {
            color: textColor,
            fontSize: 16
          },
          ...titleOptions
        },
        legend: {
          textStyle: {
            color: textColor
          },
          ...legendOptions
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            data,
            label: {
              color: textColor,
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
