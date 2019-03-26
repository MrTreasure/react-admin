import * as actions from '@/store/config/action'
import AdminMenu from './Menu'
import React, { Component } from 'react'
import { AnyAction, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dispatch } from 'react'
import { Icon, Layout, Menu } from 'antd'
import { IConfig } from '@/store/config'
import { MENU_LIST } from '@/config'
import { Redirect, Route, Switch } from 'react-router-dom'
import './index.scss'

interface IDispatch {
  toggle(state: boolean): void
}

const { Sider, Header, Content } = Layout

class Main extends Component<IConfig & IDispatch> {
  static displayName = 'AdminMain'

  public render() {
    return  (<Layout className="main">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
          <div className="logo"> React Admin</div>
          <AdminMenu datasource={MENU_LIST}/>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggle.bind(this, !this.props.collapsed)}
            />
          </Header>
          <Content>
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect<IConfig, IDispatch, null>(
  (state: any) => state.config,
  (dispatch: any):IDispatch => bindActionCreators(actions, dispatch)
)(Main)