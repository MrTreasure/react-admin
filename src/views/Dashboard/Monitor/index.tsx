import * as React from 'react'
import Chart from '@/components/Chart'
import './index.scss'
import produce from 'immer'
import { Button } from 'antd'
import { Bind } from 'lodash-decorators'

const mock = () => {
  return {
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      name: '',
      type: 'bar',
      data: [],
      label: {
        show: true
      }
    }]
  }
}

export default class Monitor extends React.Component<any, any> {

  public state = {
    options: mock(),
    columns: ['销量'],
    rows: [{'销量': 5}, {'销量': 10}, {'销量': 15}, {'销量': 20}, {'销量': 25}, {'销量': 30}],
    index: 0
  }

  @Bind()
  private handleClick(e: any) {
    this.setState({
      rows: produce(this.state.rows, rows => {
        rows[0].销量 = rows[0].销量 + 5
      })
    })
  }
  
  @Bind()
  private handleIndex(e: any) {
    this.setState({
      index: this.state.index + 1
    })
  }

  private getNewOption(opt: any, columns: any[], rows: any[]): any {
    return produce(opt, options => {
        options.series[0].name = columns[0]
        options.series[0].data = rows.map(row => {
        return row[columns[0]]
      })
    })
  }

  public render() {
    return (
      <div className="monitor">
        <Button.Group>
          <Button onClick={this.handleClick}>绘制</Button>
          <Button onClick={this.handleIndex}>额外属性</Button>
        </Button.Group>
        <div>{this.state.index}</div>
        <div className="chart-wrapper">
          <Chart rows={this.state.rows} columns={this.state.columns} options={this.state.options} getNewOption={this.getNewOption} index={this.state.index} watch={['extra']} debug={true}/>
        </div>
      </div>
    )
  }
}