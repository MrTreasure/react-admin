import CommandContext from './CommandContext'
import React, { Component } from 'react'

interface CommandProps {
  name: string
}

class Command extends Component<CommandProps, any> {
  public render() {
    const { name, children } = this.props
    return (
      <CommandContext.Consumer>
        {(commandExecute: any) => (
          <div className="command" data-command={name} onClick={() => commandExecute(name)}>
            {children}
          </div>
        )}
      </CommandContext.Consumer>

    )
  }
}

export default Command