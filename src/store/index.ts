import ConfigReducer, { IConfig } from './config'
import UserInfoReducer, { IUserInfo } from './UserInfo'
import { combineReducers } from 'redux'

export interface IRootState {
  user: IUserInfo
  config: IConfig
}

export default combineReducers({
  user: UserInfoReducer,
  config: ConfigReducer
})