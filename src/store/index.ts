import { combineReducers } from 'redux'
import UserInfoReducer, { IUserInfo } from './UserInfo'

export interface IRootState {
  user: IUserInfo
}

export default combineReducers({
  user: UserInfoReducer
})