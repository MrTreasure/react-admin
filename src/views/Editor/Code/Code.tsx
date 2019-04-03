import * as ace from 'brace'
import React, { Component } from 'react'
import 'brace/mode/typescript'
import 'brace/mode/javascript'
import 'brace/mode/golang'
import 'brace/theme/monokai'
import 'brace/theme/solarized_light'
import 'brace/theme/github'


interface CodeProps {
  value: string
  language?: string
  theme?: string
  onchange?(value: string):void
}

export default class Code extends Component<CodeProps, any> {

  public editor: ace.Editor | null = null

  public constructor(props: CodeProps) {
    super(props)
    this.handleEditorChange = this.handleEditorChange.bind(this)
  }

  public handleEditorChange() {
    this.editor && this.props.onchange && this.props.onchange(this.editor.getValue())
  }

  public componentDidMount() {
    this.editor = ace.edit('code-editor')
    this.editor.getSession().setMode('ace/mode/golang')
    this.editor.setTheme('ace/theme/monokai')
    this.editor.on('change', this.handleEditorChange)
  }

  public getSnapshotBeforeUpdate(prevProps: CodeProps, prevState: any) {
    let languageUpdate: boolean = false
    let themeUpdate: boolean = false
    if (prevProps.language !== this.props.language) {
      languageUpdate = true
    }
    if (prevProps.theme !== this.props.theme) {
     themeUpdate = true
    }

    return {
      languageUpdate,
      themeUpdate
    }
  }

  public componentDidUpdate(changeList: any) {
    if (!this.editor) return
    if (changeList.languageUpdate && this.props.language) this.editor.getSession().setMode(this.props.language)
    if (changeList.themeUpdate && this.props.theme) this.editor.setTheme(this.props.theme)
  }

  public componentWillUnmount() {
    if (!this.editor) return
    this.editor.off('change', this.handleEditorChange)
    this.editor.destroy()
    this.editor = null
  }

  public render() {
    return (
      <div id="code-editor"/>
    )
  }
}
