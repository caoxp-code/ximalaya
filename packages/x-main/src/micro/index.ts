import { ObjectType, registerMicroApps, start } from 'qiankun'
import apps from './app'

registerMicroApps(apps, {
  beforeLoad: (app: ObjectType): Promise<unknown> => {
    console.log('before:', app.name)
    return Promise.resolve()
  }
})
export default start
