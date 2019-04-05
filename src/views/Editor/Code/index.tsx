import * as ace from 'brace'
import Code from './Code'
import CodeToolbar from './components/Toolbar'
import React, { Component } from 'react'
import { Col, Row } from 'antd'
import './index.scss'

interface CodePageState {
  value: string
  theme: string
  language: string
}

export default class CodePage extends Component<any, CodePageState> {

  public editor: ace.Editor | null = null

  public constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onCommandExcute = this.onCommandExcute.bind(this)
    this.onLanugage = this.onLanugage.bind(this)
    this.onTheme = this.onTheme.bind(this)
  }

  public state = {
    value: '',
    language: 'golang',
    theme: 'github'
  }

  public handleChange(value: string) {
    this.setState({
      value
    })
  }

  public onCommandExcute(command: string) {
    console.log(command)
    console.log(this.editor)
  }

  public onTheme(val: string) {
    this.setState({
      theme: val
    })
  }

  public onLanugage(val: string) {
    this.setState({
      language: val
    })
  }

  public render() {
    return (
      <div className='code-page'>
        <Row type="flex" className="codeHd">
          <Col span={24}>
            <CodeToolbar onCommand={this.onCommandExcute} onLanguage={this.onLanugage} onTheme={this.onTheme}/>
          </Col>
        </Row>
        <Code onchange={this.handleChange} value={this.state.value} instance={(ctx: ace.Editor) => this.editor = ctx} theme={this.state.theme} language={this.state.language}/>
      </div>
    )
  }
}