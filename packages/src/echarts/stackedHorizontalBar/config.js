export default {
  title: '堆叠条形图',
  component: 'XwStackedHorizontalBar',
  type: 'bar',
  src: require('@/assets/images/stackedHorizontalBar.png'),
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
    }],
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
      date: '2020'
    }, {
      title: '短信平台',
      count: [20, 90, 30, 40],
      date: '2021'
    }, {
      title: '数据中心',
      count: [99, 59, 39, 65],
      date: '2022'
    }]
  },
  options: {
    yAxisOptions: {
      name: '次/单位'
    },
    seriesOptions: {
      barMaxWidth: 40
    }
  }
}
