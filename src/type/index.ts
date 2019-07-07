import { Action } from 'redux'
import { symbol } from 'prop-types';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export interface IAction<T = any> extends Action<string> {
  payload: T
}

export interface IMenuItem {
  icon?: string
  label: string
  value: string
  children?: IMenuItem[]
  path?: string
}

export type FormatType = '' | 'KMB' | 'percent' | 'thousand'
export interface IColumn {
  key: string
  label: string
  type: FormatType
  symbol: string
}

export interface ValProps {
  value: number
  type: FormatType | string
  symbol?: string
}