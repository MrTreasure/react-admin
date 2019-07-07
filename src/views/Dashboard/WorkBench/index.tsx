import * as React from 'react'
import { Col, Row, Card, Button, List, Tag, InputNumber } from 'antd'
import { CANCEL_GET } from '@/api/workbench'
import { Bind } from 'lodash-decorators'
import produce from 'immer'
import { format } from 'date-fns'
import axios from 'axios'
import './index.scss'

const ButtonGroup = Button.Group

interface state {
  msgList: {time: string, msg: string}[],
  time: number
}

interface msg {
  time: string
  msg: string
}

const tags = [1,2,3,4,5,6,7,8]

export default class WorkBench extends React.Component<any, state> {

  private mgr: any = {}

  public state = {
    msgList: [],
    time: 5
  }

  @Bind()
  handleTime(val: number | undefined) {
    val = val ? val : 5
    this.setState({
      time: val
    })
  }

  @Bind()
  async handleStart() {
    try {
      const res = await CANCEL_GET(this, this.state.time)
      const list: any[] = produce(this.state.msgList, (list: any[]) => {
        list.push({
          time: format(new Date(), 'HH:mm:ss'),
          msg: res.time
        })
      })
      this.setState({
        msgList: list
      })
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log(error)
        const list: any[] = produce(this.state.msgList, (list: any[]) => {
          list.push({
            time: format(new Date(), 'HH:mm:ss'),
            msg: 'request canceled'
          })
        })
        this.setState({
          msgList: list
        })
      } else {
        console.error(error)
      }
    }
  }

  @Bind()
  public handleEnd() {
    console.log(this.mgr)
    this.mgr.cancel()
  }

  public render() {
    return <div className="work-bench">
      <Row gutter={12}>
        <Col span={12}>
          <Card title="操作">
            <div>
            <InputNumber value={this.state.time} onChange={this.handleTime}/>
            {tags.map(tag => <Tag key={tag} onClick={() => this.handleTime(tag)}>{tag}</Tag>)}
            </div>
            <ButtonGroup className="bt-group">
              <Button onClick={this.handleStart}>开始</Button>
              <Button onClick={this.handleEnd}>中断</Button>
            </ButtonGroup>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="结果页">
            <Button>清空</Button>
            <List className="list" size="small" bordered dataSource={this.state.msgList} renderItem={(item: msg) => (
              <List.Item>
                <div className="list-item">
                  <Tag className="time" color="green">{item.time}</Tag>
                  <span>{item.msg}</span>
                </div>
              </List.Item>
            )}/>
          </Card>
        </Col>
      </Row>
    </div>
  }
}
