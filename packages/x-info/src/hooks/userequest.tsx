import {useState, useEffect} from 'react'
import {get, post} from '../services/fetch'
export type dataObj = {
  [atrr: string]: any
}
function useRequest(url: string, body?: {[k: string]: unknown}, canFetch: boolean = false) {
  const [data, setData] = useState<dataObj | null>(null)
  const [isFecth, setCanFecth] = useState(canFetch)
  useEffect(() => {
    console.log('fecth:', isFecth)
    if (isFecth) {
      if (/^GET_/.test(url)) {
        get(url, body, true).then(ret => {
          console.log('ret:', ret)
          setData(ret && ret.data)
        })
      } else if (/^POST_/.test(url)) {
        post(url, body).then(ret => setData(ret && ret.data))
      }
    }
  }, [])
  return {data, setCanFecth}
}
export default useRequest