import { ObjectType, registerMicroApps, start, initGlobalState, MicroAppStateActions } from 'qiankun'
import apps from './app'

registerMicroApps(apps, {
  beforeLoad: (app: ObjectType): Promise<unknown> => {
    console.log('before:', app.name)
    return Promise.resolve()
  }
})
type routeLink = {
  path?: string,
  params?: {[k: string]: unknown} | null,
  query?: {[k: string]: unknown} | null
}
type state = {
  link: routeLink | null
}
const initState: state = { link: null }
const actions: MicroAppStateActions = initGlobalState(initState)
export {
  actions
}

export default start
