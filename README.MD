## React Admin
### 一款 [Ant Desgin](https://ant.design/docs/react/introduce-cn) 风格的后台管理工具

区别于 Ant Design 官方的 antd-pro，react-admin 采用 Typescript 开发。并且使用 redux，redux-promise 作为全局状态管理。

### 开发踩坑盘点
#### alias 路径问题
```json
# paths.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*":["./src/*"]
    }
  }
}

# tsconfig.json
{
    "extends": "./paths.json",
}
```
```typescript
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src')
  })
)
```
为了在路径中使用 ```@/components``` 引入相关资源，使用 **customize-cra** 对 **create-react-app** 创建的基础项目进行 **webpack** 配置文件的覆写。但是因为 **customize-cra** 的原因，每次启动都会擦除 **tsconfig.json** 中关于 **baseUrl** 相关的配置项，因此采用 extend 的方式继承一个文件，避免被擦掉

#### react-redux connect组件导致 Props 异常
```tsx
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
```
使用 **connect** 修饰过后的组件将会有三种 Props，分别是 本身 **OwnProps**, 来自 Provider 的 **StateProps**, 以及 dispatch 的 **DispatchProps**

需要在 connect 时添加泛型处理，```connect<StateProps, DispatchProps, OwnProps>```。否则将导致外层使用时报错，报错内容为需要外部组件提供全部的 Props(实际上，来自 redux 的 props 已经由 connect 提供了)