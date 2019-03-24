import LoginForm from './LoginForm'
import logo from '@/assets/image/logo.svg'
import React, { Component, Dispatch } from 'react'
import { Card } from 'antd'
import { connect } from 'react-redux'
import { getUserInfo as getUserInfoAction, login as loginAction } from '@/store/UserInfo/action'
import './index.scss'

type Form = {username: string, password: string}

interface DispatchProps {
  login(form: Form):void
  getUserInfo():void
}

class Login extends Component<DispatchProps, any> {
  static displayName: string = 'Login'

  private handleSubmit(form: any) {
    console.log(form)
  }

  public render() {
    return <div className="login">
      <div className="left">
        <img src={logo} className="logo" alt=""/>
        <p className="title">React Admin</p>
      </div>
      <div className="right">
        <Card>
          <LoginForm onSubmit={this.handleSubmit.bind(this)}/>
        </Card>
      </div>
    </div>
  }
}

export default connect<null, DispatchProps, null>(
  null,
  (dispatch: Dispatch<any>): DispatchProps => ({
    login(form: Form) {
      dispatch(loginAction(form))
    },
    getUserInfo() {
      dispatch(getUserInfoAction())
    }
  })
)(Login)