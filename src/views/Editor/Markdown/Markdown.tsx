import React, { Component } from 'react'
import SimpleMDE from 'simplemde'

interface MarkdownProps {
  value: string
  onChange(val: string): void
  options?: SimpleMDE.Options
}

class Markdown extends Component<MarkdownProps> {
  public constructor(props: any) {
    super(props)

    this.Init = this.Init.bind(this)
  }

  public editor: SimpleMDE | null = null

  public Init(ref: HTMLDivElement) {
    // this.editor = new SimpleMDE(Object.assign({}, { element: ref }, this.props.options))
    this.editor = new SimpleMDE({ element: ref })
    this.editor.codemirror.on('change', this.props.options)
  }

  public componentDidUpdate() {
    this.editor && this.editor.value(this.props.value)
  }

  public componentWillUnmount() {
    this.editor = null
  }

  public render() {
    return <div id="markdown" ref={(ref: HTMLDivElement) => this.Init(ref)}/>
  }
}

export default Markdown
