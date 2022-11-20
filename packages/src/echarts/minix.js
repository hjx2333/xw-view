
import * as echarts from 'echarts'
export default {
  data() {
    return {
      currentEle: null,
      chart: null,
      echarts
    }
  },
  watch: {
    'componentData.style': {
      handler() {
        this.chart.resize()
      },
      deep: true
    },
    'componentData.store.staticData': {
      handler() {
        this.reload()
      },
      deep: true
    },
    'componentData.options': {
      handler() {
        this.reload()
      },
      deep: true
    }
  },
  mounted() {
    const ele = this.$refs.echart
    this.currentEle = ele
    this.init(ele)
  },
  methods: {
    async init(ele) {
      this.chart = echarts.init(ele)
      const data = await this.judgeDataSource()
      this.setOptions(data)
      this.chart.on('click', params => {
        this.$emit('echartsClick', params)
      })
    },

    async reload() {
      const data = await this.judgeDataSource()
      this.setOptions(data)
    }
  }
}
