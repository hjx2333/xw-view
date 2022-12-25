<template>
  <div id="app">
    <!-- <button @click="addHeight">高度++</button> -->
    <xw-preview :componentStore="componentData" :globalConfig="globalConfig" />

    <!-- <div class="grid-wrap">
      <div class="grid-list">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
      <div class="grid-list">
        <div class="grid-item"></div>
      </div>
      <div class="grid-list">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
      <div class="grid-list">
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {
  getDefaultComponentConfig,
  getGlobalConfig
} from '../packages/utils/config'
import { commonConfig, commonOptions } from '../packages/src/echarts/defaultConfig'
export default {
  data() {
    return {
      componentData: [
        {
          ...commonConfig,
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
            ...commonOptions,
            yAxisOptions: {
              name: '次/单位'
            },
            seriesOptions: {
              name: '访问次数',
              barMaxWidth: 40
            },
            grid: {
              top: '120px',
              left: '26px',
              right: '30px',
              bottom: '20px'
            },
            labelOptions: {
              show: true
            }
          }
        }
      ],
      globalConfig: {
        request: {
          prefix: 'http://192.168.1.24/',
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWFsTmFtZSI6Iuezu-e7n-euoeeQhuWRmCIsImZvcmNlVXBkYXRlUHciOiIwIiwicm9sZUlkcyI6IiIsInVzZXJfbmFtZSI6InN5c2FkbWluIiwic2NvcGUiOltdLCJkZXBJZCI6IjI5MjUiLCJuZXRXb3JrIjpudWxsLCJ1c2VySWQiOiJlOWNhMjNkNjhkODg0ZDRlYmIxOWQwNzg4OTcyN2RhZSIsImRlcE5hbWUiOiLluILkurrmsJHku6PooajlpKfkvJoiLCJqdGkiOiI4NDE2ZTY1NC1hZDZkLTQ1MzgtOWUzNy05MDc5Yzc3NzliNjAiLCJjbGllbnRfaWQiOiJwYWFzIn0.r5sEtR-Pnee1pVvlEVCBHOHJ62DTuQFcM1f1k698a28'
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
  },
  created() {
    getDefaultComponentConfig()
    getGlobalConfig()
  },
  methods: {
    addHeight() {
      this.componentData[0].style.height = `${parseInt(this.componentData[0].style.height) + 100}px`
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding-top: 0px;
}
.grid-wrap {
  width: 800px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  transform: scale(0.8);
}
.grid-list {
  padding: 10px;
  display: flex;
  margin-bottom: 0;
  height: 200px;
  background-color: #fff;
  &:not(:first-of-type) {
    padding-top: 0;
  }

  .grid-item {
    margin-right: 10px;
    flex: 1;
    height: 100%;
    background: #ccc;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
