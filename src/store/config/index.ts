import produce from 'immer'
import { IAction } from '@/type/index'

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

export interface IConfig {
  collapsed: boolean
}

export default (state: IConfig = { collapsed: false }, action: IAction) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED: 
      return produce(state, result => {
        result.collapsed = action.payload
      })
    default: return state
  }
}