import Code from './Code'
import CodeToolbar from './components/Toolbar'
import React, { Component } from 'react'
import { Col, Row } from 'antd'
import './index.scss'


interface CodePageState {
  value: string
}

export default class CodePage extends Component<any, CodePageState> {

  public constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  public state = {
    value: ''
  }

  public handleChange(value: string) {
    this.setState({
      value
    })
  }

  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: 'Hello Treasure'
      })
    }, 2000);
  }


  public render() {
    return (
      <div className='code-page'>
        <Row type="flex" className="codeHd">
          <Col span={24}>
            <CodeToolbar />
          </Col>
        </Row>
        <Code onchange={this.handleChange} value={this.state.value}/>
      </div>
    )
  }
}