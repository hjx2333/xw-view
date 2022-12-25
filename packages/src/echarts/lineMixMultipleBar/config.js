export default {
  title: '分组折柱混合图',
  component: 'XwLineMixMultipleBar',
  type: 'combination',
  src: require('@/assets/images/lineMixMultipleBar.png'),
  store: {
    fields: [{
      name: 'title',
      description: '标题',
      type: 'string'
    },
    {
      name: 'count',
      description: '数量',
      type: 'array'
    },
    {
      name: 'date',
      description: '日期',
      type: 'string | number'
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
      title: '支持平台',
      count: [10, 20, 60, 15],
      date: '2020',
      number: 50
    }, {
      title: '短信平台',
      count: [20, 90, 30, 40],
      date: '2021',
      number: 60
    }, {
      title: '数据中心',
      count: [99, 59, 39, 65],
      date: '2022',
      number: 80
    }]
  },
  options: {
    yAxisOptions: {
      line: {
        name: '数量',
        min: 0,
        max: 100,
        interval: 10,
        axisLabelOptions: {
          formatter: '{value}'
        }
      },
      bar: {
        name: '百分比',
        min: 0,
        max: 100,
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
        barMaxWidth: 40
      }
    },
    labelOptions: {
      show: false
    }
  }
}
