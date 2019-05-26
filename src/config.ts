import { IMenuItem } from '@/type'

export const BASE_URL = 'http://localhost:1000/api'

export const MENU_LIST: IMenuItem[] = [
  {
    label: 'Dashboard',
    value: 'Dashboard',
    icon: 'dashboard',
    children: [
      {
        label: '分析页',
        value: 'analy'
      },
      {
        label:'监控页',
        value: 'monitor',
        path: '/dashboard/monitor'
      },
      {
        label: '工作台',
        value: 'workbench'
      }
    ]
  },
  {
    label: '表单页',
    value: 'form',
    icon: 'form',
    children: [
      {
        label: '基础表单',
        value: 'basicForm',
        path: '/form/basicForm'
      },
      {
        label: '分步表单',
        value: 'stepForm'
      },
      {
        label: '高级表单',
        value: 'plusForm'
      }
    ]
  },
  {
    label: '列表页',
    value: 'list',
    icon: 'table',
    children: [
      {
        label: '查询表格',
        value: 'query'
      },
      {
        label: '标准列表',
        value: 'basic'
      },
      {
        label: '卡片列表',
        value: 'card'
      },
      {
        label: '搜索列表',
        value: 'search',
        children: [
          {
            label: '搜索列表(文章)',
            value: 'artical'
          },
          {
            label: '搜索列表(项目)',
            value: 'project'
          },
          {
            label: '搜索列表(应用)',
            value: 'application'
          }
        ]
      }
    ]
  },
  {
    label: '详情页',
    value: 'profile',
    icon: 'profile',
    children: [
      {
        label: '基础详情页',
        value: 'basic'
      },
      {
        label: '高级详情页',
        value: 'plus'
      }
    ]
  },
  {
    label: '结果页',
    icon: 'check-circle',
    value: 'check-circle',
    children: [
      {
        label: '成功页',
        value: 'sucess'
      },
      {
        label: '失败页',
        value: 'reject'
      }
    ]
  },
  {
    label: '异常页',
    value: 'exception',
    icon: 'exception',
    children: [
      {
        label: '403',
        value: '403'
      },
      {
        label: '404',
        value: '404'
      },
      {
        label: '500',
        value: '500'
      }
    ]
  },
  {
    label: '个人页',
    value: 'user',
    icon: 'user',
    children: [
      {
        label: '个人中心',
        value: 'center'
      },
      {
        label: '个人设置',
        value: 'settings'
      }
    ]
  },
  {
    label: '编辑器',
    value: 'editor',
    icon: 'highlight',
    children: [
      {
        label: '流程图',
        value: 'flow',
        path: '/editor/flow'
      },
      {
        label: '脑图',
        value: 'mind',
        path: '/editor/mind'
      },
      {
        label: '拓扑图',
        value: 'koni'
      },
      {
        label: 'Markdown',
        value: 'markdown',
        path: '/editor/markdown'
      },
      {
        label: '代码编辑器',
        value: 'code',
        path: '/editor/code'
      }
    ]
  }
]