import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux'
import { login as loginAction, getUserInfo as getUserInfoAction } from '@/store/UserInfo/action'

type Form = {username: string, password: string}

interface DispatchProps {
  login(form: Form):void
  getUserInfo():void
}

class Login extends Component<DispatchProps> {
  static displayName: string = 'Login'

  public render() {
    return <div>
      Login
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