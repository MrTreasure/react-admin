import Markdown from './Markdown'
import React, { Component } from 'react'
import './index.scss'

const options = {
  autosave: {
    enabled: true,
    uniqueId: 'MARKDOWN_EDITOR',
    dealy: 2000,
  },
	blockStyles: {
		bold: "__",
		italic: "_"
  },
	insertTexts: {
		horizontalRule: ["", "\n\n-----\n\n"],
		image: ["![](http://", ")"],
		link: ["[", "](http://)"],
		table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
  },
	parsingConfig: {
		allowAtxHeaderWithoutSpace: true,
		strikethrough: false,
		underscoresBreakWords: true,
  },
	shortcuts: {
		drawTable: "Cmd-Alt-T"
  },
	showIcons: ["code", "table"],
  spellChecker: true,
  status: ["autosave", "lines", "words", "cursor"],
  tabSize: 2,
  toolbar: true
}

interface MarkdownState {
  value: string
}

class MarkdownPage extends Component<any, MarkdownState> {
  public constructor(props: any) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  public state = {
    value: ''
  }

  public onChange(value: string) {
    this.setState({
      value
    })
  }

  public render() {
    return <div className="markdown-page">
      <Markdown value={this.state.value} onChange={this.onChange} options={options}/>
    </div>
  }
}

export default MarkdownPage
