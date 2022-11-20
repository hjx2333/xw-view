<template>
  <div id="app">
    <xw-preview :componentStore="componentData" :globalConfig="globalConfig" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentData: [
        {
          title: '横向柱状图',
          component: 'XwHorizontalBar',
          src: require('@/assets/images/bar.png'),
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
                title: '支持平台',
                count: 10
              },
              {
                title: '短信平台',
                count: 20
              },
              {
                title: '数据中心',
                count: 8
              }
            ]
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
              right: '20px',
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
      ],
      globalConfig: {
        request: {
          prefix: 'http://192.168.1.24/',
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWFsTmFtZSI6Iuezu-e7n-euoeeQhuWRmCIsImZvcmNlVXBkYXRlUHciOiIwIiwicm9sZUlkcyI6IiIsInVzZXJfbmFtZSI6InN5c2FkbWluIiwic2NvcGUiOltdLCJkZXBJZCI6IjI5MjUiLCJuZXRXb3JrIjpudWxsLCJ1c2VySWQiOiJlOWNhMjNkNjhkODg0ZDRlYmIxOWQwNzg4OTcyN2RhZSIsImRlcE5hbWUiOiLluILkurrmsJHku6PooajlpKfkvJoiLCJqdGkiOiI4NDE2ZTY1NC1hZDZkLTQ1MzgtOWUzNy05MDc5Yzc3NzliNjAiLCJjbGllbnRfaWQiOiJwYWFzIn0.r5sEtR-Pnee1pVvlEVCBHOHJ62DTuQFcM1f1k698a28'
          },
          interval: 30000
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
