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
      const { titleOptions, legendOptions, seriesOptions } = this.componentData.options
      this.chart.setOption({
        tooltip: {
          trigger: 'item'
        },
        title: {
          ...titleOptions
        },
        legend: {
          ...legendOptions
        },
        series: [
          {
            type: 'pie',
            radius: ['40%', '70%'],
            data,
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
