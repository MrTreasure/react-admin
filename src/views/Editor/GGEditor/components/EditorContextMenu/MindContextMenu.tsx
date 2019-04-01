import MenuItem from './MenuItem'
import React from 'react'
import styles from './index.module.scss'
import { CanvasMenu, ContextMenu, NodeMenu } from 'gg-editor'

const MindContextMenu = () => {
  return (
    <ContextMenu className={styles.contextMenu}>
      <NodeMenu>
        <MenuItem command="append" text="Topic" />
        <MenuItem command="appendChild" icon="append-child" text="Subtopic" />
        <MenuItem command="collapse" text="Fold" />
        <MenuItem command="expand" text="Unfold" />
        <MenuItem command="delete" />
      </NodeMenu>
      <CanvasMenu>
        <MenuItem command="undo" />
        <MenuItem command="redo" />
      </CanvasMenu>
    </ContextMenu>
  )
}

export default MindContextMenu