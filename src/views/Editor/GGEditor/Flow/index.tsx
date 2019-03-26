import EditorMinimap from '../components/EditorMinimap'
import GGEditor, { Flow } from 'gg-editor'
import React from 'react'
import styles from './index.module.scss'
import { Col, Row } from 'antd'
import { FlowContextMenu } from '../components/EditorContextMenu'
import { FlowDetailPanel } from '../components/EditorDetailPanel'
import { FlowItemPanel } from '../components/EditorItemPanel'
import { FlowToolbar } from '../components/EditorToolbar'

(GGEditor as any).setTrackable(false)

const FlowPage = () => {
  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <FlowToolbar />
        </Col>
      </Row>
      <Row type="flex" className={styles.editorBd}>
        <Col span={4} className={styles.editorSidebar}>
          <FlowItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          <Flow className={styles.flow} />
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <FlowDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <FlowContextMenu />
    </GGEditor>
  )
}

export default FlowPage