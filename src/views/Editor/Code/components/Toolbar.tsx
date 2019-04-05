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
  'solarized_light',
  'github',
  'chrome',
  'clouds',
  'tomorrow',
  'solarized_dark',
  'solarized_light'
]

const LANGUAGE_LIST = [
  'typescript',
  'javascript',
  'golang',
  'html',
  'json',
  'markdown',
  'mysql',
  'dockerfile',
  'tsx',
  'tomal',
  'yaml'
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
      <ToolbarButton command="zoomIn" icon="zoom-in" text="Zoom In" />
      <ToolbarButton command="zoomOut" icon="zoom-out" text="Zoom Out" />
      <ToolbarButton command="autoZoom" icon="fit-map" text="Fit Map" />
      <ToolbarButton command="resetZoom" icon="actual-size" text="Actual Size" />
      <Divider type="vertical" />
      <ToolbarButton command="append" text="Topic" />
      <ToolbarButton command="appendChild" icon="append-child" text="Subtopic" />
      <Divider type="vertical" />
      <ToolbarButton command="collapse" text="Fold" />
      <ToolbarButton command="expand" text="Unfold" />
      <Select defaultValue="golang" style={{ width: 120, marginRight: '10px' }} onChange={props.onLanguage} size="small">
        {LANGUAGE_LIST.map((item: string) => <Option key={item} value={item}>{upperFirst(item)}</Option>)}
      </Select>
      <Select defaultValue="github" style={{ width: 120 }} onChange={props.onTheme} size="small">
        {THEME_LIST.map((item: string) => <Option key={item} value={item}>{upperFirst(item)}</Option>)}
      </Select>
    </Toolbar>
  )
}

export default CodeToolbar
