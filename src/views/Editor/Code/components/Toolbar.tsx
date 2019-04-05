import CommandCtonext from './CommandContext'
import React from 'react'
import styles from './index.module.scss'
import ToolbarButton from './ToolbarButton'
import upperFirst from 'lodash/upperFirst'
import { Divider, Select } from 'antd'

interface ToolbarProps {
  className: string
  onCommand?(command:string):void
}

const THEME_LIST = [
  'monokai',
  'github',
  'chrome',
  'clouds',
  'tomorrow',
  'solarized_dark',
  'solarized_light'
]

const LANGUAGE_LIST = [
  'typescript',
  'tsx',
  'javascript',
  'jsx',
  'golang',
  'html',
  'json',
  'markdown',
  'mysql',
  'dockerfile',
  'toml',
  'yaml',
  'sh'
]

const Option = Select.Option

class Toolbar extends React.Component<ToolbarProps> {

  public constructor(props: ToolbarProps) {
    super(props)

    this.onComandExecte = this.onComandExecte.bind(this)
  }

  public onComandExecte(command: string) {
    this.props.onCommand && this.props.onCommand(command)
  }

  public render() {
    return (
      <div className={this.props.className}>
        <CommandCtonext.Provider value={this.onComandExecte}>
          {this.props.children}
        </CommandCtonext.Provider>
      </div>
    )
  }
}

const CodeToolbar = (props: any) => {
  return (
    <Toolbar className={styles.toolbar} onCommand={props.onCommand}>
      <ToolbarButton command="undo" />
      <ToolbarButton command="redo" />
      <Divider type="vertical" />
      <ToolbarButton command="lock" />
      <ToolbarButton command="unlock" />
      <Divider type="vertical" />
      <ToolbarButton command="save" />
      <ToolbarButton command="load" icon="file-text" />
      <Divider type="vertical" />
      <ToolbarButton command="select" icon="highlight"/>
      <ToolbarButton command="delete"/>
      <Divider type="vertical" />
      <Select defaultValue="16" style={{ width: 80, marginRight: '10px' }} onChange={props.onFontSize} size="small">
        {[12, 14, 16, 18, 20, 22, 24, 26, 28].map((item: number) => <Option key={item} value={item}>{item + 'px'}</Option>)}
      </Select>
      <Select defaultValue="golang" style={{ width: 120, marginRight: '10px' }} onChange={props.onLanguage} size="small">
        {LANGUAGE_LIST.map((item: string) => <Option key={item} value={item}>{upperFirst(item)}</Option>)}
      </Select>
      <Select defaultValue="github" style={{ width: 180 }} onChange={props.onTheme} size="small">
        {THEME_LIST.map((item: string) => <Option key={item} value={item}>{upperFirst(item)}</Option>)}
      </Select>
    </Toolbar>
  )
}

export default CodeToolbar
