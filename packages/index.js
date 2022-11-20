
import { getComponentConfig, getGlobalConfig } from './utils/config'

let isInstalled = false
const requireComponent = require.context('./src', true, /\.vue$/)
// 查找同级目录下以vue结尾的组件
const install = Vue => {
  if (isInstalled) return
  isInstalled = true
  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName)
    const componentName = fileName.replace(/^\.\/(\w*\/)*/, '').replace(/\.\w+$/, '')
    Vue.component(`Xw${componentName}`, config.default || config)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  getComponentConfig,
  getGlobalConfig,
  install // 对外暴露install方法
}
