import { deepCopy } from './utils'
import { commonConfig, commonOptions } from '@/src/echarts/defaultConfig'
let globalConfig = {}

// 批量获取所有组件默认配置文件
export function getDefaultComponentConfig() {
  const config = {}
  const requireConfig = require.context('../src', true, /config\.js$/)
  requireConfig.keys().forEach(fileName => {
    const fileConfig = requireConfig(fileName)
    const name = fileName.match(/\.\/\w+/)[0].replace(/\.\//, '')
    let currentConfig = deepCopy(fileConfig.default)

    // 合并配置
    if (name === 'echarts') {
      currentConfig.options = { ...currentConfig.options, ...commonOptions }
      currentConfig = { ...commonConfig, ...currentConfig }
    }

    config[name]
      ? config[name].push(currentConfig)
      : (config[name] = [currentConfig])
  })

  return config
}

// 获取默认的全局配置文件
export function getDefaultGlobalConfig() {
  let config = {}
  const requireConfig = require.context('../src', false, /globalConfig\.js$/)
  requireConfig.keys().forEach(fileName => {
    const fileConfig = requireConfig(fileName)
    config = fileConfig.default
  })
  return config
}

// 获取默认的全局配置文件
export function saveGlobalConfig(config) {
  globalConfig = config
}

// 获取默认的全局配置文件
export function getGlobalConfig() {
  return globalConfig
}
