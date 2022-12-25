export default {
  title: '柱状图',
  component: 'XwBar',
  type: 'bar',
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
  options: {
    yAxisOptions: {
      name: '次/单位'
    },
    seriesOptions: {
      name: '访问次数',
      barMaxWidth: 40
    }
  }
}
