export default {
  title: '堆叠折柱混合图',
  component: 'XwLineMixStackedBar',
  type: 'combination',
  src: require('@/assets/images/lineMixStackedBar.png'),
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
      count: [30, 60],
      date: '2020',
      number: 50
    }, {
      title: '短信平台',
      count: [40, 86],
      date: '2021',
      number: 70
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
        smooth: true,
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
