import ajax from '@/utils/ajax'

export const LOGIN = (val: string) => {
  return ajax.post('/cookie', { cookie: val })
}

export const GET_COOKIE = () => {
  return ajax.get('/cookie').then(res => res.data)
}