import axios from 'axios'
import { BASE_URL } from '@/config'
import CancelManager from './CancelManager'

const ajax =  axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 30000
})

const mgr = CancelManager.use(ajax)
const cancelMethod = mgr.cancelMethod
const isCancel = axios.isCancel

export { cancelMethod, isCancel }
export default ajax
