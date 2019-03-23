import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '@/store/UserInfo/action'
import { Button } from 'antd'
import { IUserInfo } from '@/store/UserInfo'

interface OwnProps {
  age: number
}

interface DispatchProps {
  getUserInfo():void
}

type Props = IUserInfo & OwnProps & DispatchProps

class UserInfo extends Component<Props> {
  public render() {
    return (
      <div className='user-info'>
        <p>Name: {this.props.name}</p>
        <p>Workcode: {this.props.workcode}</p>
        <p>Department: {this.props.department}</p>
        <Button onClick={this.props.getUserInfo}>获取信息</Button>
      </div>
    )
  }
}

const ConnectedUserInfo = connect<IUserInfo, DispatchProps, OwnProps>(
  (state: any): IUserInfo  => state.user, 
  (dispatch: Dispatch<any>): DispatchProps => (
    { getUserInfo: () => dispatch(getUserInfo()) }
  )
)(UserInfo)

export default ConnectedUserInfo