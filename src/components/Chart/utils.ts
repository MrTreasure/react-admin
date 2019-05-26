import * as ECharts from 'echarts'
import { Bind, Debounce} from 'lodash-decorators'

export class EChartError extends Error {
  constructor(message: string) {
    super()
    this.name = 'EChartError'
    this.message = message
  }
}

class ResizeCenter {
  private echartList: ECharts.ECharts[] = []
  private minWidth: number = 1200

  constructor(minWidth: number) {
    this.minWidth = minWidth
    window.addEventListener('resize', this.onSizeChange)
  }

  @Bind()
  @Debounce(300)
  private onSizeChange(e: any) {
    if (window.innerWidth < this.minWidth) return
    this.echartList.forEach(echart => echart && echart.resize())
  }

  public add(echart: ECharts.ECharts) {
    this.echartList.push(echart)
  }

  public remove(echart: ECharts.ECharts) {
    const index = this.echartList.indexOf(echart)
    this.echartList.splice(index, 1)
  }
}

export const resizeCenter = new ResizeCenter(1200)