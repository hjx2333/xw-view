<template>
  <div ref="ele" class="statistics-item pieChart"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'Pie',
  mixins: [globalConfig, mixin],
  data() {
    return {
    }
  },
  methods: {
    setOptions(data) {
      const { legendOptions, seriesOptions, labelOptions, textColor } = this.componentData.options
      this.chart.setOption({
        tooltip: {
          trigger: 'item'
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
