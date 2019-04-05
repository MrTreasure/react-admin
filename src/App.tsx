import Login from '@/views/Login'
import Main from '@/views/Main'
import NotFound from '@/views/NotFound'
import React, { Component } from 'react'
import zh_cn from 'antd/lib/locale-provider/zh_CN'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LocaleProvider } from 'antd'
class App extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_cn}>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/404" component={NotFound}></Route>
            <Route path="/" component={Main}></Route>
          </Switch>
      </Router>
      </LocaleProvider>
    )
  }
}

export default App