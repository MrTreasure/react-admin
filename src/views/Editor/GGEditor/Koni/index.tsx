import EditorMinimap from '../components/EditorMinimap'
import GGEditor, { Koni } from 'gg-editor'
import KoniCustomNode from './shape/nodes/KoniCustomNode'
import React from 'react'
import styles from '../Flow/index.module.scss'
import { Col, Row } from 'antd'
import { KoniContextMenu } from '../components/EditorContextMenu'
import { KoniDetailPanel } from '../components/EditorDetailPanel'
import { KoniItemPanel } from '../components/EditorItemPanel'
import { KoniToolbar } from '../components/EditorToolbar'

GGEditor.setTrackable(false);

const KoniPage = () => {
  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <KoniToolbar />
        </Col>
      </Row>
      <Row type="flex" className={styles.editorBd}>
        <Col span={4} className={styles.editorSidebar}>
          <KoniItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          <Koni className={styles.koni} />
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <KoniDetailPanel />
          <EditorMinimap />
        </Col>
      </Row>
      <KoniCustomNode />
      <KoniContextMenu />
    </GGEditor>
  )
}

class FlowPage extends React.Component {
  public state = {
    visible: false
  }

  public componentDidMount() {
    this.setState({
      visible: true
    })
  }

  public render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <KoniToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <KoniItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
          {this.state.visible ? <Koni style={{width: '100%', height: '100%'}} className={styles.flow}/> : null}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <KoniDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <KoniCustomNode />
        <KoniContextMenu />
      </GGEditor>
    )
  }
}

export default KoniPage