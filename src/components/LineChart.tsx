import * as React from 'react'
import Chart from '@/components/Chart'
import produce from 'immer'
import { COLORS } from '@/config'
import Color from 'color'
import { IColumn } from '@/type'

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
  grid: {
    show: true
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: []
}

interface LineChartProps {
  columns: IColumn[]
  rows: any[]
}

export default class LineChart extends React.Component<LineChartProps, any> {
  private getNewOption(option: any, columns: IColumn[], rows: any[]) {
    return produce(option, opt => {
      const xAxisKey = columns[0].key
      const keys = rows.map(item => item[xAxisKey])
      opt.xAxis.data = keys
      opt.legend.data = columns.slice(1)
      opt.series = columns.slice(1).map((column, index) => {
        const color = Color(COLORS[index])
        return {
          type: 'line',
          name: column.label,
          data: rows.map(item => item[column.key]),
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
    return <Chart options={options} getNewOption={this.getNewOption} columns={this.props.columns} rows={this.props.rows}/>
  }
}