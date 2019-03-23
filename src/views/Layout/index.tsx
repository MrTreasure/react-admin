import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
export default class Layout extends Component {
  public render() {
    return <div>
      layout
      <Switch>
        <Route path="/child" component={ChildPage}></Route>
        <Redirect to="/404"/>
      </Switch>
    </div>
  }
}

function ChildPage() {
  return (
    <div>
      child page
    </div>
  )
}