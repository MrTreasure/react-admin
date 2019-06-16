import * as React from 'react'
import { Omit } from '@/type'
import BasicChart from './BasicChart'

type notWatch = 'watch' | 'options' | 'getNewOption'

interface ChartProps<T, K> {
  columns: T[]
  rows: K[]
  options: any
  /*监听指定的属性，一下属性的改变将引起 EChart 的重绘(default: 'columns' | 'rows')*/
  watch?: (keyof Omit<ChartProps<T, K>, notWatch>)[]
  getNewOption(option:any, columns: T[], rows: K[]): any
  [key: string]: any
}

export default class Chart<T = any, K = any> extends React.Component<ChartProps<T, K>, any> {

  static BasicWatch = ['columns', 'rows']

  public shouldComponentUpdate(nextProps:ChartProps<T, K>, nextState: any): boolean {
    const watch = Chart.BasicWatch.concat((this.props.watch as any))
    return watch.some((key: string) => {
      return nextProps[key] !== this.props[key]
    })
  }

  public render() {
    const { getNewOption, columns, rows, options } = this.props
    return <BasicChart {...this.props} options={getNewOption(options, columns, rows)}/>
  }
}
