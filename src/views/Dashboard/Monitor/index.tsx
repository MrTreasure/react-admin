import * as React from 'react'
import Chart from '@/components/Chart'
import './index.scss'
import produce from 'immer'

const mock = () => {
  return {
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      label: {
        show: true
      }
    }]
  }
}

export default class Monitor extends React.Component<any, any> {

  public state = {
    options: mock()
  }

  public componentDidMount() {
    const ticker = window.setInterval(() => {
      this.setState({
        options: produce(this.state.options, (opt) => {
          opt.series[0].data[0] = opt.series[0].data[0] + 5
        })
      })
    }, 2000)

    window.setTimeout(() => {
      window.clearInterval(ticker)
    }, 20000)
  }

  public render() {
    return (
      <div className="monitor">
        <div className="chart-wrapper">
          <Chart options={this.state.options} debug={true}/>
        </div>
      </div>
    )
  }
}