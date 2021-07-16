import { GET_SERVICE_DATA } from '../mutations-types'
import { get } from '@/service/fetch'
import { serviceConf } from '../data'
export default {
  state: {
  },
  mutations: {
  },
  actions: {
    // 获取get方法返回数据
    async [GET_SERVICE_DATA]<T> ({ commit }, opt: serviceConf):Promise<T | T[] | null> {
      const ret = await get(opt.name, opt.params)
      if (ret && ret.code > 0) {
        let result = null
        if (Array.isArray(ret.data)) {
          result = ret.data as T[]
        } else {
          result = ret.data as T
        }
        return result
      }
      return null
    }
  }
}
