import * as mutations from './mutations-types'
export type serviceConf = {
  name: keyof typeof mutations,
  params?: {[k: string]: unknown},
  asQuery?: boolean
}
export interface banner {
  url: string
}
