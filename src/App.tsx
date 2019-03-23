import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
import NotFound from '@/views/NotFound'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Route path="/" component={Layout}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App