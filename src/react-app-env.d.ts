/// <reference types="react-scripts" />

declare module 'gg-editor' {
  
  const GGEditor: React.ComponentClass<BasicProps, any>
  export const Flow: React.ComponentClass<BasicProps, any>
  export const Mind: React.ComponentClass<BasicProps, any>
  export const Command: React.ComponentClass<BasicProps, any>
  export const CanvasMenu: React.ComponentClass<BasicProps, any>
  export const ContextMenu: React.ComponentClass<BasicProps, any>
  export const EdgeMenu: React.ComponentClass<BasicProps, any>
  export const GroupMenu: React.ComponentClass<BasicProps, any>
  export const MultiMenu: React.ComponentClass<BasicProps, any>
  export const NodeMenu: React.ComponentClass<BasicProps, any>

  export const CanvasPanel: React.ComponentClass<BasicProps, any>
  export const DetailPanel: React.ComponentClass<BasicProps, any>
  export const EdgePanel: React.ComponentClass<BasicProps, any>
  export const GroupPanel: React.ComponentClass<BasicProps, any>
  export const MultiPanel: React.ComponentClass<BasicProps, any>
  export const NodePanel: React.ComponentClass<BasicProps, any>

  export const ItemPanel: React.ComponentClass<BasicProps, any>
  export const Item: React.ComponentClass<BasicProps, any>

  export const Minimap: React.ComponentClass<BasicProps, any>

  export const Toolbar: React.ComponentClass<BasicProps, any>

  export const Koni: React.ComponentClass<BasicProps, any>
  
  export const KoniCustomNode: React.ComponentClass<BasicProps, any>
  
  export const withPropsAPI = (com: React.ComponentClass<BasicProps, any>): React.ComponentClass<BasicProps, any> => com

  export default GGEditor
}
