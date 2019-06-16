import { FormatType } from '@/type'
import numeral from 'numeral'

export const handleTypeFormat = (type: FormatType | string, val: Number | string, format?: string) => {
  const value = numeral(val)
  if (format) return value.format(format)

  switch (type) {
    case 'KMB': return value.format('0.0a')
    case 'thousand': return value.format('0,0')
    case 'percent': return value.format('0.00%')
    default: return val
  }
}