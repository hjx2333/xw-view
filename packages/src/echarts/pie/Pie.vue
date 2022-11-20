<template>
  <div ref="echart" class="statistics-item pieChart"></div>
</template>

<script>
import mixin from '../minix'
import globalConfig from '../../globalMinix'
export default {
  name: 'Pie',
  mixins: [globalConfig, mixin],
  data() {
    return {
      selector: 'pie'
    }
  },
  methods: {
    setOptions(data) {
      const { seriesOptions } = this.componentData.options
      this.chart.setOption({
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            data,
            label: {
              show: true,
              position: 'outside',
              color: '#fff',
              fontSize: 18
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
