import * as api from '@/api/user'
import { createAction } from 'redux-actions'

export const GET_USER_INFO = 'GET_USER_INFO'
export const LOGIN = 'LOGIN'

export const getUserInfo = createAction(GET_USER_INFO, api.GET_USER_INFO)
export const login = createAction(LOGIN, api.LOGIN)