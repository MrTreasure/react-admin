import { IAction } from '@/type'

export interface IUserInfo {
  workcode: string
  name: string
  department: string
}

export const GET_USER_INFO = 'GET_USER_INFO'
export const LOGIN = 'LOGIN'

export default (state: IUserInfo = { workcode: '', name: '', department: ''}, action: IAction) => {
  switch (action.type) {
    case GET_USER_INFO:
        return action.payload
    default: return state
  }
}