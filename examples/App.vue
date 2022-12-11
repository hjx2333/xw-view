<template>
  <div id="app">
    <xw-admin-preview :componentStore="componentData" :globalConfig="globalConfig" />

    <!-- <div class="grid-list">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div> -->
  </div>
</template>

<script>
import { getDefaultComponentConfig, getGlobalConfig } from '../packages/utils/config'
export default {
  data() {
    return {
      componentData: [{
        title: '单列布局',
        component: 'XwGridSingleRow',
        style: {
          width: '100%',
          height: '200px',
          top: '0px',
          left: '0px',
          zIndex: 1,
          leftWidth: 'calc(50% - 5px)'
        },
        colspan: 4,
        children: []
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
  },
  created() {
    getDefaultComponentConfig()
    getGlobalConfig()
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding-top: 30px;
}
.grid-list {
  width: 800px;
  margin: 30px auto;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  height: 200px;
  border-radius: 6px;
  .grid-item {
    flex: 1;
    height: 100%;
    background: #ccc;
    margin-right: 8px;
    &:last-of-type {
      margin-right: 0;
    }
  }
}
</style>
