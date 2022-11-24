/**
 * 本文件为全局接口拦截器
 */

import axios from 'axios'
import {
  message,
  Modal,
  notification
} from 'ant-design-vue'
import 'ant-design-vue/lib/message/style/css'
import 'ant-design-vue/lib/modal/style/css'
import 'ant-design-vue/lib/notification/style/css'
import { getGlobalConfig } from '@/utils/config'

axios.defaults.withCredentials = false
// 创建 axios 实例
const service = axios.create({
  baseURL: '/',
  timeout: 19000
})

// 发送请求
service.interceptors.request.use(
  config => {
    const { prefix, headers } = getGlobalConfig().request
    Object.assign(config.headers, headers)

    // 统一请求地址前缀
    if (prefix) {
      config.url = prefix + config.url
    }

    // get的请求方式，带上时间戳
    if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    return config
  },
  error => {
    notification.error({
      message: '服务出错',
      description: '前端服务出现意外，请联系管理员！'
    })
    return Promise.reject(error)
  }
)

// 接收后端响应信息
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      const resultData = response.data
      /**
       * 业务代码错误处理，统一抛出后端返回的message错误注释。
       * 具体业务代码错误说明：
       * 404：未找到对应实体（修改或者删除没找到对应的记录）
       * 500：请求完成了，但是业务上出错了
       * 429：账户已被锁定，请等待XX秒后尝试，用户登录输错代码太多次，被锁定了
       */
      if (resultData.code === 401) {
        Modal.error({
          title: '未认证',
          content: '很抱歉，您的身份未认证，请重新登录！',
          okText: '重新登录',
          mask: false,
          onOk: () => {
          }
        })
      } else if (resultData.code && resultData.code !== 200) {
        message.error(resultData.message)
      }
    }
    return response.data
  },
  error => {
    const res = error.response
    if (error && error.stack.indexOf('timeout') > -1) {
      message.error('接口请求超时，请稍后再试或联系网络管理员！')
    } else {
      switch (res.status) {
        // Unauthorized by gateway,缺少合法的用户验证头信息，未携带有效的token在请求头，判断未登录
        case 401:
          Modal.error({
            title: '未认证',
            content: '很抱歉，您的身份未认证，请重新登录！',
            okText: '重新登录',
            mask: false,
            onOk: () => {
            }
          })
          break
          // forbidden by gateway,无访问权限，该用户没有访问这个url的权限
        case 403:
          message.error('接口无权限！')
          break
          // 系统只允许一个用户一个客户端登录,当前登录被挤占了
        case 409:
          Modal.error({
            title: '登录冲突',
            content: '很抱歉，您在别的地方已经登录，是否重新登录！',
            okText: '重新登录',
            mask: false,
            onOk: () => {
            }
          })
          break
          // 系统达到流量高峰，暂时拒绝服务
        case 429:
          message.error('当前服务忙！请稍后再刷新试一试！')
          break
          /**
           * 默认http状态码错误处理，包括：
           * 400：请求参数有误
           * 404：没找到对应的服务
           * 500：后端代码执行错误，可提升内部异常，联系管理员
           * 502：系统执行问题，服务还未能提供服务
           * 其他未知错误等等...
           */
        default:
          message.error(`${res.status}错误，请联系管理员！`)
      }
    }
    return Promise.reject(error)
  }
)

export {
  service as axios
}
