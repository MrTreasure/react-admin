import * as React from 'react'
import { ValProps } from '@/type'
import { handleTypeFormat } from '@/utils/util'
import { Card } from 'antd'
import { Tip } from '@/components'

import style from './index.module.scss'


interface LabelProps extends ValProps {
  style?: React.CSSProperties
  className?: string
  title: string
  coTitle?: string
  tip?: string
}

export default class Label extends React.Component<LabelProps, any> {
 public render() {
  const { title, coTitle, tip, value, type, symbol } = this.props

   return (
     
     <Card style={this.props.style} className={this.props.className} size="small" bordered={false}>
       <div className={style.title}>
          {title}
          {tip ? (<Tip content={tip}/>) : null}
       </div>
       <div className={style.contentWrap}>
        <div className={style.left}>
          {this.props.children}
        </div>
        <div className={style.right}>
          <div className={style.value}>
            {handleTypeFormat(type, value, symbol)}
          </div>
          {coTitle ? <div className={style.coTitle}>{coTitle}</div> : null}
        </div>
       </div>
     </Card>
   )
 }
}