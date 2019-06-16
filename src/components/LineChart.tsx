import * as React from 'react'
import Chart from '@/components/Chart'
import produce from 'immer'
import { COLORS } from '@/config'
import Color from 'color'
import { IColumn } from '@/type'
import { handleTypeFormat } from '@/utils/util'
import merge from 'webpack-merge'
import { AXIS_COLOR, LABEL_COLOR } from './util'

const options = {
  color: COLORS,
  legend: {
    show: true,
    data: []
  },
  title: {
    text: '折线图'
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

interface LineChartProps {
  columns: IColumn[]
  rows: any[]
  options?: any
}

export default class LineChart extends React.Component<LineChartProps, any> {
  private getNewOption(option: any, columns: IColumn[], rows: any[]) {
    return produce(option, opt => {
      const xAxisKey = columns[0].key
      const keys = rows.map(item => item[xAxisKey])
      opt.yAxis.axisLabel.formatter = (val: number) => {
        return handleTypeFormat(columns[0].type, val, columns[0].symbol)
      }
      opt.xAxis.data = keys
      opt.legend.data = columns.slice(1).map(column => column.label)
      opt.series = columns.slice(1).map((column, index) => {
        const color = Color(COLORS[index])
        return {
          type: 'line',
          name: column.label,
          data: rows.map(item => item[column.key]),
          symbol: 'none',
          areaStyle: {
            color: {
              type: 'linear',
              origin: 'start',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0, color: color.alpha(1).string()
                },
                {
                  offset: 1, color: color.alpha(0.1).string()
                }
              ]
            }
          }
        }
      })
    })
  }

  public render() {
    const opt = this.props.options ? merge(options, this.props.options): options
    return <Chart options={opt} getNewOption={this.getNewOption} columns={this.props.columns} rows={this.props.rows}/>
  }
}