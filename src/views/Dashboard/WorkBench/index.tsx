import * as React from 'react'
import { Col, Row, Card, Button } from 'antd'

const ButtonGroup = Button.Group

export default class WorkBench extends React.Component {
  public render() {
    return <div className="work-bench">
      <Row gutter={12}>
        <Col span={12}>
          <Card title="操作">
            <ButtonGroup>
              <Button>开始</Button>
              <Button>中断</Button>
            </ButtonGroup>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="结果页">
          </Card>
        </Col>
      </Row>
    </div>
  }
}
