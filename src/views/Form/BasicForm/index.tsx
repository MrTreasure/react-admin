import * as React from 'react'
import { Col, Row, Button, Input, Card, Alert } from 'antd'
import { Bind } from 'lodash-decorators'
import produce from 'immer'
import { GET_COOKIE, LOGIN } from '@/api/form'
import './index.scss'

export default class BasicForm extends React.Component {

  public state = {
    value: '',
    resList: []
  }

  @Bind()
  private handleInput(val: any) {
    this.setState({
      val: val.target.value
    })
  }

  @Bind()
  private handleLogin() {
    LOGIN(this.state.value)
  }

  @Bind()
  private async handleGetCookie() {
    const res: any = await GET_COOKIE()
    this.setState({
      resList: produce(this.state.resList, (list: any[]) => {
        list.push(res.data)
      })
    })
  }

  @Bind()
  private handleClear() {
    this.setState({
      resList: []
    })
  }

  public render() {
    return (
      <div className="basic-form">
        <Row gutter={12}>
          <Col span={12}>
            <Card title="操作面板">
              <Input value={this.state.value}  onChange={this.handleInput}/>
              <Button.Group className="bt-group">
                <Button onClick={this.handleLogin}>登录</Button>
                <Button onClick={this.handleGetCookie}>获取 Cookie</Button>
                <Button onClick={this.handleClear}>清理信息</Button>
              </Button.Group>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="结果页">
              {this.state.resList.map((item: string, index: number) => <Alert message={`${index + 1}. ${item}`} type="success"/>)}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}