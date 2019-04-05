import Command from './Command'
import IconFont from './IconFont'
import React from 'react'
import styles from './index.module.scss'
import upperFirst from 'lodash/upperFirst'
import { Tooltip } from 'antd'

const ToolbarButton = (props: any) => {
  const { command, icon, text } = props

  return (
    <Command name={command}>
      <Tooltip
        title={text || upperFirst(command)}
        placement="bottom"
        overlayClassName={styles.tooltip}
      >
        <IconFont type={`icon-${icon || command}`} />
      </Tooltip>
    </Command>
  )
}

export default ToolbarButton
