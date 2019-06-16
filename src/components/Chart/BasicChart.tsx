import * as React from 'react'
import style from './index.module.scss'
import * as ECharts from 'echarts'
import { EChartError, resizeCenter } from './utils'

interface ChartProps {
  // 是否合并绘制
  notMerge?: boolean
  options: any
  lazyUpdate?: boolean
  onClick?(e: any): void
  dbClick?(e: any): void
  mouseDown?(e: any): void
  mouseMove?(e: any): void
  mouseUp?(e: any): void
  mouseOver?(e: any): void
  mouseOut?(e: any): void
  globalOut?(e: any): void
  contextMenu?(e: any): void
  onEChart?(chart: ECharts.ECharts): void
  debug?: boolean
  // 高度 默认 400 px
  height?: number
}

export default class Chart extends React.Component<ChartProps> {

  private echartDom: HTMLDivElement | null = null
  private echart: ECharts.ECharts | null = null

  private bindListener(chart: ECharts.ECharts) {
    const { onClick, dbClick, mouseDown, mouseMove, mouseUp, mouseOver, mouseOut, globalOut, contextMenu } = this.props
    onClick && chart.on('click', onClick)
    dbClick && chart.on('dbclick', dbClick)
    mouseDown && chart.on('mousedown', mouseDown)
    mouseMove && chart.on('mousemove', mouseMove)
    mouseUp && chart.on('mouseup', mouseUp)
    mouseOver && chart.on('mouseover', mouseOver)
    mouseOut && chart.on('mouseout', mouseOut)
    globalOut && chart.on('globalout', globalOut)
    contextMenu && chart.on('contextmenu', contextMenu)
  }

  private removeListener(chart: ECharts.ECharts) {
    const { onClick, dbClick, mouseDown, mouseMove, mouseUp, mouseOver, mouseOut, globalOut, contextMenu } = this.props
    onClick && chart.off('click', onClick)
    dbClick && chart.off('dbclick', dbClick)
    mouseDown && chart.off('mousedown', mouseDown)
    mouseMove && chart.off('mousemove', mouseMove)
    mouseUp && chart.off('mouseup', mouseUp)
    mouseOver && chart.off('mouseover', mouseOver)
    mouseOut && chart.off('mouseout', mouseOut)
    globalOut && chart.off('globalout', globalOut)
    contextMenu && chart.off('contextmenu', contextMenu)
  }

  private debug(...info: any) {
    this.props.debug && console.log(...info)
  }

  public componentDidMount() {
    window.setTimeout(() => {
      if (!this.echartDom) {
        throw new EChartError('dom not found')
      }
      this.echart = ECharts.init(this.echartDom)
      this.echart.setOption(this.props.options)
      this.bindListener(this.echart)
      resizeCenter.add(this.echart)
      this.debug('echart mounted')
    }, 500)
  }

  public getSnapshotBeforeUpdate(prevProps: ChartProps) {
    this.debug('getSnapshotBeforeUpdate', prevProps.options, this.props.options)
    if (prevProps.options !== this.props.options) {
      this.debug('prevProps:', prevProps)
      this.debug('currentProps:', this.props)
      return this.props.options
    } else {
      return null
    }
  }

  public componentDidUpdate(prevProps: ChartProps, prevState: any, options: any) {
    if (options) {
      this.echart && this.echart.setOption(options, this.props.notMerge, this.props.lazyUpdate)
    }
  }

  public componentWillUnmount() {
    if (!this.echart) return
    resizeCenter.remove(this.echart)
    this.removeListener(this.echart)
    this.echart.dispose()
    this.echart = null
    this.debug('echart destoryed')
  }

  public render() {
    const { height } = this.props
    return <div className={style.chart} ref={dom => this.echartDom = dom} style={{height: height ? `${height}px` : '400px'}}/>
  }
}