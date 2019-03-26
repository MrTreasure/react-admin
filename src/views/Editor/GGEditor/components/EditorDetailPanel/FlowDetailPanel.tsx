import DetailForm from './DetailForm'
import React from 'react'
import styles from './index.module.scss'
import {
  CanvasPanel,
  DetailPanel,
  EdgePanel,
  GroupPanel,
  MultiPanel,
  NodePanel
  } from 'gg-editor'
import { Card } from 'antd'

const FlowDetailPanel = () => {
  return (
    <DetailPanel className={styles.detailPanel}>
      <NodePanel>
        <DetailForm type="node" />
      </NodePanel>
      <EdgePanel>
        <DetailForm type="edge" />
      </EdgePanel>
      <GroupPanel>
        <DetailForm type="group" />
      </GroupPanel>
      <MultiPanel>
        <Card type="inner" size="small" title="Multi Select" bordered={false} />
      </MultiPanel>
      <CanvasPanel>
        <Card type="inner" size="small" title="Canvas" bordered={false} />
      </CanvasPanel>
    </DetailPanel>
  )
}

export default FlowDetailPanel
