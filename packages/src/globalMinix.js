import { getGlobalConfig, saveGlobalConfig } from '@/utils/config'
import { axios } from '@/utils/request'
export default {
  props: {
    componentData: {
      type: Object,
      default: () => {}
    },
    globalConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      failRequestNumber: 0
    }
  },
  created() {
    saveGlobalConfig(this.globalConfig)
  },
  mounted() {
  },
  watch: {
    'componentData.animate': {
      async handler() {
        await this.$nextTick()
        this.initAnimate()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    /** 数据过滤 */
    filterData(data) {
      const { filterCode } = this.componentData.store.request

      if (!filterCode) return data

      try {
        const fn = new Function('data', filterCode)
        return fn(data)
      } catch (error) {
        console.error('数据过滤代码执行出错', error)
        return false
      }
    },

    /** 判断静态数据还是动态请求 */
    async judgeDataSource() {
      const { staticData, request } = this.componentData.store
      const { useRequest, url, params, method, interval } = request
      try {
        if (!useRequest) return Promise.resolve(staticData)

        const paramsField = method === 'get' ? 'params' : 'data'
        const res = await axios({
          url,
          method,
          [paramsField]: params
        })

        if (res.success && res.code === 200) {
          this.intervalRequest(interval)
          return Promise.resolve(this.filterData(res.result))
        } else {
          this.intervalRequest(interval)
          return Promise.reject()
        }
      } catch (error) {
        this.intervalRequest(interval)
        return Promise.reject()
      }
    },

    intervalRequest(currentInterval) {
      const { interval } = getGlobalConfig().request
      // 当前请求间隔配置为''，则使用全局配置
      currentInterval = currentInterval === '' && interval
      if (currentInterval) {
        setTimeout(async() => {
          const data = await this.judgeDataSource()
          this.setOptions(data)
        }, currentInterval)
      }
    },

    requestFailHandle(interval) {
      this.failRequestNumber++
      if (this.failRequestNumber >= 3) return
      this.intervalRequest(interval)
    },

    initAnimate() {
      const ele = this.$refs.ele
      if (!ele) return
      let className = ele.className
      const animateType = this.componentData.animate?.type
      const prevAnimateType = ele.getAttribute('data-animate')
      if (prevAnimateType) {
        className = className.replace(prevAnimateType, '')
      }

      if (animateType) {
        className += ` animate__animated ${animateType}`
        ele.setAttribute('data-animate', ` animate__animated ${animateType}`)
      }

      if (this.componentData.animate?.isLoope) {
        className += ` animate__infinite`
      }

      ele.className = className
    }
  }
}
