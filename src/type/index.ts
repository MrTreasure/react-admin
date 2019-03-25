import { Action } from 'redux'

export interface IAction<T = any> extends Action<string> {
  payload: T
}