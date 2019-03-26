declare module 'gg-editor' {
  
  export interface Align {
    line?: any
    item?: boolean | 'horizontal' | 'vertical' | 'center'
    grid?: boolean | 'cc' | 'tl'
  }

  export interface Grid {
    cell?: number
    line?: any
  }

  export interface Shortcut {
    clear?: boolean
    selectAll?: boolean
    undo?: boolean
    redo?: boolean
    delete?: boolean
    zoomIn?: boolean
    zoomOut?: boolean
    autoZoom?: boolean
    resetZoom?: boolean
    toFront?: boolean
    toBack?: boolean
    copy?: boolean
    paste?: boolean
    multiSelect?: boolean
    addGroup?: boolean
    unGroup?: boolean
    append?: boolean
    appendChild?: boolean
    collaspeExpand?: boolean
  }

  interface ReactProps {
    style?: React.StyleHTMLAttributes
    className?: React.ClassAttributes
  }

  export interface BasicProps extends ReactProps {
    /** 初始数据 */
    data?: any
    /** G6的配置项 https://www.yuque.com/antv/g6/graph  */
    graph?: any
    /** 快捷键配置，内置命令 */
    shortcut?: IShortcut
  }

  export interface FlowProps extends BasicProps {
    /** 对齐配置 */
    align?: Align
    /** 网格线配置 */
    grid?: Grid
    /** default: true */
    noEndEdge?: boolean
  }

  export interface MindProps extends BasicProps {

  }

  export interface CommondProps {
    name: string
  }

  export interface MninimapProps extends ReactProps {
    /** 容器 id */
    container?: string
    width?: number
    height?: number
    /** 视窗样式，参考 G 绘图属性 */
    viewportWindowStyle?: any
    /** 背景样式，参考 G 绘图属性 */
    viewportBackStyle?: any
  }

  export interface ItemPanelProps {
    /** 元素类型，可选类型：node edge */
    type: string
    /** 元素尺寸，书写格式：50*50 */
    size: string
    /** 元素形状，内置形状：node、edge */
    shape: string
    /** 元素初始 model */
    model?: any
    /** 元素概览 src */
    src: string
  }

  const GGEditor: React.ComponentClass<BasicProps, any>

  /** 流程图  https://github.com/gaoli/GGEditor/blob/master/docs/api/flow.zh-CN.md*/
  export const Flow: React.ComponentClass<FlowProps, any>

  /** 思维导图  https://github.com/gaoli/GGEditor/blob/master/docs/api/mind.zh-CN.md*/
  export const Mind: React.ComponentClass<MindProps, any>

  /** 此组件只能嵌套在 <Toolbar /> 或 <ContextMenu /> 组件内使用： https://github.com/gaoli/GGEditor/blob/master/docs/api/command.zh-CN.md */
  export const Command: React.ComponentClass<CommondProps, any>

  /** 不指定宽高的情况下则自动适应容器尺寸 https://github.com/gaoli/GGEditor/blob/master/docs/api/minimap.zh-CN.md */
  export const Minimap: React.ComponentClass<MninimapProps, any>

  /** 右键菜单，负责菜单显示隐藏，命令按钮绑定与可用禁用状态控制。 https://github.com/gaoli/GGEditor/blob/master/docs/api/contextMenu.zh-CN.md */
  export const ContextMenu: React.ComponentClass<BasicProps, any>

  /** 工具栏，负责命令按钮绑定与可用禁用状态控制。 https://github.com/gaoli/GGEditor/blob/master/docs/api/toolbar.zh-CN.md */
  export const Toolbar: React.ComponentClass<BasicProps, any>

  /** 元素面板栏  必需配合 <Item /> 组件使用，如果 <Item /> 包含 src 属性则自动显示元素概览图片。 https://github.com/gaoli/GGEditor/blob/master/docs/api/itemPanel.zh-CN.md */
  export const ItemPanel: React.ComponentClass<ItemPanelProps, any>
  export const Item: React.ComponentClass<ItemPanelProps, any>

  /** 属性栏会自动根据不同页面状态显示对应面板，例如：选中节点时则只会显示 NodePanel https://github.com/gaoli/GGEditor/blob/master/docs/api/detailPanel.zh-CN.md */
  export const DetailPanel: React.ComponentClass<BasicProps, any>

  export const CanvasMenu: React.ComponentClass<BasicProps, any>
  export const EdgeMenu: React.ComponentClass<BasicProps, any>
  export const GroupMenu: React.ComponentClass<BasicProps, any>
  export const MultiMenu: React.ComponentClass<BasicProps, any>
  export const NodeMenu: React.ComponentClass<BasicProps, any>

  export const CanvasPanel: React.ComponentClass<BasicProps, any>
  
  export const EdgePanel: React.ComponentClass<BasicProps, any>
  export const GroupPanel: React.ComponentClass<BasicProps, any>
  export const MultiPanel: React.ComponentClass<BasicProps, any>
  export const NodePanel: React.ComponentClass<BasicProps, any>

  
  export const Item: React.ComponentClass<BasicProps, any>

  

  

  export const Koni: React.ComponentClass<BasicProps, any>
  
  export const KoniCustomNode: React.ComponentClass<BasicProps, any>
  
  export const withPropsAPI = (com: React.ComponentClass<BasicProps, any>): React.ComponentClass<BasicProps, any> => com

  export default GGEditor
}