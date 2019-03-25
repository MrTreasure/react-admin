import * as api from '@/api/user'
import { createAction } from 'redux-actions'
import { GET_USER_INFO, LOGIN } from './index'

export const getUserInfo = createAction(GET_USER_INFO, api.GET_USER_INFO)
export const login = createAction(LOGIN, api.LOGIN)