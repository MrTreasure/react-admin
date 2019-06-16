import { FormatType, IColumn } from '@/type'

export const generateColumn = (key: string, label: string, type: FormatType, symbol?: string): IColumn => {
  return {
    key,
    label,
    type,
    symbol: symbol || ''
  }
}

export const AXIS_COLOR = '#e4e4e4'
export const LABEL_COLOR = '#989898'