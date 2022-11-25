export default {
  title: '环形图',
  component: 'XwDoughnutPie',
  type: 'pie',
  src: require('@/assets/images/doughnutPie.png'),
  store: {
    fields: [{
      name: 'name',
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
      name: '支持平台',
      value: 10,
      itemStyle: {
        color: '#0072ff'
      }
    }, {
      name: '短信平台',
      value: 20,
      itemStyle: {
        color: '#51d6a9'
      }
    }, {
      name: '数据中心',
      value: 8,
      itemStyle: {
        color: '#01aaff'
      }
    }]
  },
  options: {
    titleOptions: {
      text: '标题',
      textStyle: {
        color: '#fff',
        fontSize: 30
      },
      subtext: '副标题',
      subtextStyle: {
        color: '#fff',
        fontSize: 16
      },
      left: 'center',
      top: '45%'
    },
    legendOptions: {
      right: '10%',
      orient: 'vertical',
      align: 'left',
      textStyle: {
        color: '#fff'
      }
    },
    seriesOptions: {
      name: '访问次数',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      label: {
        show: false,
        position: 'center',
        color: '#fff',
        fontSize: 18
      },
      labelLine: {
        show: true
      }
    }
  }
}
