import * as React from 'react'
import Chart from '@/components/Chart'
import produce from 'immer'
import { COLORS } from '@/config'
import Color from 'color'
import { IColumn } from '@/type'
import { handleTypeFormat } from '@/utils/util'
import merge from 'webpack-merge'
import { AXIS_COLOR, LABEL_COLOR } from './util'
import { Bind } from 'lodash-decorators'

const options = {
  color: COLORS,
  legend: {
    show: true,
    data: []
  },
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: [],
    axisLine: {
      lineStyle: {
        color: AXIS_COLOR
      }
    },
    axisLabel: {
      color: LABEL_COLOR
    },
    axisTick: {
      lineStyle: {
        color: LABEL_COLOR
      }
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: AXIS_COLOR
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: LABEL_COLOR
    },
    splitLine: {
      lineStyle: {
        color: AXIS_COLOR,
        type: 'dotted'
      }
    }
  },
  series: []
}

const seriesStyle = {
  type: 'bar',
  barMaxWidth: 30,
  itemStyle: {
    barBorderRadius: [15, 15, 0, 0]
  }
}

interface BarChartProps {
  columns: IColumn[]
  rows: any[]
  options?: any
  title?: string
}

export default class BarChart extends React.Component<BarChartProps, any> {

  static displayName = 'BarChart'

  @Bind()
  private getNewOption(option: any, columns: IColumn[], rows: any[]) {
    return produce(option, opt => {
      const xAxisKey = columns[0].key
      const keys = rows.map(item => item[xAxisKey])
      opt.title.text = this.props.title ? this.props.title : ''
      opt.yAxis.axisLabel.formatter = (val: number) => {
        return handleTypeFormat(columns[0].type, val, columns[0].symbol)
      }
      opt.xAxis.data = keys
      opt.legend.data = columns.slice(1).map(column => column.label)
      opt.series = columns.slice(1).map((column, index) => {
        // const color = Color(COLORS[index])
        return merge(seriesStyle, {
          name: column.label,
          data: rows.map(item => item[column.key]),
        })
      })
    })
  }

  public render() {
    const opt = this.props.options ? merge(options, this.props.options): options
    return <div style={{background: 'white', padding: '10px'}}>
      <Chart options={opt} getNewOption={this.getNewOption} columns={this.props.columns} rows={this.props.rows}/>
    </div>
  }
}
