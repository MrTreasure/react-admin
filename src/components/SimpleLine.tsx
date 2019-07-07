import * as React from 'react'
import { Bind } from 'lodash-decorators'
import Chart from '@/components/Chart'
import { handleTypeFormat } from '@/utils/util'
import merge from 'webpack-merge'
import { IColumn } from '@/type' 
import produce from 'immer'

interface SimpleLineProps {
  color: string
  columns: IColumn[]
  rows: any[]
  options?: any
  height?: number
}

const options = {
  yAxis: {
    show: false
  },
  xAxis: {
    show: false
  },
  grid: {
    show: false,
    bottom: 20,
    top: 10,
    left: 0
  },
  tooltip: {},
  series: []
}

export default class SimpleLine extends React.Component<SimpleLineProps, any> {
  static displayName = 'SimpleLine'

  @Bind()
  private getNewOption(option: any, columns: IColumn[], rows: any[]) {
    return produce(option, opt => {
      opt.series = columns.slice(1).map((column) => {
        return {
          type: 'line',
          name: column.label,
          data: rows.map(item => item[column.key]),
          symbol: 'none',
          lineStyle: {
            color: this.props.color
          }
        }
      })
    })
  }

  public render() {
    const opt = this.props.options ? merge(options, this.props.options): options
    return <Chart options={opt} getNewOption={this.getNewOption} columns={this.props.columns} rows={this.props.rows} height={this.props.height}/>
  }
}