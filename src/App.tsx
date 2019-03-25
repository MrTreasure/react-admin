import Login from '@/views/Login'
import Main from '@/views/Main'
import NotFound from '@/views/NotFound'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
  } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/404" component={NotFound}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App