export default {
  title: '柱状图',
  component: 'XwBar',
  src: require('@/assets/images/bar.png'),
  store: {
    fields: [{
      name: 'title',
      description: '标题',
      type: 'string'
    },
    {
      name: 'count',
      description: '数量',
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
      title: '支持平台',
      count: 10
    }, {
      title: '短信平台',
      count: 20
    }, {
      title: '数据中心',
      count: 8
    }]
  },
  style: {
    width: '600px',
    height: '600px',
    top: '0px',
    left: '0px',
    zIndex: 1
  },
  options: {
    xAxisOptions: {},
    yAxisOptions: {
      name: '次/单位'
    },
    seriesOptions: {
      name: '访问次数',
      barWidth: 40
    },
    grid: {
      top: '50px',
      left: '0',
      right: '0',
      bottom: '0'
    },
    rangeColor: {
      start: '#00ae9d',
      end: '#00ae9d'
    }
  },
  event: {
    clickFn: ''
  }
}
