import * as actions from '@/store/config/action'
import React, { Component } from 'react'
import { AnyAction, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dispatch } from 'react'
import { Icon, Layout, Menu } from 'antd'
import { IConfig } from '@/store/config'
import { Redirect, Route, Switch } from 'react-router-dom'
import './index.scss'

interface IDispatch {
  toggle(state: boolean): void
}

const { Sider, Header, Content } = Layout

class Main extends Component<IConfig & IDispatch> {
  public render() {
    return  (<Layout className="main">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
          <div className="logo"> React Admin</div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
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