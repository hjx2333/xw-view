export default {
  title: '折柱混合图',
  component: 'XwLineMixBar',
  type: 'combination',
  src: require('@/assets/images/lineMixBar.png'),
  store: {
    fields: [{
      name: 'title',
      description: '标题',
      type: 'string'
    },
    {
      name: 'number',
      description: '数量',
      type: 'number | string'
    },
    {
      name: 'count',
      description: '百分比',
      type: 'number | string'
    }
    ],
    request: {
      useRequest: false,
      url: 'logcenter/accessLogs/accessStatistics',
      method: 'get',
      params: { 'accessTime': '2022-10-11', 'terminalType': '1' },
      interval: '',
      filterCode: 'return data'
    },
    staticData: [{
      title: '星期一',
      count: 10,
      number: 20
    }, {
      title: '星期二',
      count: 20,
      number: 30
    }, {
      title: '星期三',
      count: 8,
      number: 10
    }, {
      title: '星期四',
      count: 56,
      number: 60
    }, {
      title: '星期五',
      count: 36,
      number: 40
    }]
  },
  options: {
    yAxisOptions: {
      line: {
        name: '数量',
        min: 0,
        max: 60,
        interval: 10,
        axisLabelOptions: {
          formatter: '{value}'
        }
      },
      bar: {
        name: '百分比',
        min: 0,
        max: 60,
        interval: 10,
        axisLabelOptions: {
          formatter: '{value}%'
        }
      }
    },
    grid: {
      top: '80px',
      bottom: '20px',
      left: '20px',
      right: '30px'
    },
    seriesOptions: {
      line: {
        name: '数量',
        smooth: false,
        itemStyle: {
          color: '#01aaff'
        }
      },
      bar: {
        name: '百分比',
        barMaxWidth: 40
      }
    }
  }
}

