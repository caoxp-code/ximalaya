/**
 * 封装fetch方法，根除传递的url和参数组装数据
 * 如果url中配置有params，默认需要将params和data中的参数有一致的名称
 */
import { urls } from './url'
export type ReturnData = {code: number, data: any, message: string}
function parseUrlParams (url: string, data?: any): string {
  let ret = url
  const matches = url.match(/(:\w*)/g)
  if (matches) {
    for(const match of matches) {
      const key = match.substr(1)
      if (data[key]) {
        ret = ret.replace(match, data[key])
      } else {
        throw new Error('no key in data')
      }
    }
  }
  return ret
}
export const get = async (url: string, data?: any, dataAsQueryString = true): Promise<ReturnData | null> => {
  try {
    if (!url) return null
    const apiHost = process.env.REACT_APP_API_HOST
    console.log(apiHost, process.env.NODE_ENV)
    let urlPath = urls[url]
    if (!urlPath) urlPath = url
    urlPath = parseUrlParams(urlPath, data)
    urlPath = `${apiHost}${urlPath}`
    console.log('get url:', urlPath)
    if (dataAsQueryString && data) {
      const keys: string[] = Object.keys(data)
      if (urlPath.indexOf('?') >= 0) {
        urlPath += '&'
      } else {
        urlPath += '?'
      }
      for (const key of keys) {
        const v = data[key]
        urlPath += `${key}=${v}&`
      }
    }
    const opt = {
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
        // mode: 'no-cors'
      }
    }
    const ret = await (await fetch(urlPath, opt)).json()
    return ret
  } catch (e) {
    console.log('fetch get data error:', e)
    return null
  }
}
export const post = async (url: string, data: any): Promise<ReturnData | null> => {
  try {
    if (!url) return null
    const apiHost = process.env.VUE_APP_API_HOST
    let urlPath = urls[url]
    if (!urlPath) urlPath = url
    urlPath = parseUrlParams(urlPath, data)
    urlPath = `${apiHost}${urlPath}`
    console.log('post url:', urlPath)
    const opt = {
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        mode: 'cors'
      },
      body: JSON.stringify(data),
      method: 'post'
    }
    const ret = await (await fetch(urlPath, opt)).json()
    return ret
  } catch (e) {
    console.log('fetch post data error:', e)
    return null
  }
}
