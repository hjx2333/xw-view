export default {
  title: '饼图',
  component: 'XwPie',
  src: require('@/assets/images/pie.png'),
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
        color: '#00eaff'
      }
    }, {
      name: '数据中心',
      value: 8,
      itemStyle: {
        color: '#01aaff'
      }
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
    seriesOptions: {
      name: '访问次数',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0'
    }
  },
  animate: {
    type: '',
    isLoop: false
  }
}
