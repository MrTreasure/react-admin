import UserInfoReducer, { IUserInfo } from './UserInfo'
import { combineReducers } from 'redux'

export interface IRootState {
  user: IUserInfo
}

export default combineReducers({
  user: UserInfoReducer
})