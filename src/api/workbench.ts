import ajax from '@/utils/ajax'
import axios from 'axios'

const CancelToken = axios.CancelToken

export const CANCEL_GET = (time: number) => {
  return ajax.get(`/rand/${time}`).then(res => res.data)
}
