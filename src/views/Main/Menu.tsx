import React, { Component } from 'react'
import { Icon, Menu } from 'antd'
import { IMenuItem } from '@/type'

interface IAdminMenuProps {
  datasource: IMenuItem[]
  defaultSelectedKeys?: string[]
}

const { SubMenu, Item } = Menu

export default class AdminMenu extends Component<IAdminMenuProps, any> {
  static displayName = 'AdminMenu'

  public renderSubMenu(menu: IMenuItem) {
    return (
      <SubMenu key={menu.value} title={<span><Icon type={menu.icon} /><span>{menu.label}</span></span>}>
        {menu.children && menu.children.map((childMenu, index) => {
          if (childMenu.children) {
            return (
              <SubMenu key={childMenu.value + index} title={childMenu.label}>
                {childMenu.children.map(item => this.renderLeafMenu(item))}
              </SubMenu>
            )
          } else {
            return this.renderLeafMenu(childMenu)
          }
        })}
      </SubMenu>
    )
  }

  public renderLeafMenu(menu: IMenuItem) {
    return <Item key={menu.value}>{menu.label}</Item>
  }

  public render() {
    const { defaultSelectedKeys, datasource } = this.props
    return (
      <Menu theme="light" mode="inline" defaultSelectedKeys={defaultSelectedKeys ? defaultSelectedKeys : []}>
        { datasource.map(menu => {
          return menu.children ? this.renderSubMenu(menu) : this.renderLeafMenu(menu)
        }) }
      </Menu>
    )
  }
}