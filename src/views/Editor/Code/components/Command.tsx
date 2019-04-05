import React, { Component } from 'react'

interface CommandProps {
  name: string
}

class Command extends Component<CommandProps, any> {
  public render() {
    const { name, children } = this.props
    return (
      <div className="command" data-command={name}>
        {children}
      </div>
    )
  }
}

export default Command