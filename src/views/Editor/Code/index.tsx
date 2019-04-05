import * as ace from 'brace'
import Code from './Code'
import CodeToolbar from './components/Toolbar'
import React, { Component } from 'react'
import { Col, message, Row } from 'antd'
import './index.scss'

interface CodePageState {
  value: string
  theme: string
  language: string
}

const STORAGE_KEY = 'CODE_TEXT_VALUE'

export default class CodePage extends Component<any, CodePageState> {

  public editor: ace.Editor | null = null

  public constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onCommandExcute = this.onCommandExcute.bind(this)
    this.onLanugage = this.onLanugage.bind(this)
    this.onTheme = this.onTheme.bind(this)
    this.onFontSize = this.onFontSize.bind(this)
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
    if (!this.editor) return
    switch (command) {
      case 'undo':
        this.editor.undo()
        break
      case 'redo':
        this.editor.redo()
        break
      case 'lock':
        this.editor.setReadOnly(true)
        break
      case 'unlock':
        this.editor.setReadOnly(false)
        break
      case 'save':
        window.localStorage.setItem(`${STORAGE_KEY}-${this.state.language}`, this.editor.getValue())
        message.success(`${this.state.language} 代码已保存在本地`)
        break
      case 'load':
        const value = window.localStorage.getItem(`${STORAGE_KEY}-${this.state.language}`)
        if (!value) return
        this.setState({
          value
        })
        break
      case 'select':
        this.editor.selectAll()
        break
      case 'delete':
        this.setState({
          value: ''
        })
        break
      default:
        break;
    }
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

  public onFontSize(val: any) {
    this.editor && this.editor.setFontSize(val)
  }

  public render() {
    return (
      <div className='code-page'>
        <Row type="flex" className="codeHd">
          <Col span={24}>
            <CodeToolbar onCommand={this.onCommandExcute} onLanguage={this.onLanugage} onTheme={this.onTheme} onFontSize={this.onFontSize}/>
          </Col>
        </Row>
        <Code onchange={this.handleChange} value={this.state.value} instance={(ctx: ace.Editor) => this.editor = ctx} theme={this.state.theme} language={this.state.language}/>
      </div>
    )
  }
}