import { GET_USER_INFO } from './action'

export interface IUserInfo {
  workcode: string
  name: string
  department: string
}

export default (state: IUserInfo = { workcode: '', name: '', department: ''}, action: any) => {
  switch (action.type) {
    case GET_USER_INFO:
        return action.payload
    default: return state
  }
}