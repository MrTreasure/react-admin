import * as React from 'react'
import './index.scss'
import { Row, Col } from 'antd'
import { generateColumn } from '@/components/util'
import Chance from 'chance'
import { LineChart, BarChart} from '@/components'

const chance = new Chance()

const list = [0,1,2,3,4,5,6,7,8,9,10]

const columns = ['xAxis', 'first', 'second', 'third'].map(key => generateColumn(key, key, 'thousand'))

const max = (prev: number) => {
  let start = 0
  while(start < prev) {
    start = chance.integer({ min: 0, max: prev + 500})
  }
  return start
}

const rows: any[] = list.reduce((arr: any[], current, index) => {
  let obj
  if (index === 0) {
    obj = {
      xAxis: current,
      first: 100,
      second: 200,
      third: 300
    }
  } else {
    obj = {
      xAxis: current,
      first: max(arr[index - 1].first),
      second: max(arr[index - 1].second),
      third: max(arr[index - 1].third)
    }
  }
  arr.push(obj)
  return arr
}, [])


export default class Monitor extends React.Component<any, any> {


  public render() {
    return (
      <div className="monitor">
        <Row gutter={10}>
          <Col span={12}>
            <LineChart columns={columns} rows={rows} title='折线图'/>
          </Col>
          <Col span={12}>
            <BarChart columns={columns} rows={rows} title='柱状图'/>
          </Col>
        </Row>
      </div>
    )
  }
}