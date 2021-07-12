import { GET_HEADET_MENU } from '../mutations-types'
import { get, post } from '@/service/fetch'
import { meunCategoryData } from '../data'
export default {
  state: {
  },
  mutations: {
  },
  actions: {
    async [GET_HEADET_MENU] ():Promise<meunCategoryData[] | null> {
      const ret = await get(GET_HEADET_MENU)
      if (ret && ret.code > 0) {
        return ret.data.groups
      }
      return null
    }
  }
}
