import DetailForm from './DetailForm'
import React from 'react'
import styles from './index.module.scss'
import { CanvasPanel, DetailPanel, NodePanel } from 'gg-editor'
import { Card } from 'antd'

const MindDetailPanel = () => {
  return (
    <DetailPanel className={styles.detailPanel}>
      <NodePanel>
        <DetailForm type="node" />
      </NodePanel>
      <CanvasPanel>
        <Card type="inner" size="small" title="Canvas" bordered={false} />
      </CanvasPanel>
    </DetailPanel>
  )
}

export default MindDetailPanel
