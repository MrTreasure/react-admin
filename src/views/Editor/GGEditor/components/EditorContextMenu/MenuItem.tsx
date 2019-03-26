import IconFont from '../../common/IconFont'
import React from 'react'
import styles from './index.module.scss'
import upperFirst from 'lodash/upperFirst'
import { Command } from 'gg-editor'

const MenuItem = (props: any) => {
  const { command, icon, text } = props

  return (
    <Command name={command}>
      <div className={styles.item}>
        <IconFont type={`icon-${icon || command}`} />
        <span>{text || upperFirst(command)}</span>
      </div>
    </Command>
  )
}

export default MenuItem
