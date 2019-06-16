import * as React from 'react'
import { Icon, Tooltip } from 'antd'

interface TipProps {
  content: string
  html?: boolean
}

export default class Tip extends React.Component<TipProps, any> {

  static displayName = 'Tip'

  public render() {

    const { html, content } = this.props
    let node: React.ReactNode
    if (html) {
      node = <div dangerouslySetInnerHTML={{__html: content}}></div>
    } else {
      node = <div>{{content}}</div>
    }

    return (
      <Tooltip placement="right" title={node}>
        <Icon type="question-circle" />
      </Tooltip>
    )
  }
}