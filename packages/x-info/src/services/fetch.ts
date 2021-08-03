/**
 * 封装fetch方法，根除传递的url和参数组装数据
 */
import { urls } from './url'
export type ReturnData = {code: number, data: any, message: string}
export const get = async (url: string, data?: any, dataAsQueryString = true): Promise<ReturnData | null> => {
  try {
    if (!url) return null
    const apiHost = process.env.VUE_APP_API_HOST
    let urlPath = urls[url]
    if (!urlPath) urlPath = url
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
