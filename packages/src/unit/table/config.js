export default {
  title: '表格',
  component: 'XwTable',
  src: require('@/assets/images/table.png'),
  style: {
    width: '800px',
    height: '400px',
    top: '0px',
    left: '0px',
    zIndex: 1
  },
  store: {
    fields: [
      {
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
    columns: [
      {
        title: '序号',
        align: 'center',
        width: 70,
        dataIndex: 'number',
        key: 'number',
        customRender: (text, record, index) => index + 1
      },
      {
        title: '标题',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '数量',
        dataIndex: 'value',
        key: 'value'
      }
    ],
    rowKey: 'name',
    pagination: false,
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
        name: '支持平台',
        value: 10
      },
      {
        name: '短信平台',
        value: 20
      },
      {
        name: '数据中心',
        value: 8
      },
      {
        name: '支持平台1',
        value: 10
      },
      {
        name: '短信平台2',
        value: 20
      },
      {
        name: '数据中心3',
        value: 8
      }
    ]
  },
  animate: {
    type: '',
    isLoop: false
  }
}
