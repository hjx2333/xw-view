export default {
  title: '堆叠折线图',
  component: 'XwStackedLine',
  type: 'line',
  src: require('@/assets/images/stackedLine.png'),
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
    },
    {
      name: 'xAxis',
      description: '日期',
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
      title: '系统一',
      count: [10, 34, 40, 60],
      xAxis: '星期一'
    }, {
      title: '系统二',
      xAxis: '星期二',
      count: [20, 30, 50, 55]
    }, {
      title: '系统三',
      xAxis: '星期三',
      count: [21, 34, 56, 80]
    }, {
      title: '系统四',
      xAxis: '星期四',
      count: [35, 46, 56, 66]
    }]
  },
  options: {
    xAxisOptions: {
    },
    yAxisOptions: {
      name: '次/单位'
    },
    seriesOptions: {
      smooth: false
    },
    grid: {
      top: '50px',
      left: '26px',
      right: '30px',
      bottom: '20px'
    }
  }
}
