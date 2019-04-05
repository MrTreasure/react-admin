import CommandCtonext from './CommandContext'
import React from 'react'
import styles from './index.module.scss'
import ToolbarButton from './ToolbarButton'
import { Divider } from 'antd'

interface ToolbarProps {
  className: string
  onCommand?(command:string):void
}

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
    </Toolbar>
  )
}

export default CodeToolbar
