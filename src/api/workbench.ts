import ajax from '@/utils/ajax'
import axios from 'axios'

const CancelToken = axios.CancelToken

export const CANCEL_GET = (vm: any, time: number) => {
  vm.mgr = CancelToken.source()
  console.log(vm.mgr.token)
  return ajax.get(`/rand/${time}`, { cancelToken: vm.mgr.token }).then(res => res.data)
}
