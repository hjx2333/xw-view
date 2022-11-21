let globalConfig = {}

// 批量获取所有组件默认配置文件
export function getDefaultComponentConfig() {
  const config = {}
  const requireConfig = require.context('../src', true, /config\.js$/)
  requireConfig.keys().forEach(fileName => {
    const fileConfig = requireConfig(fileName)
    const name = fileName.match(/\.\/\w+/)[0].replace(/\.\//, '')
    config[name]
      ? config[name].push(fileConfig.default)
      : (config[name] = [fileConfig.default])
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
