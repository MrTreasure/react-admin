import { FormatType, IColumn } from '@/type'

export const generateColumn = (key: string, label: string, type: FormatType, symbol?: string): IColumn => {
  return {
    key,
    label,
    type,
    symbol: symbol || ''
  }
}
