import { GET_USER_INFO as getInfo } from '@/api/user'
import { createAction } from 'redux-actions'

export const GET_USER_INFO = 'GET_USER_INFO'

export const getUserInfo = createAction(GET_USER_INFO, getInfo)