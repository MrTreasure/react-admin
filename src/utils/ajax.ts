import axios from 'axios'
import { BASE_URL } from '@/config'

export default axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 30000
})