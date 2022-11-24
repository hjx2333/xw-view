<template>
  <div id="app">
    <xw-admin-preview :componentStore="componentData" :globalConfig="globalConfig" />
  </div>
</template>

<script>
import { commonConfig, commonOptions } from '../packages/src/echarts/defaultConfig.js'
export default {
  data() {
    return {
      componentData: [{
        ...commonConfig,
        title: '分组柱状图',
        component: 'XwMultipleBar',
        type: 'bar',
        src: require('@/assets/images/multipleBar.png'),
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
          ...commonOptions,
          yAxisOptions: {
            name: '次/单位'
          },
          seriesOptions: {
            barWidth: 40,
            label: {
              show: true
            }
          }
        }
      }
      ],
      globalConfig: {
        request: {
          prefix: 'http://192.168.1.24/',
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWFsTmFtZSI6Iuezu-e7n-euoeeQhuWRmCIsImZvcmNlVXBkYXRlUHciOiIwIiwicm9sZUlkcyI6IiIsInVzZXJfbmFtZSI6InN5c2FkbWluIiwic2NvcGUiOltdLCJkZXBJZCI6IjI5MjUiLCJuZXRXb3JrIjpudWxsLCJ1c2VySWQiOiJlOWNhMjNkNjhkODg0ZDRlYmIxOWQwNzg4OTcyN2RhZSIsImRlcE5hbWUiOiLluILkurrmsJHku6PooajlpKfkvJoiLCJqdGkiOiI4NDE2ZTY1NC1hZDZkLTQ1MzgtOWUzNy05MDc5Yzc3NzliNjAiLCJjbGllbnRfaWQiOiJwYWFzIn0.r5sEtR-Pnee1pVvlEVCBHOHJ62DTuQFcM1f1k698a28'
          },
          interval: 0
        },
        editor: {
          width: 1920,
          height: 1080,
          scale: 100,
          backgroundColor: '#ffffff',
          background: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
