export default {
  title: '面积折线图',
  component: 'XwAreaLine',
  type: 'line',
  src: require('@/assets/images/areaLine.png'),
  store: {
    fields: [
      {
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
      params: { accessTime: '2022-10-11', terminalType: '1' },
      interval: '',
      filterCode: 'return data'
    },
    staticData: [
      {
        title: '星期一',
        count: 10
      },
      {
        title: '星期二',
        count: 20
      },
      {
        title: '星期三',
        count: 8
      },
      {
        title: '星期四',
        count: 56
      },
      {
        title: '星期五',
        count: 36
      }
    ]
  },
  options: {
    xAxisOptions: {
    },
    yAxisOptions: {
      name: '次/单位'
    },
    seriesOptions: {
      name: '访问次数',
      smooth: true,
      itemStyle: {
        color: '#00ae9d'
      }
    },
    grid: {
      top: '50px',
      left: '20px',
      right: '40px',
      bottom: '20px'
    }
  }
}
