import data from './worldCup2018.json'
import EditorMinimap from '../components/EditorMinimap'
import GGEditor, { Mind } from 'gg-editor'
import React from 'react'
import styles from '../Flow/index.module.scss'
import { Col, Row } from 'antd'
import { MindContextMenu } from '../components/EditorContextMenu'
import { MindDetailPanel } from '../components/EditorDetailPanel'
import { MindToolbar } from '../components/EditorToolbar'

(GGEditor as any).setTrackable(false);

const MindPage = () => {
  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <MindToolbar />
        </Col>
      </Row>
      <Row type="flex" className={styles.editorBd}>
        <Col span={20} className={styles.editorContent}>
          <Mind data={data} className={styles.mind} />
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <MindDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <MindContextMenu />
    </GGEditor>
  )
}

export default MindPage
