import * as React from 'react'
import './index.scss'
import { Row, Col } from 'antd'
import { generateColumn } from '@/components/util'
import Chance from 'chance'
import { LineChart, BarChart, Label, SimpleLine } from '@/components'
import { COLORS } from '@/config'

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

const labelList = [1, 2, 3, 4].map(item => {
  return {
    title: `标签-${item}`,
    value: chance.integer({ min: 10000, max: 344405 }),
    type: 'thousand',
    coTitle: '我是副标签'
  }
})

export default class Monitor extends React.Component<any, any> {


  public render() {
    return (
      <div className="monitor">
        <div className="label-list" style={{marginBottom: '20px'}}>
        {labelList.map((item, index) => {
          return (
            <Label className="label-item" style={{width: '400px', borderRadius: '5px'}} key={item.title} type={item.type} {...item}>
              <SimpleLine color={COLORS[index]} columns={columns.slice(0, 2)} rows={rows} height={100}/>
            </Label>
          )
        })}
        </div>
        <Row gutter={10}>
          <Col span={12}>
            <div style={{background: 'white', padding: '10px', borderRadius: '5px'}}>
              <LineChart columns={columns} rows={rows} title='折线图'/>
            </div>
          </Col>
          <Col span={12}>
            <div style={{background: 'white', padding: '10px', borderRadius: '5px'}}>
              <BarChart columns={columns} rows={rows} title='柱状图'/>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}